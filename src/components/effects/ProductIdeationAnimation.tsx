
"use client";

import { motion } from 'framer-motion';
import { User, Rocket, Lightbulb, Hand } from 'lucide-react';

const orbitingIcons = [
  { icon: Rocket, angle: 45, distance: 100, duration: 8, delay: 0 },
  { icon: Lightbulb, angle: 225, distance: 120, duration: 10, delay: 2 },
];

export function ProductIdeationAnimation() {
  return (
    <div className="relative flex h-64 w-64 items-center justify-center md:h-80 md:w-80">
      {/* Central Floating User */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="z-10"
      >
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 p-2 backdrop-blur-sm md:h-32 md:w-32">
          <User className="h-16 w-16 text-primary/80 md:h-20 md:w-20" strokeWidth={1.5} />
        </div>
      </motion.div>
      
      {/* Orbiting Icons */}
      <div className="absolute inset-0">
        {orbitingIcons.map((item, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{
                originX: '0%',
                originY: '0%'
            }}
            animate={{ rotate: 360 }}
            transition={{
                duration: item.duration,
                repeat: Infinity,
                ease: 'linear',
                delay: item.delay,
            }}
          >
            <div 
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 p-2 backdrop-blur-sm md:h-14 md:w-14" 
              style={{ transform: `translateX(${item.distance}px) rotate(${-item.angle}deg)` }}
            >
              <item.icon className="h-6 w-6 text-primary md:h-8 md:w-8" />
            </div>
          </motion.div>
        ))}

        {/* Waving Hand */}
        <motion.div
          className="absolute"
          style={{ top: '20%', right: '15%' }}
          animate={{
            opacity: [0, 1, 1, 1, 0],
            rotate: [0, -15, 15, -15, 0],
            scale: [0.8, 1, 1, 1, 0.8],
          }}
          transition={{
            duration: 3,
            delay: 1,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeInOut",
          }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 p-2 backdrop-blur-sm md:h-14 md:w-14">
            <Hand className="h-6 w-6 text-primary md:h-8 md:w-8" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
