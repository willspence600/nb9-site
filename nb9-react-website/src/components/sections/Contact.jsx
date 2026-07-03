import SectionWrapper from '../SectionWrapper';
import SocialIcons from '../SocialIcons';

export default function Contact() {
  return (
    <SectionWrapper id="contact" title="Contact">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="mb-8 max-w-md text-offwhite/70">
            For booking and general inquiries, please send us an email and we'll get back 
            to you as soon as we can.
          </p>
          <a
            href="mailto:nakedby9music@gmail.com"
            className="text-2xl font-bold uppercase tracking-tight hover-glow focus-visible:outline-none md:text-3xl"
          >
            nakedby9music@gmail.com
          </a>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-offwhite/60">
            Follow Us
          </h3>
          <SocialIcons />
        </div>
      </div>
    </SectionWrapper>
  );
}
