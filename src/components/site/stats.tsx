import { GraduationCap, MessageCircleReply, User, Users } from 'lucide-react';
import { CountUp } from '@/components/site/count-up';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/site/reveal';
import { Card } from '@/components/ui/card';

const stats = [
  { icon: Users, to: 1800, suffix: '+', label: 'Young people reached (target was 1,000)' },
  { icon: GraduationCap, to: 14, suffix: '', label: 'Sessions held across South-West Nigeria' },
  { icon: MessageCircleReply, to: 1000, suffix: '', label: 'Feedback forms collected' },
  { icon: User, to: 11, suffix: '', label: 'Active facilitators who led sessions' },
];

export function Stats() {
  return (
    <section id="impact" className="theme-light bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-semibold text-primary text-sm uppercase tracking-widest">Our Impact</p>
          <h2 className="mt-3 text-balance font-extrabold font-heading text-4xl tracking-tight sm:text-5xl">
            Real numbers. Real transformation.
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground leading-relaxed">
            Every figure represents a young person stepping into purpose and a community moving
            forward.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <Card className="group h-full rounded-2xl border-border bg-secondary p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl">
                <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <stat.icon className="size-7" />
                </span>
                <div className="mt-6 font-extrabold font-heading text-4xl tracking-tight sm:text-5xl">
                  <CountUp to={stat.to} suffix={stat.suffix} />
                </div>
                <p className="mt-2 font-medium text-muted-foreground text-sm">{stat.label}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
