export type Service = {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly scope: readonly string[];
};

export type AboutPrinciple = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
};

export type ProjectVisualVariant =
  | "courtyard"
  | "grid"
  | "interior"
  | "terrace"
  | "frame"
  | "axis";

export type FeaturedProject = {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly location: string;
  readonly year: string;
  readonly description: string;
  readonly visualVariant: ProjectVisualVariant;
};

export type Statistic = {
  readonly id: string;
  readonly value: string;
  readonly label: string;
};

export type ProcessStep = {
  readonly id: string;
  readonly step: string;
  readonly title: string;
  readonly description: string;
};

export type Testimonial = {
  readonly id: string;
  readonly quote: string;
  readonly attribution: string;
};
