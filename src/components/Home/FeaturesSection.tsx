import React, { useState } from 'react';
import { Zap, Shield, Rocket, Heart, ChevronRight } from 'lucide-react';

const FeatureShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      title: "Lightning Fast",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format",
      description: "Experience blazing-fast performance with our optimized infrastructure. Load times under 100ms guaranteed, ensuring your users never wait.",
      keyPoints: [
        { key: "Load Time", value: "< 100ms" },
        { key: "Uptime", value: "99.9%" },
        { key: "Global CDN", value: "200+ locations" },
        { key: "Cache Hit Rate", value: "95%" }
      ],
      gradient: "from-blue-400 to-blue-600"
    },
    {
      id: 1,
      title: "Military Grade Security",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&auto=format",
      description: "Your data is protected by enterprise-grade encryption and security protocols. Built with privacy-first principles and compliance standards.",
      keyPoints: [
        { key: "Encryption", value: "AES-256" },
        { key: "Compliance", value: "SOC 2, GDPR" },
        { key: "Audits", value: "Quarterly" },
        { key: "Zero Trust", value: "Enabled" }
      ],
      gradient: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "Rocket Powered",
      icon: Rocket,
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop&auto=format",
      description: "Scale effortlessly from startup to enterprise. Our infrastructure automatically adapts to your growing needs without any configuration.",
      keyPoints: [
        { key: "Auto Scaling", value: "Instant" },
        { key: "Max Users", value: "Unlimited" },
        { key: "Global Reach", value: "190+ countries" },
        { key: "API Calls", value: "1M+ per second" }
      ],
      gradient: "from-blue-600 to-blue-800"
    },
    {
      id: 3,
      title: "Built with Love",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&auto=format",
      description: "Crafted by passionate developers who care about user experience. Every pixel, every interaction is designed with attention to detail.",
      keyPoints: [
        { key: "Team Size", value: "50+ experts" },
        { key: "Experience", value: "10+ years" },
        { key: "Support", value: "24/7" },
        { key: "Satisfaction", value: "99.8%" }
      ],
      gradient: "from-blue-700 to-blue-900"
    }
  ];

  const currentFeature = features[activeFeature];
  const IconComponent = currentFeature.icon;

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Amazing Features
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes our platform exceptional
          </p>
        </div>

        {/* Main Content */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-8  lg:items-start">
          {/* Feature List - Left Side on Desktop, Mobile Layout */}
          <div className="lg:space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 hidden lg:block">Choose a Feature</h2>
            
            {/* Desktop Layout */}
            <div className="hidden lg:block space-y-4">
              {features.map((feature, index) => {
                const FeatureIcon = feature.icon;
                const isActive = activeFeature === index;
                
                return (
                  <div
                    key={feature.id}
                    onClick={() => setActiveFeature(index)}
                    className={`
                      group cursor-pointer p-6 rounded-2xl border transition-all duration-500 transform hover:scale-105
                      ${isActive 
                        ? 'bg-blue-50 border-blue-300 shadow-xl' 
                        : 'bg-white border-gray-200 hover:bg-blue-25 hover:border-blue-200 shadow-md'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`
                          p-3 rounded-xl bg-gradient-to-r ${feature.gradient} 
                          transform transition-transform duration-300 
                          ${isActive ? 'scale-110' : 'group-hover:scale-105'}
                        `}>
                          <FeatureIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className={`
                            text-lg font-semibold transition-colors duration-300
                            ${isActive ? 'text-gray-800' : 'text-gray-600 group-hover:text-gray-800'}
                          `}>
                            {feature.title}
                          </h3>
                        </div>
                      </div>
                      <ChevronRight className={`
                        w-5 h-5 transition-all duration-300
                        ${isActive 
                          ? 'text-blue-600 transform rotate-90' 
                          : 'text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1'
                        }
                      `} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Layout - Icons at top */}
            <div className="lg:hidden">
              {/* Mobile Icons Row */}
              <div className="flex justify-center space-x-3 mb-6">
                {features.map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  const isActive = activeFeature === index;
                  
                  return (
                    <div
                      key={feature.id}
                      onClick={() => setActiveFeature(index)}
                      className={`
                        cursor-pointer p-4 rounded-xl transition-all duration-500 transform
                        ${isActive 
                          ? 'bg-gradient-to-r ' + feature.gradient + ' shadow-xl scale-110 rotate-3' 
                          : 'bg-white border border-gray-200 hover:border-blue-300 shadow-md hover:scale-105 hover:-translate-y-1'
                        }
                      `}
                    >
                      <FeatureIcon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                  );
                })}
              </div>
              
              {/* Mobile Content */}
              <div className="w-full">
                {/* Feature Title for Mobile */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${currentFeature.gradient}`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {currentFeature.title}
                  </h3>
                </div>

                {/* Mobile Feature Image */}
                <div className="relative overflow-hidden rounded-xl mb-4 group">
                  <div className="aspect-video relative">
                    <img
                      key={currentFeature.id}
                      src={currentFeature.image}
                      alt={currentFeature.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </div>

                {/* Mobile Description */}
                <div className="bg-white rounded-xl p-4 mb-4 border border-gray-200 shadow-sm">
                  <p 
                    key={`desc-${currentFeature.id}`}
                    className="text-gray-600 text-sm leading-relaxed animate-fade-in"
                  >
                    {currentFeature.description}
                  </p>
                </div>

                {/* Mobile Key Points Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {currentFeature.keyPoints.map((point, index) => (
                    <div
                      key={`${currentFeature.id}-${index}`}
                      className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm
                               hover:shadow-md transition-all duration-300
                               animate-slide-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-xs text-gray-500 mb-1">{point.key}</div>
                      <div className="text-sm font-bold text-gray-800">{point.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feature Content - Right Side (Desktop Only) */}
          <div className="hidden lg:block lg:sticky lg:top-8">
            {/* Feature Image */}
            <div className="relative overflow-hidden rounded-2xl mb-8 group">
              <div className="aspect-video relative">
                <img
                  key={currentFeature.id}
                  src={currentFeature.image}
                  alt={currentFeature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center space-x-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${currentFeature.gradient}`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {currentFeature.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Feature Description */}
            {/* <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-200 shadow-lg">
              <p 
                key={`desc-${currentFeature.id}`}
                className="text-gray-600 text-lg leading-relaxed animate-fade-in"
              >
                {currentFeature.description}
              </p>
            </div> */}

            {/* Key Points Grid */}
            <div className="grid grid-cols-2 gap-4">
              {currentFeature.keyPoints.map((point, index) => (
                <div
                  key={`${currentFeature.id}-${index}`}
                  className="bg-white rounded-xl p-4 border border-gray-200 shadow-md
                           hover:shadow-lg transition-all duration-300 hover:scale-105
                           animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-sm text-gray-500 mb-1">{point.key}</div>
                  <div className="text-xl font-bold text-gray-800">{point.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-slide-up {
          opacity: 0;
          animation: slide-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FeatureShowcase;