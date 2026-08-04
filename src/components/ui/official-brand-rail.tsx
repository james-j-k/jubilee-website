import { cva, type VariantProps } from "class-variance-authority";
import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

const railVariants = cva(
  "flex w-full flex-wrap items-center gap-y-2 border border-border bg-surface text-foreground",
  {
    variants: {
      size: {
        compact: "min-h-12 gap-3 rounded-md px-3 py-2",
        standard: "min-h-16 gap-4 rounded-md px-4 py-3",
      },
    },
    defaultVariants: { size: "standard" },
  },
);

type SeparateMarks = {
  /**
   * An approved, original IndianOil asset. The rail deliberately does not
   * recolour, crop, mask, animate, or apply effects to supplied marks.
   */
  indianOilMark: ReactNode;
  /** An approved, original Indane asset; subject to its own usage approval. */
  indaneMark: ReactNode;
  approvedLockup?: never;
};

type CompositeLockup = {
  /** A supplied approved composite lockup; it is rendered intact, never cropped. */
  approvedLockup: ReactNode;
  indianOilMark?: never;
  indaneMark?: never;
};

type SharedProps = VariantProps<typeof railVariants> & {
  /** The brand- or legally-approved distributor relationship statement. */
  relationship: string;
  className?: string;
};

export type OfficialBrandRailProps = SharedProps & (SeparateMarks | CompositeLockup);

/**
 * A protected institutional endorsement surface. It is intentionally solid,
 * unanimated, and visually subordinate to Jubilee-owned identity components.
 */
export function OfficialBrandRail({
  indianOilMark,
  indaneMark,
  approvedLockup,
  relationship,
  size,
  className,
}: OfficialBrandRailProps) {
  return (
    <aside
      aria-label="Official IndianOil and Indane brand relationship"
      className={cn(railVariants({ size }), className)}
    >
      {approvedLockup ? (
        <div aria-hidden="true" className="flex shrink-0 items-center [&_img]:block [&_svg]:block">
          {approvedLockup}
        </div>
      ) : (
        <div aria-hidden="true" className="flex shrink-0 items-center gap-3 whitespace-nowrap [&_img]:block [&_svg]:block">
          <span className="flex items-center">{indianOilMark}</span>
          <span aria-hidden="true" className="h-6 border-l border-border" />
          <span className="flex items-center">{indaneMark}</span>
        </div>
      )}
      <p className="min-w-0 text-caption text-muted-foreground">
        {relationship}
      </p>
    </aside>
  );
}

export { railVariants };
