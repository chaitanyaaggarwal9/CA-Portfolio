
"use client";

import { motion } from 'framer-motion';

export function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="relative font-black text-6xl md:text-8xl font-headline select-none">
          <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent animate-pulse">
            CA
          </span>
          <span className="text-primary/20">CA</span>
        </div>
      </motion.div>
    </div>
  );
}
