import React, { useMemo, useState } from 'react';
import BlogCard from '../components/Blog/BlogCard';          
import BlogDetailPage from '../components/Blog/DetailBlogs'; 
import FilterSidebar from '../components/Blog/FilterSidebar';


const blogData = [
  {
    id: 1,
    title: "Introduction to Machine Learning Algorithms",
    description: "Explore the fundamental algorithms that power modern AI systems, from linear regression to neural networks.",
    category: "ML",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    content: `
      <h2>Understanding Machine Learning</h2>
      <p>Machine Learning has revolutionized how we approach complex problems across industries. From recommendation systems to autonomous vehicles, ML algorithms are the backbone of modern AI applications.</p>
      
      <h3>Key Algorithms to Master</h3>
      <p>Linear Regression forms the foundation of predictive modeling. It's simple yet powerful for understanding relationships between variables.</p>
      
      <p>Decision Trees offer interpretable models that can handle both numerical and categorical data effectively.</p>
      
      <p>Neural Networks, inspired by biological neurons, excel at pattern recognition and complex function approximation.</p>
      
      <h3>Practical Applications</h3>
      <p>These algorithms power everything from spam detection in emails to personalized content recommendations on streaming platforms.</p>
    `,
 course: "Machine Learning",  // Add course
    price: 300, 
  },
  {
    id: 2,
    title: "Deep Learning with Neural Networks",
    description: "Dive deep into neural networks, backpropagation, and how deep learning is transforming industries.",
    category: "ML",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    author: "Mike Chen",
    date: "2024-01-20",
    readTime: "12 min read",
    content: `
      <h2>The Power of Deep Learning</h2>
      <p>Deep learning represents a paradigm shift in how machines process and understand data. By using multiple layers of interconnected nodes, neural networks can learn complex patterns and representations.</p>
      
      <h3>Architecture Fundamentals</h3>
      <p>Convolutional Neural Networks (CNNs) excel at image processing tasks, using filters to detect features like edges, textures, and patterns.</p>
      
      <p>Recurrent Neural Networks (RNNs) are designed for sequential data, making them perfect for natural language processing and time series analysis.</p>
      
      <h3>Training Deep Networks</h3>
      <p>Backpropagation allows networks to learn by adjusting weights based on prediction errors, gradually improving performance through iterations.</p>
    `,
 course: "Machine Learning",  // Add course
    price: 100, 
  },
  {
    id: 3,
    title: "Data Visualization Best Practices",
    description: "Learn how to create compelling and informative data visualizations that tell meaningful stories.",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    author: "Emily Rodriguez",
    date: "2025-01-25",
    readTime: "6 min read",
    content: `
      <h2>The Art of Data Storytelling</h2>
      <p>Effective data visualization bridges the gap between complex datasets and actionable insights. The right chart can reveal patterns that might otherwise remain hidden in spreadsheets.</p>
      
      <h3>Choosing the Right Chart Type</h3>
      <p>Bar charts excel at comparing categories, while line charts show trends over time. Scatter plots reveal correlations between variables.</p>
      
      <p>Heatmaps effectively display correlation matrices and can highlight patterns in large datasets at a glance.</p>
      
      <h3>Design Principles</h3>
      <p>Keep it simple, use consistent colors, and always consider your audience. The goal is clarity, not complexity.</p>
    `,
 course: "Data Science",  // Add course
    price: 400, 
  },
  {
    id: 4,
    title: "Natural Language Processing Fundamentals",
    description: "Understanding how machines process and understand human language through NLP techniques.",
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    author: "David Park",
    date: "2024-02-01",
    readTime: "10 min read",
    content: `
      <h2>Making Sense of Human Language</h2>
      <p>Natural Language Processing enables computers to understand, interpret, and generate human language in meaningful ways.</p>
      
      <h3>Text Preprocessing</h3>
      <p>Tokenization breaks text into individual words or phrases. Stemming and lemmatization reduce words to their root forms.</p>
      
      <p>Stop word removal eliminates common words that don't carry significant meaning, improving model efficiency.</p>
      
      <h3>Advanced Techniques</h3>
      <p>Transformer architectures like BERT and GPT have revolutionized how we approach language understanding and generation.</p>
    `,
 course: "AI",  // Add course
    price: 700, 
  },
  {
    id: 5,
    title: "Big Data Analytics with Python",
    description: "Harness the power of Python libraries for processing and analyzing large datasets efficiently.",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
    author: "Lisa Wang",
    date: "2024-02-05",
    readTime: "9 min read",
    content: `
      <h2>Python for Big Data</h2>
      <p>Python's ecosystem provides powerful tools for handling large-scale data processing and analysis tasks efficiently.</p>
      
      <h3>Essential Libraries</h3>
      <p>Pandas excels at data manipulation and analysis, while NumPy provides the numerical computing foundation.</p>
      
      <p>Dask enables parallel computing, allowing you to work with datasets larger than memory.</p>
      
      <h3>Performance Optimization</h3>
      <p>Vectorization and efficient data structures can dramatically improve processing speed for large datasets.</p>
    `,
 course: "Data Science",  // Add course
    price: 800, 
  },
  {
    id: 6,
    title: "Computer Vision Applications",
    description: "Explore how AI systems can see and interpret visual information in real-world applications.",
    category: "AI",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
    author: "Alex Thompson",
    date: "2024-02-10",
    readTime: "11 min read",
    content: `
      <h2>Teaching Machines to See</h2>
      <p>Computer vision enables machines to interpret and understand visual information from the world, opening up countless applications.</p>
      
      <h3>Image Recognition</h3>
      <p>Convolutional neural networks can classify images with superhuman accuracy, identifying objects, faces, and scenes.</p>
      
      <p>Object detection goes further by locating and identifying multiple objects within a single image.</p>
      
      <h3>Real-World Applications</h3>
      <p>From medical imaging diagnosis to autonomous vehicle navigation, computer vision is transforming industries.</p>
    `,
 course: "AI",  // Add course
    price: 900, 
  }
];

