
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center"
      >
        <div className="relative mx-auto mb-8 h-32 w-32 md:h-40 md:w-40">
           <Image 
                src="/images/profile-pic.png"
                alt="Chaitanya Aggarwal"
                fill
                className="rounded-full object-cover shadow-2xl"
                priority
            />
        </div>
        <h1 className="text-4xl md:text-6xl font-black font-headline select-none bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
          Chaitanya Aggarwal
        </h1>
        <p className="mt-4 text-md md:text-lg text-muted-foreground">
          Pioneering Digital Frontiers
        </p>
      </motion.div>
      <motion.div 
        className="absolute bottom-1/4 w-48 h-1 bg-primary/20 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.5, delay: 0.8, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  );
}
