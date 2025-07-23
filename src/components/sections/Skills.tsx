"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const skillsData = [
  {
    name: 'Product Strategy & Vision',
    level: 95,
    description: 'Defining and communicating a clear product vision that aligns with business goals and market needs.'
  },
  {
    name: 'Roadmap & Prioritization',
    level: 90,
    description: 'Creating data-driven roadmaps and using frameworks like RICE to prioritize features effectively.'
  },
  {
    name: 'Agile & Scrum Methodologies',
    level: 95,
    description: 'Leading development cycles using Agile and Scrum, facilitating ceremonies, and ensuring team velocity.'
  },
  {
    name: 'User Research & Analysis',
    level: 85,
    description: 'Conducting user interviews, surveys, and usability tests to gather actionable insights.'
  },
  {
    name: 'Data Analysis & A/B Testing',
    level: 80,
    description: 'Using tools like Amplitude and Google Analytics to analyze user behavior and run experiments.'
  },
  {
    name: 'Cross-functional Leadership',
    level: 90,
    description: 'Collaborating effectively with engineering, design, marketing, and sales to build and launch products.'
  }
];

export function Skills() {
  return (
    <section id="skills" className="w-full py-20 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Skills Matrix</h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            An overview of my core competencies in product management, from strategy to execution.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Card className="flex h-full flex-col text-center">
                <CardHeader>
                  <CardTitle>{skill.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between">
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{skill.description}</p>
                  <Progress value={skill.level} aria-label={`${skill.name} proficiency`} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
