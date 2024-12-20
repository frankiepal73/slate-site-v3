import React from 'react';
import { Star, Quote, MessageSquare, TrendingUp, Sparkles, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const testimonials = [
  {
    name: "Emily Rodriguez",
    role: "E-commerce Manager",
    content: "Setup was quick and efficient, and we started seeing results within the first week. Our conversion rate improved by 18% in the first month.",
    rating: 5,
    highlight: "18% More Conversions",
    icon: TrendingUp
  },
  {
    name: "Frederick Steinfeld",
    role: "Pro-Fit Outdoor Living",
    content: "We've been incredibly impressed with the results we've seen since implementing the chatbot from Chat with Slate. On a weekly basis, we're now seeing appointments being booked directly on our calendar, without any manual intervention from our team. Additionally, we're saving several hours every week that were previously spent responding to inquiries about materials, configurations, options, and location. The chatbot has been a tremendous success, not only saving us valuable time but also generating additional revenue for our business.",
    rating: 5,
    highlight: "Automated Appointments",
    icon: MessageSquare
  },
  {
    name: "Jenny Wood",
    role: "Tivoli Jewelers",
    content: "With over 1,200 products listed on our Shopify website, customers often had to navigate through hundreds of items to find what they were looking for, which hindered the purchasing process and reduced overall efficiency. Thanks to the product recommendation assistant from Chat with Slate, we've seen a remarkable 12% increase in online sales, translating to thousands of dollars in additional revenue each month. Moreover, when dealing with luxury goods, customers often require detailed information before committing to a purchase. The chatbot has been instrumental in providing accurate and timely responses to questions regarding products, store policies, and shipping, ultimately enhancing brand trust and saving our team valuable time.",
    rating: 5,
    highlight: "12% Sales Increase",
    icon: Sparkles
  },
  {
    name: "Sarah Thompson",
    role: "E-commerce Manager",
    content: "Slate transformed our customer service. Our response times dropped by 90%, and it now handles 70%+ of customer support",
    rating: 5,
    highlight: "90% Faster Response",
    icon: TrendingUp
  },
  {
    name: "Anthony Barbagallo",
    role: "Gemini Kitchen Designer",
    content: "As a software company, one of our biggest challenges has been effectively conveying the full scope of our platform offerings and package-specific features on our website without overwhelming visitors with too much information. Since implementing the Chat with Slate assistant, we've been able to handle over 92% of customer inquiries with ease, seamlessly booking appointments and significantly increasing our conversion rate. The time saved by not having to go back and forth with potential leads has been invaluable, allowing us to focus on other critical aspects of our business.",
    rating: 5,
    highlight: "92% Inquiry Resolution",
    icon: TrendingUp
  },
  {
    name: "Ken Condren",
    role: "VibeZ CBD",
    content: "In the supplement industry, creating an engaging and interactive customer experience is paramount to differentiate ourselves from competitors. By integrating the Chat with Slate assistant, we've been able to offer a unique and personalized experience where customers can simply express their needs, such as \"I'm looking for quality sleep\" or \"I need to focus,\" and receive tailored product recommendations. This has become an integral part of our brand identity and has greatly contributed to our success in the market.",
    rating: 5,
    highlight: "Personalized Experience",
    icon: Sparkles
  },
  {
    name: "Matthew Mosholder",
    role: "AMM Global (E-Commerce Store Conglomerate)",
    content: "Since deploying Slate agents across all of our e-commerce stores, we've seen a significant improvement in our overall performance. The chatbots have been incredibly effective at handling a wide range of customer service inquiries, freeing up our team to focus on more complex tasks and strategic initiatives. We've been able to save hours each week that were previously spent on repetitive questions and issues.\n\nBy quickly matching customers with the most relevant products based on their needs and preferences, we've seen a notable increase in sales and customer satisfaction. The personalized approach has made a real difference in how our customers perceive and engage with our brands.\n\nOverall, the integration of Slate agents has been a transformative experience for AMM Global. The combination of enhanced customer service, personalized product recommendations, and efficient lead capture has had a positive impact on our bottom line and set the stage for future growth.",
    rating: 5,
    highlight: "Multi-Store Success",
    icon: Users
  }
];

export function Testimonials() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/get-started');
  };

  return (
    <div className="relative bg-gray-50 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.1),transparent)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-primary-500/10 rounded-full mb-6">
            <Star className="w-8 h-8 text-primary-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Business Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See why businesses trust Slate to drive growth and deliver exceptional customer experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200"
              id={`testimonial-${index}`}
              data-gtm-category="Testimonial"
              data-gtm-action="view"
              data-gtm-label={`Testimonial ${index + 1}`}
            >
              <div className="absolute -inset-px bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className="absolute -top-4 -left-2 text-primary-500/20 transform -rotate-12">
                  <Quote className="w-12 h-12" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 mb-6">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="flex items-center gap-2 px-4 py-2 bg-primary-500/10 rounded-full w-fit">
                    <testimonial.icon className="w-4 h-4 text-primary-500" />
                    <span className="text-sm font-medium text-primary-600 whitespace-nowrap">{testimonial.highlight}</span>
                  </div>
                </div>
                
                <div className="relative">
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed whitespace-pre-line">{testimonial.content}</p>
                </div>
                
                <div className="flex flex-col mt-8">
                  <h4 className="text-gray-900 font-medium">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={handleGetStarted}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary-500 text-white font-medium hover:bg-primary-600 shadow-lg hover:shadow-xl shadow-primary-500/20 hover:shadow-primary-500/30 transition-all"
            id="testimonials-cta"
            data-gtm-category="CTA"
            data-gtm-action="click"
            data-gtm-label="Testimonials - Get Started"
          >
            Convert More With AI
          </button>
        </div>
      </div>
    </div>
  );
}