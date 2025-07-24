
"use client";

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const timelineData = [
  {
    type: 'education',
    title: 'Master of Science in Engineering Management',
    organization: 'George Washington University',
    period: '08/2023 – 05/2025 (Expected)',
    description: 'Pursuing a Master\'s degree focused on bridging the gap between engineering and management, with coursework in product management, systems engineering, and technology strategy.',
  },
  {
    type: 'work',
    title: 'Product Manager',
    organization: 'Savax Credit Solutions',
    period: '08/2020 – 07/2023',
    description: 'As a Product Manager, I led end-to-end delivery of a B2B Vendor Payment SaaS platform, focusing on authentication and identity core capabilities. I defined the product vision and roadmap while closely collaborating with engineering and data teams to ensure timely and high-quality feature releases. Leveraging SAFe practices and Jira-based sprint management, I achieved 100% sprint delivery and helped reduce NPA by $1.8M annually. My role also involved communicating product strategy to CXOs and enabling a 25% upsell across enterprise accounts.',
  },
   {
    type: 'work',
    title: 'Technical Support Assistant (Part-time)',
    organization: 'George Washington University',
    period: '01/2024 – 05/2025',
    description: 'At GWU, I contributed to the development and operational launch of the MyGWU mobile app, designed to enhance the student experience by integrating schedule syncing, campus alerts, and email. I collaborated cross-functionally with IT, design, and QA teams to manage sprint planning and backlog grooming. Through iterative testing and user feedback, I helped drive key usability improvements and ensured alignment with stakeholder requirements within an Agile environment.',
  },
  {
    type: 'work',
    title: 'Business Analyst / Product owner',
    organization: 'PKA Constructions',
    period: '05/2016 – 07/2020',
    description: 'In this dual role, I spearheaded the development of a real-time labor management system that streamlined manpower planning across 10+ construction sites. By conducting hands-on user research and refining requirements through Agile delivery, I increased system adoption to 90% within the first quarter. I worked closely with development teams to translate business needs into actionable sprint goals, significantly improving coordination and reducing idle time by nearly 50%.',
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
            Experience & Education
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            My professional journey and academic background, highlighting key roles and milestones.
          </p>
        </div>
        <div className="relative mt-12 max-w-3xl mx-auto">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border" aria-hidden="true" />
          <div className="relative flex flex-col gap-12">
            {timelineData.map((item, index) => (
              <motion.div 
                key={index} 
                className="relative pl-12"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="absolute left-0 top-0.5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                   {item.type === 'work' ? <Briefcase className="h-4 w-4" /> : <GraduationCap className="h-5 w-5" />}
                </div>
                <motion.div variants={cardVariants}>
                  <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <CardTitle>{item.title}</CardTitle>
                          <CardDescription>{item.organization}</CardDescription>
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
