export default function SpotifyEmbed({
  src,
  title = 'Losing You on Spotify',
  height = 152,
}) {
  return (
    <div className="w-full overflow-hidden rounded-xl border-2 border-offwhite bg-black">
      <iframe
        data-testid="embed-iframe"
        src={src}
        title={title}
        width="100%"
        height={height}
        className="block border-0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
