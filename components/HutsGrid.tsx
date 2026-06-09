'use client';

import { motion } from 'framer-motion';
import HutCard from './HutCard';
import { Hut } from '@/lib/types';

interface HutsGridProps {
  huts: Hut[];
  title?: string;
  showAll?: boolean;
}

export default function HutsGrid({ huts, title, showAll = false }: HutsGridProps) {
  const displayedHuts = showAll ? huts : huts.filter((hut) => hut.featured).slice(0, 6);

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">{title}</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Handpicked luxury huts in the most scenic locations
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedHuts.map((hut, index) => (
            <HutCard key={hut.id} hut={hut} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
