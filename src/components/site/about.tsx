import Image from 'next/image';
import { Target, Eye, BadgeCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/site/reveal';

export function About() {
  return (
    <section id="about" className="theme-light bg-secondary text-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <Reveal direction="right">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="/about-mentorship.png"
                alt="A mentor working with young people during a leadership workshop"
                width={720}
                height={620}
                loading="eager"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="border-border bg-background absolute -right-4 -bottom-6 hidden items-center gap-3 rounded-2xl border p-4 shadow-xl sm:flex">
              <span className="bg-primary text-primary-foreground flex size-11 items-center justify-center rounded-xl">
                <BadgeCheck className="size-6" />
              </span>
              <span className="leading-tight">
                <span className="block text-xl font-extrabold">8+ Years</span>
                <span className="text-muted-foreground block text-xs">Building young leaders</span>
              </span>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Badge
              variant="secondary"
              className="bg-accent text-accent-foreground rounded-full px-3 py-1"
            >
              Who We Are
            </Badge>
            <h2 className="font-heading mt-4 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
              More Than An Organization. A Movement.
            </h2>
            <p className="text-muted-foreground mt-5 text-lg leading-relaxed text-pretty">
              RevUp Initiative exists to ignite purpose in a generation. We walk alongside young
              people through leadership development, mentorship, and real opportunities, helping
              them discover who they are and the change they were made to create.
            </p>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed text-pretty">
              From classrooms to communities, we are building a network of bold, grounded
              changemakers transforming the world around them.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Reveal delay={0.1}>
              <div className="border-border bg-background h-full rounded-2xl border p-6">
                <span className="bg-accent text-primary flex size-11 items-center justify-center rounded-xl">
                  <Target className="size-6" />
                </span>
                <h3 className="font-heading mt-4 text-lg font-bold">Our Mission</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  To empower young people through leadership, mentorship, and impact-driven
                  opportunities that help them discover purpose and transform their communities.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="border-border bg-background h-full rounded-2xl border p-6">
                <span className="bg-accent text-primary flex size-11 items-center justify-center rounded-xl">
                  <Eye className="size-6" />
                </span>
                <h3 className="font-heading mt-4 text-lg font-bold">Our Vision</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  To raise a generation of purpose-driven leaders who create meaningful impact and
                  inspire positive change globally.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
