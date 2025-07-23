"use client";

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BookOpen, BarChart4, LayoutDashboard, Database, MousePointerClick, Route } from 'lucide-react';

const toolboxData = [
  {
    name: 'Jira & Confluence',
    icon: Route,
    description: 'Used to manage 20+ release cycles across multiple products. Customized workflows, created detailed project documentation, and tracked sprint velocity with burndown charts for clear progress reporting.',
  },
  {
    name: 'Figma & Sketch',
    icon: MousePointerClick,
    description: 'Collaborated with design teams to create wireframes, high-fidelity mockups, and interactive prototypes. Provided feedback directly in-platform to streamline the design-to-development handoff.',
  },
  {
    name: 'Amplitude & Mixpanel',
    icon: BarChart4,
    description: 'Defined key product metrics and created dashboards to monitor user engagement, conversion funnels, and feature adoption. Used cohort analysis to understand long-term user behavior.',
  },
  {
    name: 'Google Analytics',
    icon: LayoutDashboard,
    description: 'Analyzed web traffic, user acquisition channels, and on-page behavior to inform marketing strategies and identify areas for UX improvement on marketing sites and landing pages.',
  },
  {
    name: 'Aha! & Productboard',
    icon: BookOpen,
    description: 'Managed idea backlogs, built visual product roadmaps, and linked feature ideas directly to customer feedback and strategic goals to ensure alignment across the organization.',
  },
  {
    name: 'SQL & Tableau',
    icon: Database,
    description: 'Wrote custom SQL queries to extract raw data from our data warehouse. Built custom dashboards in Tableau to visualize complex data sets for stakeholder presentations and strategic reviews.',
  },
];

export function Toolbox() {
  return (
    <section id="toolbox" className="w-full py-20 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">PM Toolbox</h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            The tools and technologies I use to build, manage, and grow products effectively.
          </p>
        </div>
        <motion.div
          className="mt-12 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: 'easeOut',
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <Accordion type="single" collapsible className="w-full">
            {toolboxData.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="transition-shadow duration-300 hover:shadow-lg rounded-lg border border-border bg-white/90 dark:bg-zinc-900/40 backdrop-blur"
                  >
                    <AccordionTrigger className="text-lg font-medium flex items-center gap-3 hover:no-underline py-4 px-4">
                      <Icon className="w-5 h-5 text-accent" />
                      {tool.name}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground px-4 pb-4">
                      {tool.description}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
