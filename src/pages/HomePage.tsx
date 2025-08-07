import HeroSection from "@/components/Home/HeroSection";
import FeaturesSection from "@/components/Home/FeaturesSection";
import CoursesSection from "@/components/Home/TopRated";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import MentorAccessSection from "@/components/Home/MentorAccessSection";
import TrustedCoursesBrand from "@/components/Home/TrustedCoursesBrand";
import AdmissionsSection from "@/components/Home/CourseSection";
import VideoPitchSection from "@/components/Home/VideoPitchSection";
import About from "@/components/Home/About"
import React from "react";
import LanguagesCarouselSection from "@/components/Home/LanguagesCarouselSection";
import AICommunityCards from "@/components/Home/AIcard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <About />
      <AdmissionsSection />
      {/* <FeaturesSection /> */}
      <AICommunityCards />
      <CoursesSection />
      {/* <LanguagesCarouselSection /> */}
      {/* <TrustedCoursesBrand /> */}
      <MentorAccessSection />
      <TestimonialsSection />
      {/* <VideoPitchSection /> */}
    </div>
  );
};

export default Index;
