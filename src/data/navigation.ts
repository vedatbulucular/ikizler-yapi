export type NavigationItem = {
  readonly label: string;
  readonly href: string;
};

export const navigationItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Projeler", href: "/projeler" },
  { label: "İletişim", href: "/iletisim" },
] as const satisfies readonly NavigationItem[];
