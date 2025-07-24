
"use client";

import { motion } from 'framer-motion';
import { Lightbulb, BarChart, Users, Settings, Laptop } from 'lucide-react';

const icons = [
  { icon: Lightbulb, x: -50, y: -80, delay: 0 },
  { icon: BarChart, x: 80, y: -60, delay: 0.5 },
  { icon: Users, x: -70, y: 50, delay: 1 },
  { icon: Settings, x: 60, y: 70, delay: 1.5 },
];

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
    }
  },
  exit: { opacity: 0, scale: 0.5 }
};

const bubbleVariants = {
    initial: {
        y: 0,
        opacity: 0,
        scale: 0
    },
    animate: (delay: number) => ({
        y: -120,
        opacity: [0, 0.7, 0.7, 0],
        scale: [0, 1, 1, 0],
        transition: {
            delay,
            duration: 4,
            repeat: Infinity,
            repeatDelay: (icons.length -1) * 0.5 + 2,
            ease: "easeInOut"
        }
    })
}

export function ProductIdeationAnimation() {
  return (
    <div className="relative flex h-64 w-64 items-center justify-center md:h-80 md:w-80">
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: [0.9, 1, 0.9] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Laptop className="h-48 w-48 text-primary/30 md:h-64 md:w-64" strokeWidth={1} />
      </motion.div>
      <div className="absolute">
        {icons.map((item, i) => (
             <motion.div
                key={i}
                className="absolute"
                style={{
                    originX: '50%',
                    originY: '50%'
                }}
                custom={item.delay}
                variants={bubbleVariants}
                animate="animate"
             >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 p-2 backdrop-blur-sm md:h-14 md:w-14">
                    <item.icon className="h-6 w-6 text-primary md:h-8 md:w-8" />
                </div>
            </motion.div>
        ))}
      </div>
    </div>
  );
}
