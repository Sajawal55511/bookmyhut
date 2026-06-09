'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import Marquee from '@/components/Marquee';
import IntroSection from '@/components/IntroSection';
import HutsGrid from '@/components/HutsGrid';
import ExperiencesSection from '@/components/ExperiencesSection';
import BookingProcessSection from '@/components/BookingProcessSection';
import ReviewsSection from '@/components/ReviewsSection';
import { huts, reviews } from '@/lib/mockData';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <Marquee />
      <IntroSection />
      <HutsGrid huts={huts} title="Featured Huts" showAll={false} />
      <BookingProcessSection />
      <ExperiencesSection />
      <ReviewsSection reviews={reviews} />

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-accent text-background text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready for Your Adventure?</h2>
          <p className="text-lg mb-8 text-background/90">
            Book your luxury mountain hut today and create unforgettable memories in Pakistan's most beautiful locations.
          </p>
          <motion.a
            href="/huts"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-background text-accent font-semibold rounded-lg hover:bg-background/90 transition"
          >
            Explore All Huts
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}