const coursesList = ["AI", "Machine Learning", "Data Science"];

const BlogListPage = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [priceRange, setPriceRange] = useState(1000);
  const [sortOption, setSortOption] = useState("latest");
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Handle course checkbox toggle
  const onCourseChange = (course) => {
    setSelectedCourses((prev) =>
      prev.includes(course)
        ? prev.filter((c) => c !== course)
        : [...prev, course]
    );
  };

  // Filter and sort blogs
  const filteredAndSortedBlogs = useMemo(() => {
    let filtered = blogData;

    // Filtering: courses
    if (selectedCourses.length > 0) {
      filtered = filtered.filter((blog) =>
        selectedCourses.includes(blog.course)
      );
    }

    // Filtering: price
    filtered = filtered.filter((blog) => blog.price <= priceRange);

    // Sorting
    switch (sortOption) {
      case "latest":
        filtered.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        break;
      case "oldest":
        filtered.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        break;
      case "priceLow":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "priceHigh":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "titleAZ":
        filtered.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;
      case "titleZA":
        filtered.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCourses, priceRange, sortOption]);

return (
  <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-4 gap-8 mt-32">
    {/* Sidebar: only show if no blog selected */}
    {!selectedBlog && (
      <aside className="w-full md:w-72 sticky top-16 self-start">
        <FilterSidebar
          courses={coursesList}
          selectedCourses={selectedCourses}
          onCourseChange={onCourseChange}
          priceRange={priceRange}
          onPriceChange={setPriceRange}
          sortOption={sortOption}
          onSortChange={setSortOption}
        />
      </aside>
    )}

    {/* Main Content */}
    <main className="flex-1">
      {selectedBlog ? (
        <BlogDetailPage blog={selectedBlog} onBack={() => setSelectedBlog(null)} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredAndSortedBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} onClick={() => setSelectedBlog(blog)} />
          ))}
        </div>
      )}
    </main>
  </div>
);

};

export default BlogListPage;