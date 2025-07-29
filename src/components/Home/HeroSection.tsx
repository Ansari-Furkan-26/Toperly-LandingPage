import { Button } from "@/components/ui/button";
import { Brain, Zap, TrendingUp, ArrowRight, Play, Sparkles, Cpu, Database, Users } from "lucide-react";
import heroImage from "@/assets/ai-hero-premium.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen mt-4 md:mt-10 flex items-center justify-center bg-gradient-secondary relative overflow-hidden pt-20">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Neural Nodes */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-neural rounded-full opacity-30 animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-primary rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-gradient-accent rounded-full opacity-25 animate-float-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-gradient-primary rounded-full opacity-35 animate-float" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Neural Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="20" y1="30" x2="80" y2="70" stroke="url(#grad1)" strokeWidth="0.2" className="animate-pulse" />
          <line x1="10" y1="60" x2="90" y2="40" stroke="url(#grad1)" strokeWidth="0.2" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(215 100% 50%)" />
              <stop offset="100%" stopColor="hsl(195 100% 60%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Hero Content */}
          <div className="text-center lg:text-left animate-slide-up">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-accent/60 backdrop-blur-sm rounded-full text-sm font-semibold text-accent-foreground mb-8 border border-primary/20 animate-fade-in shadow-glow-secondary">
              <Sparkles className="w-4 h-4 mr-2 text-primary animate-bounce-subtle" />
              Premium AI Learning Experience
              <div className="w-2 h-2 bg-primary rounded-full ml-2 animate-neural-pulse"></div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] mb-8 tracking-tight">
             Making {" "}
              <span className="relative">
                <span className="bg-gradient-primary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                  India
                </span>
                <div className="absolute -inset-2 bg-gradient-primary opacity-20 blur-xl animate-pulse-glow"></div>
              </span>
              <br />
              <span className="text-4xl sm:text-5xl lg:text-6xl text-muted-foreground font-light">
                Ready for the Future with
              </span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI
              </span>
            </h1>
            
            <p className="text-xl sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Join <span className="font-semibold text-primary">50,000+</span> professionals mastering 
              cutting-edge AI skills through our immersive, hands-on learning platform.
            </p>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow-primary transform hover:scale-105 transition-all duration-500 text-lg px-8 py-4 h-auto group shadow-premium"
              >
                <Zap className="w-5 h-5 mr-3 group-hover:animate-bounce-subtle" />
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/60 hover:shadow-glow-secondary text-lg px-8 py-4 h-auto group backdrop-blur-sm"
              >
                <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Premium Stats with AI Indicators */}
            <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
              <div className="group animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <div className="text-3xl sm:text-4xl font-black text-primary mr-2">50K+</div>
                  <Users className="w-6 h-6 text-primary group-hover:animate-bounce-subtle" />
                </div>
                <div className="text-sm font-medium text-muted-foreground">AI Professionals</div>
                <div className="w-full h-1 bg-gradient-primary/20 rounded-full mt-2">
                  <div className="w-4/5 h-full bg-gradient-primary rounded-full animate-ai-flow"></div>
                </div>
              </div>
              <div className="group animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <div className="text-3xl sm:text-4xl font-black text-primary mr-2">200+</div>
                  <Cpu className="w-6 h-6 text-primary group-hover:animate-bounce-subtle" />
                </div>
                <div className="text-sm font-medium text-muted-foreground">Expert Courses</div>
                <div className="w-full h-1 bg-gradient-primary/20 rounded-full mt-2">
                  <div className="w-full h-full bg-gradient-primary rounded-full animate-ai-flow" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
              <div className="group animate-scale-in" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <div className="text-3xl sm:text-4xl font-black text-primary mr-2">98%</div>
                  <TrendingUp className="w-6 h-6 text-primary group-hover:animate-bounce-subtle" />
                </div>
                <div className="text-sm font-medium text-muted-foreground">Our Success Rate</div>
                <div className="w-full h-1 bg-gradient-primary/20 rounded-full mt-2">
                  <div className="w-[98%] h-full bg-gradient-primary rounded-full animate-ai-flow" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Hero Visual */}
          <div className="relative animate-fade-in">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated transform group-hover:scale-[1.02] transition-all duration-700">
                <img 
                  src={heroImage} 
                  alt="Advanced AI Technology Visualization" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-neural opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating AI Elements */}
              <div className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-lg shadow-glow-secondary rounded-2xl p-4 animate-float border border-primary/20">
                <div className="flex items-center space-x-2">
                  <Brain className="w-8 h-8 text-primary animate-pulse-glow" />
                  <div>
                    <div className="text-xs font-semibold text-primary">Neural Processing</div>
                    <div className="text-xs text-muted-foreground">Real-time Learning</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-1 -left-6 bg-card/90 backdrop-blur-lg shadow-glow-secondary rounded-2xl p-4 animate-float border border-primary/20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <Database className="w-8 h-8 text-primary animate-pulse-glow" />
                  <div>
                    <div className="text-xs font-semibold text-primary">AI Knowledge Base</div>
                    <div className="text-xs text-muted-foreground">1M+ Data Points</div>
                  </div>
                </div>
              </div>

              {/* Neural Network Overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="flex items-center space-x-4 animate-neural-pulse">
                  <div className="w-3 h-3 bg-primary rounded-full shadow-glow-primary"></div>
                  <div className="w-16 h-px bg-gradient-ai-flow"></div>
                  <div className="w-4 h-4 bg-primary-glow rounded-full shadow-glow-primary"></div>
                  <div className="w-16 h-px bg-gradient-ai-flow"></div>
                  <div className="w-3 h-3 bg-primary rounded-full shadow-glow-primary"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;