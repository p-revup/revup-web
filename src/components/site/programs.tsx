import {
  ArrowUpRight,
  Compass,
  Crown,
  GraduationCap,
  HandHeart,
  Lightbulb,
  Network,
  PiggyBank,
  Play,
  Users,
} from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/reveal';

const programs = [
  {
    icon: Compass,
    title: 'Navigating Opportunities and How to Position for Them',
    description:
      'Equipping young people with awareness of available opportunities, scholarships, programmes, competitions, internships and the practical skills to identify, apply for, and leverage them.',
  },
  {
    icon: Users,
    title: 'Self-Esteem and Its Impact on Academic Performance',
    description:
      'Addressing the often-invisible role that self-worth, confidence, and identity play in how students approach learning, seek help, and persist through difficulty.',
  },
  {
    icon: PiggyBank,
    title: 'Financial Literacy',
    description:
      'Foundational money skills for young people understanding income, saving, budgeting, and how financial decisions made early shape long-term outcomes.',
  },
  {
    icon: GraduationCap,
    title: 'Study Skills',
    description:
      'Practical techniques for effective studying time management, active recall, managing exam pressure, and building the habits that consistently produce academic results.',
  },
];

export function Programs() {
  return (
    <section id="programs" className="bg-[#0d0d0d]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-semibold text-brand text-sm uppercase tracking-widest">
              Our Programs
            </p>
            <h2 className="mt-3 text-balance font-extrabold font-heading text-4xl text-white tracking-tight sm:text-5xl">
              Pathways designed to move you forward
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-[#b3b3b3] leading-relaxed">
            Every program is a step toward leadership, purpose, and impact.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <StaggerItem key={program.title}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/5 bg-[#181818] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#242424] hover:shadow-2xl">
                <div className="relative mb-5 flex items-center justify-center">
                  <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-gradient-to-br from-brand/25 to-brand-dark/40">
                    <program.icon className="size-12 text-brand" />
                  </div>
                  {/* <span className="absolute right-3 bottom-3 flex size-12 translate-y-3 items-center justify-center rounded-full bg-brand text-brand-foreground opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Play className="size-5" fill="currentColor" />
                  </span> */}
                </div>
                <h3 className="font-bold font-heading text-white text-xl">{program.title}</h3>
                <p className="mt-2 text-[#b3b3b3] text-sm leading-relaxed">{program.description}</p>
                {/* <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand text-sm transition-colors hover:text-white"
                >
                  Learn More
                  <ArrowUpRight className="size-4" />
                </a> */}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
