
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { FloatingShapes } from '@/components/effects/FloatingShapes';
import { ProductIdeationAnimation } from '@/components/effects/ProductIdeationAnimation';

export function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      <FloatingShapes />
      <div className="container relative z-10 mx-auto flex min-h-dvh items-center px-4 md:px-6">
        <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2">
          
          {/* Left Column: Animation */}
          <div className="flex items-center justify-center">
             <ProductIdeationAnimation />
          </div>
          
          {/* Right Column: Text content */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-6">
              <Image
                src="/profile-pic.png"
                alt="Chaitanya Aggarwal"
                width={150}
                height={150}
                priority
                className="rounded-full border-4 border-primary shadow-lg"
                data-ai-hint="professional headshot"
              />
            </div>
            <h1 className="text-4xl font-black tracking-tight text-primary sm:text-5xl md:text-6xl font-headline">
              Chaitanya Aggarwal
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-muted-foreground">
              An innovative Product Manager with a passion for building user-centric products that drive business growth. Specializing in agile development, data-driven decisions, and cross-functional team leadership.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="#contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
