import React from 'react';
import { CLINIC_INFO, NAV_LINKS } from '../constants';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
             <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-gold font-serif font-bold text-3xl border-2 border-gold mb-4">
              EH
            </div>
            <h3 className="font-bold text-xl">{CLINIC_INFO.nameAr}</h3>
            <p className="text-gray-400 text-sm">{CLINIC_INFO.nameEn}</p>
            <div className="text-gold text-sm font-medium">رقم الترخيص: {CLINIC_INFO.license}</div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gold">روابط سريعة</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gold">عن العيادة</h4>
            <div className="flex flex-wrap gap-2">
              {CLINIC_INFO.tags.map(tag => (
                <span key={tag} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">{tag}</span>
              ))}
              <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">جلدية</span>
              <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">ليزر</span>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gold">تابعونا</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href={`https://wa.me/965${CLINIC_INFO.whatsapp}`} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {CLINIC_INFO.nameEn}. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;