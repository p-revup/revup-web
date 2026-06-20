import { Quote, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Reveal } from '@/components/site/reveal';

const stories = [
  {
    name: 'Amara Okafor',
    role: 'Leadership Academy Graduate',
    image: '/portrait-amara.png',
    quote:
      'RevUp helped me find my voice. I went from being unsure of my future to leading a community project that now reaches over 300 students.'
  },
  {
    name: 'Daniel Mensah',
    role: 'Youth Mentor & Entrepreneur',
    image: '/portrait-daniel.png',
    quote:
      'The mentorship program gave me the confidence and skills to launch my own social enterprise. Today I employ five young people from my community.'
  },
  {
    name: 'Zainab Ibrahim',
    role: 'Purpose Discovery Alumna',
    image: '/portrait-zainab.png',
    quote:
      'I discovered my purpose through the workshops. RevUp did not just train me, they believed in me until I believed in myself.'
  },
  {
    name: 'Marcus Bello',
    role: 'Volunteer Network Lead',
    image: '/portrait-marcus.png',
    quote:
      'Volunteering with RevUp transformed how I see leadership. Serving others taught me more about purpose than anything else ever has.'
  }
];

export function Stories() {
  return (
    <section className="theme-light bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">
            Success Stories
          </p>
          <h2 className="font-heading mt-3 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            Purpose discovered. Lives transformed.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed text-pretty">
            Meet a few of the young leaders writing a new story for themselves and their
            communities.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <Carousel opts={{ align: 'start', loop: true }} className="mx-auto w-full max-w-6xl">
            <CarouselContent>
              {stories.map((story) => (
                <CarouselItem key={story.name} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="border-border bg-secondary flex h-full flex-col justify-between rounded-3xl p-8">
                    <div>
                      <Quote className="text-primary size-9" />
                      <div className="text-primary mt-4 flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="size-4" fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-foreground mt-4 text-lg leading-relaxed text-pretty">
                        “{story.quote}”
                      </p>
                    </div>
                    <div className="mt-8 flex items-center gap-4">
                      <Avatar className="size-14">
                        <AvatarImage src={story.image} alt={story.name} />
                        <AvatarFallback>{story.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-heading font-bold">{story.name}</p>
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
