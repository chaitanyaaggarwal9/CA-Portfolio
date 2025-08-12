
"use client";

import { motion } from 'framer-motion';
import { Lightbulb, Users, Zap, BarChart4, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillsCategories = [
  {
    title: 'Product Strategy',
    icon: Lightbulb,
    skills: [
      'Product Vision & Roadmapping',
      'Market & Competitor Analysis',
      'Go-to-Market Strategy',
      'Business Case Development',
      'KPI & Metrics Definition',
    ],
  },
  {
    title: 'User Research & Design',
    icon: Users,
    skills: [
      'User Interviews & Surveys',
      'Persona & Journey Mapping',
      'Usability Testing',
      'Wireframing & Prototyping (Figma)',
      'A/B Testing & Validation',
    ],
  },
  {
    title: 'Execution & Agile Mgmt',
    icon: Zap,
    skills: [
      'Scrum & Kanban Leadership',
      'Backlog Grooming & Prioritization',
      'Sprint Planning & Execution',
      'Jira & Confluence Mastery',
      'Stakeholder Communication',
    ],
  },
  {
    title: 'Analytics & Data',
    icon: BarChart4,
    skills: [
      'Funnel & Cohort Analysis',
      'SQL for Product Insights',
      'Amplitude, Mixpanel, GA',
      'Data Visualization (Tableau)',
      'Feature Adoption Tracking',
    ],
  },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut"
      }
    })
};

export function Skills() {
  return (
    <section id="skills" className="w-full py-20 md:py-24 lg:py-32 bg-secondary/50 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">My Skillset</h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            A toolbox of skills honed to transform ideas into impactful products, from initial strategy to market launch and beyond.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {skillsCategories.map((category, index) => (
                <motion.div
                    key={category.title}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={cardVariants}
                >
                    <Card className="h-full flex flex-col bg-background/50 backdrop-blur-sm transition-shadow hover:shadow-lg">
                        <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
                            <category.icon className="h-8 w-8 text-primary" />
                            <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <ul className="space-y-3">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-teal-400 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
