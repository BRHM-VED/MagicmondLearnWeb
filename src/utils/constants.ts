import { COLORS } from './colors';
import { FONT_FAMILY } from './typography';

/** Figma source of truth for this homepage */
export const FIGMA = {
  fileKey: 'g5yvvrjexN5HmwtlrQowM7',
  fileName: 'Reidius-Infra',
  homepageNodeId: '6952:1052',
  url: 'https://www.figma.com/design/g5yvvrjexN5HmwtlrQowM7/Reidius-Infra?node-id=6952-1052',
} as const;

export const APP = {
  name: 'MagicMond Career Website',
  title: 'MagicMond Learning Programme — Zero to Hero',
  description:
    'Bridge the chasm between academic theory and high-stakes industry excellence. An elite apprenticeship engineered for the next generation of technical leaders.',
  themeColor: COLORS.PRIMARY,
  fontFamily: FONT_FAMILY.PRIMARY,
} as const;

export const ROUTES = {
  home: '/',
  privacy: '/privacy',
} as const;

/** Homepage section order — matches Figma layout in full.tsx */
export const HOME_SECTIONS = [
  'first',               // Hero & Header
  'journey-partners',    // Stats / Highlights (3 Months, etc.)
  'programme-structure', // Programme Structure (Weekend/Weekday)
  'specializations',     // Fundamental Tracks
  'differentiation',     // What Makes This Programme Different?
  'ethics-ip',           // Professional Ethics & IP Rights
  'apply-now',           // Apply Now CTA
  'footer',              // Site Footer
] as const;

export type HomeSectionId = (typeof HOME_SECTIONS)[number];

export const LAYOUT = {
  maxWidth: 'max-w-[1280px]',
  pagePadding: 'px-4 sm:px-8',
  sectionY: 'py-16 md:py-32',
} as const;
