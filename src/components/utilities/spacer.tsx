import { type CSSProperties, forwardRef, type HTMLAttributes } from "react";
export interface SpacerProps extends HTMLAttributes<HTMLDivElement> { size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10; }
const Spacer = forwardRef<HTMLDivElement, SpacerProps>(({ size = 4, style, ...props }, ref) => <div ref={ref} aria-hidden="true" style={{ blockSize: `var(--space-${size})`, ...style } as CSSProperties} {...props} />);
Spacer.displayName = "Spacer";
export { Spacer };
