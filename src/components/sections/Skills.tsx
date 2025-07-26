
"use client";

import { motion } from 'framer-motion';
import { Eye, Rocket, Zap, TrendingUp, Users } from 'lucide-react';
import { SkillsOrbit } from '@/components/effects/SkillsOrbit';

const skillsData = [
    {
      icon: Eye,
      title: 'Discovery & Research',
      skills: ['User Interviews', 'Market Analysis', 'Competitor Research', 'Usability Testing'],
    },
    {
      icon: Rocket,
      title: 'Strategy & Roadmapping',
      skills: ['Product Vision', 'KPI Setting', 'MVP Definition', 'Data-Driven Prioritization'],
    },
    {
      icon: Zap,
      title: 'Agile Delivery',
      skills: ['Scrum Leadership', 'Backlog Grooming', 'Sprint Planning', 'Jira & Confluence'],
    },
    {
      icon: TrendingUp,
      title: 'Growth & Optimization',
      skills: ['A/B Testing', 'Funnel Analysis', 'Feature Adoption Tracking', 'User Feedback Loops'],
    },
];

export function Skills() {
  return (
    <section id="skills" className="w-full py-20 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">User-Centric Skillset</h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            My skills orbit around a core principle: delivering value to the user. I apply a comprehensive framework to navigate the entire product lifecycle, from initial concept to scalable growth.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <SkillsOrbit items={skillsData} />
            </motion.div>
            <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {skillsData.map((category, index) => (
                    <div key={index} className="flex gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <category.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-primary">{category.title}</h3>
                            <p className="mt-1 text-muted-foreground">
                                {category.skills.join(' • ')}
                            </p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
}
