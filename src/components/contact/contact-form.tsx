"use client";

import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  type ContactField,
  type ContactFieldErrors,
  type ContactInput,
  projectTypeOptions,
  validateContactInput,
} from "@/lib/contact-validation";

type SubmissionStatus = "idle" | "loading" | "success" | "error";

type ContactApiResponse = {
  readonly success: boolean;
  readonly message: string;
  readonly fieldErrors?: ContactFieldErrors;
};

const fieldBaseStyles =
  "mt-2 min-h-12 w-full rounded-sm border bg-surface px-4 py-3 text-text outline-none transition-colors placeholder:text-text-muted focus:border-accent-dark";

function isContactApiResponse(value: unknown): value is ContactApiResponse {
  if (!value || typeof value !== "object") {
    return false;
  }

  const response = value as Record<string, unknown>;
  return (
    typeof response.success === "boolean" &&
    typeof response.message === "string"
  );
}

function getInputClassName(hasError: boolean) {
  return `${fieldBaseStyles} ${hasError ? "border-error" : "border-border"}`;
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const loadedAtRef = useRef("");
  const submissionInProgressRef = useRef(false);
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [feedback, setFeedback] = useState("");
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});

  useEffect(() => {
    loadedAtRef.current = String(Date.now());
  }, []);

  function clearFieldError(field: ContactField) {
    setFieldErrors((currentErrors) => {
      if (!currentErrors[field]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      delete nextErrors[field];
      return nextErrors;
    });
  }

  function handleFieldChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const field = event.currentTarget.name as ContactField;
    clearFieldError(field);

    if (status !== "loading") {
      setStatus("idle");
      setFeedback("");
    }
  }

  function focusFirstInvalidField(errors: ContactFieldErrors) {
    const firstInvalidField = Object.keys(errors)[0];
    if (!firstInvalidField) {
      return;
    }

    const field = formRef.current?.elements.namedItem(firstInvalidField);
    if (field instanceof HTMLElement) {
      field.focus();
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "loading" || submissionInProgressRef.current) {
      return;
    }

    if (!loadedAtRef.current) {
      setStatus("error");
      setFeedback("Form hazırlanıyor. Lütfen kısa bir süre sonra yeniden deneyin.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("loadedAt", loadedAtRef.current);

    const input: ContactInput = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      projectType: formData.get("projectType"),
      message: formData.get("message"),
      consent: formData.get("consent"),
      contactReference: formData.get("contactReference"),
      loadedAt: formData.get("loadedAt"),
    };
    const clientValidation = validateContactInput(input);

    if (!clientValidation.success) {
      setFieldErrors(clientValidation.fieldErrors);
      setStatus("error");
      setFeedback(
        clientValidation.formError ??
          "Lütfen işaretli alanları kontrol edip yeniden deneyin.",
      );
      focusFirstInvalidField(clientValidation.fieldErrors);
      return;
    }

    setFieldErrors({});
    submissionInProgressRef.current = true;
    setStatus("loading");
    setFeedback("Form doğrulanıyor ve güvenli demo gönderimi hazırlanıyor.");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });
      const result: unknown = await response.json();

      if (!isContactApiResponse(result)) {
        throw new Error("Beklenmeyen sunucu yanıtı");
      }

      if (!response.ok || !result.success) {
        const responseErrors = result.fieldErrors ?? {};
        setFieldErrors(responseErrors);
        setStatus("error");
        setFeedback(result.message);
        focusFirstInvalidField(responseErrors);
        return;
      }

      form.reset();
      loadedAtRef.current = String(Date.now());
      setFieldErrors({});
      setStatus("success");
      setFeedback(result.message);
    } catch {
      setStatus("error");
      setFeedback(
        "Form şu anda gönderilemedi. Lütfen bağlantınızı kontrol edip yeniden deneyin.",
      );
    } finally {
      submissionInProgressRef.current = false;
    }
  }

  const isSubmitting = status === "loading";

  return (
    <div className="border border-border bg-canvas p-6 sm:p-8 lg:p-10">
      <p className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-accent-dark">
        Demo proje formu
      </p>
      <h2 className="mt-3 font-heading text-3xl font-semibold text-brand-dark">
        Projenizi kısaca anlatın
      </h2>
      <p className="mt-4 text-sm leading-6 text-text-muted">
        Bu portföy formu yalnızca doğrulama akışını gösterir. Bilgiler gerçek
        bir firmaya gönderilmez, kalıcı olarak saklanmaz veya e-posta ile
        iletilmez.
      </p>

      <form
        ref={formRef}
        className="mt-8 grid gap-6"
        noValidate
        onSubmit={handleSubmit}
      >
        <input
          hidden
          type="text"
          id="contact-reference"
          name="contactReference"
          autoComplete="off"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="text-sm font-semibold text-brand-dark"
            >
              Ad soyad
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              autoComplete="name"
              maxLength={80}
              aria-invalid={Boolean(fieldErrors.name)}
              aria-describedby="contact-name-error"
              className={getInputClassName(Boolean(fieldErrors.name))}
              placeholder="Adınız ve soyadınız"
              onChange={handleFieldChange}
            />
            <p
              id="contact-name-error"
              className="mt-2 min-h-5 text-sm text-error"
            >
              {fieldErrors.name}
            </p>
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="text-sm font-semibold text-brand-dark"
            >
              E-posta
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              autoComplete="email"
              maxLength={120}
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby="contact-email-error"
              className={getInputClassName(Boolean(fieldErrors.email))}
              placeholder="ornek@eposta.test"
              onChange={handleFieldChange}
            />
            <p
              id="contact-email-error"
              className="mt-2 min-h-5 text-sm text-error"
            >
              {fieldErrors.email}
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-phone"
              className="text-sm font-semibold text-brand-dark"
            >
              Telefon
              <span className="ml-1 font-normal text-text-muted">
                (isteğe bağlı)
              </span>
            </label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              autoComplete="tel"
              maxLength={30}
              aria-invalid={Boolean(fieldErrors.phone)}
              aria-describedby="contact-phone-error"
              className={getInputClassName(Boolean(fieldErrors.phone))}
              placeholder="0 (000) 000 00 00"
              onChange={handleFieldChange}
            />
            <p
              id="contact-phone-error"
              className="mt-2 min-h-5 text-sm text-error"
            >
              {fieldErrors.phone}
            </p>
          </div>

          <div>
            <label
              htmlFor="contact-project-type"
              className="text-sm font-semibold text-brand-dark"
            >
              Proje türü
            </label>
            <select
              id="contact-project-type"
              name="projectType"
              autoComplete="off"
              defaultValue=""
              aria-invalid={Boolean(fieldErrors.projectType)}
              aria-describedby="contact-project-type-error"
              className={getInputClassName(Boolean(fieldErrors.projectType))}
              onChange={handleFieldChange}
            >
              <option value="" disabled>
                Seçiniz
              </option>
              {projectTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <p
              id="contact-project-type-error"
              className="mt-2 min-h-5 text-sm text-error"
            >
              {fieldErrors.projectType}
            </p>
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="text-sm font-semibold text-brand-dark"
          >
            Mesaj
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            maxLength={1500}
            autoComplete="off"
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby="contact-message-error"
            className={getInputClassName(Boolean(fieldErrors.message))}
            placeholder="Projenizin kapsamını ve önceliklerini paylaşın."
            onChange={handleFieldChange}
          />
          <p
            id="contact-message-error"
            className="mt-2 min-h-5 text-sm text-error"
          >
            {fieldErrors.message}
          </p>
        </div>

        <div>
          <label className="flex items-start gap-3 text-sm leading-6 text-text-muted">
            <input
              type="checkbox"
              id="contact-consent"
              name="consent"
              aria-invalid={Boolean(fieldErrors.consent)}
              aria-describedby="contact-consent-error"
              className="mt-1 size-5 shrink-0 accent-accent-dark"
              onChange={handleFieldChange}
            />
            <span>
              Bu formun portföy amaçlı bir demo olduğunu, verilerin gerçek bir
              firmaya gönderilmediğini ve saklanmadığını anladım.
            </span>
          </label>
          <p
            id="contact-consent-error"
            className="mt-2 min-h-5 text-sm text-error"
          >
            {fieldErrors.consent}
          </p>
        </div>

        {feedback ? (
          <div
            role={status === "error" ? "alert" : "status"}
            aria-live="polite"
            className={[
              "flex items-start gap-3 border p-4 text-sm leading-6",
              status === "success"
                ? "border-success bg-success/10 text-success"
                : status === "error"
                  ? "border-error bg-error/10 text-error"
                  : "border-border bg-surface text-brand-dark",
            ].join(" ")}
          >
            <span aria-hidden="true" className="font-bold">
              {status === "success" ? "✓" : status === "error" ? "!" : "…"}
            </span>
            <span>{feedback}</span>
          </div>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 items-center justify-center gap-3 rounded-sm bg-brand-dark px-6 py-3 font-semibold text-surface transition-colors hover:bg-brand-secondary focus-visible:text-surface active:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <span
              aria-hidden="true"
              className="size-4 animate-spin rounded-full border-2 border-surface/40 border-t-surface"
            />
          ) : null}
          {isSubmitting ? "Gönderiliyor..." : "Demo formu gönder"}
        </button>
      </form>
    </div>
  );
}
