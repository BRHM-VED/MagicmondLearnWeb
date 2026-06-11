import type { HomeSectionId } from '../utils/constants';

export type HomeSection = {
  id: HomeSectionId;
  label: string;
};

export const HOME_PAGE_SECTIONS: HomeSection[] = [
  { id: 'first', label: 'Hero & Header' },
  { id: 'journey-partners', label: 'Journey & Highlights' },
  { id: 'programme-structure', label: 'Programme Structure' },
  { id: 'specializations', label: 'Fundamental Tracks' },
  { id: 'differentiation', label: 'What Makes Us Different' },
  { id: 'ethics-ip', label: 'Professional Ethics & IP' },
  { id: 'apply-now', label: 'Apply Now' },
  { id: 'footer', label: 'Site Footer' },
];
