import React, { useState, useRef, useEffect } from 'react';
import { Clock, Users, Star, Play, ArrowRight, Brain, Code, TrendingUp, Award, Zap, CheckCircle, Timer, Globe, ChevronLeft, ChevronRight } from "lucide-react";

const CoursesSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const startTime = useRef(0);
  
  const courses = [
    {
      id: 1,
      title: "Machine Learning Fundamentals",
      subtitle: "Complete Guide to ML Mastery",
      description: "Master the core concepts of machine learning with hands-on projects, real-world applications, and industry best practices from Google engineers.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
      level: "Beginner",
      duration: "8 weeks",
      totalHours: "40 hours",
      students: "12,547",
      rating: 4.9,
      reviews: 2834,
      price: "₹199",
      originalPrice: "₹299",
      discount: "33% OFF",
      instructor: "Dr. Sarah Chen",
      instructorTitle: "Former Google AI Researcher",
      features: [
        "Python Programming Mastery",
        "Supervised & Unsupervised Learning",
        "Model Building & Evaluation",
        "Real-world Project Portfolio",
        "Industry Certification",
        "1-on-1 Mentorship Sessions"
      ],
      skills: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      outcomes: ["Build ML models", "Data analysis", "Career transition", "Certification"],
      aiFeatures: ["Smart Learning Path", "AI Tutor", "Progress Tracking"],
      popular: false,
      newContent: true,
      difficulty: 65,
      completionRate: 94
    },
    {
      id: 2,
      title: "Deep Learning & Neural Networks",
      subtitle: "Advanced AI Model Development",
      description: "Dive deep into neural networks, CNNs, RNNs, and Transformers. Build sophisticated AI models using TensorFlow and PyTorch.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      level: "Advanced",
      duration: "12 weeks",
      totalHours: "75 hours",
      students: "8,293",
      rating: 4.8,
      reviews: 1847,
      price: "₹399",
      originalPrice: "₹599",
      discount: "33% OFF",
      instructor: "Prof. Marcus Rodriguez",
      instructorTitle: "Senior AI Engineer at OpenAI",
      features: [
        "TensorFlow & PyTorch Mastery",
        "Computer Vision Projects",
        "Natural Language Processing",
        "Generative AI Models",
        "MLOps & Deployment",
        "Capstone Project Portfolio"
      ],
      skills: ["TensorFlow", "PyTorch", "Computer Vision", "NLP", "GANs"],
      outcomes: ["Build neural networks", "Deploy AI models", "Research skills", "Expert certification"],
      aiFeatures: ["Adaptive Curriculum", "AI Code Assistant", "Real-time Feedback"],
      popular: true,
      newContent: false,
      difficulty: 95,
      completionRate: 89
    },
    {
      id: 3,
      title: "AI for Business Leaders",
      subtitle: "Strategic AI Implementation",
      description: "Strategic AI implementation and decision-making for executives, managers, and entrepreneurs looking to transform their organizations.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      level: "Executive",
      duration: "6 weeks",
      totalHours: "25 hours",
      students: "5,147",
      rating: 4.9,
      reviews: 1234,
      price: "₹499",
      originalPrice: "₹799",
      discount: "38% OFF",
      instructor: "Emily Johnson",
      instructorTitle: "Chief AI Officer at Microsoft",
      features: [
        "AI Strategy Development",
        "ROI Analysis & Metrics",
        "Team Leadership in AI",
        "Implementation Roadmaps",
        "Risk Assessment",
        "Executive Networking"
      ],
      skills: ["Strategy", "Leadership", "ROI Analysis", "Risk Management", "Innovation"],
      outcomes: ["AI strategy", "Team leadership", "ROI optimization", "Industry recognition"],
      aiFeatures: ["Executive Insights", "Industry Analytics", "Peer Networking"],
      popular: false,
      newContent: true,
      difficulty: 45,
      completionRate: 96
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner": return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "Advanced": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Executive": return "bg-purple-100 text-purple-700 border-purple-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  // Simplified touch/mouse handlers
  const handleStart = (clientX: number) => {
    isDragging.current = true;
    startX.current = clientX;
    currentX.current = clientX;
    startTime.current = Date.now();
  };

  const handleMove = (clientX: number) => {
    if (!isDragging.current) return;
    currentX.current = clientX;
  };

  const handleEnd = () => {
    if (!isDragging.current) return;
    
    const deltaX = currentX.current - startX.current;
    const deltaTime = Date.now() - startTime.current;
    const threshold = 50;
    const maxTime = 300; // Maximum time for a swipe gesture
    
    isDragging.current = false;
    
    // Only trigger swipe if movement is significant and quick enough
    if (Math.abs(deltaX) > threshold && deltaTime < maxTime) {
      if (deltaX > 0) {
        // Swiped right - go to previous
        setActiveIndex(prev => (prev === 0 ? courses.length - 1 : prev - 1));
      } else {
        // Swiped left - go to next
        setActiveIndex(prev => (prev === courses.length - 1 ? 0 : prev + 1));
      }
    }
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging.current) {
      // e.preventDefault(); // Only prevent default when actively dragging
      handleMove(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.stopPropagation();
    handleEnd();
  };

  // Mouse event handlers (optional - for desktop testing)
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      e.preventDefault();
      handleMove(e.clientX);
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    handleEnd();
  };

  // Calculate transform for smooth centering
  const getTransform = () => {
    const cardWidth = 320;
    const gap = 0;
    const containerWidth = window.innerWidth;
    const centerPosition = (containerWidth - cardWidth) / 2;
    const cardPosition = activeIndex * (cardWidth + gap);
    return centerPosition - cardPosition;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 backdrop-blur-sm rounded-full text-sm font-semibold text-blue-800 mb-6 border border-blue-200">
            <Brain className="w-4 h-4 mr-2 text-blue-600" />
            AI-Powered Course Catalog
            <div className="w-2 h-2 bg-blue-600 rounded-full ml-2 animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transform Your Career with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Expert-Led AI Courses
            </span>
          </h2>
          <p className="md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Choose from our comprehensive collection of AI courses, designed by industry experts 
            and enhanced with AI-powered learning technology for maximum effectiveness.
          </p>
        </div>

        {/* Desktop Grid - Hidden on Mobile */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <div 
              key={course.id}
              className={`relative overflow-hidden transition-all duration-700 hover:shadow-2xl border-0 bg-white/80 backdrop-blur-sm rounded-2xl ${
                course.popular ? 'ring-2 ring-blue-500 shadow-xl scale-105' : 'shadow-lg'
              }`}
            >
              {/* Course Card Content - Same as original */}
              <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                {course.popular && (
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </div>
                )}
                {course.newContent && (
                  <div className="border border-emerald-300 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Zap className="w-3 h-3 mr-1" />
                    New Content
                  </div>
                )}
              </div>

              <div className="relative overflow-hidden rounded-t-2xl">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white text-sm">
                    <span className="font-semibold">{course.totalHours}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getLevelColor(course.level)}`}>
                    {course.level}
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{course.rating}</span>
                    <span>({course.reviews.toLocaleString()})</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold hover:text-blue-600 transition-colors mb-1">
                  {course.title}
                </h3>
                <p className="text-sm font-medium text-blue-600 mb-2">{course.subtitle}</p>
                {/* <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {course.description}
                </p> */}

                <div className="flex items-center space-x-3 mb-4 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">
                      {course.instructor.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{course.instructor}</div>
                    <div className="text-xs text-gray-600">{course.instructorTitle}</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="text-3xl font-black text-blue-600">
                        {course.price}
                      </div>
                      {course.originalPrice && (
                        <div className="text-lg text-gray-500 line-through">
                          {course.originalPrice}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center">
                    <Award className="w-4 h-4 mr-2" />
                    Enroll Now & Start Learning
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel - Fixed Swipe Implementation */}
        <div className="lg:hidden mb-16 mx-auto">
          {/* Carousel Container */}
          <div className="relative -ml-5">
            <div 
              ref={carouselRef}
              className="flex ml-6 transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(${getTransform()}px)`,
                transition: isDragging.current ? 'none' : 'transform 0.5s ease-out'
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            >
              {courses.map((course, index) => {
                const isActive = index === activeIndex;

                return (
                  <div 
                    key={course.id}
                    className={`w-72 flex-shrink-0 transition-all mx-2 duration-500 select-none ${
                      isActive 
                        ? 'opacity-100 scale-105' 
                        : 'opacity-70 scale-*5'
                    }`}
                  >
                    <div className={`relative overflow-hidden transition-all duration-500 shadow-xl bg-white backdrop-blur-sm max-w-72 rounded-2xl ${
                      course.popular ? 'ring-2 ring-blue-500' : 'border border-gray-200'
                    }`}>
                      {/* Rest of your card content remains the same */}
                      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                        {course.popular && (
                          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </div>
                        )}
                        {course.newContent && (
                          <div className="border border-emerald-300 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Zap className="w-3 h-3 mr-1" />
                            New
                          </div>
                        )}
                        {course.discount && (
                          <div className="border border-red-300 text-red-600 bg-red-50 px-3 py-1 rounded-full text-xs font-semibold">
                            {course.discount}
                          </div>
                        )}
                      </div>

                      <div className="relative overflow-hidden rounded-t-2xl">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-full h-40 object-cover"
                          draggable={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="flex items-center justify-between text-white text-sm">
                            <span className="font-semibold">{course.totalHours}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3">
                        <div className="flex items-center justify-between mb-3">
                          <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(course.level)}`}>
                            {course.level}
                          </div>
                          <div className="flex items-center space-x-1 text-sm text-gray-600">
                            <span className="font-semibold">{course.rating}</span>
                            <span className="text-xs">({course.reviews.toLocaleString()})</span>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold mb-1 line-clamp-2">
                          {course.title}
                        </h3>
                        <p className="text-sm font-medium text-blue-600 mb-2">{course.subtitle}</p>
                        {/* <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                          {course.description}
                        </p> */}

                        <div className="flex items-center space-x-3 mb-4 p-3 bg-blue-50 rounded-lg">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-white">
                              {course.instructor.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-semibold">{course.instructor}</div>
                            <div className="text-xs text-gray-600">{course.instructorTitle}</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Users className="w-4 h-4" />
                            <span>{course.students}</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {course.skills.slice(0, 3).map((skill) => (
                              <div key={skill} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium border border-blue-200">
                                {skill}
                              </div>
                            ))}
                            {course.skills.length > 3 && (
                              <span className="text-xs text-blue-600 font-medium">+{course.skills.length - 3}</span>
                            )}
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg border border-blue-200 mb-4">
                          <h4 className="font-semibold text-sm mb-2 flex items-center text-blue-700">
                            <Brain className="w-4 h-4 mr-2" />
                            AI-Enhanced Learning
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {course.aiFeatures.map((feature) => (
                              <div key={feature} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded border-0">
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-gray-200">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                              <div className="text-2xl font-black text-blue-600">
                                {course.price}
                              </div>
                              {course.originalPrice && (
                                <div className="text-sm text-gray-500 line-through">
                                  {course.originalPrice}
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center">
                            <Award className="w-4 h-4 mr-2" />
                            Enroll Now
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {courses.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-100 to-purple-100 backdrop-blur-sm rounded-3xl p-12 border border-blue-200">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-blue-200 rounded-full text-sm font-medium text-blue-800 mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Learning Experience
              <div className="w-2 h-2 bg-blue-600 rounded-full ml-2 animate-pulse"></div>
            </div>
            
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join the{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Revolution?
              </span>
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              New courses added monthly. Join our community of AI professionals and 
              accelerate your career with cutting-edge skills.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Explore All Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-600 py-3 px-6 rounded-lg font-semibold flex items-center justify-center transition-all">
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
