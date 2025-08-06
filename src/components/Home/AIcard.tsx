import React from 'react';
import { Sparkles} from 'lucide-react';

const AIFeaturesSectionDark = () => {
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
    <div className="min-h-screen relative overflow-hidden" style={getBackgroundStyle()}>
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

      {/* Background Glows - Dark Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main background glows with darker, more subtle colors */}
        <div className="absolute top-32 left-20 w-96 h-96 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        
        {/* Section Header - Dark Theme */}
        <div className="text-center mb-16">
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

        <div className="relative mx-auto w-80 h-56 bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl transform perspective-1000">
         <div className="absolute inset-0 bg-gradient-to-br from-slate-700/30 via-transparent to-slate-900/50 rounded-xl"></div>
         <div className="absolute inset-0 overflow-hidden">
           <div 
            className="absolute w-2.5 h-96 bg-gray-400 opacity-60 transform -rotate-45 origin-center"
            style={{
              background: 'linear-gradient(to bottom, transparent, #9ca3af, transparent)',
              animation: 'moveStrip 3s linear infinite'
            }}
          ></div>
        </div>
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
        <div className="absolute inset-0">
          <div className="absolute top-6 left-8 w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-12 right-12 w-0.5 h-0.5 bg-blue-400 rounded-full opacity-40 animate-ping"></div>
          <div className="absolute bottom-8 left-16 w-1 h-1 bg-green-400 rounded-full opacity-30" style={{animation: 'float 4s ease-in-out infinite'}}></div>
        </div>
        <div className="relative z-10 p-6 h-full flex flex-col">
          <div className="mb-6 group">
            <div className="w-14 h-14 relative cursor-pointer transform transition-all duration-300 hover:scale-110">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 rounded-xl shadow-inner border border-slate-600/50 transform transition-all duration-300 group-hover:shadow-lg" 
                   style={{
                     boxShadow: 'inset 2px 2px 6px rgba(0,0,0,0.5), inset -2px -2px 6px rgba(255,255,255,0.1), 0 4px 12px rgba(0,0,0,0.3)'
                   }}>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg 
                  className="w-7 h-7 text-cyan-400 transition-all duration-300 group-hover:text-cyan-300 group-hover:drop-shadow-lg" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ 
                    filter: 'drop-shadow(0 0 4px #22d3ee)',
                    transition: 'filter 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.filter = 'drop-shadow(0 0 12px #22d3ee) drop-shadow(0 0 20px #06b6d4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.filter = 'drop-shadow(0 0 4px #22d3ee)';
                  }}
                >
                  <circle cx="12" cy="12" r="3" strokeWidth="2"/>
                  <circle cx="6" cy="6" r="2" strokeWidth="2"/>
                  <circle cx="18" cy="6" r="2" strokeWidth="2"/>
                  <circle cx="6" cy="18" r="2" strokeWidth="2"/>
                  <circle cx="18" cy="18" r="2" strokeWidth="2"/>
                  <path d="M8.5 8.5l3 3m0-6l3 3m-6 0l3 3m0-6l3 3" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-white text-2xl font-bold mb-3 tracking-wide" 
                style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(34, 211, 238, 0.3)'
                }}>
              AI Community!
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed opacity-90">
              Explore ML with Kml! Our browser-based P2P protocol enables storage, training, and some area
            </p>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-cyan-500/20 via-cyan-500/10 to-transparent"></div>
        </div>
      </div>

      

      
      </div>

      <style jsx>{`
      @keyframes moveStrip {
          0% { 
            transform: rotate(-45deg) translateX(-150%) translateY(-50%); 
          }
          100% { 
            transform: rotate(-45deg) translateX(250%) translateY(50%); 
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

      `}</style>
    </div>
  );
};

export default AIFeaturesSectionDark;