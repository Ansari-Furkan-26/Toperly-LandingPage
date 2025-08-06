import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ShoppingCart, User, Search, Sparkles, Home, BookOpen, PenTool, Mail, Folder } from 'lucide-react';
import axios from 'axios';

const AnimatedAIWave = () => (
  <svg
    className="absolute left-0 -bottom-6 w-full h-32 z-0 pointer-events-none"
    viewBox="0 0 1440 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="aiWave" x1="0" y1="0" x2="1" y2="0">
        <stop stopColor="#3b82f6" />
        <stop offset="1" stopColor="#8b5cf6" />
      </linearGradient>
      <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <path
      d="M0,192 C480,304 960,80 1440,192 L1440,320 L0,320 Z"
      fill="url(#aiWave)"
      opacity="0.18"
    >
      <animate
        attributeName="d"
        dur="7s"
        repeatCount="indefinite"
        values="
          M0,192 C480,304 960,80 1440,192 L1440,320 L0,320 Z;
          M0,160 C480,100 960,250 1440,160 L1440,320 L0,320 Z;
          M0,192 C480,304 960,80 1440,192 L1440,320 L0,320 Z
        "
      />
      <animate
        attributeName="opacity"
        values="0.18;0.22;0.18"
        dur="5s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [searchFocused, setSearchFocused] = useState(false);
  const [aiParticles, setAiParticles] = useState([]);

  useEffect(() => {
    axios.get('https://toperly.onrender.com/api/courses/')
      .then((res) => {
        if (res.data.success) setCourses(res.data.data);
      })
      .catch((err) => console.error('Failed to fetch courses:', err));
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // AI particle animation for mobile search
  useEffect(() => {
    if (!isMobileMenuOpen || !searchFocused) {
      setAiParticles([]);
      return;
    }

    const interval = setInterval(() => {
      setAiParticles(prev => [
        ...prev.slice(-5), // Keep only last 5 particles
        {
          id: Date.now(),
          x: Math.random() * 100,
          y: 0,
          size: Math.random() * 3 + 2,
          speed: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.5
        }
      ]);
    }, 300);

    return () => clearInterval(interval);
  }, [isMobileMenuOpen, searchFocused]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((open) => {
      const nextOpen = !open;
      if (nextOpen) {
        setIsCategoriesOpen(true);
        // Trigger opening animation
        document.documentElement.style.setProperty('--menu-scale', '0.95');
        setTimeout(() => {
          document.documentElement.style.setProperty('--menu-scale', '1');
        }, 100);
      }
      setIsUserMenuOpen(false);
      return nextOpen;
    });
  };

  const closeMobileMenu = () => {
    // Trigger closing animation
    document.documentElement.style.setProperty('--menu-scale', '0.95');
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsCategoriesOpen(true);
      setIsUserMenuOpen(false);
    }, 200);
  };

  const handleSearch = (e) => {
    const q = e.target.value.toLowerCase();
    setQuery(q);
    if (q.length < 2) {
      setFiltered([]);
      return;
    }
    const results = courses
      .filter(course =>
        course.title.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q)
      )
      .sort((a, b) => b.title.length - a.title.length);
    setFiltered(results);
  };

  const categories = [
    "Digital Marketing",
    "Business",
    "Lifestyle",
    "Programming & Tech",
  ];

  const mainNavItems = [
    { label: 'Home', href: '/', icon: 'home' },
    { label: 'All Courses', href: '/courses', icon: 'book' },
    { label: 'Blog', href: '/blogs', icon: 'pen' },
    { label: 'Contact', href: '/contact-us', icon: 'mail' }
  ];

  const topNavItems = [
    { label: 'Welcome to Toperly', href: '#' },
    { label: 'Become an Instructor', href: 'https://toperly-dashboard-unsquare.netlify.app/auth' },
    { label: 'My learning', href: 'https://toperly-dashboard-unsquare.netlify.app/auth' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white text-gray-900 shadow-md transition-all duration-300 ${isScrolled ? 'h-16' : 'h-16 sm:h-24'}`}>
      {/* Top row - hidden when scrolled */}
      <div className={`${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'sm:h-12 opacity-100'} transition-all duration-300 bg-gray-50 md:border-b border-gray-200`}>
        <div className="max-w-7xl mx-auto pt-2 px-4 h-full flex items-center justify-end">
          <div className="hidden md:flex items-center space-x-6 text-sm">
            {topNavItems.map((item, index) => (
              <a key={index} href={item.href} className="text-gray-600 cursor-default transition-colors duration-200">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className={`${isScrolled ? 'h-16' : 'h-14 sm:h-16'} transition-all duration-300 bg-white`}>
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo & Categories */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <a href="/" className="hover:opacity-80 transition-opacity">
                <img
                  src="/logo.png"
                  alt="Company Logo"
                  className="h-24 w-auto object-contain"
                />
              </a>
              {/* Categories Dropdown - Hidden on mobile */}
              <div className="relative group hidden lg:flex">
                <button className="text-gray-900 font-medium hover:text-orange-500 focus:outline-none flex items-center">
                  Categories
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {categories.map((cat) => (
                    <div
                      key={cat}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-500 cursor-pointer"
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Search bar - hidden on mobile */}
            <div className="hidden md:flex items-center relative">
              <input
                type="text"
                placeholder="Search for anything"
                value={query}
                onChange={handleSearch}
                className="w-64 px-4 py-2 bg-gray-100 text-gray-900 placeholder-gray-500 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              />
              <button className="absolute right-3 top-2.5">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              {/* Search Dropdown */}
              {filtered.length > 0 && (
                <ul className="absolute top-full left-0 mt-1 w-[300px] bg-white border rounded shadow z-50 max-h-60 overflow-y-auto">
                  {filtered.map(course => (
                    <li
                      key={course._id}
                      className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                      onClick={() => {
                        window.location.href = `/courses/${course._id}`;
                        setQuery('');
                        setFiltered([]);
                      }}
                    >
                      <div className="font-medium">{course.title}</div>
                      <div className="text-gray-500 text-xs line-clamp-1" dangerouslySetInnerHTML={{ __html: course.description }} />
                      <div className="text-green-600 font-semibold text-sm">₹{course.price}</div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Mobile menu button with AI-inspired glow */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-all relative"
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <>
                  <Menu className="w-6 h-6" />
                </>
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <>
            {/* Overlay with animated gradient */}
            <div
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-[2px] transition-opacity duration-300 z-50"
              style={{ animation: "fadeInBg 0.2s" }}
            />

            {/* Full-screen mobile menu with AI animations */}
            <div
              className={`
                fixed inset-0 w-full h-full z-[999]
                bg-gradient-to-b from-white to-gray-50
                flex flex-col overflow-y-auto
                transform scale-[var(--menu-scale)]
                transition-all duration-300
                animate-aiMenuIn
              `}
              style={{ 
                zIndex: 9999,
                '--menu-scale': '1'
              }}
            >
             

              {/* Close Button with hover effect */}
              <button
                onClick={closeMobileMenu}
                className="absolute right-5 top-4 text-gray-500 p-2 rounded-full z-40 hover:text-black hover:bg-gray-200 transition-all group"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
              </button>

              {/* MENU CONTENT */}
              <div className="relative flex flex-col px-6 pt-16 pb-10 min-h-screen z-10">
                {/* AI-enhanced mobile search */}
                <div className="relative mb-8 z-30">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Ask AI to find courses..."
                      value={query}
                      onChange={handleSearch}
                      onFocus={() => setSearchFocused(true)}
                      onBlur={() => setSearchFocused(false)}
                      className="w-full pl-10 pr-4 py-3 bg-white text-gray-900 placeholder-gray-500 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm transition-all"
                    />
                    {query && (
                      <button 
                        onClick={() => setQuery('')}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <X size={18} />
                      </button>
                    )}
                  </div>
                  
                  {/* AI search results with floating animation */}
                  {filtered.length > 0 && (
                    <ul className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-64 overflow-y-auto animate-floatIn">
                      {filtered.map(course => (
                        <li
                          key={course._id}
                          className="px-4 py-3 text-sm cursor-pointer hover:bg-blue-50/50 transition-colors border-b border-gray-100 last:border-0 flex items-start"
                          onClick={() => {
                            window.location.href = `/courses/${course._id}`;
                            setQuery('');
                            setFiltered([]);
                            closeMobileMenu();
                          }}
                        >
                          <Sparkles className="flex-shrink-0 mt-0.5 mr-2 text-blue-400" size={14} />
                          <div>
                            <div className="font-medium text-gray-800">{course.title}</div>
                            <div className="text-gray-500 text-xs line-clamp-1">{course.description.replace(/<[^>]*>/g, '')}</div>
                            <div className="text-blue-600 font-semibold text-sm mt-1">₹{course.price}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Main nav links with hover animations */}
                <nav className="flex flex-col space-y-1 z-20 mb-3">
                  {mainNavItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="group block py-3 px-4 rounded-lg hover:bg-blue-50/50 transition-all duration-200 animate-fadeUp"
                      onClick={closeMobileMenu}
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 flex items-center justify-center mr-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                          <span className="text-blue-600 group-hover:text-blue-800 transition-colors">
                            {item.icon === 'home' && <Home size={18} />}
                            {item.icon === 'book' && <BookOpen size={18} />}
                            {item.icon === 'pen' && <PenTool size={18} />}
                            {item.icon === 'mail' && <Mail size={18} />}
                          </span>
                        </div>
                        <span className="text-lg font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                          {item.label}
                        </span>
                      </div>
                    </a>
                  ))}
                </nav>

                {/* Categories with AI-inspired accordion */}
              <div className=" z-20">
  {/* Toggle Button */}
  <button
    className="flex items-center justify-between w-full font-medium text-gray-900 focus:outline-none rounded-xl bg-blue-50/50 px-4 py-3 hover:bg-blue-100 transition-colors group"
    onClick={() => setIsCategoriesOpen((prev) => !prev)}
  >
    <div className="flex items-center">
      <div className="w-8 h-8 flex items-center justify-center mr-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
        <Folder className="text-blue-600" size={18} />
      </div>
      <span className="text-lg font-medium animate-fadeUp">Categories</span>
    </div>
    <ChevronDown
      className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isCategoriesOpen ? 'rotate-180' : ''}`}
    />
  </button>

  {/* Category List */}
  <div
    className={`transition-all duration-300 overflow-hidden ${isCategoriesOpen ? 'max-h-[500px] mt-2' : 'max-h-0'}`}
  >
    <div className="pl-2">
      {categories.map((cat, index) => (
        <a
          key={cat}
          href="#"
          className="flex items-center py-2 px-4 text-base text-gray-600 hover:text-blue-600 cursor-pointer transition-colors group"
          onClick={closeMobileMenu}
        >
          <span className="w-2 h-2 mr-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
          <span className="group-hover:translate-x-1 transition-transform animate-fadeUp">
            {cat}
          </span>
        </a>
      ))}
    </div>
  </div>
</div>

              </div>
              
              {/* Animated AI wave at bottom */}
              <AnimatedAIWave />
            </div>
            
            {/* CSS animations */}
            <style jsx global>{`
              @keyframes fadeInBg { from { opacity: 0; } to { opacity: 1; } }
              @keyframes aiMenuIn { 
                0% { opacity: 0; transform: translateY(10px) scale(0.98); } 
                100% { opacity: 1; transform: translateY(0) scale(var(--menu-scale)); } 
              }
              @keyframes aiFloat {
                0% { transform: translateY(0) translateX(0); opacity: 1; }
                50% { transform: translateY(-20px) translateX(5px); opacity: 0.8; }
                100% { transform: translateY(-40px) translateX(10px); opacity: 0; }
              }
              @keyframes floatIn {
                0% { opacity: 0; transform: translateY(5px); }
                100% { opacity: 1; transform: translateY(0); }
              }
              .animate-aiMenuIn { animation: aiMenuIn 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
              .animate-floatIn { animation: floatIn 0.2s ease-out forwards; }

               @keyframes fadeUp {
                0% {
                  opacity: 0;
                  transform: translateY(10px);
                }
                100% {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              .animate-fadeUp {
                animation: fadeUp 0.3s ease forwards;
              }
            `}</style>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;