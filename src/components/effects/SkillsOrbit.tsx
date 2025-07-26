
"use client";

import { motion } from 'framer-motion';
import { LucideIcon, Users } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface OrbitingItem {
  icon: LucideIcon;
  title: string;
}

interface SkillsOrbitProps {
  items: OrbitingItem[];
}

export function SkillsOrbit({ items }: SkillsOrbitProps) {
  const DISTANCE = 120;

  return (
    <div className="relative flex h-80 w-80 items-center justify-center">
      {/* Central Floating User Icon */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="z-10"
      >
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary/10 p-2 backdrop-blur-sm">
          <Users className="h-20 w-20 text-primary/80" strokeWidth={1.2} />
        </div>
      </motion.div>

      {/* Orbiting Skill Icons */}
      <div className="absolute inset-0">
        {items.map((item, i) => {
          const angle = (i / items.length) * 360;
          const duration = 10 + i * 2; // Vary duration for a more organic feel

          return (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2"
              style={{
                originX: '0%',
                originY: '0%',
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.2, zIndex: 50 }}
                    className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-background/50 p-3 shadow-md backdrop-blur-md"
                    style={{
                      transform: `translateX(${DISTANCE}px) rotate(${-angle}deg)`,
                    }}
                  >
                    <item.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.title}</p>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
