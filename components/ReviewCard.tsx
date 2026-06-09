'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface ReviewProps {
  author: string;
  rating: number;
  text: string;
  date: string;
}

export default function ReviewCard({ author, rating, text, date }: ReviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 bg-card border border-border rounded-xl"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-xs text-muted-foreground">{new Date(date).toLocaleDateString()}</p>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
          ))}
        </div>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
    </motion.div>
  );
}
