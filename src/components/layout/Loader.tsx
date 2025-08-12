
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

// Variant for the main container to orchestrate staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the animation of child elements
    },
  },
};

// Variant for individual elements like text and image
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring', // Use a spring physics for a more natural bounce
      damping: 10,
      stiffness: 100,
    },
  },
};

// Variants for the pulsating loading dots
const dotVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};

const dotTransition = {
  duration: 0.6,
  repeat: Infinity, // Repeat the animation forever
  ease: "easeInOut",
  repeatType: "reverse",
};

export function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-950 text-white p-4 overflow-hidden">
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {/* Animated Profile Picture with a subtle zoom effect */}
        <motion.div
          variants={itemVariants}
          className="relative mx-auto mb-8 h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden"
        >
          {/* A glowing ring effect for extra polish */}
          <motion.div
            className="absolute inset-0 bg-white opacity-20 rounded-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <Image 
            src="/images/profile-pic.png"
            alt="Chaitanya Aggarwal"
            fill
            className="rounded-full object-cover shadow-2xl z-10"
            priority
          />
        </motion.div>

        {/* Animated Name */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-black font-headline select-none bg-gradient-to-r from-teal-400 via-sky-500 to-indigo-500 bg-clip-text text-transparent"
        >
          Chaitanya Aggarwal
        </motion.h1>

        {/* Animated Tagline */}
        <motion.p 
          variants={itemVariants}
          className="mt-4 text-md md:text-lg text-slate-300"
        >
          Pioneering Digital Frontiers
        </motion.p>
      </motion.div>

      {/* A modern loading indicator with three pulsing dots */}
      <motion.div
        className="absolute bottom-12 flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={i}
            className="block w-3 h-3 rounded-full bg-sky-400"
            variants={dotVariants}
            initial="start"
            animate="end"
            transition={{ ...dotTransition, delay: i * 0.2 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
