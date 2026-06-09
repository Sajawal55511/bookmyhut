'use client';

import { motion } from 'framer-motion';
import { BookOpen, MapPin, CreditCard, CheckCircle } from 'lucide-react';

export default function BookingProcessSection() {
  const steps = [
    {
      icon: BookOpen,
      title: 'Browse & Select',
      description: 'Explore our curated collection of luxury mountain huts',
    },
    {
      icon: MapPin,
      title: 'Choose Your Dates',
      description: 'Pick your perfect dates and number of guests',
    },
    {
      icon: CreditCard,
      title: 'Secure Payment',
      description: 'Fast and secure payment with JazzCash or EasyPaisa',
    },
    {
      icon: CheckCircle,
      title: 'Confirm Booking',
      description: 'Receive confirmation and start your adventure',
    },
  ];

  return (
    <section className="py-20 px-4 bg-accent/5 border-y border-accent/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">How It Works</h2>
          <p className="text-muted-foreground mt-4">Book your perfect mountain escape in just 4 simple steps</p>
        </motion.div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-background border-4 border-accent rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-10 h-10 text-accent" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent text-background rounded-full flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
