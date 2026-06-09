'use client';

import { motion } from 'framer-motion';

export default function IntroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Experience Luxury in Nature's Embrace
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-muted-foreground font-light leading-relaxed">
            BookMyHut brings you handpicked, luxurious mountain huts that blend modern comfort with natural beauty. Each property
            is carefully curated to provide an unforgettable escape from the hustle and bustle of city life.
          </motion.p>

          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { title: 'Premium Locations', desc: 'Strategically positioned in the most scenic mountain ranges of Pakistan' },
              { title: 'Luxury Amenities', desc: 'World-class facilities and modern comforts in every property' },
              { title: '24/7 Support', desc: 'Dedicated customer service to ensure your perfect stay' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-6 bg-accent/5 border border-accent/20 rounded-lg hover:border-accent/40 transition"
              >
                <h3 className="font-semibold text-accent mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
