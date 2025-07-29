import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote, Brain, TrendingUp } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Data Scientist at Google",
      company: "Google",
      content: "Toperly's AI-powered learning completely revolutionized how I approach machine learning. The adaptive curriculum and real-time feedback accelerated my skills beyond what I thought possible.",
      rating: 5,
      initials: "SC",
      achievement: "200% salary increase"
    },
    {
      name: "Marcus Rodriguez",
      role: "AI Product Manager at Microsoft",
      company: "Microsoft", 
      content: "The business-focused AI course gave me strategic insights that transformed how I lead AI initiatives. Now I'm driving company-wide AI adoption with confidence.",
      rating: 5,
      initials: "MR",
      achievement: "Led $50M AI project"
    },
    {
      name: "Emily Johnson",
      role: "ML Engineer at Tesla",
      company: "Tesla",
      content: "The deep learning course was phenomenal. The hands-on approach with real neural networks prepared me for the cutting-edge work I do daily in autonomous vehicles.",
      rating: 5,
      initials: "EJ",
      achievement: "Published 3 AI papers"
    },
    {
      name: "David Kim",
      role: "AI Researcher at OpenAI",
      company: "OpenAI",
      content: "Toperly doesn't just teach theory—they show you how to build production-ready AI systems. The project-based learning methodology is absolutely unmatched in the industry.",
      rating: 5,
      initials: "DK",
      achievement: "Founded AI startup"
    },
    {
      name: "Lisa Wang",
      role: "Chief Technology Officer",
      company: "Fortune 500",
      content: "As a CTO, I needed to understand AI's transformative potential. Toperly's executive course gave me the strategic framework to lead our company's AI transformation successfully.",
      rating: 5,
      initials: "LW",
      achievement: "Led digital transformation"
    },
    {
      name: "James Miller",
      role: "AI Solutions Architect",
      company: "Amazon Web Services",
      content: "The AI-powered learning system adapted perfectly to my schedule and learning style. I went from beginner to deploying production ML models in just 3 months.",
      rating: 5,
      initials: "JM",
      achievement: "AWS ML certification"
    }
  ];

  return (
    <section id="reviews" className="py-section bg-gradient-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Trusted by{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Join thousands of AI professionals at top companies who've transformed their careers 
            with our revolutionary learning platform.
          </p>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { value: "98%", label: "Course Completion", icon: TrendingUp },
            { value: "4.9/5", label: "Average Rating", icon: Star },
            { value: "89%", label: "Career Advancement", icon: Brain },
            { value: "50K+", label: "Success Stories", icon: Quote }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow-primary animate-pulse-glow">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials - Horizontal scroll on mobile */}
        <div className="relative">
          {/* Mobile horizontal scroll container */}
          <div className="md:hidden pb-6 -mx-4 px-4">
            <div className="flex overflow-x-auto space-x-4 py-2 scrollbar-hide">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.name}
                  className="flex-none w-[85vw] max-w-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="group hover:shadow-elevated transition-all duration-700 border-0 bg-card/90 backdrop-blur-sm h-full animate-scale-in overflow-hidden">
                    <CardContent className="p-6 relative h-full">
                      <div className="absolute top-4 right-4">
                        <Quote className="w-8 h-8 text-primary/20" />
                      </div>
                      
                      <div className="flex space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex items-center space-x-4 mb-3">
                        <Avatar className="w-10 h-10 group-hover:ring-2 group-hover:ring-primary/20 transition-all">
                          <AvatarFallback className="bg-gradient-primary text-primary-foreground font-bold">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-bold">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          <div className="text-xs font-semibold text-primary">{testimonial.company}</div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-neural p-2 rounded-lg border border-primary/20">
                        <div className="text-xs font-semibold text-primary">Achievement:</div>
                        <div className="text-xs text-muted-foreground">{testimonial.achievement}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop grid layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="group hover:shadow-elevated transition-all duration-700 border-0 bg-card/90 backdrop-blur-sm animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 relative">
                  <div className="absolute top-4 right-4">
                    <Quote className="w-8 h-8 text-primary/20" />
                  </div>
                  
                  <div className="flex space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar className="w-12 h-12 group-hover:ring-2 group-hover:ring-primary/20 transition-all">
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground font-bold text-lg">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-lg">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs font-semibold text-primary">{testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-neural p-3 rounded-lg border border-primary/20">
                    <div className="text-sm font-semibold text-primary">Achievement:</div>
                    <div className="text-xs text-muted-foreground">{testimonial.achievement}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;