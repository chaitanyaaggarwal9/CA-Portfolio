"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#toolbox', label: 'Toolbox' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      let currentSection = '';
      navItems.forEach(item => {
        const section = document.querySelector(item.href);
        if (section instanceof HTMLElement) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 150) {
            currentSection = section.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        activeSection === href.substring(1) ? "text-primary" : "text-muted-foreground"
      )}
    >
      {label}
    </Link>
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b backdrop-blur-sm transition-all duration-300",
      isScrolled ? "border-border bg-background/80" : "border-transparent bg-background"
    )}>
      <div className="container flex h-16 items-center justify-between">
        <Link href="#home" className="text-lg font-bold text-primary font-headline">
          Chaitanya Aggarwal
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map(item => <NavLink key={item.href} {...item} />)}
          <Button asChild size="sm">
            <a href="/docs/CHAITANYA_AGGARWAL.pdf" download target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="mt-8 flex flex-col gap-6">
                {navItems.map(item => (
                  <SheetClose key={item.href} asChild>
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <Button asChild className="mt-4">
                  <a href="/docs/CHAITANYA_AGGARWAL.pdf" download target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
