"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const SHAPE_COUNT = 20;
const SHAPE_TYPES = ['circle', 'square', 'triangle'];
const COLORS = [
  'hsl(var(--primary) / 0.1)',
  'hsl(var(--primary) / 0.2)',
  'hsl(var(--accent) / 0.2)',
  'hsl(var(--accent) / 0.3)',
];

interface Shape {
  id: number;
  type: string;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  color: string;
}

const Triangle = ({ color, size }: { color: string, size: number }) => (
  <motion.div
    style={{
      width: 0,
      height: 0,
      borderLeft: `${size / 2}px solid transparent`,
      borderRight: `${size / 2}px solid transparent`,
      borderBottom: `${size}px solid ${color}`,
    }}
  />
);

export function FloatingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const generateShapes = () => {
      const newShapes = Array.from({ length: SHAPE_COUNT }).map((_, i) => ({
        id: i,
        type: SHAPE_TYPES[Math.floor(Math.random() * SHAPE_TYPES.length)],
        size: Math.random() * 60 + 20,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
      setShapes(newShapes);
    };

    generateShapes();
    const interval = setInterval(generateShapes, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          initial={{ top: `${shape.y}%`, left: `${shape.x}%`, opacity: 0, y: 0 }}
          animate={{ y: [0, -100, 0, 100, 0], opacity: [0, 1, 0] }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
        >
          {shape.type === 'circle' && (
            <div
              className="rounded-full"
              style={{
                width: shape.size,
                height: shape.size,
                backgroundColor: shape.color,
              }}
            />
          )}
          {shape.type === 'square' && (
            <div
              style={{
                width: shape.size,
                height: shape.size,
                backgroundColor: shape.color,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          )}
          {shape.type === 'triangle' && (
             <div style={{ transform: `rotate(${Math.random() * 360}deg)` }}>
                <Triangle color={shape.color} size={shape.size} />
             </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
