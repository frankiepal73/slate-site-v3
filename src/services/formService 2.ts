import { FormData } from '../types/form';

const WEBHOOK_URL = 'https://hook.us1.make.com/mzspe1u91ye7qvgvth5wenapyfcbulw8';

export async function submitFormData(formData: FormData): Promise<{ success: boolean }> {
  try {
    // Check discount status right before submission
    const discountTimeLeft = sessionStorage.getItem('discountTimeLeft');
    const hasValidDiscount = discountTimeLeft ? (parseInt(discountTimeLeft, 10) - Date.now() > 0) : false;

    const formattedData = {
      timestamp: new Date().toISOString(),
      discountApplied: hasValidDiscount,
      discountAmount: hasValidDiscount ? 10 : 0,
      formData: Object.entries(formData).reduce((acc, [key, value]) => {
        // Skip the hasDiscount field from the main form data
        if (key === 'hasDiscount') return acc;
        
        const [step, ...fieldParts] = key.split('-');
        const field = fieldParts.join('-');
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
        'Accept': 'application/json',
        'Origin': window.location.origin
      },
      body: JSON.stringify(formattedData),
      mode: 'cors',
      credentials: 'omit'
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