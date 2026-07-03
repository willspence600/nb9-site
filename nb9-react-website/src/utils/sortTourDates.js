/**
 * Sorts tour dates by closeness to today.
 * Upcoming shows (today or future) are sorted ascending by date.
 * Past shows are sorted descending (most recent past first).
 * Returns { upcoming, past } — both arrays remain rendered for SEO.
 */
export function sortTourDates(dates, referenceDate = new Date()) {
  const today = startOfDay(referenceDate);

  const withMeta = dates.map((show) => {
    const showDate = startOfDay(new Date(show.date));
    const isPast = showDate < today;
    const distance = Math.abs(showDate.getTime() - today.getTime());

    return { ...show, isPast, distance, showDate };
  });

  const upcoming = withMeta
    .filter((show) => !show.isPast)
    .sort((a, b) => a.showDate - b.showDate);

  const past = withMeta
    .filter((show) => show.isPast)
    .sort((a, b) => b.showDate - a.showDate);

  return { upcoming, past };
}

function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

/**
 * Formats an ISO date string for display.
 */
export function formatShowDate(isoDate) {
  return new Date(isoDate).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
