import React, { useState, useEffect } from 'react';
import { MessageCircle, Bell, MapPin, Phone } from 'lucide-react';

const ContactTeam = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Chat to sales",
      description: "Speak to our team.",
      action: "sales@gmail.com",
      href: "mailto:sales@gmail.com"
    },
    {
      icon: Bell,
      title: "Chat to support", 
      description: "We're here to help.",
      action: "toperly.ai@gmail.com",
      href: "mailto:toperly.ai@gmail.com"
    },
    {
      icon: MapPin,
      title: "Visit us",
      description: "Visit our office HQ.",
      action: "View on Google Map",
      href: "#"
    },
    {
      icon: Phone,
      title: "Call us",
      description: "Mon-Fri from 8am to 5pm.",
      action: "+91 8178946715",
      href: "tel:+918178946715"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden flex items-center justify-center mt-16 p-4">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent animate-pulse"></div>
        <div 
          className="w-full h-full opacity-100"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'gridSlide 20s linear infinite'
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 w-full max-w-6xl mx-auto transform transition-all duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        {/* Header */}
        <div className="text-center mb-6 md:mb-16">
          <div className={`inline-flex items-center justify-center w-12 h-12 bg-gray-900 rounded-lg mb-6 transform transition-all duration-700 delay-200 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          }`}>
            <div className="flex space-x-1">
              <div className="w-1 h-4 bg-white rounded-full"></div>
              <div className="w-1 h-4 bg-white rounded-full"></div>
              <div className="w-1 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 transform transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            Contact our team
          </h1>
          
          <p className={`text-lg md:text-xl text-gray-600 max-w-md mx-auto transform transition-all duration-700 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            Let us know how we can help.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div
                key={option.title}
                className={`bg-white rounded-2xl p-2 md:p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300 group transform ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${500 + index * 100}ms` 
                }}
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl mb-4 group-hover:bg-gray-200 transition-colors duration-200">
                    <IconComponent className="w-6 h-6 text-gray-600" />
                  </div>
                  
                  <h3 className="md:text-xl font-semibold text-gray-900 mb-2">
                    {option.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-xs md:text-sm leading-relaxed">
                    {option.description}
                  </p>
                  
                  <a 
                    href={option.href}
                    className="inline-block text-sm text-gray-900 font-medium hover:text-gray-700 transition-colors duration-200 border-b border-gray-900 hover:border-gray-700 pb-1"
                  >
                    {option.action}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom CSS for grid animation */}
      <style jsx>{`
        @keyframes gridSlide {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(40px) translateY(40px); }
        }
        
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.1; }
        }
      `}</style>
    </div>
  );
};

export default ContactTeam;