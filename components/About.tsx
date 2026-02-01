import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Image Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://picsum.photos/id/1059/400/600" 
                alt="Clinic Interior" 
                className="rounded-2xl shadow-lg mt-12 w-full h-64 object-cover"
              />
              <img 
                src="https://picsum.photos/id/1011/400/600" 
                alt="Treatment" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-xl border-4 border-gold/20 text-center w-48 h-48 flex flex-col justify-center items-center">
              <span className="text-4xl font-bold text-primary">#1</span>
              <span className="text-sm font-medium text-gray-500">خيارك الأول</span>
              <span className="text-xs text-gold mt-1">للعناية والجمال</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-right"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-6 leading-tight">
              لماذا تختارين <br/>
              <span className="text-gold">عيادة د. ابتهال الحبيب؟</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              نحن نؤمن بأن كل امرأة تستحق أن تشعر بالثقة والجمال. نوفر لك بيئة طبية آمنة ومريحة، مع فريق متخصص من ذوي الخبرة العالية.
            </p>

            <ul className="space-y-4">
              {[
                "طاقم طبي نسائي بالكامل لخصوصية تامة.",
                "أحدث أجهزة الليزر والتجميل العالمية.",
                "خطط علاجية مخصصة لكل مريضة.",
                "موقع متميز مقابل المستشفى الأميري."
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <p className="font-serif text-2xl text-primary italic">"كوني أنتِ، بجمالك الطبيعي وثقتك العالية"</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;