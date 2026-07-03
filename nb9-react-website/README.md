# Naked By 9 — Site Prototype

Single-page React + Tailwind prototype for the band **Naked By 9**, structured for easy migration to Next.js.

## Quick Start

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Sticky nav + social icons
│   ├── SocialIcons.jsx
│   ├── SectionWrapper.jsx  # Reusable section shell
│   └── sections/
│       ├── Hero.jsx
│       ├── Music.jsx
│       ├── Tour.jsx
│       ├── Videos.jsx
│       └── Contact.jsx
├── data/
│   ├── tourDates.js        # Add/edit shows here
│   └── siteConfig.js       # Nav + social links
└── utils/
    └── sortTourDates.js    # Sorts upcoming vs past shows
```

## Adding Tour Dates

Edit `src/data/tourDates.js`:

```js
{
  id: 'unique-id',
  date: '2026-06-01',       // ISO date YYYY-MM-DD
  venue: 'Venue Name',
  city: 'City, ST',
  ticketLink: 'https://...',
}
```

Past shows stay on the page (greyed out under "Past Shows") for SEO.

## Next.js Migration Notes

- Components are plain React — drop into `app/` as Client Components where needed
- Hash links (`/#music`) become `/#music` or section IDs with `<Link href="#music">`
- Move `data/` and `utils/` as-is into the Next.js project
- Replace `main.jsx` entry with Next.js layout/page structure
