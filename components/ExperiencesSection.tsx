'use client';

import { motion } from 'framer-motion';
import { Mountain, Camera, Leaf, Zap } from 'lucide-react';

const iconMap = {
  Mountain: Mountain,
  Camera: Camera,
  Leaf: Leaf,
  Zap: Zap,
};

export default function ExperiencesSection() {
  const experiences = [
    {
      title: 'Mountain Hiking',
      description: 'Guided trails through pristine wilderness',
      icon: 'Mountain' as const,
    },
    {
      title: 'Photography Tours',
      description: 'Capture nature\'s beauty with expert guides',
      icon: 'Camera' as const,
    },
    {
      title: 'Wellness Retreats',
      description: 'Rejuvenate your mind, body, and spirit',
      icon: 'Leaf' as const,
    },
    {
      title: 'Adventure Sports',
      description: 'Thrilling activities for adrenaline seekers',
      icon: 'Zap' as const,
    },
  ];

  return (
    <section id="experiences" className="py-20 px-4 bg-accent/5 border-y border-accent/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Unforgettable Experiences</h2>
          <p className="text-muted-foreground mt-4">Curated activities to make your mountain retreat truly special</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => {
            const IconComponent = iconMap[exp.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="p-8 bg-card border border-border rounded-xl hover:border-accent/50 transition text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{exp.title}</h3>
                <p className="text-muted-foreground text-sm">{exp.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
