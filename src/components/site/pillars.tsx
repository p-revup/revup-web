import { BookOpen, Compass, Globe2, Podium, Rocket, Users } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/reveal';

const pillars = [
  {
    icon: BookOpen,
    title: 'Education and Lifelong Learning',
    description:
      'Promoting educational advancement and intellectual growth through reading, academic support, and learning opportunities.',
  },
  {
    icon: Podium,
    title: 'Leadership Development',
    description:
      'Equipping young people with the mindset, character, and skills required to lead themselves and others effectively.',
  },
  {
    icon: Users,
    title: 'Mentorship and Networks',
    description:
      'Connecting young people to mentors, role models, and communities that support their personal and professional growth.',
  },
  {
    icon: Compass,
    title: 'Values and Character Formation',
    description:
      'Developing young people who are grounded in integrity, responsibility, discipline, and purpose.',
  },
  {
    icon: Globe2,
    title: 'Opportunity Creation and Social Impact',
    description:
      'Creating pathways that enable young people to access opportunities and contribute positively to society.',
  },
];

export function Pillars() {
  return (
    <section className="relative overflow-hidden bg-[#121212]">
      <div className="pointer-events-none absolute top-1/2 left-1/2 size-130 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[160px]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-semibold text-brand text-sm uppercase tracking-widest">
            What Drives Us
          </p>
          <h2 className="mt-3 text-balance font-extrabold font-heading text-4xl text-white tracking-tight sm:text-5xl">
            Five pillars that shape every leader we raise
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#181818] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-brand/40">
                <div className="pointer-events-none absolute -top-10 -right-10 size-32 rounded-full bg-brand/0 blur-2xl transition-all duration-500 group-hover:bg-brand/25" />
                <span className="relative flex size-16 items-center justify-center rounded-2xl bg-brand/15 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-brand-foreground">
                  <pillar.icon className="size-8" />
                </span>
                <h3 className="relative mt-7 font-bold font-heading text-2xl text-white">
                  {pillar.title}
                </h3>
                <p className="relative mt-3 text-[#b3b3b3] leading-relaxed">{pillar.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
