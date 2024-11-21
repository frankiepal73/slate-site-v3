import { Bot, Building2, Users2, MessageSquare, Package } from 'lucide-react';

export const packages = [
  {
    name: 'Standard Assistant',
    price: '399',
    subscription: '99',
    features: [
      'Lead Capture + Email Notification',
      '24/7 Personalized Customer Support',
      'Custom Branding: Agent Launcher & Avatar',
      'Done-For-You Website Code Installation',
      'Support Across 29+ Languages',
      '50 Free Monthly Conversations',
      '$1 per 10 Additional Conversations'
    ]
  },
  {
    name: 'Advanced Assistant',
    price: '499',
    subscription: '199',
    features: [
      'Everything in Standard',
      'Branded Login Portal',
      'Advanced Analytics',
      'Human Handoff',
      'Past Conversation Reference',
      'Appointment Scheduling',
      "Fully Customizable Agent Tabs (FAQ's, Calendar Embed, Events, Etc.)",
      'Custom Font & Background',
      'Conversation Assignment to Team Members',
      'Lead Database',
      '50 Free Monthly Conversations',
      '$2 per 10 Additional Conversations'
    ]
  },
  {
    name: 'Premium Package',
    price: '599',
    subscription: '299',
    features: [
      'Everything in Advanced',
      'Lead Capture + CRM Integration',
      'Smart Product Recommendations',
      'Priority Support',
      'Monthly Optimizations',
      'Performance Reviews',
      '50 Free Monthly Conversations',
      '$3 per 10 Additional Conversations'
    ]
  }
];

export const steps = [
  {
    title: "Select Package",
    icon: Package,
    fields: [
      { 
        label: "Package", 
        type: "package-select", 
        required: true,
        packages
      }
    ]
  },
  {
    title: "Business Details",
    icon: Building2,
    fields: [
      { label: "Website", type: "url", placeholder: "https://your-website.com", required: true },
      { label: "Number of Employees", type: "select", options: ["1-10", "11-50", "51-200", "201-500", "500+"], required: true }
    ]
  },
  {
    title: "Contact Information",
    icon: Users2,
    fields: [
      { label: "Full Name", type: "text", placeholder: "Enter your full name", required: true },
      { label: "Email", type: "email", placeholder: "you@company.com", required: true },
      { 
        label: "Contact Consent", 
        type: "single-checkbox", 
        text: "I consent to being contacted regarding next steps",
        required: true 
      }
    ]
  }
];