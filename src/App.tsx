import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import AllCourses from "./pages/AllCoursesPage";
import Blog from "./pages/BlogPage";
import Contact from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* ADD ALL CUSTOM ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/conatct-us" element={<Contact />} />
          
          {/* Fallback Route */}  
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
