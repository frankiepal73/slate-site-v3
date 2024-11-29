import { FormData } from '../types/form';

const WEBHOOK_URL = 'https://hook.us1.make.com/mzspe1u91ye7qvgvth5wenapyfcbulw8';

function splitFullName(fullName: string): { firstName: string; lastName: string } {
  const nameParts = fullName.trim().split(/\s+/);
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';
  return { firstName, lastName };
}

export async function submitFormData(formData: FormData): Promise<{ success: boolean }> {
  try {
    // Check discount status right before submission
    const discountTimeLeft = sessionStorage.getItem('discountTimeLeft');
    const hasValidDiscount = discountTimeLeft ? (parseInt(discountTimeLeft, 10) - Date.now() > 0) : false;

    // Split full name into first and last name
    const { firstName, lastName } = splitFullName(formData['Contact Information-Full Name'] as string);

    // Prepare data for GTM
    const gtmData = {
      event: 'form_submission',
      formId: 'get-started-form',
      formName: 'Get Started Form',
      selectedPackage: formData['Select Package-Package'],
      website: formData['Business Details-Website'],
      firstName,
      lastName,
      email: formData['Contact Information-Email'],
      phone: formData['Contact Information-Phone'],
      hasDiscount: hasValidDiscount,
      discountAmount: hasValidDiscount ? 20 : 0
    };

    // Push to GTM dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(gtmData);

    const formattedData = {
      timestamp: new Date().toISOString(),
      discountApplied: hasValidDiscount,
      discountAmount: hasValidDiscount ? 20 : 0,
      formData: {
        ...Object.entries(formData).reduce((acc, [key, value]) => {
          const [step, ...fieldParts] = key.split('-');
          const field = fieldParts.join('-');
          if (!acc[step]) acc[step] = {};
          acc[step][field] = value;
          return acc;
        }, {} as Record<string, any>),
        firstName,
        lastName
      },
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