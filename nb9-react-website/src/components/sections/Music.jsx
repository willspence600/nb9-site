import SectionWrapper from '../SectionWrapper';
import { Youtube } from 'lucide-react';
import AppleMusicIcon from '../icons/AppleMusicIcon';
import SpotifyEmbed from '../SpotifyEmbed';
import TvStatic from '../TvStatic';
import { images } from '../../data/siteConfig';

const release = {
  title: 'Losing You',
  type: 'Debut Single',
  year: '2026',
  cover: images.losingYouCover,
  spotifyEmbedUrl:
    'https://open.spotify.com/embed/track/4X6a91VhHnn1o0E3bQu8Zz?utm_source=generator&si=b7fd9f7555be4632',
  appleMusicUrl:
    'https://music.apple.com/ca/album/losing-you-single/1876488103',
  youtubeMusicUrl:
    'https://music.youtube.com/watch?v=SMYqWQRnCiw&si=tsdj6vlx7_r-JJ6W',
};

export default function Music() {
  return (
    <SectionWrapper id="music" title="Music">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16 xl:gap-24">
        <div className="group relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="pointer-events-none absolute -inset-3 border-2 border-offwhite/25 transition-all duration-300 group-hover:border-offwhite group-hover:shadow-[0_0_20px_rgba(240,240,240,0.3)]"
            aria-hidden="true"
          />
          <div className="relative aspect-square overflow-hidden border-2 border-offwhite bg-offwhite/5 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(240,240,240,0.2)]">
            <img
              src={release.cover}
              alt={`${release.title} cover art`}
              className="h-full w-full object-cover"
            />
            <TvStatic />
          </div>
        </div>

        <div className="text-center lg:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-offwhite">
            Out Now
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-offwhite/50">
            {release.type} · {release.year}
          </p>
          <h3 className="mt-3 text-5xl font-black uppercase leading-none tracking-tighter md:text-7xl xl:text-8xl">
            {release.title}
          </h3>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-offwhite/70 lg:mx-0 md:text-lg">
            Available now on all streaming platforms.
          </p>

          <div className="mx-auto mt-8 w-full max-w-sm lg:mx-0">
            <SpotifyEmbed
              src={release.spotifyEmbedUrl}
              title={`${release.title} on Spotify`}
            />
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap lg:justify-start">
            <a
              href={release.appleMusicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="accent-glow-apple-music accent-glow-button inline-flex w-full items-center justify-center gap-3 border-2 border-offwhite px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-[#fa243c] focus-visible:border-[#fa243c] focus-visible:outline-none sm:w-auto"
            >
              <AppleMusicIcon size={20} />
              Apple Music
            </a>
            <a
              href={release.youtubeMusicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="accent-glow-red accent-glow-button inline-flex w-full items-center justify-center gap-3 border-2 border-offwhite px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-red-500 focus-visible:border-red-500 focus-visible:outline-none sm:w-auto"
            >
              <Youtube size={20} strokeWidth={1.75} />
              YouTube Music
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/*
// Previous Music section — restore by uncommenting and replacing the component above.

import SectionWrapper from '../SectionWrapper';
import SpotifyIcon from '../icons/SpotifyIcon';
import AppleMusicIcon from '../icons/AppleMusicIcon';
import { images } from '../../data/siteConfig';

const release = {
  title: 'Losing You',
  type: 'Single',
  year: '2026',
  cover: images.losingYouCover,
};

export default function Music() {
  return (
    <SectionWrapper
      id="music"
      title="Music"
      className="overflow-hidden"
      background={
        <img
          src={images.heroLogo}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[min(110vw,900px)] w-[min(110vw,700px)] max-h-none -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.15]"
        />
      }
    >
      <div className="flex justify-center">
        <article className="group w-full max-w-sm border-2 border-offwhite p-6 transition-colors duration-200 hover:border-cyan">
          <p className="mb-6 text-center text-sm font-semibold uppercase leading-relaxed tracking-widest text-offwhite/80">
            Our debut single{' '}
            <span className="text-offwhite">Losing You</span> is out now!
          </p>
          <div className="mb-6 aspect-square overflow-hidden border-2 border-offwhite bg-offwhite/5 transition-colors duration-200 group-hover:border-cyan">
            <img
              src={release.cover}
              alt={`${release.title} cover art`}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest text-offwhite/50">
            {release.type} · {release.year}
          </p>
          <h3 className="mt-2 text-xl font-bold uppercase tracking-tight transition-colors duration-200 group-hover:text-cyan">
            {release.title}
          </h3>
          <div className="mt-4 flex gap-4">
            <a
              href="#"
              aria-label="Listen on Spotify"
              className="accent-glow-lime inline-flex transition-all duration-200"
            >
              <SpotifyIcon size={22} />
            </a>
            <a
              href="#"
              aria-label="Listen on Apple Music"
              className="accent-glow-yellow inline-flex transition-all duration-200"
            >
              <AppleMusicIcon size={22} />
            </a>
          </div>
        </article>
      </div>
    </SectionWrapper>
  );
}
*/
