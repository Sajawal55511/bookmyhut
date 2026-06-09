'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import HutsGrid from '@/components/HutsGrid';
import { huts } from '@/lib/mockData';
import { Search, Sliders } from 'lucide-react';

export default function HutsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 25000]);
  const [sortBy, setSortBy] = useState('featured');

  const filteredHuts = useMemo(() => {
    let result = huts.filter((hut) => {
      const matchesSearch = hut.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hut.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = hut.price >= priceRange[0] && hut.price <= priceRange[1];
      return matchesSearch && matchesPrice;
    });

    // Sort
    if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [searchQuery, priceRange, sortBy]);

  return (
    <div className="w-full pt-24">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-12 px-4 bg-accent/5 border-b border-accent/10"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">All Luxury Huts</h1>

          {/* Search and Filters */}
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-accent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Price Range</label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="25000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <p className="text-sm text-muted-foreground">
                    ₨{priceRange[0].toLocaleString()} - ₨{priceRange[1].toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-accent"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>

              {/* Results */}
              <div className="flex items-end">
                <p className="text-sm text-muted-foreground">
                  {filteredHuts.length} hut{filteredHuts.length !== 1 ? 's' : ''} found
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Results */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {filteredHuts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredHuts.map((hut, index) => (
                <motion.div
                  key={hut.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <HutsGrid huts={[hut]} showAll={false} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-lg text-muted-foreground">No huts found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
