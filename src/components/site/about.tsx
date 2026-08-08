import { BadgeCheck, Eye, Target } from 'lucide-react';
import Image from 'next/image';
import { Reveal } from '@/components/site/reveal';
import { Badge } from '@/components/ui/badge';

export function About() {
  return (
    <section id="about" className="theme-light bg-secondary text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src="/revup-brand.webp"
                  alt="A mentor working with young people during a leadership workshop"
                  width={720}
                  height={620}
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -right-4 -bottom-6 hidden items-center gap-3 rounded-2xl border border-border bg-background p-4 shadow-xl sm:flex">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <BadgeCheck className="size-6" />
                </span>
                <span className="leading-tight">
                  <span className="block font-extrabold text-xl">1+ Years</span>
                  <span className="block text-muted-foreground text-xs">
                    Building young leaders
                  </span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <Badge
              variant="secondary"
              className="rounded-full bg-accent px-3 py-1 text-accent-foreground"
            >
              Who We Are
            </Badge>
            <h2 className="mt-4 text-balance font-extrabold font-heading text-4xl tracking-tight sm:text-5xl">
              More Than An Organization. A Movement.
            </h2>
            <p className="mt-5 text-pretty text-lg text-muted-foreground leading-relaxed">
              RevUp Initiative exists to ignite purpose in a generation. We walk alongside young
              people through leadership development, mentorship, and real opportunities, helping
              them discover who they are and the change they were made to create.
            </p>
            <p className="mt-4 text-pretty text-lg text-muted-foreground leading-relaxed">
              From classrooms to communities, we are building a network of bold, grounded
              changemakers transforming the world around them.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-border bg-background p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                <Target className="size-6" />
              </span>
              <h3 className="mt-4 font-bold font-heading text-lg">Our Mission</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                To equip teenagers and young adults not only to succeed academically, but to thrive
                in life as responsible leaders, critical thinkers, and positive contributors to
                society.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="h-full rounded-2xl border border-border bg-background p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                <Eye className="size-6" />
              </span>
              <h3 className="mt-4 font-bold font-heading text-lg">Our Vision</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                We envision a generation of young people equipped with the tools to lead, innovate,
                and live purposefully.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
