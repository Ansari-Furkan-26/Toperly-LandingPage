import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';

const faqs = [
  {
    question: "What is finance analytics and how can it help my business?",
    answer:
      "Finance analytics helps you understand your financial data better, so you can make smarter decisions, spot trends, and improve your business strategy.",
  },
  {
    question: "How do I start using your finance analytics platform?",
    answer: [
      "Sign up for an account on our platform",
      "Connect your financial data sources",
      "Explore our dashboard and analytics tools",
      "Set up custom reports and alerts",
    ],
  },
  {
    question: "What types of financial data can I analyze?",
    answer:
      "Our platform supports analysis of revenue, expenses, cash flow, investments, and more from various sources including banks, accounting software, and spreadsheets.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Yes, we use bank-level encryption and follow strict security protocols to ensure your data remains private and protected at all times.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

  return (
    <section className="bg-white py-12 sm:px-6 mx-10 min-h-full flex items-center justify-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT */}
        <div className="flex flex-col justify-start h-full">
          <span className='p-1 px-2 mb-2 border border-blue-500 fonr-xs w-32 rounded-lg'>Daily Questions</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 ">
            Frequently asked <br /> 
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              questions
            </span>  
          </h1>

          <div className="bg-purple-100/60 rounded-2xl p-6 mt-auto max-w-md shadow-sm border text-left">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Still have a questions?
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible!
            </p>
            <button
              className="flex items-center px-5 py-2 bg-gradient-primary hover:shadow-glow-primary  text-white rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              Send email
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="space-y-5">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`bg-gray-50 rounded-xl shadow transition-colors cursor-pointer border border-gray-200 ${
                  openIndex === idx
                    ? 'border-purple-500'
                    : 'hover:border-purple-500'
                }`}
                onClick={() =>
                  setOpenIndex((prev) => (prev === idx ? -1 : idx))
                }
              >
                <div className="flex justify-between items-center px-6 py-5">
                  <span className="font-medium text-gray-800 text-base">
                    {faq.question}
                  </span>
                  <ArrowDown
                    className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${
                      openIndex === idx ? 'rotate-180 text-purple-600' : ''
                    }`}
                  />
                </div>
                {openIndex === idx && (
                  <div className="px-6 pb-6 text-gray-600">
                    {Array.isArray(faq.answer) ? (
                      <ul className="list-disc pl-6 space-y-1">
                        {faq.answer.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{faq.answer}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
