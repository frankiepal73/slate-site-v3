import { Bot, Building2, Users2, MessageSquare } from 'lucide-react';

export const steps = [
  {
    title: "Business Details",
    icon: Building2,
    fields: [
      { label: "Website", type: "url", placeholder: "your-website.com", required: true }
    ]
  },
  {
    title: "Contact Information",
    icon: Users2,
    fields: [
      { label: "Full Name", type: "text", placeholder: "Enter your full name", required: true },
      { label: "Email", type: "email", placeholder: "you@company.com", required: true },
      { label: "Phone", type: "tel", placeholder: "Enter your phone number", required: true },
      { 
        label: "Contact Consent", 
        type: "single-checkbox", 
        text: "I consent to being contacted regarding next steps",
        required: true 
      }
    ]
  }
];