import {
  Briefcase,
  Building2,
  Globe,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Leaf,
  Rocket,
} from 'lucide-react';
import { Reveal } from '@/components/site/reveal';

const partners = [
  { name: 'GlobalReach', icon: Globe },
  { name: 'BrightFutures', icon: Rocket },
  { name: 'UniLead', icon: GraduationCap },
  { name: 'CivicTrust', icon: Landmark },
  { name: 'NextGen Corp', icon: Building2 },
  { name: 'WorkWise', icon: Briefcase },
  { name: 'CareFoundation', icon: HeartHandshake },
  { name: 'GreenRoots', icon: Leaf },
];

function PartnerChip({ name, Icon }: { name: string; Icon: (typeof partners)[number]['icon'] }) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 px-8 text-muted-foreground">
      <Icon className="size-7" />
      <span className="font-bold font-heading text-xl tracking-tight">{name}</span>
    </div>
  );
}

export function Partners() {
  return (
    <section className="theme-light bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-semibold text-primary text-sm uppercase tracking-widest">
            Our Partners
          </p>
          <h2 className="mt-3 text-balance font-extrabold font-heading text-4xl tracking-tight sm:text-5xl">
            Together We Create Greater Impact
          </h2>
        </Reveal>

        <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="marquee-track flex w-max">
            {[...partners, ...partners].map((partner, i) => (
              <PartnerChip key={`${partner.name}-${i}`} name={partner.name} Icon={partner.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
