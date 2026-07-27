const localSiteUrl = "http://localhost:3000";

type SiteUrlCandidate = {
  readonly value: string | undefined;
  readonly addHttpsWhenMissing: boolean;
};

function parseSiteUrl(candidate: SiteUrlCandidate) {
  const value = candidate.value?.trim();
  if (!value) {
    return null;
  }

  const normalizedValue =
    candidate.addHttpsWhenMissing && !/^https?:\/\//i.test(value)
      ? `https://${value}`
      : value;

  try {
    const url = new URL(normalizedValue);

    if (
      !["http:", "https:"].includes(url.protocol) ||
      url.username ||
      url.password
    ) {
      return null;
    }

    return new URL(url.origin);
  } catch {
    return null;
  }
}

export function resolveSiteUrl() {
  const candidates: readonly SiteUrlCandidate[] = [
    {
      value: process.env.SITE_URL,
      addHttpsWhenMissing: false,
    },
    {
      value: process.env.VERCEL_PROJECT_PRODUCTION_URL,
      addHttpsWhenMissing: true,
    },
    {
      value: process.env.VERCEL_URL,
      addHttpsWhenMissing: true,
    },
    {
      value: localSiteUrl,
      addHttpsWhenMissing: false,
    },
  ];

  for (const candidate of candidates) {
    const url = parseSiteUrl(candidate);
    if (url) {
      return url;
    }
  }

  return new URL(localSiteUrl);
}

export const siteUrl = resolveSiteUrl();

export function getAbsoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteUrl).toString();
}
