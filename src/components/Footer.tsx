import { Button } from "@/components/ui/button";
import {
  Brain, Mail, Phone, MapPin, Github, Twitter, Linkedin, Youtube
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    courses: [
      { name: "Machine Learning", href: "#" },
      { name: "Deep Learning", href: "#" },
      { name: "Computer Vision", href: "#" },
      { name: "Python Fundamental", href: "#" },
      { name: "AI for Business", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Contact", href: "#" }
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Community", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Certificates", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Accessibility", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Logo Section */}
        <div className="py-12 ">
          <div className="text-center">
            <div className="flex justify-center ">
              <img src="/ai.png" alt="Company Logo" className="w-[40rem] -ml-10 h-auto" />
            </div>
          </div>
        </div>
         
        {/* Newsletter Section */}
        <div className="py-12 border-b border-gray-800">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-5xl mx-40 font-bold mb-4 text-white">
              Stay Updated with{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                AI Trends
              </span>
            </h3>
            <p className="text-2xl mx-10 text-gray-400 mb-6">
              Get the latest insights, course updates, and industry trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Responsive grid/footer main */}
        <div
          className="
            py-12
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-6
            grid-cols-1
          ">       
          {/* Brand & contact: mobile - flex row; md+ - block */}
          <div className="lg:col-span-2 flex flex-col md:flex-row md:space-x-6 lg:flex-col lg:space-x-0">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center mb-4 md:mb-0">
              <img src="/logo.png" alt="" className="w-40" />
            </div>
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-400 mb-6 max-w-sm">
              <p className="mb-4 text-gray-300">
                Empowering the next generation of AI professionals with cutting-edge courses
                and hands-on experience.
              </p>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>toperly.ai@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 8178946715</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Sector 42, Gurugram, HR</span>
              </div>
            </div>
          </div>

          {/* Links: grid-cols-2 on mobile/tablet, original on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 col-span-2 lg:col-span-4">
            {/* First row: Courses & Company */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Courses</h4>
              <ul className="space-y-2">
                {footerLinks.courses.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Second row: Resources & Legal */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            ©2025 Unsquare Labs. All rights reserved.
          </div>
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;