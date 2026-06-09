'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen pt-16 bg-background overflow-hidden">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80)',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-2xl"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-white leading-tight">
            Book Your Perfect Mountain Escape
          </h1>
          <p className="text-lg sm:text-xl text-white/90 font-light">
            Discover luxurious huts nestled in Pakistan's most breathtaking locations
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition inline-block"
          >
            Explore Huts
          </motion.button>
        </motion.div>

        {/* Instagram Reel Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-8 right-4 sm:right-8 w-20 h-32 sm:w-24 sm:h-40 bg-black/30 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center"
        >
          <div className="text-white/60 text-xs text-center px-2">Instagram Reel</div>
        </motion.div>
      </div>
    </section>
  );
}
