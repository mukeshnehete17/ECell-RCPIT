/**
 * Centralized Manifest for Moments That Move Us
 * 
 * To add a new moment in the future:
 * Simply add the image to `assets/moments/` (e.g. `assets/moments/moment6.jpg`)
 * and add its path or object to the array below.
 * 
 * Supports:
 * - String path: "assets/moments/moment6.jpg" or "/assets/moments/moment6.jpg"
 * - Object: { src: "/assets/moments/moment6.jpg", alt: "Description" }
 */

export const MOMENTS_MANIFEST = [
  {
    id: 'moment-1',
    src: '/assets/moments/moment1.jpg',
    alt: 'E-Cell RCPIT student innovation and workshop moment',
  },
  {
    id: 'moment-2',
    src: '/assets/moments/moment2.jpg',
    alt: 'E-Cell RCPIT leadership and entrepreneurship conclave',
  },
  {
    id: 'moment-3',
    src: '/assets/moments/moment3.jpg',
    alt: 'E-Cell RCPIT flagship entrepreneurship summit keynote mainstage',
  },
  {
    id: 'moment-4',
    src: '/assets/moments/moment4.jpg',
    alt: 'E-Cell RCPIT student startup venture pitch battle',
  },
  {
    id: 'moment-5',
    src: '/assets/moments/moment5.jpg',
    alt: 'E-Cell RCPIT founder mentorship roundtable and masterclass',
  },
];

/**
 * Normalizes any string or object entry into a standard moment object
 */
export function getNormalizedMoments(manifest = MOMENTS_MANIFEST) {
  return manifest.map((item, index) => {
    if (typeof item === 'string') {
      const cleanPath = item.startsWith('/') || item.startsWith('http') ? item : `/${item}`;
      return {
        id: `moment-${index + 1}`,
        src: cleanPath,
        alt: `E-Cell RCPIT Moment ${index + 1}`,
      };
    }
    const cleanPath = (item.src || item.image || '').startsWith('/') || (item.src || item.image || '').startsWith('http')
      ? (item.src || item.image)
      : `/${item.src || item.image}`;

    return {
      id: item.id || `moment-${index + 1}`,
      src: cleanPath,
      alt: item.alt || `E-Cell RCPIT Moment ${index + 1}`,
    };
  });
}
