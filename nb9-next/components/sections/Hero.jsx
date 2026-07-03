import Image from 'next/image';
import { images } from '../../data/siteConfig';
import TvStatic from '../TvStatic';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden border-b-2 border-offwhite px-6 pt-28">
      <div className="hero-fade absolute inset-0 z-0 isolate" aria-hidden="true">
        <Image
          src={images.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_100%] grayscale"
        />
        <TvStatic />
        <div className="absolute inset-0 z-[2] bg-black/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <h1
          className="hero-rise text-6xl font-black uppercase leading-none tracking-tighter md:text-9xl"
          style={{ animationDelay: '200ms' }}
        >
          Naked By 9
        </h1>
        <p
          className="hero-rise mx-auto mt-8 max-w-xl text-lg text-offwhite/70"
          style={{ animationDelay: '400ms' }}
        >
          Guitar-driven indie rock from Kingston, Ontario.
        </p>
        <div
          className="hero-rise mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: '600ms' }}
        >
          <a
            href="/#music"
            className="border-2 border-offwhite bg-black/50 px-8 py-3 text-sm font-bold uppercase tracking-widest backdrop-blur-sm border-hover-glow focus-visible:outline-none"
          >
            Stream our debut single "Losing You"
          </a>
          <a
            href="/#tour"
            className="border-2 border-offwhite bg-black/50 px-8 py-3 text-sm font-bold uppercase tracking-widest backdrop-blur-sm border-hover-glow focus-visible:outline-none"
          >
            See Tour Dates
          </a>
        </div>
      </div>
    </section>
  );
}
