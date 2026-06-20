'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';


export function Hero() {
  return (
    <section id="top" className="relative h-fit w-full overflow-hidden py-28 lg:py-36">
      {/* glow effects */}
      <div className="bg-brand/20 pointer-events-none absolute -top-40 left-1/2 size-160 -translate-x-1/2 rounded-full blur-[140px]" />
      <div className="bg-brand/10 pointer-events-none absolute right-0 bottom-0 size-105 rounded-full blur-[120px]" />

      {/* particles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.span
          key={i}
          className="bg-brand/60 pointer-events-none absolute size-1 rounded-full"
          style={{
            left: `${(i * 67) % 100}%`,
            top: `${(i * 41) % 100}%`
          }}
          animate={{ y: [0, -22, 0], opacity: [0.15, 0.7, 0.15] }}
          transition={{
            duration: 4 + (i % 5),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3
          }}
        />
      ))}

      <div className="mx-auto flex h-full max-w-3xl flex-col items-center justify-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-5xl leading-[1.05] font-extrabold tracking-tight text-balance text-white sm:text-6xl lg:text-7xl"
        >
          Empowering Young People to <span className="text-brand">Lead and Live Purposefully</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto max-w-full text-center text-lg leading-relaxed text-pretty text-[#b3b3b3] lg:mx-0"
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
            className="h-12 w-full rounded-full px-7 text-base font-semibold sm:w-auto"
            nativeButton={false}
            render={<a href="#contact">Join The Movement</a>}
          >
            Join The Movement
            <ArrowRight data-icon="inline-end" />
          </Button>
          <Button
            size="lg"
            nativeButton={false}
            variant="outline"
            className="h-12 w-full rounded-full border-white/20 bg-white/5 px-7 text-base font-semibold text-white hover:bg-white/10 hover:text-white sm:w-auto"
            render={<a href="#programs">Explore Programs</a>}
          />
        </motion.div>
      </div>
    </section>
  );
}
