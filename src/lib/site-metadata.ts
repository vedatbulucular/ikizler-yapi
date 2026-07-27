import type { Metadata } from "next";

export const siteName = "İkizler Yapı";
export const defaultSiteTitle = "İkizler Yapı | Yapı ve Mimarlık";
export const defaultSiteDescription =
  "İkizler Yapı; konut, ticari alan, mimari tasarım ve renovasyon odağında hazırlanmış özgün ve hayalî bir kurumsal portföy projesidir.";
export const socialImageAlt =
  "İkizler Yapı — Yapı ve Mimarlık portföy projesi";

type PageMetadataOptions = {
  readonly title?: string;
  readonly description: string;
  readonly path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const resolvedTitle = title ? `${title} | ${siteName}` : defaultSiteTitle;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      siteName,
      title: resolvedTitle,
      description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [
        {
          url: "/opengraph-image",
          alt: socialImageAlt,
        },
      ],
    },
  };
}
