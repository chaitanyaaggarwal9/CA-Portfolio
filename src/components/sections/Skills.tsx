"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useState } from 'react';

const skillsData = [
  {
    name: 'Product Management & Strategy',
    level: 95,
    description: 'Expertise in product discovery, roadmap planning, MVP definition, and agile execution across diverse domains like fintech and education.'
  },
  {
    name: 'Agile Delivery & Scrum',
    level: 90,
    description: 'Led 20+ sprints, managed backlog grooming, sprint planning, retrospectives, and cross-functional standups using Jira and Confluence.'
  },
  {
    name: 'Data-Driven Decision Making',
    level: 85,
    description: 'Used SQL, Google Data Studio, and analytics tools to drive prioritization, KPI modeling, and performance measurement.'
  },
  {
    name: 'User Research & Product Design',
    level: 85,
    description: 'Conducted interviews, surveys, and usability testing to inform UI/UX design and feature prioritization in collaboration with Figma and field teams.'
  },
  {
    name: 'Cross-functional Leadership',
    level: 90,
    description: 'Collaborated across engineering, design, QA, and business stakeholders to ship scalable products and improve time-to-resolution.'
  },
  {
    name: 'Technical Tooling & Integration',
    level: 80,
    description: 'Hands-on with Firebase, REST APIs, mobile app frameworks, Postman, SQL, and LCA modeling tools for sustainable development.'
  }
];

export function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="w-full py-20 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Skills Matrix</h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            A tailored overview of my product management capabilities—from discovery and delivery to stakeholder leadership and data fluency.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, rotate: -1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card
                className={`flex h-full flex-col text-center transition duration-300 ease-in-out shadow-md hover:shadow-xl rounded-2xl ${
                  hoveredIndex === index ? 'bg-primary/10' : 'bg-white/70 dark:bg-zinc-900/30'
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold tracking-tight text-foreground">
                    {skill.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between px-4 pb-6">
                  <motion.p
                    className="text-sm text-muted-foreground mb-4 flex-grow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {skill.description}
                  </motion.p>
                  <Progress
                    value={skill.level}
                    aria-label={`${skill.name} proficiency`}
                    className="h-2 bg-muted-foreground/20"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}