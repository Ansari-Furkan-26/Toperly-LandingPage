import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 mt-16">
      <div className=" w-full mx-auto flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Column */}
        <div className="flex flex-col justify-between w-full md:w-1/2 p-6 sm:p-10">
          <div className="flex-1 flex flex-col">
            <div>
              <h1 className="text-4xl md:text-7xl font-semibold mb-4">
                Contact Us
              </h1>
              <p className="mb-8 text-muted-foreground max-w-sm text-base md:text-xl">
                Get in touch with us for any {''}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                 enquiries and questions
              </span>
              </p>
            </div>
          </div>
          
          {/* Social Links (bottom on mobile) */}
          <div className="mt-10 md:mt-12 flex gap-6 text-gray-900 text-sm font-medium ">
            <a href="#" target="_blank" rel="noopener noreferrer">Behance</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Telegram</a>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-[4rem]">
            <div>
              <h3 className="uppercase text-xs text-gray-400 mb-1 font-semibold">general inquiries</h3>
              <div className="font-bold">toperly.ai@gmail.com</div>
            </div>
            <div>
              <h3 className="uppercase text-xs text-gray-400 mb-1 font-semibold">Work Time</h3>
              <div className="font-bold">Monday - Friday: 11:00 - 07:00</div>
            </div>
            <div>
              <h3 className="uppercase text-xs text-gray-400 mb-1 font-semibold">Contact</h3>
              <div className="font-bold">+91 8178946715</div>
            </div>
            <div>
              <h3 className="uppercase text-xs text-gray-400 mb-1 font-semibold">address</h3>
              <div className="font-bold">
                Sector 42, Gurugram, HR
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="mt-8 rounded-lg overflow-hidden">
            <img
              src="https://i.pinimg.com/1200x/a6/26/41/a62641b101b6e2d4d0aeaa4234e7eafb.jpg"
              alt="Interior"
              className="w-full h-80 object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
