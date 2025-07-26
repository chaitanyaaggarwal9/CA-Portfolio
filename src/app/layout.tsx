import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { FloatingShapes } from '@/components/effects/FloatingShapes';
import { TooltipProvider } from '@/components/ui/tooltip';

export const metadata: Metadata = {
  title: 'Chaitanya Aggarwal | Product Manager',
  description: 'The professional portfolio of Chaitanya Aggarwal, showcasing experience, projects, and skills in product management.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
        <GoogleAnalytics />
      </head>
      <body className="font-body antialiased relative" suppressHydrationWarning >
        <TooltipProvider>
          <FloatingShapes />
          <div className="relative z-10">
            {children}
          </div>
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
