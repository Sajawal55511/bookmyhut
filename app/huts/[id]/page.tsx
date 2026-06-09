'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { huts } from '@/lib/mockData';
import HutBookingForm from '@/components/HutBookingForm';
import { MapPin, Users, Star } from 'lucide-react';

interface HutDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function HutDetailPage({ params }: HutDetailPageProps) {
  const { id } = await params;
  const hut = huts.find((h) => h.id === id);

  if (!hut) {
    notFound();
  }

  return (
    <div className="w-full pt-24">
      {/* Image Gallery */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full h-96 md:h-[500px] relative"
      >
        <Image
          src={hut.images[0]}
          alt={hut.name}
          fill
          className="object-cover"
          priority
        />
      </motion.section>

      {/* Content */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2 space-y-8">
            {/* Title and Meta */}
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">{hut.name}</h1>
              <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>{hut.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-accent text-accent" />
                  <span>
                    {hut.rating} ({hut.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  <span>Up to {hut.capacity} guests</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">About this hut</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{hut.description}</p>
            </div>

            {/* Image Gallery Grid */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Photo Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hut.images.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="relative h-64 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`${hut.name} - ${i + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {hut.amenities.map((amenity, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 p-3 bg-accent/5 border border-accent/20 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground">{amenity}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Info Boxes */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-4 bg-accent/5 border border-accent/20 rounded-lg text-center"
              >
                <p className="text-sm text-muted-foreground mb-1">Guest Capacity</p>
                <p className="text-2xl font-bold text-accent">{hut.capacity}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="p-4 bg-accent/5 border border-accent/20 rounded-lg text-center"
              >
                <p className="text-sm text-muted-foreground mb-1">Rating</p>
                <p className="text-2xl font-bold text-accent">{hut.rating}★</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="p-4 bg-accent/5 border border-accent/20 rounded-lg text-center"
              >
                <p className="text-sm text-muted-foreground mb-1">Per Night</p>
                <p className="text-2xl font-bold text-accent">₨{hut.price.toLocaleString()}</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-1">
            <HutBookingForm hutId={hut.id} hutName={hut.name} price={hut.price} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
