"use server";

import * as z from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long.").max(500, "Message must be less than 500 characters."),
});

export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
  const validatedFields = contactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    // Construct a more detailed error message
    const errorMessages = validatedFields.error.issues.map(issue => issue.message).join(' ');
    return { success: false, message: `Invalid form data: ${errorMessages}` };
  }
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log it and simulate a success response.
  console.log("Form submitted successfully:", validatedFields.data);

  return { success: true, message: "Thank you for your message! I'll get back to you soon." };
}
