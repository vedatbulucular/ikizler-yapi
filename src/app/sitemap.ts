import type { MetadataRoute } from "next";

import { getAbsoluteUrl } from "@/lib/site-url";

const routes = ["/", "/hakkimizda", "/hizmetler", "/projeler", "/iletisim"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: getAbsoluteUrl(route),
  }));
}
