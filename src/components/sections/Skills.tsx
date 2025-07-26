
"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, Rocket, Zap, TrendingUp, Lightbulb, Users, ShieldCheck, Milestone } from 'lucide-react';

const skillsData = {
  discovery: [
    {
      name: 'User Research & Design',
      icon: Users,
      description: 'Conducting interviews, surveys, and usability testing to inform UI/UX design and feature prioritization.'
    },
    {
      name: 'Market Analysis',
      icon: Eye,
      description: 'Identifying market opportunities, competitive landscapes, and customer pain points to define product direction.'
    },
  ],
  strategy: [
    {
      name: 'Product Roadmapping',
      icon: Milestone,
      description: 'Developing and maintaining product roadmaps, defining MVP, and planning feature releases in line with business goals.'
    },
    {
      name: 'Data-Driven Decisions',
      icon: Rocket,
      description: 'Using SQL, Google Data Studio, and analytics to drive prioritization, KPI modeling, and performance measurement.'
    },
  ],
  delivery: [
    {
      name: 'Agile & Scrum Leadership',
      icon: Zap,
      description: 'Leading 20+ sprints, managing backlogs, sprint planning, and retrospectives using Jira and Confluence.'
    },
    {
      name: 'Cross-functional Collaboration',
      icon: Users,
      description: 'Collaborating across engineering, design, QA, and business stakeholders to ship scalable products effectively.'
    },
  ],
  growth: [
    {
      name: 'A/B Testing & Optimization',
      icon: TrendingUp,
      description: 'Designing and analyzing A/B tests to optimize funnels, improve user engagement, and drive growth.'
    },
    {
      name: 'Feature Adoption & Feedback Loops',
      icon: Lightbulb,
      description: 'Monitoring feature adoption, gathering user feedback post-launch, and iterating to enhance user satisfaction.'
    },
  ]
};

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.5 }
  }),
};

export function Skills() {
  return (
    <section id="skills" className="w-full py-20 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">A Framework for Action</h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            My skills are grounded in a structured product lifecycle approach, ensuring ideas are not just born, but are strategically developed, delivered, and scaled.
          </p>
        </div>

        <motion.div
          className="mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Tabs defaultValue="discovery" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
              <TabsTrigger value="discovery" className="py-2"><Eye className="mr-2 h-4 w-4" />Discovery</TabsTrigger>
              <TabsTrigger value="strategy" className="py-2"><Rocket className="mr-2 h-4 w-4" />Strategy</TabsTrigger>
              <TabsTrigger value="delivery" className="py-2"><Zap className="mr-2 h-4 w-4" />Delivery</TabsTrigger>
              <TabsTrigger value="growth" className="py-2"><TrendingUp className="mr-2 h-4 w-4" />Growth</TabsTrigger>
            </TabsList>
            
            <TabsContent value="discovery">
              <div className="grid gap-6 md:grid-cols-2 mt-6">
                {skillsData.discovery.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    custom={index}
                    variants={fadeInAnimation}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-background/60">
                      <CardHeader className="flex flex-row items-center gap-4">
                        <skill.icon className="h-8 w-8 text-primary" />
                        <CardTitle>{skill.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{skill.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="strategy">
               <div className="grid gap-6 md:grid-cols-2 mt-6">
                {skillsData.strategy.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    custom={index}
                    variants={fadeInAnimation}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-background/60">
                      <CardHeader className="flex flex-row items-center gap-4">
                        <skill.icon className="h-8 w-8 text-primary" />
                        <CardTitle>{skill.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{skill.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="delivery">
               <div className="grid gap-6 md:grid-cols-2 mt-6">
                {skillsData.delivery.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    custom={index}
                    variants={fadeInAnimation}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-background/60">
                      <CardHeader className="flex flex-row items-center gap-4">
                        <skill.icon className="h-8 w-8 text-primary" />
                        <CardTitle>{skill.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{skill.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="growth">
               <div className="grid gap-6 md:grid-cols-2 mt-6">
                {skillsData.growth.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    custom={index}
                    variants={fadeInAnimation}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-background/60">
                      <CardHeader className="flex flex-row items-center gap-4">
                        <skill.icon className="h-8 w-8 text-primary" />
                        <CardTitle>{skill.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{skill.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
