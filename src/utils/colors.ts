/**
 * Design tokens — Figma MagicMond Career Website.
 * Source: Figma-extracted palette for MagicMond.
 */
export const COLOR_TOKENS = {
  neutral: {
    950: '#0E0E11', // Deepest background
    900: '#131316', // Card background
    850: '#1B1B1E', // Input background / secondary dark
    800: '#2A2A2D', // Checkbox container background
    600: '#4D4354', // Border color
    500: '#6B7280', // Text placeholder / muted gray
  },
  purple: {
    950: '#490080', // Dark purple button text / accent
    300: '#DDB7FF', // Primary purple accent
  },
  pink: {
    300: '#FFB0CD', // Pink accent
  },
  violet: {
    300: '#C4C1FB', // Violet accent
  },
  fuchsia: {
    900: '#70218B', // Fuchsia button background
  },
  zinc: {
    300: '#CFC2D6', // Secondary text
    200: '#E4E1E6', // Primary text
  },
  stone: {
    50: '#FFFBF5', // Warm light white
  },
  base: {
    white: '#FFFFFF',
    black: '#000000',
  }
} as const;

export const COLORS = {
  PRIMARY: COLOR_TOKENS.neutral[950],
  PRIMARY_DARK: COLOR_TOKENS.neutral[950],
  PRIMARY_SURFACE: COLOR_TOKENS.neutral[900],
  SECONDARY: COLOR_TOKENS.purple[300],
  SECONDARY_BRIGHT: COLOR_TOKENS.pink[300],
  TEXT_PRIMARY: COLOR_TOKENS.zinc[200],
  TEXT_SECONDARY: COLOR_TOKENS.zinc[300],
  TEXT_MUTED: COLOR_TOKENS.stone[50],
  BACKGROUND_PRIMARY: COLOR_TOKENS.neutral[950],
  BACKGROUND_SECONDARY: COLOR_TOKENS.neutral[900],
  BORDER_DEFAULT: COLOR_TOKENS.neutral[600],
} as const;
