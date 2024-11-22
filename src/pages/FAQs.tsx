import React, { useState } from 'react';
import { Bot, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What level of technical skill is required to use Slate chatbots?",
    answer: "None at all, the Slate team handles everything from ideation to fulfillment, and provides you with access to your login portal (if included in package) so you can begin to freely and easily leverage your AI assistant quickly and with minimal friction to your existing processes."
  },
  {
    question: "Are there any long-term contracts or can I cancel anytime?",
    answer: "While we do not lock you in for a specific period of time, the setup and configuration fee is non-refundable as it is used to cover the labor expenses and valuable time of our developers. We do also offer long-term contract discounts, with 1+ year contracts receiving a considerable discount and increased discounts as the time period increases."
  },
  {
    question: "How do I migrate from my current live chat/chatbot provider to Slate?",
    answer: "It's as simple as 1,2,3! All agents are built from scratch by us to ensure they are done correctly. You can kiss your old agent goodbye, while the Slate team builds you a new and improved agent that you will never want to say goodbye to."
  },
  {
    question: "What metrics and KPIs do your analytics track?",
    answer: "Top intents, understood messages %, average messages per chat, and average seconds per chat"
  },
  {
    question: "Is my data secure and compliant with privacy regulations like GDPR?",
    answer: "Yes, we maintain GDPR compliance, as long as you specifically mention this point with our team during the design process so we can set it up accordingly."
  },
  {
    question: "How much ongoing maintenance is required from my team?",
    answer: "The only maintenance required from you is to promptly update product, calendar, and policy information when applicable. Slate is not liable for information that is not up to date or included during the design phase."
  },
  {
    question: "What kind of training and support do you provide during and after onboarding?",
    answer: "Once your agent is developed, we provide you with a document on how to use and maintain your agent as time goes on. If requested, we hold a session with team members to familiarize them with your agent to ensure a seamless integration process."
  },
  {
    question: "Can I white-label the chatbot to fully match my brand?",
    answer: "Absolutely! Our agents are fully customizable given your package, and are ready to wear your brand's gear upon purchase."
  },
  {
    question: "How customizable are the conversation flows and UI?",
    answer: "We work with you during the design process to determine your agent's behavior. We can increase the \"temperature\", or creativity of your agent to give more colorful responses, or keep the conversation straight and to the point when speaking to users. Our UI is highly customizable, and includes all the features as mentioned in the package descriptions."
  },
  {
    question: "Are there limits on number of chats, leads, or appointments?",
    answer: "Each agent price includes 50 conversations per month, and conversations above that will be billed per 10 conversations at $1, $2, and $3 depending on your package. Leads and appointments are included in this number, and we do not charge extra for them."
  },
  {
    question: "What other software does Slate integrate with besides Shopify and calendars?",
    answer: "Slate is highly flexible, and uses native integrations whenever possible, or custom APIs to link less popular software to its back end."
  },
  {
    question: "Can I export my chat transcripts and customer data?",
    answer: "Absolutely. The goal of Slate is to work with you as frictionlessly as possible, and you are able to integrate all of your conversation data from our interface if included in your package."
  }
];

export function FAQs() {
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});

  const toggleQuestion = (index: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-500/10 rounded-full mb-6">
            <Bot className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Questions</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Everything you need to know about Slate AI
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => toggleQuestion(index.toString())}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                {openQuestions[index.toString()] ? (
                  <ChevronUp className="w-5 h-5 text-blue-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-400" />
                )}
              </button>
              
              <div
                className={`
                  px-6 overflow-hidden transition-all duration-300 ease-in-out
                  ${openQuestions[index.toString()] ? 'max-h-96 pb-6' : 'max-h-0'}
                `}
              >
                <div className="text-white/70">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">
            Still have questions?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-started"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
            >
              Convert More With AI
            </Link>
            <a
              href="mailto:frank@slatedigitalmedia.com"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-all"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}