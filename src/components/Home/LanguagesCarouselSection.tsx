import React, { useEffect, useState } from "react";

// Example data for left/right carousel
const carouselData = [
  {
    title: "Machine Learning",
    text: "Unlock business insights using ML models.",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop"
  },
  {
    title: "Natural Language",
    text: "Build chatbots and translate text using NLP.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"
  },
  {
    title: "Data Visualization",
    text: "Tell compelling data stories with visualizations.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
  }
];

const indianLanguages = [
  "हिन्दी", "English", "বাংলা", "తెలుగు", "मराठी",
  "தமிழ்", "ગુજરાતી", "اردو", "ಕನ್ನಡ", "ଓଡ଼ିଆ",
  "മലയാളം", "ਪੰਜਾਬੀ", "অসমীয়া", "संस्कृतम्", "Konkani",
  "Dogri", "Maithili", "Santali", "Kashmiri", "Manipuri", "Bodo"
];

const Marquee = () => (
  <div className="w-full overflow-hidden bg-white py-2">
    <div className="flex gap-3 animate-marquee whitespace-nowrap">
      {/* Repeat the language list twice for infinite illusion */}
      {[...indianLanguages, ...indianLanguages].map((lang, idx) => (
        <span
          key={idx}
          className="px-6 py-2 border border-blue-500 rounded-full mx-2 font-semibold text-lg bg-white"
          style={{ minWidth: 70, display: 'inline-block', textAlign: 'center' }}
        >
          {lang}
        </span>
      ))}
    </div>
    {/* Animate-marquee CSS below */}
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        display: flex;
        animation: marquee 20s linear infinite;
      }
    `}</style>
  </div>
);

const RotatingContent = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((old) => (old + 1) % carouselData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const data = carouselData[idx];

  return (
    <div className="bg-white flex flex-col md:flex-row items-center rounded-2xl shadow-lg overflow-hidden border border-gray-200 max-w-3xl mx-auto">
      {/* Left data */}
      <div className="flex-1 px-6 py-10 flex flex-col items-start justify-center">
        <h2 className="text-3xl font-bold mb-2 text-blue-700">{data.title}</h2>
        <p className="text-lg text-gray-700">{data.text}</p>
      </div>
      {/* Right image */}
      <div className="flex-1 p-4">
        <img
          src={data.img}
          alt={data.title}
          className="w-full h-52 md:h-72 object-cover rounded-xl border border-gray-200"
        />
      </div>
    </div>
  );
};

const LanguagesCarouselSection = () => (
  <div className="bg-white min-h-screen flex flex-col justify-center items-center pt-24 pb-8">
    <RotatingContent />
    <div className="mt-10 w-full max-w-5xl">
      <Marquee />
    </div>
  </div>
);

export default LanguagesCarouselSection;
