export default function SectionWrapper({
  id,
  title,
  children,
  className = '',
  titleClassName = '',
  contentClassName = '',
  background,
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-32 border-b-2 border-offwhite px-6 py-20 md:py-28 ${className}`}
    >
      {background}
      <div className={`relative z-10 mx-auto max-w-7xl ${contentClassName}`}>
        <h2 className={`section-heading mb-12 md:mb-16 ${titleClassName}`}>{title}</h2>
        {children}
      </div>
    </section>
  );
}
