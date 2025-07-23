"use client";

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const toolboxData = [
  {
    name: 'Jira & Confluence',
    description: 'Used to manage 20+ release cycles across multiple products. Customized workflows, created detailed project documentation, and tracked sprint velocity with burndown charts for clear progress reporting.',
  },
  {
    name: 'Figma & Sketch',
    description: 'Collaborated with design teams to create wireframes, high-fidelity mockups, and interactive prototypes. Provided feedback directly in-platform to streamline the design-to-development handoff.',
  },
  {
    name: 'Amplitude & Mixpanel',
    description: 'Defined key product metrics and created dashboards to monitor user engagement, conversion funnels, and feature adoption. Used cohort analysis to understand long-term user behavior.',
  },
  {
    name: 'Google Analytics',
    description: 'Analyzed web traffic, user acquisition channels, and on-page behavior to inform marketing strategies and identify areas for UX improvement on marketing sites and landing pages.',
  },
  {
    name: 'Aha! & Productboard',
    description: 'Managed idea backlogs, built visual product roadmaps, and linked feature ideas directly to customer feedback and strategic goals to ensure alignment across the organization.',
  },
  {
    name: 'SQL & Tableau',
    description: 'Wrote custom SQL queries to extract raw data from our data warehouse. Built custom dashboards in Tableau to visualize complex data sets for stakeholder presentations and strategic reviews.',
  },
];

export function Toolbox() {
  return (
    <section id="toolbox" className="w-full py-20 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">PM Toolbox</h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            The tools and technologies I use to build, manage, and grow products effectively.
          </p>
        </div>
        <motion.div
          className="mt-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {toolboxData.map((tool, index) => (
              <AccordionItem key={tool.name} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium hover:no-underline">
                  {tool.name}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {tool.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
