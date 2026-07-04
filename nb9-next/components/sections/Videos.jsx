import Image from 'next/image';
import SectionWrapper from '../SectionWrapper';
import YouTubeEmbed from '../YouTubeEmbed';
import TvStatic from '../TvStatic';
import { images } from '../../data/siteConfig';

const videos = [
  { id: 'xL2k8HnM-bE', title: 'Losing You - Live at Ale House' },
];

export default function Videos() {
  return (
    <SectionWrapper
      id="videos"
      title="Videos"
      className="overflow-hidden"
      background={
        <div className="absolute inset-0 z-0 isolate" aria-hidden="true">
          <Image
            src={images.heroLogo}
            alt=""
            width={1069}
            height={1213}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[min(70vw,900px)] w-[min(90vw,900px)] max-h-full -translate-x-1/2 -translate-y-1/2 object-contain"
          />
          <TvStatic opacity={0.12} />
          <div className="absolute inset-0 z-[2] bg-black/70" />
        </div>
      }
    >
      <div className="mx-auto grid max-w-3xl gap-6">
        {videos.map((video) => (
          <article
            key={video.id}
            className="group border-2 border-offwhite transition-all duration-200 hover:border-offwhite hover:shadow-[0_0_14px_rgba(240,240,240,0.35)]"
          >
            <YouTubeEmbed videoId={video.id} title={video.title} />
            <div className="bg-black/80 p-4">
              <h3 className="font-bold uppercase tracking-tight transition-all duration-200 group-hover:drop-shadow-[0_0_8px_rgba(240,240,240,0.6)]">
                {video.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
