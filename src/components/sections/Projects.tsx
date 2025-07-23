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
    title: 'Project Phoenix',
    category: 'SaaS Platform',
    shortDesc: 'A comprehensive redesign of a B2B analytics dashboard to improve user experience and data visualization.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'dashboard analytics',
    details: {
      problem: "The existing analytics platform was outdated, with a cluttered UI that made it difficult for users to find key insights. User engagement was low, and customer churn was increasing.",
      solution: "Led the end-to-end redesign, starting with extensive user research and competitor analysis. We introduced a modular dashboard, customizable widgets, and advanced data filtering. The new design was clean, intuitive, and mobile-responsive.",
      role: "As the Senior Product Manager, I was responsible for the product vision, roadmap, and backlog. I worked closely with a team of 10 (engineers, designers, and QA) and facilitated all agile ceremonies.",
      tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Figma'],
    }
  },
  {
    title: 'Mobile Growth Initiative',
    category: 'Mobile App',
    shortDesc: 'Launched a new gamification feature to boost daily active users and retention for a consumer-facing mobile app.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'mobile app',
    details: {
      problem: "User retention after the first week was dropping below industry benchmarks. The app lacked features that would encourage daily check-ins and long-term engagement.",
      solution: "I conceptualized and managed the development of a gamification system including daily challenges, points, and leaderboards. This created a compelling reason for users to return daily and interact with the app's core features.",
      role: "I drove the project from ideation to launch, defining feature requirements, writing user stories, and analyzing performance data post-launch. Coordinated with marketing for the launch campaign.",
      tech: ['Swift', 'Kotlin', 'Firebase', 'Amplitude'],
    }
  },
  {
    title: 'API Integration Hub',
    category: 'Developer Tools',
    shortDesc: 'Developed a new platform to allow third-party developers to integrate their services with our core product.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'api code',
    details: {
      problem: "Our ecosystem was closed, limiting growth and partnership opportunities. Customers were requesting integrations with other popular tools they were using, but we had no scalable way to build them.",
      solution: "We built a secure and well-documented API Hub. This included a developer portal with guides, API reference, and sandbox environments. This empowered external developers and created a new revenue stream through premium API access.",
      role: "Product Manager for the developer platform. I was responsible for API design specifications, developer documentation, and creating a pricing strategy for the new service.",
      tech: ['REST API', 'OAuth 2.0', 'Swagger', 'Stripe API'],
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
