'use client';

import { Menu, Zap } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-[#2a2a2a] border-b bg-[#121212]/85 backdrop-blur-xl'
          : 'border-transparent border-b bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2 text-white">
          <span className="flex size-9 items-center justify-center overflow-clip rounded-full bg-white">
            <Image
              src="/logo.png"
              alt="Revup logo icon"
              width={100}
              height={100}
              loading="eager"
              className="h-full w-full object-cover"
            />
          </span>
          <span className="font-extrabold text-brand text-lg tracking-tight">Rev Up</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 font-medium text-[#b3b3b3] text-sm transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="lg"
            className="hidden rounded-full px-5 font-semibold sm:inline-flex"
            nativeButton={false}
            render={<a href="#contact">Join Rev-up 2.0</a>}
          />

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 hover:text-white md:hidden"
                  aria-label="Open menu"
                >
                  <Menu />
                </Button>
              }
            />
            <SheetContent side="right" className="border-[#2a2a2a] bg-[#121212] text-white">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-white">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                    <Zap className="size-4" fill="currentColor" />
                  </span>
                  RevUp Initiative
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={
                      <a
                        href={link.href}
                        className="rounded-xl px-3 py-3 font-medium text-[#b3b3b3] text-base transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {link.label}
                      </a>
                    }
                  />
                ))}
                <SheetClose
                  render={
                    <Button
                      size="lg"
                      nativeButton={false}
                      className="mt-4 w-full rounded-full font-semibold"
                      render={<a href="#contact">Join The Movement</a>}
                    />
                  }
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
