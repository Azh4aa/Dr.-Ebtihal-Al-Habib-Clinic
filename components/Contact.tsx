import React from 'react';
import { CLINIC_INFO } from '../constants';
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';
import Button from './Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-primary-dark text-white relative">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-4xl font-bold mb-2">تواصلي معنا</h2>
                    <p className="text-gold-light mb-8 text-lg">نحن هنا للإجابة على استفساراتك وحجز مواعيدك</p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold shrink-0">
                                <MapPin />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">الموقع</h4>
                                <p className="text-gray-300">{CLINIC_INFO.location}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold shrink-0">
                                <Phone />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">الاتصال المباشر</h4>
                                <p className="text-gray-300" dir="ltr">{CLINIC_INFO.phone}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold shrink-0">
                                <MessageCircle />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">واتساب</h4>
                                <p className="text-gray-300" dir="ltr">{CLINIC_INFO.whatsapp}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold shrink-0">
                                <Clock />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">ساعات العمل</h4>
                                <p className="text-gray-300">السبت - الخميس: 9:00 ص - 9:00 م</p>
                                <p className="text-gray-300">الجمعة: مغلق</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col sm:flex-row gap-4">
                        <Button 
                            variant="gold" 
                            href={`https://wa.me/965${CLINIC_INFO.whatsapp}`}
                        >
                            حجز موعد واتساب
                        </Button>
                        <Button 
                            variant="outline" 
                            className="!border-white !text-white hover:!bg-white hover:!text-primary"
                            href={`tel:${CLINIC_INFO.phone}`}
                        >
                            اتصال هاتفي
                        </Button>
                    </div>
                </div>

                <div className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.070007886915!2d47.9897!3d29.3759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf84ba03333333%3A0x123456789abcdef!2sAmiri%20Hospital!5e0!3m2!1sen!2skw!4v1620000000000!5m2!1sen!2skw" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy"
                        title="Clinic Location"
                        className="grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;