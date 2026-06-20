import { Rocket, Compass, Globe2 } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/reveal';

const pillars = [
  {
    icon: Rocket,
    title: 'Empowerment',
    description:
      'Helping young people unlock their potential through mentorship, training, and opportunities that open doors.'
  },
  {
    icon: Compass,
    title: 'Leadership',
    description:
      'Developing confident leaders who influence positive change and serve their communities with integrity.'
  },
  {
    icon: Globe2,
    title: 'Impact',
    description:
      'Equipping youth to create sustainable solutions that transform communities and ripple across the globe.'
  }
];

export function Pillars() {
  return (
    <section className="relative overflow-hidden bg-[#121212]">
      <div className="bg-brand/10 pointer-events-none absolute top-1/2 left-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-brand text-sm font-semibold tracking-widest uppercase">
            What Drives Us
          </p>
          <h2 className="font-heading mt-3 text-4xl font-extrabold tracking-tight text-balance text-white sm:text-5xl">
            Three pillars that shape every leader we raise
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="group hover:border-brand/40 relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#181818] p-8 transition-all duration-300 hover:-translate-y-2">
                <div className="bg-brand/0 group-hover:bg-brand/25 pointer-events-none absolute -top-10 -right-10 size-32 rounded-full blur-2xl transition-all duration-500" />
                <span className="bg-brand/15 text-brand group-hover:bg-brand group-hover:text-brand-foreground relative flex size-16 items-center justify-center rounded-2xl transition-all duration-300">
                  <pillar.icon className="size-8" />
                </span>
                <h3 className="font-heading relative mt-7 text-2xl font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="relative mt-3 leading-relaxed text-[#b3b3b3]">{pillar.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
