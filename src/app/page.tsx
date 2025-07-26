import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Toolbox } from '@/components/sections/Toolbox';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="flex min-h-dvh w-full flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Toolbox />
        <Contact />
      </main>
      <footer className="w-full bg-background/50 py-6 text-center text-sm text-muted-foreground">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Chaitanya Aggarwal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
