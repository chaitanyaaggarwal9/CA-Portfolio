import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative h-[calc(100vh-4rem)] w-full">
      <div className="container mx-auto flex h-full flex-col items-center justify-center text-center">
        <div className="mb-8">
          <Image
            src="https://placehold.co/160x160.png"
            alt="Chaitanya Aggarwal"
            width={160}
            height={160}
            priority
            className="rounded-full border-4 border-primary shadow-lg"
            data-ai-hint="professional headshot"
          />
        </div>
        <h1 className="text-4xl font-black tracking-tight text-primary sm:text-5xl md:text-6xl font-headline">
          Chaitanya Aggarwal
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          An innovative Product Manager with a passion for building user-centric products that drive business growth. Specializing in agile development, data-driven decisions, and cross-functional team leadership.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="rounded-full">
            <Link href="#experience">
              Explore My Journey
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
