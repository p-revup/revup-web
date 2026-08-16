import { Quote, Star } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const stories = [
  {
    name: 'Deji Fasuan',
    role: 'Model college student',
    image: '',
    quote: 'The workshop is so wonderful, educating and gives more knowledge about vision.',
  },
  {
    name: 'Emmanuel Eshiebor',
    role: 'Online session',
    image: '',
    quote:
      "The workshop was well organized and engaging. It covered relevant topics and provided practical insgights, so there's little to improve, just maintaning the same level of quality and impact in the future sessions would be great.",
  },
  {
    name: 'Badmus Alexander Ayomide',
    role: 'Holy Child Secondary student',
    image: '',
    quote:
      'After the session, I want to be hard-working to be a better person in life and I want to overcome challenges when I face it.',
  },
];

export function Stories() {
  return (
    <section className="theme-light bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-semibold text-primary text-sm uppercase tracking-widest">
            Success Stories
          </p>
          <h2 className="mt-3 text-balance font-extrabold font-heading text-4xl tracking-tight sm:text-5xl">
            Purpose discovered. Lives transformed.
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground leading-relaxed">
            Meet a few of the young leaders writing a new story for themselves and their
            communities.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <Carousel opts={{ align: 'start', loop: true }} className="mx-auto w-full max-w-6xl">
            <CarouselContent>
              {stories.map((story) => (
                <CarouselItem key={story.name} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="flex h-full flex-col justify-between rounded-3xl border-border bg-secondary p-8">
                    <div>
                      <Quote className="size-9 text-primary" />
                      <div className="mt-4 flex gap-1 text-primary">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="size-4" fill="currentColor" />
                        ))}
                      </div>
                      <p className="mt-4 text-pretty text-foreground text-lg leading-relaxed">
                        “{story.quote}”
                      </p>
                    </div>
                    <div className="mt-8 flex items-center gap-4">
                      <div>
                        <p className="font-bold font-heading">{story.name}</p>
                        <p className="text-muted-foreground text-sm">{story.role}</p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex items-center justify-center gap-3">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
