import type { ProjectVisualVariant } from "@/types/home";

type ProjectVisualProps = {
  variant: ProjectVisualVariant;
  className?: string;
};

const visualStyles: Record<ProjectVisualVariant, string> = {
  courtyard:
    "before:absolute before:inset-[18%] before:border before:border-brand-dark/35 after:absolute after:bottom-[18%] after:left-[18%] after:size-[31%] after:bg-accent",
  grid: "before:absolute before:inset-y-[16%] before:left-[24%] before:w-[18%] before:bg-brand-dark after:absolute after:bottom-[16%] after:right-[16%] after:h-[42%] after:w-[34%] after:border after:border-accent-dark",
  interior:
    "before:absolute before:bottom-0 before:left-[16%] before:h-[72%] before:w-[34%] before:bg-brand-secondary after:absolute after:right-[14%] after:top-[16%] after:size-[36%] after:rounded-full after:border after:border-accent-dark",
  terrace:
    "before:absolute before:bottom-[14%] before:left-[12%] before:h-[26%] before:w-[76%] before:bg-brand-dark after:absolute after:bottom-[40%] after:left-[28%] after:h-[35%] after:w-[44%] after:border after:border-accent-dark",
  frame:
    "before:absolute before:inset-[15%] before:border-[18px] before:border-surface after:absolute after:right-[12%] after:top-[12%] after:h-[42%] after:w-[34%] after:bg-accent",
  axis: "before:absolute before:inset-y-0 before:left-1/2 before:w-px before:bg-accent-dark after:absolute after:left-[15%] after:top-[18%] after:h-[64%] after:w-[28%] after:bg-brand-secondary",
};

export function ProjectVisual({ variant, className }: ProjectVisualProps) {
  const classes = [
    "relative aspect-[4/3] overflow-hidden bg-canvas",
    visualStyles[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div aria-hidden="true" className={classes}>
      <div className="absolute inset-x-0 top-1/2 border-t border-border" />
      <div className="absolute inset-y-0 right-[28%] border-l border-border" />
    </div>
  );
}
