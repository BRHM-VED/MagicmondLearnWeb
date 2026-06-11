/**
 * Typography tokens — MagicMond Career Website.
 */
export const FONT_FAMILY = {
  PRIMARY: "'Plus Jakarta Sans', sans-serif",
  HANKEN: "'Hanken Grotesk', sans-serif",
  GEIST: "'Geist', sans-serif",
  INTER: "'Inter', sans-serif",
} as const;

export const FONT_WEIGHT = {
  REGULAR: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
  EXTRA_BOLD: 800,
} as const;

/** Responsive text size helpers for Tailwind class composition */
export const RESPONSIVE_TEXT = {
  heroTitle: "font-sans text-[48px] md:text-[72px] font-bold leading-[1.1] tracking-[-1.5px] md:tracking-[-2.88px]",
  sectionTitle: "font-sans text-[32px] md:text-[48px] font-semibold leading-[1.2] tracking-normal md:tracking-[-0.96px]",
  body: "font-hanken text-base md:text-lg font-normal leading-[1.5]",
  small: "font-hanken text-xs md:text-sm font-medium leading-[1.2]",
} as const;
