import { About } from '@/components/site/about';
import { Gallery } from '@/components/site/gallery';
import { Hero } from '@/components/site/hero';
import { Navbar } from '@/components/site/navbar';
import { Partners } from '@/components/site/partners';
import { Pillars } from '@/components/site/pillars';
import { Programs } from '@/components/site/programs';
import { Stats } from '@/components/site/stats';
import { Stories } from '@/components/site/stories';

export default function Page() {
  return (
    <main className="">
      <Navbar />
      <Hero />

      <About />
      <Pillars />

      <Stats />
      <Programs />

      <Stories />
      <Gallery />

      <Partners />
    </main>
  );
}
