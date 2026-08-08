'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="top" className="relative h-screen w-full overflow-hidden py-28 lg:py-36">
      <div className="pointer-events-none absolute -top-40 left-1/2 size-160 -translate-x-1/2 rounded-full bg-brand/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 size-105 rounded-full bg-brand/10 blur-[120px]" />

      {Array.from({ length: 14 }).map((_, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute size-1 rounded-full bg-brand/60"
          style={{
            left: `${(i * 67) % 100}%`,
            top: `${(i * 41) % 100}%`,
          }}
          animate={{ y: [0, -22, 0], opacity: [0.15, 0.7, 0.15] }}
          transition={{
            duration: 4 + (i % 5),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="mx-auto flex h-full max-w-3xl flex-col items-center justify-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance font-extrabold font-heading text-5xl text-white leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Empowering Young People to <span className="text-brand">Lead and Live Purposefully</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto max-w-full text-pretty text-center text-[#b3b3b3] text-lg leading-relaxed lg:mx-0"
        >
          We equip young people with leadership skills, mentorship, and opportunities that help them
          discover purpose and create meaningful impact in their communities and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button
            size="lg"
            className="h-12 w-full rounded-full px-7 font-semibold text-base sm:w-auto"
            nativeButton={false}
            render={<a href="#contact">Join Rev-up 2.0</a>}
          >
            Join Rev-up 2.0
            <ArrowRight data-icon="inline-end" />
          </Button>
          <Button
            size="lg"
            nativeButton={false}
            variant="outline"
            className="h-12 w-full rounded-full border-white/20 bg-white/5 px-7 font-semibold text-base text-white hover:bg-white/10 hover:text-white sm:w-auto"
            render={<a href="#programs">Explore Our Programs</a>}
          />
        </motion.div>
      </div>
    </section>
  );
}
