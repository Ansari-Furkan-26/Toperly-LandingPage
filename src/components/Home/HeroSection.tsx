import React, { useState, useEffect } from 'react';
import { Brain, Zap, TrendingUp, ArrowRight, Shield, Cpu, Database, Users, Atom, Network, Eye, Sparkles } from 'lucide-react';

const DarkAIHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger loading animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      clearTimeout(timer);
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

  const getTextColor = () => {
    return 'text-white';
  };

  const getAccentColor = () => {
    return 'text-emerald-400';
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden mt-4 md:mt-12 py-20"
      style={getBackgroundStyle()}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Hero Content */}
          <div className="text-left">
            {/* Premium Badge with Zoom Animation */}
            <div 
              className={`inline-flex items-center px-6 py-3 backdrop-blur-sm rounded-full text-sm font-semibold mb-8 border shadow-2xl ${
                isLoaded ? 'animate-zoom-in opacity-100 scale-100' : 'opacity-0 scale-150'
              } bg-emerald-500/20 text-emerald-400 border-emerald-500/30`}
              style={{ animationDelay: '0.2s' }}
            >
              <Shield className="w-4 h-4 mr-2 animate-pulse text-emerald-400" />
              Verify to Trust AI Platform
              <div className="w-2 h-2 rounded-full ml-2 animate-pulse bg-emerald-400"></div>
            </div>
            
            {/* Main Heading with Staggered Animation */}
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] mb-8 tracking-tight ${getTextColor()}`}>
                Making{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                  India
                </span>
              <span 
                className={`relative block ${
                  isLoaded ? 'animate-slide-up-delayed opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ animationDelay: '0.6s' }}
              >
                
                <div className="absolute -inset-2 bg-emerald-400/20 opacity-20 blur-xl animate-pulse-glow"></div>
              </span>
              <span 
                className={`block text-4xl sm:text-5xl lg:text-6xl font-light opacity-80 ${
                  isLoaded ? 'animate-slide-up-delayed opacity-80 translate-y-0' : 'opacity-0 translate-y-20'
                } ${getTextColor()}`}
                style={{ animationDelay: '0.8s' }}
              >
                Ready for the Future with{" "}
              </span>
              <span 
                className={`bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent ${
                  isLoaded ? 'animate-slide-up-delayed opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ animationDelay: '1s' }}
              >
                AI
              </span>
            </h1>
            
            {/* Description with Fade In */}
            <p 
              className={`sm:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed ${
                isLoaded ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } text-gray-300`}
              style={{ animationDelay: '1.2s' }}
            >
              Join <span className={`font-semibold ${getAccentColor()}`}>50,000+</span> professionals mastering 
              cutting-edge AI skills through our immersive, verifiable learning platform.
            </p>

            {/* Action Button with Hover Animation */}
            <div 
              className={`flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16 ${
                isLoaded ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: '1.4s' }}
            >
              <button className="group relative px-8 py-4 rounded-2xl font-semibold text-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-black shadow-emerald-500/25 shadow-2xl hover:shadow-3xl transform hover:scale-105">
                <Zap className="w-5 h-5 mr-3 inline group-hover:animate-bounce" />
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-3 inline group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-8 text-left">
              {[
                { value: '50K+', label: 'AI Professionals', icon: Users, delay: '1.6s' },
                { value: '200+', label: 'Expert Courses', icon: Cpu, delay: '1.8s' },
                { value: '98%', label: 'Success Rate', icon: TrendingUp, delay: '2s' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`group ${
                    isLoaded ? 'animate-scale-in opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <div className={`text-3xl sm:text-4xl font-black mr-2 ${getAccentColor()}`}>
                      {stat.value}
                    </div>
                    <stat.icon className={`w-6 h-6 group-hover:animate-bounce ${getAccentColor()}`} />
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    {stat.label}
                  </div>
                  <div className="w-full h-1 rounded-full mt-2 bg-emerald-200/20">
                    <div className={`h-full rounded-full animate-progress-fill bg-gradient-to-r from-emerald-400 to-cyan-400`} 
                         style={{ width: stat.value === '98%' ? '98%' : '100%', animationDelay: `${2.2 + index * 0.2}s` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive AI Visualization */}
          <div 
            className={`relative ${
              isLoaded ? 'animate-fade-in opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{ animationDelay: '1s' }}
          >
            <div className="relative group">
              {/* Central AI Core */}
              <div className="relative mx-auto w-80 h-80 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 shadow-emerald-500/25 shadow-2xl backdrop-blur-sm border border-white/10">
                
                {/* AI Brain Visualization */}
                <div className="absolute inset-8 flex items-center justify-center">
                  <div className="relative text-emerald-400">
                    <Brain className="w-32 h-32 animate-pulse-slow" />
                    <div className="absolute inset-0 ">
                      {/* <Atom className="w-32 h-32 opacity-30" /> */}
                    </div>
                  </div>
                </div>

                {/* Orbiting Elements */}
                {[
                  { icon: Shield, position: 'top-4 left-4', delay: '0s' },
                  { icon: Database, position: 'top-4 right-4', delay: '1s' },
                  { icon: Network, position: 'bottom-4 left-4', delay: '2s' },
                  { icon: Eye, position: 'bottom-4 right-4', delay: '3s' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`absolute ${item.position} p-3 rounded-xl backdrop-blur-lg  bg-black/20 border-emerald-500/30 shadow-emerald-500/20 border shadow-lg`}
                    style={{ animationDelay: item.delay }}
                  >
                    <item.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                ))}

                {/* Data Flow Animation */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 rounded-full animate-data-flow bg-emerald-400"
                      style={{
                        animationDelay: `${i * 1}s`,
                        left: '50%',
                        top: '50%'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Info Cards */}
              <div className="absolute -top-6 -right-6 p-4 rounded-2xl backdrop-blur-lg  bg-black/40 border-emerald-500/20 shadow-emerald-500/20 border shadow-lg">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-6 h-6 animate-pulse text-emerald-400" />
                  <div>
                    <div className="text-xs font-semibold text-emerald-400">
                      Neural Processing
                    </div>
                    <div className="text-xs text-gray-400">
                      Real-time Verification
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-6 -left-6 p-4 rounded-2xl backdrop-blur-lg  bg-black/40 border-emerald-500/20 shadow-emerald-500/20 border shadow-lg" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <Database className="w-6 h-6 animate-pulse text-emerald-400" />
                  <div>
                    <div className="text-xs font-semibold text-emerald-400">
                      Trusted AI Base
                    </div>
                    <div className="text-xs text-gray-400">
                      1M+ Verified Models
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes zoom-in {
          0% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes slide-up-delayed {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fade-in-up {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes scale-in {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes float-network {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse-line {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        @keyframes data-flow {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(100px) rotate(0deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(100px) rotate(-360deg); opacity: 0; }
        }
        
        @keyframes progress-fill {
          0% { width: 0%; }
          100% { width: var(--final-width, 100%); }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-zoom-in { animation: zoom-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-slide-up-delayed { animation: slide-up-delayed 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-scale-in { animation: scale-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-float-network { animation: float-network linear infinite; }
        .animate-pulse-line { animation: pulse-line 2s ease-in-out infinite; }
        .animate-data-flow { animation: data-flow 4s linear infinite; }
        .animate-progress-fill { animation: progress-fill 2s ease-out forwards; }
        .animate-gradient-shift { animation: gradient-shift 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default DarkAIHero;