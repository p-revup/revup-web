import {
  Crown,
  Users,
  Lightbulb,
  HandHeart,
  Network,
  Compass,
  ArrowUpRight,
  Play
} from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/reveal';

const programs = [
  {
    icon: Crown,
    title: 'Leadership Academy',
    description:
      'An intensive program building confident, values-driven leaders ready to take initiative.'
  },
  {
    icon: Users,
    title: 'Youth Mentorship Program',
    description: 'Pairing young people with experienced mentors who guide their growth and purpose.'
  },
  {
    icon: Lightbulb,
    title: 'Entrepreneurship & Skills',
    description:
      'Practical training in skills, innovation, and enterprise to create real livelihoods.'
  },
  {
    icon: HandHeart,
    title: 'Community Impact Projects',
    description: 'Youth-led initiatives that solve local challenges and build lasting change.'
  },
  {
    icon: Network,
    title: 'Volunteer Network',
    description: 'A community of changemakers giving their time and talent to causes that matter.'
  },
  {
    icon: Compass,
    title: 'Purpose Discovery Workshops',
    description: 'Guided experiences that help young people uncover their calling and direction.'
  }
];

export function Programs() {
  return (
    <section id="programs" className="bg-[#0d0d0d]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-brand text-sm font-semibold tracking-widest uppercase">
              Our Programs
            </p>
            <h2 className="font-heading mt-3 text-4xl font-extrabold tracking-tight text-balance text-white sm:text-5xl">
              Pathways designed to move you forward
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-pretty text-[#b3b3b3]">
            Pick your lane. Every program is a step toward leadership, purpose, and impact.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <StaggerItem key={program.title}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/5 bg-[#181818] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#242424] hover:shadow-2xl">
                <div className="relative mb-5 flex items-center justify-center">
                  <div className="from-brand/25 to-brand-dark/40 flex aspect-square w-full items-center justify-center rounded-xl bg-gradient-to-br">
                    <program.icon className="text-brand size-12" />
                  </div>
                  <span className="bg-brand text-brand-foreground absolute right-3 bottom-3 flex size-12 translate-y-3 items-center justify-center rounded-full opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Play className="size-5" fill="currentColor" />
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white">{program.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#b3b3b3]">{program.description}</p>
                <a
                  href="#contact"
                  className="text-brand mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-white"
                >
                  Learn More
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
