import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { CLINIC_INFO, NAV_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-gold font-serif font-bold text-2xl border-2 border-gold shadow-lg">
            EH
          </div>
          <div className={`flex flex-col ${isScrolled ? 'text-gray-800' : 'text-primary-dark'}`}>
            <h1 className="font-bold text-lg leading-tight">{CLINIC_INFO.nameAr}</h1>
            <span className="text-xs font-serif text-gold-dark tracking-wider hidden sm:block">
              {CLINIC_INFO.nameEn}
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-medium transition-colors hover:text-gold ${
                isScrolled ? 'text-gray-600' : 'text-gray-800'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
           <a 
            href={`tel:${CLINIC_INFO.phone}`}
            className="w-10 h-10 rounded-full bg-cream hover:bg-gold hover:text-white text-primary flex items-center justify-center transition-colors shadow-sm"
          >
            <Phone size={18} />
          </a>
          <a 
            href={`https://wa.me/965${CLINIC_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary text-white rounded-full text-sm font-bold hover:bg-primary-light transition-colors shadow-md flex items-center gap-2"
          >
            <MessageCircle size={16} />
            حجز موعد
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-xl border-t border-gray-100 overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-4">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-gray-700 py-2 border-b border-gray-50 hover:text-gold hover:pr-2 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={`https://wa.me/965${CLINIC_INFO.whatsapp}`}
                className="mt-2 w-full py-3 bg-primary text-white text-center rounded-lg font-bold"
              >
                تواصل معنا
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;