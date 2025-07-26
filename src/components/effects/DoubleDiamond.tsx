
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface DiamondItem {
  title: string;
  description: string;
  skills: string[];
  color: string;
}

interface DoubleDiamondProps {
  items: DiamondItem[];
}

export function DoubleDiamond({ items }: DoubleDiamondProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const diamondPoints = [
    "50 0, 100 50, 50 100, 0 50", // Left Diamond (Discover & Define)
    "50 0, 100 50, 50 100, 0 50"  // Right Diamond (Develop & Deliver)
  ];

  const quadrantPaths = [
    "M 50 0 L 0 50 L 50 50 Z",   // Q1: Discover
    "M 0 50 L 50 100 L 50 50 Z", // Q2: Define
    "M 50 0 L 100 50 L 50 50 Z", // Q3: Develop
    "M 100 50 L 50 100 L 50 50 Z" // Q4: Deliver
  ];
  
  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
      
      {/* Left Column: Diamond Visualization */}
      <div className="relative w-full max-w-sm mx-auto lg:max-w-none lg:col-span-3 h-80 lg:h-96 flex items-center justify-center">
        <div className="absolute w-full h-full" onMouseLeave={() => setActiveIndex(null)}>
          <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0, 0)">
              {/* Left Diamond */}
              <polygon points={diamondPoints[0]} className="fill-background/50 stroke-border" strokeWidth="1" />
              {/* Right Diamond */}
              <polygon points={diamondPoints[1]} transform="translate(100, 0)" className="fill-background/50 stroke-border" strokeWidth="1" />

              {/* Quadrant Hotspots */}
              <g>
                {/* Discover */}
                <motion.path d={quadrantPaths[0]} onMouseEnter={() => setActiveIndex(0)} className={cn("cursor-pointer transition-opacity", activeIndex === 0 || activeIndex === null ? 'opacity-100' : 'opacity-40')} style={{ fill: items[0].color }} />
                {/* Define */}
                <motion.path d={quadrantPaths[1]} onMouseEnter={() => setActiveIndex(1)} className={cn("cursor-pointer transition-opacity", activeIndex === 1 || activeIndex === null ? 'opacity-100' : 'opacity-40')} style={{ fill: items[1].color }} />
              </g>
              <g transform="translate(100, 0)">
                {/* Develop */}
                <motion.path d={quadrantPaths[2]} onMouseEnter={() => setActiveIndex(2)} className={cn("cursor-pointer transition-opacity", activeIndex === 2 || activeIndex === null ? 'opacity-100' : 'opacity-40')} style={{ fill: items[2].color }} />
                {/* Deliver */}
                <motion.path d={quadrantPaths[3]} onMouseEnter={() => setActiveIndex(3)} className={cn("cursor-pointer transition-opacity", activeIndex === 3 || activeIndex === null ? 'opacity-100' : 'opacity-40')} style={{ fill: items[3].color }} />
              </g>

              {/* Text Labels */}
              <text x="25" y="53" textAnchor="middle" className="text-[8px] font-bold fill-primary-foreground pointer-events-none">{items[0].title}</text>
              <text x="25" y="63" textAnchor="middle" className="text-[8px] font-bold fill-primary-foreground pointer-events-none">{items[1].title}</text>
              <text x="175" y="53" textAnchor="middle" className="text-[8px] font-bold fill-primary-foreground pointer-events-none">{items[2].title}</text>
              <text x="175" y="63" textAnchor="middle" className="text-[8px] font-bold fill-primary-foreground pointer-events-none">{items[3].title}</text>
            </g>
          </svg>
        </div>
      </div>
      
      {/* Right Column: Details */}
      <div className="relative lg:col-span-2 min-h-[20rem] p-6 bg-background/50 border border-border rounded-lg shadow-inner">
        <AnimatePresence mode="wait">
          {activeItem ? (
            <motion.div
              key={activeItem.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold font-headline mb-2" style={{ color: activeItem.color }}>{activeItem.title}</h3>
              <p className="text-muted-foreground mb-6">{activeItem.description}</p>
              <div className="flex flex-wrap gap-2">
                {activeItem.skills.map(skill => (
                  <Badge key={skill} variant="secondary" style={{
                    backgroundColor: `${activeItem.color}20`, // 20 is hex for 12.5% opacity
                    borderColor: `${activeItem.color}80`, // 80 is hex for 50% opacity
                    color: activeItem.color
                  }}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center h-full text-center"
            >
              <p className="text-muted-foreground">Hover over a quadrant to see the skills for each phase.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
