import HeroSection from "@/components/Home/HeroSection";
import FeaturesSection from "@/components/Home/FeaturesSection";
import CoursesSection from "@/components/Home/CoursesSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import MentorAccessSection from "@/components/Home/MentorAccessSection";
import TrustedCoursesBrand from "@/components/Home/TrustedCoursesBrand";
import AdmissionsSection from "@/components/Course/CourseSection";
import VideoPitchSection from "@/components/Home/VideoPitchSection";
import React from "react";
import LanguagesCarouselSection from "@/components/Home/LanguagesCarouselSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AdmissionsSection />
      <FeaturesSection />
      <CoursesSection />
      {/* <LanguagesCarouselSection /> */}
      {/* <TrustedCoursesBrand /> */}
      <MentorAccessSection />
      <TestimonialsSection />
      <VideoPitchSection />
    </div>
  );
};

export default Index;
