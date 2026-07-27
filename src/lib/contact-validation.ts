export const projectTypeOptions = [
  { value: "konut", label: "Konut projesi" },
  { value: "ticari", label: "Ticari yapı" },
  { value: "mimari", label: "Mimari tasarım" },
  { value: "ic-mimarlik", label: "İç mimarlık" },
  { value: "renovasyon", label: "Tadilat ve renovasyon" },
  { value: "danismanlik", label: "Proje danışmanlığı" },
  { value: "diger", label: "Diğer" },
] as const;

export type ContactField =
  | "name"
  | "email"
  | "phone"
  | "projectType"
  | "message"
  | "consent";

export type ContactFieldErrors = Partial<Record<ContactField, string>>;

export type ContactInput = {
  readonly name: unknown;
  readonly email: unknown;
  readonly phone: unknown;
  readonly projectType: unknown;
  readonly message: unknown;
  readonly consent: unknown;
  readonly contactReference: unknown;
  readonly loadedAt: unknown;
};

export type ValidatedContactData = {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly projectType: (typeof projectTypeOptions)[number]["value"];
  readonly message: string;
  readonly consent: true;
};

export type ContactValidationResult =
  | {
      readonly success: true;
      readonly data: ValidatedContactData;
    }
  | {
      readonly success: false;
      readonly fieldErrors: ContactFieldErrors;
      readonly formError?: string;
    };

type ContactValidationOptions = {
  readonly enforceTiming?: boolean;
  readonly now?: number;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9\s()+-]+$/;
const minimumSubmissionTime = 1500;

function getTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : null;
}

export function validateContactInput(
  input: ContactInput,
  options: ContactValidationOptions = {},
): ContactValidationResult {
  const fieldErrors: ContactFieldErrors = {};

  const name = getTrimmedString(input.name);
  if (!name) {
    fieldErrors.name = "Ad soyad alanı zorunludur.";
  } else if (name.length < 2) {
    fieldErrors.name = "Ad soyad en az 2 karakter olmalıdır.";
  } else if (name.length > 80) {
    fieldErrors.name = "Ad soyad en fazla 80 karakter olabilir.";
  }

  const email = getTrimmedString(input.email)?.toLowerCase() ?? null;
  if (!email) {
    fieldErrors.email = "E-posta alanı zorunludur.";
  } else if (email.length > 120) {
    fieldErrors.email = "E-posta en fazla 120 karakter olabilir.";
  } else if (!emailPattern.test(email)) {
    fieldErrors.email = "Geçerli bir e-posta adresi girin.";
  }

  const phone = getTrimmedString(input.phone);
  if (phone === null) {
    fieldErrors.phone = "Telefon değeri geçerli bir metin olmalıdır.";
  } else if (phone.length > 30) {
    fieldErrors.phone = "Telefon en fazla 30 karakter olabilir.";
  } else if (phone && !phonePattern.test(phone)) {
    fieldErrors.phone =
      "Telefon yalnızca rakam, boşluk, parantez, artı ve kısa çizgi içerebilir.";
  }

  const projectType = getTrimmedString(input.projectType);
  const allowedProjectType = projectTypeOptions.find(
    (option) => option.value === projectType,
  );
  if (!projectType || !allowedProjectType) {
    fieldErrors.projectType = "Listeden geçerli bir proje türü seçin.";
  }

  const message = getTrimmedString(input.message);
  if (!message) {
    fieldErrors.message = "Mesaj alanı zorunludur.";
  } else if (message.length < 20) {
    fieldErrors.message = "Mesaj en az 20 karakter olmalıdır.";
  } else if (message.length > 1500) {
    fieldErrors.message = "Mesaj en fazla 1500 karakter olabilir.";
  }

  const consent = input.consent === "on";
  if (!consent) {
    fieldErrors.consent = "Devam etmek için demo form onayını işaretleyin.";
  }

  const contactReference = getTrimmedString(input.contactReference);
  if (contactReference === null || contactReference) {
    return {
      success: false,
      fieldErrors: {},
      formError:
        "Form şu anda gönderilemedi. Lütfen alanları kontrol edip yeniden deneyin.",
    };
  }

  if (options.enforceTiming) {
    const loadedAt =
      typeof input.loadedAt === "string" ? Number(input.loadedAt) : Number.NaN;
    const now = options.now ?? Date.now();
    const elapsedTime = now - loadedAt;

    if (
      !Number.isSafeInteger(loadedAt) ||
      elapsedTime < minimumSubmissionTime ||
      elapsedTime > 86_400_000
    ) {
      return {
        success: false,
        fieldErrors: {},
        formError:
          "Form şu anda gönderilemedi. Lütfen kısa bir süre sonra yeniden deneyin.",
      };
    }
  }

  if (
    Object.keys(fieldErrors).length > 0 ||
    !name ||
    !email ||
    phone === null ||
    !allowedProjectType ||
    !message
  ) {
    return { success: false, fieldErrors };
  }

  return {
    success: true,
    data: {
      name,
      email,
      phone,
      projectType: allowedProjectType.value,
      message,
      consent: true,
    },
  };
}
