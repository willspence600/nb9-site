export default function YouTubeEmbed({
  videoId,
  title = 'Naked By 9 video',
}) {
  return (
    <div className="relative aspect-video w-full border-b-2 border-offwhite bg-black">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
