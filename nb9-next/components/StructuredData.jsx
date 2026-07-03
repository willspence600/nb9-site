import { tourDates } from '../data/tourDates';
import { socialLinks } from '../data/siteConfig';

const SITE_URL = 'https://nakedbyninemusic.com';
const BAND_ID = `${SITE_URL}/#band`;

const musicGroup = {
  '@type': 'MusicGroup',
  '@id': BAND_ID,
  name: 'Naked By 9',
  url: SITE_URL,
  image: `${SITE_URL}/images/hero.jpg`,
  genre: 'Indie Rock',
  foundingLocation: {
    '@type': 'Place',
    name: 'Kingston, Ontario, Canada',
  },
  email: 'nakedby9music@gmail.com',
  sameAs: socialLinks.map((link) => link.href),
  track: {
    '@type': 'MusicRecording',
    name: 'Losing You',
    byArtist: { '@id': BAND_ID },
    image: `${SITE_URL}/images/losing-you-cover.jpeg`,
    datePublished: '2026',
  },
};

const events = tourDates.map((show) => ({
  '@type': 'MusicEvent',
  name: `Naked By 9 at ${show.venue}`,
  startDate: show.date,
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  performer: { '@id': BAND_ID },
  location: {
    '@type': 'MusicVenue',
    name: show.venue,
    address: show.city,
  },
  ...(show.ticketLink && {
    offers: {
      '@type': 'Offer',
      url: show.ticketLink,
      availability: 'https://schema.org/InStock',
    },
  }),
}));

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [musicGroup, ...events],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
