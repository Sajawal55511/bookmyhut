'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-accent/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/60 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">B</span>
          </div>
          <span className="hidden sm:inline text-xl font-serif font-bold text-foreground">BookMyHut</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition">
            Home
          </Link>
          <Link href="/huts" className="text-sm text-muted-foreground hover:text-foreground transition">
            Huts
          </Link>
          <a href="#experiences" className="text-sm text-muted-foreground hover:text-foreground transition">
            Experiences
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition">
            Contact
          </a>
        </div>

        {/* WhatsApp & Menu Button */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-accent/10 rounded-lg transition"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-5 h-5 text-accent" />
          </a>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden overflow-hidden bg-background border-b border-accent/10 ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-4 py-4 space-y-3">
          <Link href="/" className="block text-sm text-muted-foreground hover:text-foreground transition py-2">
            Home
          </Link>
          <Link href="/huts" className="block text-sm text-muted-foreground hover:text-foreground transition py-2">
            Huts
          </Link>
          <a href="#experiences" className="block text-sm text-muted-foreground hover:text-foreground transition py-2">
            Experiences
          </a>
          <a href="#contact" className="block text-sm text-muted-foreground hover:text-foreground transition py-2">
            Contact
          </a>
        </div>
      </motion.div>
    </header>
  );
}
