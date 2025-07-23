"use client";

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const experienceData = [
  {
    role: 'Senior Product Manager',
    company: 'Innovate Inc.',
    period: '2020 - Present',
    description: 'Led a cross-functional team to launch three major product features, resulting in a 25% increase in user engagement. Defined product strategy and roadmap based on market research and user feedback. Managed the entire product lifecycle from concept to launch and beyond.',
  },
  {
    role: 'Product Manager',
    company: 'Tech Solutions LLC',
    period: '2017 - 2020',
    description: 'Managed a suite of B2B SaaS products. Collaborated with engineering, design, and marketing to deliver high-quality products on time. Conducted user interviews and data analysis to inform product decisions, leading to a 15% improvement in customer satisfaction.',
  },
  {
    role: 'Associate Product Manager',
    company: 'Startup Hub',
    period: '2015 - 2017',
    description: 'Supported the product team in developing new features for a mobile application. Wrote user stories, managed the product backlog, and coordinated with the development team during sprints. Gained foundational experience in agile methodologies and product development processes.',
  },
];

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

export function Experience() {
  return (
    <section id="experience" className="w-full py-20 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Professional Experience
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            A timeline of my career, highlighting key roles and responsibilities in the world of product management.
          </p>
        </div>
        <div className="relative mt-12 max-w-3xl mx-auto">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border" aria-hidden="true" />
          <div className="relative flex flex-col gap-12">
            {experienceData.map((item, index) => (
              <motion.div 
                key={index} 
                className="relative pl-12"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="absolute left-0 top-0.5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                  <Briefcase className="h-4 w-4" />
                </div>
                <motion.div variants={cardVariants}>
                  <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <CardTitle>{item.role}</CardTitle>
                          <CardDescription>{item.company}</CardDescription>
                        </div>
                        <div className="text-sm text-muted-foreground flex-shrink-0">{item.period}</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
