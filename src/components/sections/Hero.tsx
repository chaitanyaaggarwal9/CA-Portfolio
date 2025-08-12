
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Gamepad2 } from 'lucide-react';


export function Hero() {
  return (
    <section id="home" className="relative w-full py-24 md:py-32 overflow-hidden">
      {/* Main Content */}
      <div className="container relative z-10 mx-auto flex flex-col-reverse items-center px-4 md:flex-row md:justify-between md:px-6">

        {/* Left Column: Text */}
        <div className="text-center md:text-left max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-primary mb-2">Welcome to my world</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-primary">
            I'm <span className="text-yellow-400">Chaitanya</span> Aggarwal
          </h1>

          <p className="mt-4 text-xl text-primary/80">A Product Manager & Tech Innovator</p>

          <p className="mt-6 text-md text-muted-foreground leading-relaxed text-justify">
            With a strong foundation in agile development, user research, and cross-functional team collaboration, 
            I specialize in building scalable digital products that solve real-world problems. Passionate about blending 
            business strategy with user-centric design to create high-impact experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Button asChild size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300">
                <Link href="#contact">Hire Me</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
                <Link href="#projects">My Works</Link>
            </Button>
             <Button asChild size="lg" variant="outline">
                <Link href="#prioritization-challenge">
                    <Gamepad2 className="mr-2 h-5 w-5" />
                    Play Game
                </Link>
            </Button>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="mb-12 md:mb-0">
          <div className="relative h-[450px] w-[450px] md:h-[500px] md:w-[500px] overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/images/profile-pic.png"
              alt="Chaitanya Aggarwal"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
