'use client';

import { useEffect, useState } from 'react';
import { Menu, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Impact', href: '#impact' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' }
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
          ? 'border-b border-[#2a2a2a] bg-[#121212]/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2 text-white">
          <span className="bg-brand text-brand-foreground flex size-9 items-center justify-center rounded-xl">
            <Zap className="size-5" fill="currentColor" />
          </span>
          <span className="text-lg font-extrabold tracking-tight">RevUp</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[#b3b3b3] transition-colors hover:text-white"
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
            render={<a href="#contact">Join The Movement</a>}
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
                  <span className="bg-brand text-brand-foreground flex size-8 items-center justify-center rounded-lg">
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
                        className="rounded-xl px-3 py-3 text-base font-medium text-[#b3b3b3] transition-colors hover:bg-white/5 hover:text-white"
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
