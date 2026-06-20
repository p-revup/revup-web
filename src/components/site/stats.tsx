import { Users, GraduationCap, HeartHandshake, Building2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { CountUp } from '@/components/site/count-up';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/reveal';

const stats = [
  { icon: Users, to: 5000, suffix: '+', label: 'Youth Reached' },
  { icon: GraduationCap, to: 150, suffix: '+', label: 'Leadership Programs' },
  { icon: HeartHandshake, to: 50, suffix: '+', label: 'Community Projects' },
  { icon: Building2, to: 20, suffix: '+', label: 'Strategic Partners' }
];

export function Stats() {
  return (
    <section id="impact" className="theme-light bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">Our Impact</p>
          <h2 className="font-heading mt-3 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            Real numbers. Real transformation.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed text-pretty">
            Every figure represents a young person stepping into purpose and a community moving
            forward.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <Card className="group border-border bg-secondary hover:border-primary/40 h-full rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <span className="bg-accent text-primary group-hover:bg-primary group-hover:text-primary-foreground mx-auto flex size-14 items-center justify-center rounded-2xl transition-colors">
                  <stat.icon className="size-7" />
                </span>
                <div className="font-heading mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
                  <CountUp to={stat.to} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground mt-2 text-sm font-medium">{stat.label}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
