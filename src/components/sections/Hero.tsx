import Image from 'next/image';
import Link from 'next/link';
import { FloatingShapes } from '@/components/effects/FloatingShapes';
import { Button } from '@/components/ui/button';


export function Hero() {
  return (
    <section id="home" className="relative w-full bg-black text-white py-24 md:py-32 overflow-hidden">
      {/* Background Animation */}
      <FloatingShapes />

      {/* Main Content */}
      <div className="container relative z-10 mx-auto flex flex-col-reverse items-center px-4 md:flex-row md:justify-between md:px-6">

        {/* Left Column: Text */}
        <div className="text-center md:text-left max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-yellow-400 mb-2">Welcome to my world</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            I'm <span className="text-yellow-400">Chaitanya</span> Aggarwal
          </h1>

          <p className="mt-4 text-xl text-gray-300">A Product Manager & Tech Innovator</p>

          <p className="mt-6 text-md text-gray-400 leading-relaxed">
            With a strong foundation in agile development, user research, and cross-functional team collaboration, 
            I specialize in building scalable digital products that solve real-world problems. Passionate about blending 
            business strategy with user-centric design to create high-impact experiences.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-start justify-center">
            <Link href="#contact">
              <button className="rounded-full bg-yellow-400 px-6 py-3 text-black font-semibold hover:bg-yellow-300 transition">
                Hire Me
              </button>
            </Link>
            <Link href="#experience">
              <button className="rounded-full border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition">
                My Works
              </button>
            </Link>
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
