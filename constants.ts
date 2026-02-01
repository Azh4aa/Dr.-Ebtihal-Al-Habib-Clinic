import { ClinicInfo, Service } from './types';

export const CLINIC_INFO: ClinicInfo = {
  nameAr: "مستوصف د/ابتهال الحبيب الطبي",
  nameEn: "Dr. Ebtihal Al-Habib Clinic",
  subtitle: "Women's Health Clinic",
  license: "238",
  phone: "22055377",
  whatsapp: "55533302",
  location: "شرق - مقابل المستشفى الأميري المبنى الجديد",
  tags: ["#للنساء_فقط", "#كوني_أنتِ"]
};

export const SERVICES: Service[] = [
  {
    id: 'derma',
    title: 'الأمراض الجلدية',
    description: 'تشخيص وعلاج جميع الأمراض الجلدية بأحدث التقنيات الطبية.',
    icon: 'Microscope',
    image: 'https://picsum.photos/id/1062/800/600'
  },
  {
    id: 'beauty',
    title: 'التجميل والحقن',
    description: 'فيلر، بوتوكس، خيوط شد الوجه، ونضارة البشرة لمظهر طبيعي وجذاب.',
    icon: 'Sparkles',
    image: 'https://picsum.photos/id/64/800/600'
  },
  {
    id: 'hair',
    title: 'علاج الشعر',
    description: 'حلول متكاملة لتساقط الشعر، البلازما، والميزوثيرابي لاستعادة كثافة شعرك.',
    icon: 'Feather',
    image: 'https://picsum.photos/id/338/800/600'
  },
  {
    id: 'laser',
    title: 'الليزر الطبي',
    description: 'إزالة الشعر بالليزر، علاج التصبغات، وتقشير البشرة بأحدث الأجهزة.',
    icon: 'Zap',
    image: 'https://picsum.photos/id/250/800/600'
  }
];

export const NAV_LINKS = [
  { name: 'الرئيسية', href: '#home' },
  { name: 'خدماتنا', href: '#services' },
  { name: 'عن العيادة', href: '#about' },
  { name: 'اتصل بنا', href: '#contact' },
];