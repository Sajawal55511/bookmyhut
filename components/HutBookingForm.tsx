'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Smartphone } from 'lucide-react';
import { BookingFormData } from '@/lib/types';

interface HutBookingFormProps {
  hutId: string;
  hutName: string;
  price: number;
}

export default function HutBookingForm({ hutId, hutName, price }: HutBookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    checkIn: '',
    checkOut: '',
    guests: 1,
    name: '',
    email: '',
    phone: '',
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate booking submission
    try {
      // Save to localStorage for demo
      const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
      bookings.push({
        id: Date.now(),
        hutId,
        hutName,
        ...formData,
        totalPrice: calculateTotal(),
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem('bookings', JSON.stringify(bookings));

      // Show success message
      alert(`Booking submitted! Total: ₨${calculateTotal().toLocaleString()}`);
      setFormData({
        checkIn: '',
        checkOut: '',
        guests: 1,
        name: '',
        email: '',
        phone: '',
      });
    } catch (error) {
      console.error('Booking error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;
    const check = new Date(formData.checkIn);
    const checkout = new Date(formData.checkOut);
    return Math.ceil((checkout.getTime() - check.getTime()) / (1000 * 60 * 60 * 24));
  };

  const calculateTotal = () => {
    return calculateNights() * price;
  };

  const nights = calculateNights();
  const total = calculateTotal();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-24 p-8 bg-card border border-border rounded-xl space-y-6"
    >
      <div>
        <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{hutName}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-accent">₨{price.toLocaleString()}</span>
          <span className="text-muted-foreground">per night</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Check-in Date</label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-accent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Check-out Date</label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-accent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Number of Guests</label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-accent"
          >
            {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-accent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-accent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+92 300 1234567"
            required
            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-accent"
          />
        </div>

        {/* Price Summary */}
        <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">₨{price.toLocaleString()} × {nights} nights</span>
            <span className="font-semibold">₨{total.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm font-semibold pt-2 border-t border-accent/30">
            <span>Total</span>
            <span className="text-accent text-lg">₨{total.toLocaleString()}</span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="space-y-3">
          <p className="text-sm font-medium text-foreground">Payment Methods</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => handlePaymentMethod('jazzcash')}
            className="w-full p-3 bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 rounded-lg hover:border-accent/50 transition flex items-center justify-center gap-2"
          >
            <Smartphone className="w-5 h-5 text-accent" />
            <span className="font-semibold">JazzCash / EasyPaisa</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => handlePaymentMethod('phone')}
            className="w-full p-3 bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 rounded-lg hover:border-accent/50 transition flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5 text-accent" />
            <span className="font-semibold">Call to Book</span>
          </motion.button>
        </div>

        <button
          type="submit"
          disabled={submitting || !formData.checkIn || !formData.checkOut || !formData.name || !formData.email || !formData.phone}
          className="w-full py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {submitting ? 'Processing...' : 'Request Booking'}
        </button>
      </form>
    </motion.div>
  );

  function handlePaymentMethod(method: string) {
    if (method === 'jazzcash') {
      alert('Redirecting to JazzCash payment...\n\nIn production, this would integrate with JazzCash/EasyPaisa API.');
    } else {
      alert(`Call us at +92 300 123 4567 to complete your booking!\n\nTotal: ₨${calculateTotal().toLocaleString()}`);
    }
  }
}
