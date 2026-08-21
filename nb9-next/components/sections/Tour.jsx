'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { tourDates } from '../../data/tourDates';
import { images } from '../../data/siteConfig';
import { sortTourDates, formatShowDate } from '../../utils/sortTourDates';
import SectionWrapper from '../SectionWrapper';
import TvStatic from '../TvStatic';

function ShowRow({ show, isPast = false }) {
  return (
    <li className="grid grid-cols-1 gap-2 border-b-2 border-offwhite/30 py-5 md:grid-cols-[1fr_1fr_1fr_auto] md:items-center md:gap-6">
      <time
        dateTime={show.date}
        className="text-sm font-semibold uppercase tracking-wider"
      >
        {show.dateLabel ?? formatShowDate(show.date)}
      </time>
      <span className="font-bold uppercase">{show.venue}</span>
      <span className="text-offwhite/70">{show.city}</span>
      {show.ticketLink ? (
        <a
          href={show.ticketLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`justify-self-start border-2 px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-200 md:justify-self-end ${
            isPast
              ? 'border-offwhite/40 text-offwhite/60 pointer-events-none'
              : 'border-offwhite border-hover-glow focus-visible:outline-none'
          }`}
          aria-disabled={isPast}
          tabIndex={isPast ? -1 : 0}
        >
          {isPast ? 'Sold Out' : (show.ticketButtonLabel ?? 'Tickets')}
        </a>
      ) : (
        <span className="justify-self-start border-2 border-offwhite px-4 py-2 text-xs font-bold uppercase tracking-widest md:justify-self-end">
          {show.ticketLabel}
        </span>
      )}
    </li>
  );
}

export default function Tour() {
  // Static export freezes render output at build time; recompute the
  // upcoming/past split after mount so it reflects the visitor's date.
  // Initial render uses the build date so hydration matches the HTML.
  const [refDate, setRefDate] = useState(null);
  useEffect(() => setRefDate(new Date()), []);

  const { upcoming } = sortTourDates(
    tourDates,
    refDate ?? new Date(process.env.NEXT_PUBLIC_BUILD_DATE),
  );

  return (
    <SectionWrapper
      id="tour"
      title="Tour"
      className="overflow-hidden"
      background={
        <div className="absolute inset-0 z-0 isolate" aria-hidden="true">
          <Image
            src={images.tour}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center grayscale"
          />
          <TvStatic />
          <div className="absolute inset-0 z-[2] bg-black/75" />
        </div>
      }
    >
      {upcoming.length > 0 && (
        <div>
          <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-offwhite/60">
            Upcoming Shows
          </h3>
          <ul>
            {upcoming.map((show) => (
              <ShowRow key={show.id} show={show} />
            ))}
          </ul>
        </div>
      )}
    </SectionWrapper>
  );
}
