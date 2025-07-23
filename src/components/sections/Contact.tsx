"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/actions';
import Link from 'next/link';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long.").max(500, "Message must be less than 500 characters."),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    const result = await submitContactForm(values);

    if (result.success) {
      toast({
        title: 'Message Sent!',
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        title: 'Error',
        description: result.message,
        variant: 'destructive',
      });
    }
  }

  return (
    <section id="contact" className="w-full py-20 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Contact Me</h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Have a project in mind or just want to connect? Feel free to reach out.
          </p>
        </div>

        <motion.div 
            className="mt-12 grid gap-12 max-w-4xl mx-auto md:grid-cols-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Get in Touch</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <div className="space-y-4">
              <a href="mailto:chaitanyaaggarwal9@gmail.com" className="flex items-center gap-4 group">
                <Mail className="h-6 w-6 text-primary" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">chaitanyaaggarwal9@gmail.com</span>
              </a>
              <a href="tel:+12025697467" className="flex items-center gap-4 group">
                <Phone className="h-6 w-6 text-primary" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">+1 (202) 569-7467</span>
              </a>
            </div>
             <div className="space-y-2">
                <h4 className="font-semibold">Follow Me</h4>
                <div className="flex items-center gap-4">
                    <Button asChild variant="outline" size="icon">
                        <Link href="https://www.linkedin.com/in/chaitanyaagg/" target="_blank"><Linkedin className="h-5 w-5"/></Link>
                    </Button>
                     <Button asChild variant="outline" size="icon">
                        <Link href="#" target="_blank"><Github className="h-5 w-5"/></Link>
                    </Button>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
