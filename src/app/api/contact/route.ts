import {
  type ContactInput,
  validateContactInput,
} from "@/lib/contact-validation";

const maximumRequestSize = 32_768;

type ContactResponse = {
  readonly success: boolean;
  readonly message: string;
  readonly fieldErrors?: Record<string, string>;
};

function createResponse(body: ContactResponse, status: number) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (
    Number.isFinite(contentLength) &&
    contentLength > maximumRequestSize
  ) {
    return createResponse(
      {
        success: false,
        message: "Form içeriği izin verilen boyutu aşıyor.",
      },
      413,
    );
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (
    !contentType.includes("multipart/form-data") &&
    !contentType.includes("application/x-www-form-urlencoded")
  ) {
    return createResponse(
      {
        success: false,
        message: "Form isteği geçerli bir biçimde gönderilmedi.",
      },
      415,
    );
  }

  try {
    const formData = await request.formData();
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

    const validation = validateContactInput(input, {
      enforceTiming: true,
      now: Date.now(),
    });

    if (!validation.success) {
      return createResponse(
        {
          success: false,
          message:
            validation.formError ??
            "Lütfen işaretli alanları kontrol edip yeniden deneyin.",
          fieldErrors: validation.fieldErrors,
        },
        400,
      );
    }

    // Üretim sürümünde sunucu tarafı rate limiting ve güvenilir bir e-posta
    // teslimat hizmeti eklenmelidir. Bu demo hiçbir kullanıcı verisini saklamaz.
    return createResponse(
      {
        success: true,
        message:
          "Mesajınız demo form doğrulamasından başarıyla geçti. Bu portföy sürümünde bilgiler herhangi bir kuruluşa gönderilmez veya saklanmaz.",
      },
      200,
    );
  } catch {
    return createResponse(
      {
        success: false,
        message:
          "Form şu anda işlenemedi. Lütfen alanları kontrol edip yeniden deneyin.",
      },
      400,
    );
  }
}
