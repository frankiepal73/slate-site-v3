import { FormData } from '../types/form';

const WEBHOOK_URL = 'https://hook.us1.make.com/mzspe1u91ye7qvgvth5wenapyfcbulw8';

export async function submitFormData(formData: FormData): Promise<{ success: boolean }> {
  try {
    const formattedData = {
      timestamp: new Date().toISOString(),
      formData: Object.entries(formData).reduce((acc, [key, value]) => {
        const [step, ...fieldParts] = key.split('-');
        const field = fieldParts.join('-'); // Rejoin in case field name contains hyphens
        if (!acc[step]) acc[step] = {};
        acc[step][field] = value;
        return acc;
      }, {} as Record<string, any>),
      source: {
        url: window.location.href,
        referrer: document.referrer,
        userAgent: navigator.userAgent
      }
    };

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formattedData),
      mode: 'cors', // Enable CORS
      credentials: 'omit' // Don't send credentials
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
}