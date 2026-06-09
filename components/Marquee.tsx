'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Marquee() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  const text = 'LUXURY MOUNTAIN RETREATS • UNFORGETTABLE EXPERIENCES • BOOK YOUR ESCAPE TODAY • ';

  return (
    <div className="w-full bg-accent text-background py-3 overflow-hidden">
      <motion.div
        initial={{ x: '100%' }}
        animate={isAnimating ? { x: '-100%' } : {}}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="whitespace-nowrap text-sm font-semibold tracking-wider"
      >
        {text}
        {text}
        {text}
      </motion.div>
    </div>
  );
}
