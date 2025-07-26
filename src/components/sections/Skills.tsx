
"use client";

import { motion } from 'framer-motion';
import { DoubleDiamond } from '@/components/effects/DoubleDiamond';

const skillsData = [
  {
    title: 'Discover',
    description: 'Understanding the problem space through research and empathy.',
    skills: ['User Interviews', 'Market Analysis', 'Competitor Research', 'Usability Testing', 'Persona Development'],
    color: 'hsl(var(--chart-1))',
  },
  {
    title: 'Define',
    description: 'Synthesizing insights to frame the right problems and opportunities.',
    skills: ['Product Vision', 'KPI Setting', 'MVP Definition', 'Data-Driven Prioritization', 'Roadmapping'],
    color: 'hsl(var(--chart-2))',
  },
  {
    title: 'Develop',
    description: 'Building solutions through iterative and collaborative processes.',
    skills: ['Scrum Leadership', 'Backlog Grooming', 'Sprint Planning', 'Jira & Confluence', 'Stakeholder Comms'],
    color: 'hsl(var(--chart-3))',
  },
  {
    title: 'Deliver',
    description: 'Launching, measuring, and optimizing the product in the market.',
    skills: ['A/B Testing', 'Funnel Analysis', 'Feature Adoption Tracking', 'User Feedback Loops', 'Go-to-Market Strategy'],
    color: 'hsl(var(--chart-4))',
  },
];


export function Skills() {
  return (
    <section id="skills" className="w-full py-20 md:py-24 lg:py-32 bg-secondary/50 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">A Framework for Innovation</h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            I approach product management with a structured, user-centric methodology inspired by the Double Diamond framework. This ensures we solve the right problems and build effective solutions.
          </p>
        </div>

        <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
          <DoubleDiamond items={skillsData} />
        </motion.div>
      </div>
    </section>
  );
}
