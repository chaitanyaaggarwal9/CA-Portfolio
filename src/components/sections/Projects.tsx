"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projectsData = [
  {
    title: 'B2B Vendor Payment Platform',
    category: 'Fintech SaaS',
    shortDesc: 'Defined and delivered a SaaS product reducing NPAs by $1.8M annually through automated payment workflows.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'payment automation',
    details: {
      problem: "Legacy manual processing of vendor payments led to inefficiencies and a spike in NPAs.",
      solution: "Led end-to-end development of an automated B2B payment platform with credit scoring and onboarding modules.",
      role: "Owned product vision, roadmap, stakeholder alignment, and agile delivery over 20+ sprints.",
      tech: ['Jira', 'Mixpanel', 'HubSpot', 'Figma', 'SQL']
    }
  },
  {
    title: 'MyGWU Mobile App',
    category: 'Student Experience Platform',
    shortDesc: 'Collaborated on launch of a university-wide mobile app with schedule syncing, email, and real-time alerts.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'mobile campus app',
    details: {
      problem: "Students lacked a unified digital platform for campus updates, leading to low engagement and missed alerts.",
      solution: "Supported development and launch of MyGWU with integrated scheduling, email, and push notifications.",
      role: "Managed sprint planning, grooming, and stakeholder standups across IT, QA, and design teams.",
      tech: ['Firebase', 'Figma', 'React Native', 'Jira']
    }
  },
  {
    title: 'Dell Sustainability Optimization',
    category: 'Capstone + Lifecycle Analysis',
    shortDesc: 'Built LCA models and optimization tools for Dell’s OptiPlex line to reduce environmental footprint.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'lifecycle analysis',
    details: {
      problem: "Lack of decision support in selecting sustainable components for product manufacturing.",
      solution: "Developed optimization and emissions models using MATLAB and lifecycle datasets to identify eco-friendly configurations.",
      role: "Designed sensitivity models, pitch decks, and impact summaries for internal sustainability reporting.",
      tech: ['MATLAB', 'Excel', 'PowerPoint', 'LCA Tools']
    }
  },
  {
    title: 'Manpower Planning & Labor Mgmt App',
    category: 'Construction Tech',
    shortDesc: 'Digitized labor coordination for 10+ construction sites, reducing idle labor by ~50%.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'construction workforce app',
    details: {
      problem: "Manual tracking of labor across multiple sites led to resource misalignment and high idle time.",
      solution: "Developed a mobile-first workforce tracking solution with real-time dashboards and field feedback loops.",
      role: "Led discovery, user interviews, sprint planning, and delivery with a small Agile team.",
      tech: ['Android', 'Firebase', 'Excel', 'User Surveys']
    }
  },
  {
    title: 'AI Astrology App',
    category: 'AI + Mobile App Innovation',
    shortDesc: 'Built a real-time AI astrology app using Gemini API and Firebase — all in under 60 minutes.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'ai astrology app',
    details: {
      problem: "Most astrology apps are either outdated or too complex for casual, Gen Z users wanting quick daily guidance.",
      solution: "Built an interactive AI-powered astrology app using Firebase and Google Gemini API, offering conversational predictions with modern UI and social features.",
      role: "Conceptualized, built, and launched a working MVP within 1 hour using Firebase for backend and Gemini for AI. Documented the journey in a public case study.",
      tech: ['Firebase', 'Google Cloud', 'Gemini API', 'Tailwind CSS', 'Dark Mode', 'Push Notifications']
    }
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export function Projects() {
  return (
    <section id="projects" className="w-full py-20 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Project Spotlights</h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            A selection of projects that showcase my skills in product strategy, execution, and user-centric design.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <Dialog key={project.title}>
              <DialogTrigger asChild>
                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={cardVariants}
                >
                  <Card className="flex h-full flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                    <CardHeader className="p-0">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        width={600} 
                        height={400} 
                        className="aspect-video w-full object-cover" 
                        data-ai-hint={project.aiHint}
                      />
                    </CardHeader>
                    <CardContent className="flex-1 pt-6">
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className="mt-2">{project.shortDesc}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm font-medium text-accent flex items-center">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </p>
                    </CardFooter>
                  </Card>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl max-h-[90dvh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                  <DialogDescription>{project.category}</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Image src={project.image} alt={project.title} width={800} height={500} className="rounded-lg aspect-video object-cover" data-ai-hint={project.aiHint}/>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Problem</h3>
                      <p>{project.details.problem}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Solution</h3>
                      <p>{project.details.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">My Role</h3>
                      <p>{project.details.role}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground mb-2">Tools & Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.details.tech.map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
                        </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
