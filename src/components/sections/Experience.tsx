
"use client";

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Award } from 'lucide-react';

const experienceData = [
    {
        title: 'Master of Science in Engineering Management',
        organization: 'George Washington University',
        period: '08/2023 – 05/2025',
        description: 'Completed Master\'s degree focused on bridging the gap between engineering and management, with coursework in product management, systems engineering, and technology strategy.',
      },
      {
        title: 'Technical Support Assistant (Part-time)',
        organization: 'George Washington University',
        period: '01/2024 – 05/2025',
        description: 'At GWU, I contributed to the development and operational launch of the MyGWU mobile app, designed to enhance the student experience by integrating schedule syncing, campus alerts, and email. I collaborated cross-functionally with IT, design, and QA teams to manage sprint planning and backlog grooming. Through iterative testing and user feedback, I helped drive key usability improvements and ensured alignment with stakeholder requirements within an Agile environment.',
      },
      {
        title: 'Product Manager',
        organization: 'Savax Credit Solutions',
        period: '08/2020 – 07/2023',
        description: 'As a Product Manager, I led end-to-end delivery of a B2B Vendor Payment SaaS platform, focusing on authentication and identity core capabilities. I defined the product vision and roadmap while closely collaborating with engineering and data teams to ensure timely and high-quality feature releases. Leveraging SAFe practices and Jira-based sprint management, I achieved 100% sprint delivery and helped reduce NPA by $1.8M annually. My role also involved communicating product strategy to CXOs and enabling a 25% upsell across enterprise accounts.',
      },
      {
        title: 'Business Analyst / Product owner',
        organization: 'PKA Constructions',
        period: '05/2016 – 07/2020',
        description: 'In this dual role, I spearheaded the development of a real-time labor management system that streamlined manpower planning across 10+ construction sites. By conducting hands-on user research and refining requirements through Agile delivery, I increased system adoption to 90% within the first quarter. I worked closely with development teams to translate business needs into actionable sprint goals, significantly improving coordination and reducing idle time by nearly 50%.',
      },
];

const certificationsData = [
  { name: 'Certified Scrum Product Owner (CSPO®)', link: 'https://drive.google.com/file/d/1YAOFXWSCwCaqxuquLP6Hp19-TX7ixvvV/view?usp=sharing' },
  { name: 'Google Project Management', link: 'https://www.credly.com/badges/0b4ddcb3-d102-4323-91a3-7434bcc868e3/linked_in_profile' },
  { name: 'Product Marketing Bootcamp', link: 'https://drive.google.com/file/d/1FjoiWwJ7DGaKh_axvnZpYU2CcPzuOZyx/view' },
  { name: 'Google Data Analytics', link: 'https://www.credly.com/badges/a4b21e6a-a1a0-4309-9f7e-013075b89fdd/linked_in_profile' },
  { name: 'Six Sigma Yellow Belt Specialization', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/TUP2FNSTJCH5' },
  { name: 'Supply Chain Management Specialization', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/AWNXCKNVW8KB' },
  { name: 'Oracle AI Vector Certified Professional', link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=1D2615696DB187E69EC91E42879371D969AD814468AC2F81DC459F0F3F3FF429' },
  { name: 'Oracle Fusion Cloud Applications', link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=F52F5645951FA5911D1E1ACE06EB338DF9350C73B7FD854F22E1EF4B0F2B02BD' },
];

export function Experience() {
  return (
    <section id="experience" className="w-full py-20 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            My Journey
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            A timeline of my professional experience and academic background.
          </p>
        </div>

        <motion.div 
            className="mt-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="border border-border rounded-lg bg-background/50 backdrop-blur-sm transition-shadow hover:shadow-lg"
                >
                  <AccordionTrigger className="p-6 text-left hover:no-underline">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-2">
                        <div className="flex-grow">
                            <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.organization}</p>
                        </div>
                        <p className="text-xs text-muted-foreground flex-shrink-0 sm:ml-4">{item.period}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground text-justify">
                      {item.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
            <h3 className="text-2xl font-bold tracking-tight text-center sm:text-3xl font-headline mb-8">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {certificationsData.map((cert, index) => (
                <a 
                  key={index} 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 group"
                >
                  <Award className="h-5 w-5 text-primary/80 flex-shrink-0" />
                  <span className="text-muted-foreground group-hover:text-primary transition-colors duration-200">
                    {cert.name}
                  </span>
                </a>
              ))}
            </div>
        </motion.div>

      </div>
    </section>
  );
}
