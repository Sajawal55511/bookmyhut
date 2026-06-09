'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Users } from 'lucide-react';
import { Hut } from '@/lib/types';

interface HutCardProps {
  hut: Hut;
  index?: number;
}

export default function HutCard({ hut, index = 0 }: HutCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group rounded-xl overflow-hidden bg-card border border-border hover:border-accent/50 transition-all duration-300"
    >
      {/* Image Container */}
      <Link href={`/huts/${hut.id}`}>
        <div className="relative w-full h-64 overflow-hidden bg-muted">
          <Image
            src={hut.image}
            alt={hut.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {hut.featured && (
            <div className="absolute top-4 right-4 bg-accent text-background px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <Link href={`/huts/${hut.id}`}>
            <h3 className="text-lg font-semibold text-foreground hover:text-accent transition line-clamp-2">
              {hut.name}
            </h3>
          </Link>
          <p className="text-sm text-muted-foreground">{hut.location}</p>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">{hut.description}</p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2">
          {hut.amenities.slice(0, 3).map((amenity, i) => (
            <span key={i} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
              {amenity}
            </span>
          ))}
          {hut.amenities.length > 3 && (
            <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">+{hut.amenities.length - 3}</span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="font-semibold text-sm">{hut.rating}</span>
              <span className="text-xs text-muted-foreground">({hut.reviews})</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
              <Users className="w-3 h-3" />
              <span>Up to {hut.capacity} guests</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Per night</p>
            <p className="text-2xl font-semibold text-accent">₨{hut.price.toLocaleString()}</p>
          </div>
        </div>

        <Link
          href={`/huts/${hut.id}`}
          className="block w-full text-center py-2 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition mt-4"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}
