import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { CLINIC_INFO } from '../constants';
import { MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-cream">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-right space-y-6 order-2 md:order-1"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-gold/30 px-4 py-2 rounded-full shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-bold text-sm tracking-wide">
              {CLINIC_INFO.tags[0]}
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-dark leading-tight">
            استعيدي <span className="text-gold font-serif italic">جمالك</span> <br/>
            وكوني أنتِ
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-lg mr-auto md:mr-0 ml-auto">
            في عيادة د. ابتهال الحبيب، نقدم لكِ تجربة فريدة من العناية والرفاهية. خدمات متكاملة في الجلدية، التجميل، والليزر، صممت خصيصاً لتناسب احتياجاتك في بيئة توفر لك الخصوصية التامة.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 justify-end md:justify-start">
            <Button 
                variant="gold" 
                icon={<MessageCircle size={20} />}
                href={`https://wa.me/965${CLINIC_INFO.whatsapp}`}
            >
              احجزي موعدك الآن
            </Button>
            <Button variant="outline" href="#services">
              استكشفي خدماتنا
            </Button>
          </div>
          
          <div className="pt-8 flex items-center gap-8 text-gray-500 text-sm font-medium border-t border-gray-200 mt-8">
            <div className="flex items-center gap-2">
              <span className="text-gold text-2xl font-serif">238</span>
              <span>رقم الترخيص</span>
            </div>
            <div className="w-px h-8 bg-gray-300" />
            <div className="flex items-center gap-2">
              <span className="text-gold text-2xl font-serif">100%</span>
              <span>خصوصية تامة</span>
            </div>
          </div>
        </motion.div>

        {/* Image Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative order-1 md:order-2"
        >
          <div className="relative z-10 rounded-t-[10rem] rounded-b-[3rem] overflow-hidden shadow-2xl border-[8px] border-white">
            <img 
              src="https://picsum.photos/id/1027/800/1000" 
              alt="Women Health" 
              className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 right-8 text-white text-right">
              <p className="font-serif text-3xl italic">Dr. Ebtihal Al-Habib</p>
              <p className="text-gold-light text-sm uppercase tracking-widest mt-1">Medical Center</p>
            </div>
          </div>

          {/* Decorative Circles */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/20 rounded-full blur-2xl z-0" />
          <div className="absolute top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl z-0" />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;