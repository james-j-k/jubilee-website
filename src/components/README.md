# Component boundary

Component implementation is intentionally deferred. When approved, use the documented split:

- `layout/` for shared page framing
- `sections/` for business-purpose compositions
- `ui/` for generic accessible primitives
- `motion/` for isolated, reduced-motion-aware behavior

See `docs/ComponentSpecs.md` before adding a component.
