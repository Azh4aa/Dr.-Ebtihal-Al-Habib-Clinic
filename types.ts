export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface ClinicInfo {
  nameAr: string;
  nameEn: string;
  subtitle: string;
  license: string;
  phone: string;
  whatsapp: string;
  location: string;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}