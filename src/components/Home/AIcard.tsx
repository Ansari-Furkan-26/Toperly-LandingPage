import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Brain, MessageSquare, BarChart3, Zap, FileCheck, GraduationCap, Target } from 'lucide-react';

const AIFeaturesSectionDark = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getBackgroundStyle = () => {
    return {
      background: `
        radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
        linear-gradient(135deg, #000000 0%, #0f172a 100%)
      `,
    };
  };

  const cardData = [
  {
    icon: Brain,
    title: "AI Community!",
    description: "Join a browser-based P2P platform to store, train, and collaborate on ML projects."
  },
  {
    icon: FileCheck,
    title: "Assessments",
    description: "Get smart evaluations of your AI skills with feedback and tailored learning paths."
  },
  {
    icon: GraduationCap,
    title: "Certified Courses",
    description: "Earn industry-recognized AI certifications with hands-on projects and expert content."
  },
  {
    icon: Target,
    title: "Hyperfocus on AI",
    description: "Master the latest in AI with focused modules on tools, trends, and technologies."
  }
];

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden" 
      style={getBackgroundStyle()}
    >
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Enhanced Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-32 left-20 w-96 h-96 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-full blur-3xl transition-all duration-1000 ${isVisible ? 'animate-pulse opacity-100' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 rounded-full blur-3xl transition-all duration-1000 delay-500 ${isVisible ? 'animate-pulse opacity-100' : 'opacity-0'}`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl transition-all duration-1000 delay-1000 ${isVisible ? 'animate-pulse opacity-100' : 'opacity-0'}`}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center space-x-2 bg-slate-800/60 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-slate-700/50 shadow-xl">
            <Sparkles className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-medium text-gray-300">AI-Powered Features</span>
          </div>
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-6">
            Experience the Future of
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> AI Interaction</span>
          </h2>
          <p className="md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover powerful AI capabilities that transform how you communicate, analyze, and scale your digital presence
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {cardData.map((card, index) => (
            <div 
              key={index}
              className={`relative w-full h-64 bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl transform perspective-1000 group hover:scale-105 transition-all duration-500 hover:shadow-cyan-500/20 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${(index + 1) * 200}ms`
              }}
            >
              {/* Card Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700/30 via-transparent to-slate-900/50 rounded-xl"></div>
              
              {/* Strip Animation - Original direction but mirrored 180deg */}
              <div className="absolute inset-0 overflow-hidden">
                <div 
                  className={`absolute w-3 h-96 bg-gray-400 opacity-60 transform rotate-135 origin-center group-hover:opacity-80 transition-opacity duration-300 ${
                    isVisible ? '' : 'opacity-0'
                  }`}
                  style={{
                    background: 'linear-gradient(to bottom, transparent, #9ca3af, transparent)',
                    animation: isVisible ? `moveStripMirrored ${3 + index * 0.5}s linear infinite` : 'none',
                    animationDelay: `${(index + 1) * 300}ms`
                  }}
                ></div>
              </div>

              {/* Dot Pattern Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    radial-gradient(circle at 20% 30%, #00ffff 1px, transparent 1px),
                    radial-gradient(circle at 60% 70%, #00ffff 1px, transparent 1px),
                    radial-gradient(circle at 80% 20%, #00ffff 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}></div>
              </div>

              {/* Floating Particles */}
              <div className="absolute inset-0">
                <div className={`absolute top-6 left-8 w-1 h-1 bg-cyan-400 rounded-full transition-all duration-1000 ${isVisible ? 'opacity-60 animate-pulse' : 'opacity-0'}`}></div>
                <div className={`absolute top-12 right-12 w-0.5 h-0.5 bg-blue-400 rounded-full transition-all duration-1000 delay-200 ${isVisible ? 'opacity-40 animate-ping' : 'opacity-0'}`}></div>
                <div 
                  className={`absolute bottom-8 left-16 w-1 h-1 bg-green-400 rounded-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-30' : 'opacity-0'}`}
                  style={{animation: isVisible ? `float ${4 + index}s ease-in-out infinite` : 'none'}}
                ></div>
              </div>

              {/* Card Content */}
              <div className="relative z-10 p-6 h-full flex flex-col">
                {/* Icon */}
                <div className="mb-4 group/icon">
                  <div className="w-12 h-12 relative cursor-pointer transform transition-all duration-300 hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 rounded-xl shadow-inner border border-slate-600/50 transform transition-all duration-300 group-hover/icon:shadow-lg" 
                         style={{
                           boxShadow: 'inset 2px 2px 6px rgba(0,0,0,0.5), inset -2px -2px 6px rgba(255,255,255,0.1), 0 4px 12px rgba(0,0,0,0.3)'
                         }}>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <card.icon 
                        className="w-6 h-6 text-cyan-400 transition-all duration-300 group-hover/icon:text-cyan-300 group-hover/icon:drop-shadow-lg" 
                        style={{ 
                          filter: 'drop-shadow(0 0 4px #22d3ee)',
                          transition: 'filter 0.3s ease'
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-white text-lg font-bold mb-3 tracking-wide group-hover:text-cyan-100 transition-colors duration-300" 
                      style={{
                        textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(34, 211, 238, 0.3)'
                      }}>
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {card.description}
                  </p>
                </div>

                {/* Top-right gradient */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-500/20 via-cyan-500/10 to-transparent rounded-tr-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes moveStripMirrored {
          0% { 
            transform: rotate(135deg) translateX(-150%) translateY(50%); 
          }
          100% { 
            transform: rotate(135deg) translateX(250%) translateY(-50%); 
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-10px) rotate(180deg); 
            opacity: 0.7;
          }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }

        .rotate-135 {
          transform: rotate(135deg);
        }
      `}</style>
    </div>
  );
};

export default AIFeaturesSectionDark;
