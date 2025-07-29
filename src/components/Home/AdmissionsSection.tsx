import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Clock, Users, PlayCircle, Award, BookOpen, Zap } from 'lucide-react';

interface Course {
  id: number;
  image: string;
  title: string;
  instructor: string;
  instructorImage: string;
  rating: number;
  reviewCount: number;
  students: number;
  duration: string;
  lessons: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  originalPrice?: number;
  category: string;
  bestseller?: boolean;
  updated: string;
  skills: string[];
  description: string;
}

const courses: Course[] = [
  {
    id: 1,
    image: 'https://toperly.com/wp-content/uploads/2025/07/Python_thumbnail-480x360.png',
    title: 'Complete Python Bootcamp: Go from Zero to Hero in Python 3',
    instructor: 'Dr. Sarah Johnson',
    instructorImage: 'https://via.placeholder.com/40x40.png?text=SJ',
    rating: 4.8,
    reviewCount: 15423,
    students: 89234,
    duration: '22 hours',
    lessons: 155,
    level: 'Beginner',
    price: 49.99,
    originalPrice: 199.99,
    category: 'Programming',
    bestseller: true,
    updated: 'Updated December 2024',
    skills: ['Python', 'Data Structures', 'OOP', 'Web Development'],
    description: 'Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!'
  },
  {
    id: 2,
    image: 'https://toperly.com/wp-content/uploads/2025/07/Machine_learning_thumbnail-480x360.webp',
    title: 'Machine Learning A-Z: Hands-On Python & R in Data Science',
    instructor: 'Prof. Michael Chen',
    instructorImage: 'https://via.placeholder.com/40x40.png?text=MC',
    rating: 4.9,
    reviewCount: 28917,
    students: 156789,
    duration: '44 hours',
    lessons: 320,
    level: 'Intermediate',
    price: 79.99,
    originalPrice: 299.99,
    category: 'Data Science',
    bestseller: true,
    updated: 'Updated January 2025',
    skills: ['Machine Learning', 'Python', 'R', 'Data Analysis'],
    description: 'Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.'
  },
  {
    id: 3,
    image: 'https://toperly.com/wp-content/uploads/2025/07/Political_thumbnail-480x360.png',
    title: 'AI in Political Marketing: Campaign Strategy & Analytics',
    instructor: 'Emma Rodriguez',
    instructorImage: 'https://via.placeholder.com/40x40.png?text=ER',
    rating: 4.7,
    reviewCount: 5234,
    students: 23456,
    duration: '18 hours',
    lessons: 89,
    level: 'Advanced',
    price: 59.99,
    originalPrice: 179.99,
    category: 'Marketing',
    updated: 'Updated November 2024',
    skills: ['AI Marketing', 'Campaign Analytics', 'Data Visualization', 'Strategy'],
    description: 'Master AI-driven political marketing strategies and learn to analyze campaign data for maximum impact.'
  },
  {
    id: 4,
    image: 'https://toperly.com/wp-content/uploads/2025/07/Cloud_computing_thumbnail-480x360.png',
    title: 'AWS Certified Solutions Architect - Complete Training',
    instructor: 'David Kim',
    instructorImage: 'https://via.placeholder.com/40x40.png?text=DK',
    rating: 4.8,
    reviewCount: 12089,
    students: 67890,
    duration: '35 hours',
    lessons: 198,
    level: 'Intermediate',
    price: 69.99,
    originalPrice: 249.99,
    category: 'Cloud Computing',
    updated: 'Updated December 2024',
    skills: ['AWS', 'Cloud Architecture', 'DevOps', 'Security'],
    description: 'Pass the AWS Solutions Architect Associate exam and become a certified cloud professional.'
  },
  {
    id: 5,
    image: 'https://toperly.com/wp-content/uploads/2025/07/Fashion_thumbnail-copy-480x360.png',
    title: 'AI in Fashion: Design, Retail & Trend Prediction',
    instructor: 'Isabella Martinez',
    instructorImage: 'https://via.placeholder.com/40x40.png?text=IM',
    rating: 4.6,
    reviewCount: 3421,
    students: 15678,
    duration: '26 hours',
    lessons: 142,
    level: 'Beginner',
    price: 54.99,
    originalPrice: 164.99,
    category: 'Fashion Tech',
    updated: 'Updated October 2024',
    skills: ['AI Design', 'Trend Analysis', 'Retail Tech', 'Fashion Analytics'],
    description: 'Discover how AI is revolutionizing fashion design, retail operations, and trend forecasting.'
  },
];

const ProfessionalCourseSection = () => {
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const swiperRef = useRef<any>(null);

  const slidePrev = () => {
    if (swiperRef.current) {
      const container = swiperRef.current;
      container.scrollBy({ left: -400, behavior: 'smooth' });
      updateNavState();
    }
  };

  const slideNext = () => {
    if (swiperRef.current) {
      const container = swiperRef.current;
      container.scrollBy({ left: 400, behavior: 'smooth' });
      updateNavState();
    }
  };

  const updateNavState = () => {
    if (swiperRef.current) {
      const container = swiperRef.current;
      setAtStart(container.scrollLeft <= 0);
      setAtEnd(container.scrollLeft >= container.scrollWidth - container.clientWidth);
    }
  };

  const formatPrice = (price: number) => `₹${price.toFixed(2)}`;

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-2">
              <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Professional Courses</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Learn In-Demand Skills
            </h2>
            <p className="text-lg text-gray-600">
              Master cutting-edge technologies with expert-led courses trusted by professionals worldwide
            </p>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center space-x-3">
            <button
              onClick={slidePrev}
              disabled={atStart}
              className={`p-3 rounded-full border-2 transition-all duration-200 ${
                atStart 
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                  : 'border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={slideNext}
              disabled={atEnd}
              className={`p-3 rounded-full border-2 transition-all duration-200 ${
                atEnd 
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                  : 'border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Course Cards */}
        <div className="relative">
          <div 
            ref={swiperRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={updateNavState}
          >
            {courses.map((course) => (
              <div key={course.id} className="flex-none w-80 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
                {/* Image */}
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {course.bestseller && (
                    <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      <Award className="w-3 h-3 mr-1" />
                      Bestseller
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs flex items-center">
                    <PlayCircle className="w-3 h-3 mr-1" />
                    {course.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category & Level */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blue-600 text-sm font-medium">{course.category}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>

                  {/* Instructor */}
                  <div className="flex items-center mb-3">
                    <img
                      src={course.instructorImage}
                      alt={course.instructor}
                      className="w-8 h-8 rounded-full mr-2 border-2 border-gray-200"
                    />
                    <span className="text-sm text-gray-600">{course.instructor}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center mr-2">
                      <span className="text-sm font-bold text-gray-900 mr-1">{course.rating}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">({course.reviewCount.toLocaleString()})</span>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students.toLocaleString()} students
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {course.lessons} lessons
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {course.skills.slice(0, 2).map((skill, index) => (
                      <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                    {course.skills.length > 3 && (
                      <span className="text-blue-600 text-xs font-medium">+{course.skills.length - 3} more</span>
                    )}
                  </div>

                  {/* Updated */}
                  <p className="text-xs text-gray-500 mb-4 flex items-center">
                    <Zap className="w-3 h-3 mr-1" />
                    {course.updated}
                  </p>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-gray-900">{formatPrice(course.price)}</span>
                      {course.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">{formatPrice(course.originalPrice)}</span>
                      )}
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center">
                      Enroll Now
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </button> 
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Ready to advance your career?</h3>
            <p className="text-blue-100 mb-6">Join over 500,000 students learning with our expert instructors</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Browse All Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCourseSection;