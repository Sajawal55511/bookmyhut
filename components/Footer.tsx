'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Share2, Heart, Rss, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-foreground text-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-serif font-bold mb-4">BookMyHut</h3>
            <p className="text-background/70 text-sm">Luxury mountain huts for unforgettable experiences in Pakistan.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/huts" className="hover:text-background transition">
                  Browse Huts
                </Link>
              </li>
              <li>
                <a href="#experiences" className="hover:text-background transition">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="mailto:info@bookmyhut.pk" className="hover:text-background transition">
                  info@bookmyhut.pk
                </a>
              </li>
              <li>
                <a href="tel:+923001234567" className="hover:text-background transition">
                  +92 300 123 4567
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 hover:bg-accent rounded-lg transition"
                aria-label="Instagram"
              >
                <Share2 className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 hover:bg-accent rounded-lg transition"
                aria-label="Facebook"
              >
                <Heart className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 hover:bg-accent rounded-lg transition"
                aria-label="LinkedIn"
              >
                <Rss className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 hover:bg-accent rounded-lg transition"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8 text-center text-sm text-background/60">
          <p>&copy; {currentYear} BookMyHut. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
