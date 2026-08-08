import Image from 'next/image';
import { Reveal } from '@/components/site/reveal';

const images = [
  {
    src: '/gallery-leadership.webp',
    alt: 'Youth leadership conference with a speaker on stage',
    label: 'Leadership Summit',
    span: 'row-span-2',
  },
  {
    src: '/gallery-oct-12.webp',
    alt: 'Young volunteers doing community outreach',
    label: 'Community Outreach',
    span: '',
  },
  {
    src: '/gallery-workshop.webp',
    alt: 'Hands-on skills workshop with young people',
    label: 'Skills Workshop',
    span: '',
  },
  {
    src: '/gallery-graduation.webp',
    alt: 'Program graduates holding certificates',
    label: 'Academy Graduation',
    span: 'row-span-2',
  },
  {
    src: '/gallery-mentorship.webp',
    alt: 'Mentorship circle discussion',
    label: 'Mentorship Circle',
    span: '',
  },
  {
    src: '/gallery-volunteering.jpg',
    alt: 'Volunteers celebrating after a community project',
    label: 'Volunteer Day',
    span: '',
  },
];

export function Gallery() {
  return (
    <section className="theme-light bg-secondary text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-semibold text-primary text-sm uppercase tracking-widest">
            Our Movement In Action
          </p>
          <h2 className="mt-3 text-balance font-extrabold font-heading text-4xl tracking-tight sm:text-5xl">
            Moments that move us forward
          </h2>
        </Reveal>

        <Reveal className="mt-14">
          <div className="grid auto-rows-[200px] grid-cols-2 gap-4 lg:grid-cols-3">
            {images.map((image) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-2xl ${image.span}`}
              >
                <Image
                  src={image.src || '/placeholder.svg'}
                  alt={image.alt}
                  fill
                  loading="eager"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 translate-y-1 font-semibold text-sm text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {image.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
