import { Bot, Building2, Users2, MessageSquare, Package } from 'lucide-react';

export const packages = [
  {
    name: 'Standard Assistant',
    price: '299',
    subscription: '79',
    features: [
      'Lead Capture + Email Notification',
      '24/7 Personalized Customer Support',
      '50 Free Monthly Conversations',
      '$1 per 10 Additional Conversations'
    ]
  },
  {
    name: 'Advanced Assistant',
    price: '349',
    subscription: '149',
    features: [
      'Everything in Standard',
      'Branded Login Portal',
      'Advanced Analytics',
      'Human Handoff',
      'Past Conversation Reference',
      'FAQ Management',
      'Appointment Scheduling',
      '50 Free Monthly Conversations',
      '$2 per 10 Additional Conversations'
    ]
  },
  {
    name: 'Premium Package',
    price: '499',
    subscription: '249',
    features: [
      'Everything in Advanced',
      'Lead Capture + CRM Integration',
      'Smart Product Recommendations',
      '24/7 Priority Support',
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
      { label: "Company Name", type: "text", placeholder: "Enter your company name", required: true },
      { label: "Website", type: "url", placeholder: "https://your-website.com", required: true },
      { label: "Industry", type: "select", options: ["E-commerce", "SaaS", "Healthcare", "Real Estate", "Other"], required: true }
    ]
  },
  {
    title: "Team Size",
    icon: Users2,
    fields: [
      { label: "Number of Employees", type: "select", options: ["1-10", "11-50", "51-200", "201-500", "500+"], required: true },
      { label: "Customer Service Team Size", type: "select", options: ["1-5", "6-20", "21-50", "50+"], required: true }
    ]
  },
  {
    title: "Current Setup",
    icon: MessageSquare,
    fields: [
      { label: "Current Support Channels", type: "checkbox", options: ["Email", "Phone", "Live Chat", "Social Media"], required: true },
      { label: "Average Monthly Conversations", type: "select", options: ["0-100", "101-500", "501-2000", "2000+"], required: true }
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