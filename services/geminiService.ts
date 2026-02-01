import { GoogleGenAI } from "@google/genai";
import { CLINIC_INFO, SERVICES } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateClinicResponse = async (userMessage: string): Promise<string> => {
  if (!ai) {
    return "عذراً، خدمة المساعد الذكي غير متوفرة حالياً (API Key missing). يرجى الاتصال بنا مباشرة.";
  }

  const servicesText = SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n');
  
  const systemInstruction = `
    أنت المساعد الشخصي الذكي لعيادة الدكتورة ابتهال الحبيب (Dr. Ebtihal Al-Habib Clinic).
    
    معلومات العيادة:
    - الاسم: ${CLINIC_INFO.nameAr} (${CLINIC_INFO.nameEn})
    - التخصص: صحة المرأة (Women's Health Clinic)
    - ملاحظة هامة: العيادة للنساء فقط (#للنساء_فقط).
    - رقم الترخيص: ${CLINIC_INFO.license}
    - الهاتف: ${CLINIC_INFO.phone}
    - واتساب: ${CLINIC_INFO.whatsapp}
    - الموقع: ${CLINIC_INFO.location}
    - شعارنا: #كوني_أنتِ
    
    الخدمات المتاحة:
    ${servicesText}
    
    دورك:
    - الرد على استفسارات العملاء بأسلوب مهذب، راقي، وودود للغاية.
    - التحدث باللغة العربية (وبالإنجليزية إذا سأل العميل بالإنجليزية).
    - التركيز على أن العيادة توفر خصوصية تامة للنساء.
    - تشجيع العميل على حجز موعد عبر الواتساب أو الهاتف.
    - لا تعطي نصائح طبية محددة أو تشخيصات، بل اطلب منهم زيارة العيادة للفحص.
    - اجعل الإجابات مختصرة ومفيدة.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "عذراً، لم أستطع فهم طلبك. يرجى المحاولة مرة أخرى.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "حدث خطأ في الاتصال. يرجى الاتصال بنا عبر الهاتف.";
  }
};