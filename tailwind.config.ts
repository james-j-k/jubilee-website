import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
        pill: "var(--radius-pill)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        "surface-subtle": "hsl(var(--surface-subtle))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          soft: "hsl(var(--primary-soft))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          soft: "hsl(var(--ember-soft))",
        },
        action: {
          DEFAULT: "hsl(var(--action))",
          foreground: "hsl(var(--action-foreground))",
        },
        institutional: {
          navy: "hsl(var(--institutional-navy))",
        },
        success: "hsl(var(--success))",
        danger: "hsl(var(--danger))",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
      },
      fontSize: {
        hero: ["var(--text-hero)", { lineHeight: "var(--leading-hero)", letterSpacing: "var(--tracking-display)", fontWeight: "var(--font-weight-display)" }],
        display: ["var(--text-display)", { lineHeight: "var(--leading-display)", letterSpacing: "var(--tracking-display)", fontWeight: "var(--font-weight-display)" }],
        h1: ["var(--text-h1)", { lineHeight: "var(--leading-heading)", letterSpacing: "var(--tracking-heading)", fontWeight: "var(--font-weight-display)" }],
        h2: ["var(--text-h2)", { lineHeight: "var(--leading-heading)", letterSpacing: "var(--tracking-heading)", fontWeight: "var(--font-weight-display)" }],
        h3: ["var(--text-h3)", { lineHeight: "1.15", letterSpacing: "var(--tracking-heading)", fontWeight: "var(--font-weight-display)" }],
        h4: ["var(--text-h4)", { lineHeight: "1.2", letterSpacing: "var(--tracking-heading)", fontWeight: "var(--font-weight-display)" }],
        h5: ["var(--text-h5)", { lineHeight: "1.3", letterSpacing: "var(--tracking-heading)", fontWeight: "var(--font-weight-display)" }],
        h6: ["var(--text-h6)", { lineHeight: "1.4", letterSpacing: "var(--tracking-metadata)", fontWeight: "var(--font-weight-display)" }],
        bodylg: ["var(--text-body-lg)", { lineHeight: "1.5" }],
        body: ["var(--text-body)", { lineHeight: "var(--leading-body)" }],
        caption: ["var(--text-caption)", { lineHeight: "var(--leading-caption)" }],
        metadata: ["var(--text-metadata)", { lineHeight: "var(--leading-metadata)", letterSpacing: "var(--tracking-metadata)", fontWeight: "var(--font-weight-semibold)" }],
        button: ["var(--text-button)", { lineHeight: "1", fontWeight: "var(--font-weight-semibold)" }],
      },
      spacing: {
        1: "var(--space-1)",
        2: "var(--space-2)",
        3: "var(--space-3)",
        4: "var(--space-4)",
        5: "var(--space-5)",
        6: "var(--space-6)",
        7: "var(--space-7)",
        8: "var(--space-8)",
        9: "var(--space-9)",
        10: "var(--space-10)",
      },
      maxWidth: {
        content: "var(--content-width)",
        wide: "var(--content-width-wide)",
        reading: "var(--reading-width)",
      },
      boxShadow: {
        panel: "var(--shadow-panel)",
        plaque: "var(--shadow-plaque)",
        action: "var(--shadow-action)",
      },
      backdropBlur: {
        glass: "var(--glass-blur)",
      },
      zIndex: {
        base: "var(--z-base)",
        raised: "var(--z-raised)",
        sticky: "var(--z-sticky)",
        overlay: "var(--z-overlay)",
        modal: "var(--z-modal)",
        toast: "var(--z-toast)",
      },
    },
  },
  plugins: [],
};

export default config;
