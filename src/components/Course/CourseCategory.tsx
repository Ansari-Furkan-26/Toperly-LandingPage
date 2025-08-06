import React, { useState, useEffect } from 'react';
import { BookOpen, Users, Star, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


// ...Course interface here as per your code above...
interface Course {
  _id: string;
  title: string;
  description: string;
  instructor: { _id: string; name: string } | string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  duration: number;
  isPublished: boolean;
  rating: number;
  totalReviews: number;
  createdAt: string;
  updatedAt: string;
  customId: string;
  thumbnail: { url?: string };
  materials: any[];
  videos: any[];
  __v: number;
}


function groupCoursesByCategory(courses) {
  const map = {};
  courses.forEach(course => {
    const cat = course.category || 'Other';
    if (!map[cat]) map[cat] = [];
    map[cat].push(course);
  });
  return map;
}

const ProfessionalCourseSection = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://toperly.onrender.com/api/courses/');
        if (!response.ok) throw new Error('Failed to fetch courses');
        const result = await response.json();
        // Map course as in your code
        const mappedCourses = result?.map((course) => ({
          _id: course._id,
          title: course.title,
          description: course.description,
          instructor: course.instructor || 'Unknown Instructor',
          category: course.category,
          level: course.level,
          price: course.price,
          duration: course.duration,
          isPublished: course.isPublished,
          rating: course.rating,
          totalReviews: course.totalReviews || 0,
          createdAt: course.createdAt,
          updatedAt: course.updatedAt,
          customId: course.customId || 'N/A',
          thumbnail: course.thumbnail || { url: 'https://via.placeholder.com/480x360.png?text=Course' },
          materials: course.materials || [],
          videos: course.videos || [],
          __v: course.__v
        }));
        setCourses(mappedCourses);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  // Helper
  const formatPrice = (price) => `₹${price.toFixed(2)}`;
  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) return <div className="text-center py-16">Loading...</div>;
  if (error) return <div className="text-center py-16 text-red-600">Error: {error}</div>;

  // Responsive limits: 8 for desktop, 4 for mobile
  const coursesByCategory = groupCoursesByCategory(courses);
  const categories = Object.keys(coursesByCategory);

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
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
        </div>

        {categories.map((category) => {
          const allCourses = coursesByCategory[category];
          const showCourses = allCourses.slice(0, 2); //later update to 8
          const isMore = allCourses.length > 1; //later update to 8

          return (
            <div key={category} className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{category} Courses</h3>
                {isMore &&
                  <button
                    className="flex items-center text-blue-600 font-semibold hover:underline"
                    onClick={() => navigate(`/courses/category/${encodeURIComponent(category)}`)}
                  >
                    View All
                    <ChevronRightIcon className="w-4 h-4 ml-1" />
                  </button>
                }
              </div>
              {/* Grid: 4/row desktop, 2/row mobile, show only 8 or 4 */}
              <div className="
                grid gap-6
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-4
              ">
                {/* Show max 4 on mobile, 8 on desktop */}
                {showCourses.slice(0, window.innerWidth < 640 ? 4 : 8).map(course => (
                   <div
                  key={course._id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group cursor-pointer flex flex-col"
 onClick={() => navigate(`/courses/${course._id}`)}
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={course.thumbnail.url}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs flex items-center">
                      {/* <PlayCircle className="w-3 h-3 mr-1" /> */}
                      {course.duration ? `${course.duration} min` : 'N/A'}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-blue-600 text-sm font-medium">{course.category}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getLevelColor(course.level)}`}>
                        {course.level}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                      {course.title}
                    </h3>
                    <div className="text-gray-600 mb-3 line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: course.description }} />
                    <div className="flex items-center mb-3">
                      <img
                        src="https://i.pinimg.com/736x/98/a6/aa/98a6aadc34b3519d5c4e0a6150f0701f.jpg"
                        alt={typeof course.instructor === 'string' ? course.instructor : course.instructor.name}
                        className="w-8 h-8 rounded-full mr-2 border-2 border-gray-200"
                      />
                      <span className="text-sm text-gray-600">
                        {typeof course.instructor === 'string' ? course.instructor : course.instructor.name}
                      </span>
                    </div>
                    <div className="flex items-center mb-3">
                      <span className="text-sm font-bold text-gray-900 mr-1">{course.rating || 'N/A'}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(course.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">({course.totalReviews.toLocaleString()})</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" /> 99+ students
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1" />
                        {course.videos.length} lessons
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">{formatPrice(course.price)}</span>
                      <button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center"
                        onClick={e => {
                          e.stopPropagation();
                          navigate(`/courses/${course._id}`);
                        }}
                      >
                        View Details
                        <ChevronRightIcon className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProfessionalCourseSection;
