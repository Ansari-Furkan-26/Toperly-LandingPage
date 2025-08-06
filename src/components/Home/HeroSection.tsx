import React, { useState, useEffect } from 'react';
import { Brain, Zap, TrendingUp, ArrowRight, Shield, Cpu, Database, Users, Atom, Network, Eye, Sparkles } from 'lucide-react';

const DarkAIHero = () => {
  const [loadingStage, setLoadingStage] = useState('bg'); // 'bg' -> 'content' -> 'complete'
  const [showContent, setShowContent] = useState(false);
  const [animateChip, setAnimateChip] = useState(false);

  useEffect(() => {
    // Simultaneous loading sequence
    const sequence = [
      { delay: 0, action: () => setLoadingStage('bg') },
      { delay: 500, action: () => setLoadingStage('content') },
      { delay: 600, action: () => setShowContent(true) },
      { delay: 600, action: () => setAnimateChip(true) }, // Start chip animation at same time
      { delay: 800, action: () => setLoadingStage('complete') }
    ];

    const timers = sequence.map(({ delay, action }) => 
      setTimeout(action, delay)
    );

    return () => timers.forEach(clearTimeout);
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

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden mt-4 md:mt-12 py-20"
      style={getBackgroundStyle()}
    >
      {/* Enhanced Animated Background Elements */}
      <div className={`absolute inset-0 overflow-hidden transition-all duration-1000 ${
        loadingStage === 'bg' ? 'animate-bg-reveal' : 'opacity-100'
      }`}>
        
        {/* Animated Grid Pattern */}
        <div 
          className={`absolute inset-0 transition-all duration-1000 ${
            loadingStage !== 'bg' ? 'opacity-10' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: loadingStage !== 'bg' ? 'gridSlide 2s ease-out' : 'none'
          }}
        />

        {/* Flowing Light Beams */}
        {loadingStage !== 'bg' && (
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-1 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent animate-beam-flow"></div>
            <div className="absolute bottom-32 right-20 w-80 h-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-beam-flow-reverse"></div>
          </div>
        )}
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Enhanced Content Animation */}
          <div className={`text-left transition-all duration-1000 ${
            showContent 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}>
            
            {/* Premium Badge with Slide from Left Animation */}
            <div 
              className={`inline-flex items-center px-6 py-3 backdrop-blur-sm rounded-full text-sm font-semibold mb-8 border shadow-2xl transition-all duration-800 ${
                showContent ? 'animate-slide-from-left' : 'opacity-0 transform translate-x-[-100px]'
              } bg-emerald-500/20 text-emerald-400 border-emerald-500/30`}
            >
              <Shield className="w-4 h-4 mr-2 animate-spin-slow text-emerald-400" />
              Verify to Trust AI Platform
              <div className="w-2 h-2 rounded-full ml-2 animate-pulse-infinite bg-emerald-400"></div>
            </div>
            
            {/* Main Heading with Fade Up Animation */}
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] mb-8 tracking-tight text-white transition-all duration-1000 ${
              showContent ? 'animate-fade-up' : 'opacity-0 transform translate-y-8'
            }`}>
              Making{" "}
              <span className={`bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${
                showContent ? 'animate-gradient-reveal-infinite' : 'opacity-0'
              }`}>
                India
              </span>
              <span 
                className={`relative block transition-all duration-1000 ${
                  showContent ? 'animate-fade-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="absolute -inset-2 bg-emerald-400/20 opacity-20 blur-xl animate-pulse-glow-infinite"></div>
              </span>
              <span 
                className={`block text-4xl sm:text-5xl lg:text-6xl font-light opacity-80 text-white transition-all duration-1000 ${
                  showContent ? 'animate-fade-up' : 'opacity-0 translate-y-8'
                }`}
              >
                Ready for the Future with{" "}
              </span>
              <span 
                className={`bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${
                  showContent ? 'animate-gradient-reveal-infinite' : 'opacity-0'
                }`}
              >
                AI
              </span>
            </h1>
            
            {/* Description - Slide from Right */}
            <p 
              className={`sm:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-gray-300 transition-all duration-1000 ${
                showContent ? 'animate-slide-from-right' : 'opacity-0 transform translate-x-[100px]'
              }`}
            >
              Join <span className="font-semibold text-emerald-400 animate-text-glow">50,000+</span> professionals mastering 
              cutting-edge AI skills through our immersive, verifiable learning platform.
            </p>

            {/* Action Button - Scale In Animation */}
            <div 
              className={`flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16 transition-all duration-1000 ${
                showContent ? 'animate-scale-in' : 'opacity-0 transform scale-75'
              }`}
            >
              <button className="group relative px-8 py-4 rounded-2xl font-semibold text-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-black shadow-emerald-500/25 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-button-pulse">
                <Zap className="w-5 h-5 mr-3 inline group-hover:animate-bounce animate-icon-rotate" />
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-3 inline group-hover:translate-x-1 transition-transform animate-arrow-bounce" />
                <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Stats with Mixed Animations */}
            <div className="grid grid-cols-3 gap-8 text-left">
              {[
                { value: '50K+', label: 'AI Professionals', icon: Users, animation: 'animate-slide-from-left' },
                { value: '200+', label: 'Expert Courses', icon: Cpu, animation: 'animate-scale-in' },
                { value: '98%', label: 'Success Rate', icon: TrendingUp, animation: 'animate-slide-from-right' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`group transition-all duration-1000 ${
                    showContent ? stat.animation : 'opacity-0'
                  }`}
                >
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <div className="text-3xl sm:text-4xl font-black mr-2 text-emerald-400 animate-number-pulse">
                      {stat.value}
                    </div>
                    <stat.icon className="w-6 h-6 group-hover:animate-bounce text-emerald-400 animate-icon-float" />
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    {stat.label}
                  </div>
                  <div className="w-full h-1 rounded-full mt-2 bg-emerald-200/20">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 animate-progress-infinite" 
                      style={{ 
                        width: stat.value === '98%' ? '98%' : '100%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Enhanced AI Chip Visualization with Scale In */}
          <div 
            className={`relative transition-all duration-1000 ${
              showContent 
                ? 'opacity-100 transform translate-y-0 scale-100' 
                : 'opacity-0 transform translate-y-8 scale-90'
            }`}
          >
            <div className="relative group">
              
              {/* Main AI Chip Container */}
              <div className="relative mx-auto w-80 h-80 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 shadow-emerald-500/25 shadow-2xl backdrop-blur-sm border border-white/10 overflow-hidden animate-container-glow">
                
                {/* Circuit Board Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" viewBox="0 0 320 320" className="absolute inset-0">
                    {/* Circuit Lines */}
                    {animateChip && (
                      <>
                        {/* Horizontal Lines */}
                        <path d="M0 80 L320 80" stroke="#10b981" strokeWidth="1" className="animate-circuit-draw" />
                        <path d="M0 160 L320 160" stroke="#22d3ee" strokeWidth="1" className="animate-circuit-draw" />
                        <path d="M0 240 L320 240" stroke="#10b981" strokeWidth="1" className="animate-circuit-draw" />
                        
                        {/* Vertical Lines */}
                        <path d="M80 0 L80 320" stroke="#22d3ee" strokeWidth="1" className="animate-circuit-draw" />
                        <path d="M160 0 L160 320" stroke="#10b981" strokeWidth="1" className="animate-circuit-draw" />
                        <path d="M240 0 L240 320" stroke="#22d3ee" strokeWidth="1" className="animate-circuit-draw" />
                        
                        {/* Connection Points */}
                        <circle cx="80" cy="80" r="3" fill="#10b981" className="animate-pulse-point-infinite" />
                        <circle cx="160" cy="160" r="4" fill="#22d3ee" className="animate-pulse-point-infinite" />
                        <circle cx="240" cy="240" r="3" fill="#10b981" className="animate-pulse-point-infinite" />
                        <circle cx="240" cy="80" r="3" fill="#22d3ee" className="animate-pulse-point-infinite" />
                        <circle cx="80" cy="240" r="3" fill="#10b981" className="animate-pulse-point-infinite" />
                      </>
                    )}
                  </svg>
                </div>

                {/* Central AI Brain */}
                <div className="absolute inset-8 flex items-center justify-center">
                  <div className={`relative text-emerald-400 transition-all duration-1000 ${
                    animateChip ? 'animate-brain-activate' : 'opacity-60'
                  }`}>
                    <Brain className="w-32 h-32 animate-brain-pulse" />
                    
                    {/* Neural Network Lines Emanating from Brain */}
                    {animateChip && (
                      <div className="absolute inset-0">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-px h-12 bg-gradient-to-t from-emerald-400/80 to-transparent animate-neural-pulse-infinite"
                            style={{
                              left: '50%',
                              top: '50%',
                              transformOrigin: 'bottom',
                              transform: `rotate(${i * 45}deg) translateY(-64px)`,
                              animationDelay: `${i * 0.2}s`
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Corner Chips with Circuit Animation */}
                {[
                  { icon: Shield, position: 'top-4 left-4', color: 'emerald' },
                  { icon: Database, position: 'top-4 right-4', color: 'cyan' },
                  { icon: Network, position: 'bottom-4 left-4', color: 'emerald' },
                  { icon: Eye, position: 'bottom-4 right-4', color: 'cyan' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`absolute ${item.position} p-3 rounded-xl backdrop-blur-lg bg-black/20 border shadow-lg transition-all duration-1000 ${
                      animateChip ? 'animate-chip-activate border-emerald-500/30 shadow-emerald-500/20' : 'border-gray-500/20'
                    }`}
                  >
                    <item.icon className={`w-6 h-6 ${
                      item.color === 'emerald' ? 'text-emerald-400' : 'text-cyan-400'
                    } ${animateChip ? 'animate-icon-spin' : ''}`} />
                  </div>
                ))}

                {/* Data Flow Particles */}
                {animateChip && [...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-emerald-400 animate-data-flow-infinite"
                    style={{
                      animationDelay: `${i * 0.8}s`,
                      left: '50%',
                      top: '50%'
                    }}
                  />
                ))}
              </div>

              {/* Enhanced Floating Info Cards */}
              <div className={`absolute -top-6 -right-6 p-4 rounded-2xl backdrop-blur-lg bg-black/40 border border-emerald-500/20 shadow-emerald-500/20 shadow-lg transition-all duration-1000 ${
                animateChip ? 'animate-info-card-reveal' : 'opacity-0 scale-75'
              }`}>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-6 h-6 animate-sparkle-rotate text-emerald-400" />
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
              
              <div className={`absolute bottom-6 -left-6 p-4 rounded-2xl backdrop-blur-lg bg-black/40 border border-emerald-500/20 shadow-emerald-500/20 shadow-lg transition-all duration-1000 ${
                animateChip ? 'animate-info-card-reveal' : 'opacity-0 scale-75'
              }`}>
                <div className="flex items-center space-x-2">
                  <Database className="w-6 h-6 animate-database-pulse text-emerald-400" />
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
        /* Background Animations */
        @keyframes bg-reveal {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes gridSlide {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 0.1; }
        }
        
        @keyframes beam-flow {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }
        
        @keyframes beam-flow-reverse {
          0% { transform: translateX(200%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(-100%); opacity: 0; }
        }

        /* Varied Content Animations */
        @keyframes slide-from-left {
          0% { transform: translateX(-100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slide-from-right {
          0% { transform: translateX(100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fade-up {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes scale-in {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        /* Infinite Animations */
        @keyframes gradient-reveal-infinite {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes pulse-infinite {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        @keyframes pulse-glow-infinite {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 5px #10b981; }
          50% { text-shadow: 0 0 20px #10b981, 0 0 30px #10b981; }
        }
        
        @keyframes button-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        @keyframes icon-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes arrow-bounce {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        
        @keyframes number-pulse {
          0%, 100% { transform: scale(1); color: #10b981; }
          50% { transform: scale(1.1); color: #22d3ee; }
        }
        
        @keyframes icon-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes progress-infinite {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(1); }
          100% { transform: scaleX(0); }
        }
        
        @keyframes container-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
          50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.5), 0 0 60px rgba(34, 211, 238, 0.3); }
        }
        
        @keyframes brain-pulse {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.05); filter: brightness(1.2); }
        }
        
        @keyframes neural-pulse-infinite {
          0% { opacity: 0; height: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; height: 48px; }
        }
        
        @keyframes pulse-point-infinite {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        
        @keyframes icon-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes data-flow-infinite {
          0% { 
            transform: translate(-50%, -50%) rotate(0deg) translateX(0px); 
            opacity: 0; 
          }
          25% { opacity: 1; }
          75% { opacity: 1; }
          100% { 
            transform: translate(-50%, -50%) rotate(360deg) translateX(120px); 
            opacity: 0; 
          }
        }
        
        @keyframes sparkle-rotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.2); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes database-pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }

        /* Static Animations */
        @keyframes circuit-draw {
          0% { stroke-dasharray: 0 1000; }
          100% { stroke-dasharray: 1000 1000; }
        }
        
        @keyframes brain-activate {
          0% { opacity: 0.6; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes chip-activate {
          0% { transform: scale(0.8); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes info-card-reveal {
          0% { transform: scale(0.8) translateY(20px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }

        /* Animation Classes */
        .animate-bg-reveal { animation: bg-reveal 1s ease-out forwards; }
        .animate-beam-flow { animation: beam-flow 3s ease-in-out infinite; }
        .animate-beam-flow-reverse { animation: beam-flow-reverse 3s ease-in-out infinite 1.5s; }
        
        /* Content Animation Classes */
        .animate-slide-from-left { animation: slide-from-left 0.8s ease-out forwards; }
        .animate-slide-from-right { animation: slide-from-right 0.8s ease-out forwards; }
        .animate-fade-up { animation: fade-up 0.8s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.8s ease-out forwards; }
        
        /* Infinite Animation Classes */
        .animate-gradient-reveal-infinite { 
          background-size: 200% auto;
          animation: gradient-reveal-infinite 3s ease-in-out infinite; 
        }
        .animate-pulse-infinite { animation: pulse-infinite 2s ease-in-out infinite; }
        .animate-pulse-glow-infinite { animation: pulse-glow-infinite 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-text-glow { animation: text-glow 2s ease-in-out infinite; }
        .animate-button-pulse { animation: button-pulse 3s ease-in-out infinite; }
        .animate-icon-rotate { animation: icon-rotate 3s linear infinite; }
        .animate-arrow-bounce { animation: arrow-bounce 2s ease-in-out infinite; }
        .animate-number-pulse { animation: number-pulse 2s ease-in-out infinite; }
        .animate-icon-float { animation: icon-float 3s ease-in-out infinite; }
        .animate-progress-infinite { 
          animation: progress-infinite 3s ease-in-out infinite;
          transform-origin: left;
        }
        .animate-container-glow { animation: container-glow 4s ease-in-out infinite; }
        .animate-brain-pulse { animation: brain-pulse 2s ease-in-out infinite; }
        .animate-neural-pulse-infinite { animation: neural-pulse-infinite 3s ease-in-out infinite; }
        .animate-pulse-point-infinite { animation: pulse-point-infinite 2s ease-in-out infinite; }
        .animate-icon-spin { animation: icon-spin 4s linear infinite; }
        .animate-data-flow-infinite { animation: data-flow-infinite 4s linear infinite; }
        .animate-sparkle-rotate { animation: sparkle-rotate 3s ease-in-out infinite; }
        .animate-database-pulse { animation: database-pulse 2s ease-in-out infinite; }
        
        /* Static Animation Classes */
        .animate-circuit-draw { 
          stroke-dasharray: 0 1000;
          animation: circuit-draw 2s ease-out forwards; 
        }
        .animate-brain-activate { animation: brain-activate 1s ease-out forwards; }
        .animate-chip-activate { animation: chip-activate 0.8s ease-out forwards; }
        .animate-info-card-reveal { animation: info-card-reveal 0.8s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default DarkAIHero;