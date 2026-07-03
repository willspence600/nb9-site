import Image from 'next/image';
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
            <Image
              src={release.cover}
              alt={`${release.title} cover art`}
              fill
              sizes="(min-width: 1024px) 50vw, (min-width: 640px) 28rem, 100vw"
              className="object-cover"
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
