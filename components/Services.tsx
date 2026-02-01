import React from 'react';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';
import { Microscope, Sparkles, Feather, Zap } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Microscope': <Microscope size={32} />,
  'Sparkles': <Sparkles size={32} />,
  'Feather': <Feather size={32} />,
  'Zap': <Zap size={32} />,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gold font-serif italic text-xl mb-3">تميزي بجمالك</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">خدماتنا الطبية</h3>
          <p className="text-gray-600 text-lg">
            نقدم مجموعة متكاملة من الخدمات التجميلية والعلاجية باستخدام أحدث التقنيات العالمية لضمان أفضل النتائج.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-cream rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gold/20"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-gold transition-colors mb-6 mx-auto md:mx-0">
                {iconMap[service.icon]}
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;