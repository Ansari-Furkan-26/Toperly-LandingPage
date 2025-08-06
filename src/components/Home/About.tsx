import React from 'react';
import { Download, Menu, X, MessageCircle, Heart, MoreHorizontal } from 'lucide-react';

const AIChatInterface = () => {
  const getBackgroundStyle = () => {
    return {
      background: `
        radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
        linear-gradient(135deg, #000000 100%, #0f172a 0%)
      `,
    };
  };

  return (
    <div className="w-full min-h-full bg-gradient-to-b from-gray-900 via-gray-900 to-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="min-h-full -mt-10 bg-gradient-to-br from-blue-400/50 via-blue-200/30 to-purple-400/30 relative rounded-t-2xl overflow-hidden">
        {/* Background Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 right-20 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-300 to-pink-300/40 rounded-full blur-3xl"></div>
          <div className="absolute top-60 right-40 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-blue-300 to-indigo-300/30 rounded-full blur-3xl"></div>
          <div className="absolute top-80 right-60 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-cyan-300 to-blue-300/25 rounded-full blur-3xl"></div>
        </div>

        <div className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-t-2xl border border-white/20 shadow-lg z-10" />

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Left Column - Text Content */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="text-xs sm:text-sm text-gray-500 font-medium">
                  Powered by ChatGPT 4
                </div>
                
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 leading-tight">
                    The Only AI For Respond
                  </h1>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 leading-tight">
                    To Your Messages
                  </h1>
                </div>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md">
                  You can read and reply to private messages manually or trust our AI based on 
                  ChatGPT 4. The AI will also promote itself, increasing the number of followers and the 
                  reach of your posts.
                </p>
                
                <button className="hidden md:flex bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all duration-300  items-center space-x-2 shadow-lg hover:shadow-xl transform">
                  <span>See our plans</span>
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Right Column - Chat Interfaces */}
            <div className="lg:col-span-7 relative">
              {/* Main Chat Window - Centered */}
              <div className="relative z-10 mx-auto max-w-full sm:max-w-md lg:max-w-sm">
                {/* Chat Messages */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                      Y
                    </div>
                    <div className="flex-1">
                      <div className="bg-white/80 backdrop-blur-sm p-3 rounded-2xl rounded-tl-sm shadow-sm border border-white/50">
                        <div className="text-xs sm:text-sm font-medium text-gray-800 mb-1">Yuria Kitagawa</div>
                        <div className="text-xs sm:text-sm text-gray-600">That was super fast, thank you so much!</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ben Timona Chat Card */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/60 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-t from-gray-700/60 to-transparent flex items-center justify-center">
                          <div className="w-5 h-7 sm:w-6 sm:h-8 bg-gray-300 rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-sm sm:text-base text-gray-900">Ben Timona</div>
                        <div className="text-xs sm:text-sm text-gray-500">Hey there!</div>
                      </div>
                    </div>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors">
                      Answer
                    </button>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 mb-3">
                    I want to ask you a question...
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="w-3 h-3" />
                      <span>1 Message</span>
                    </div>
                    <span>09 Jun 2024</span>
                    <button className="text-indigo-600 hover:text-indigo-700">View details →</button>
                  </div>
                </div>
              </div>

              {/* Bottom Right Chat */}
              <div className="absolute bottom-0 right-0 w-64 sm:w-72 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/60 hidden sm:block">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                  <div className="flex-1">
                    <div className="text-xs sm:text-sm font-medium text-gray-800">hello dear!</div>
                    <div className="text-xs text-gray-500">Can we talk about art category?</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>18 Like</span>
                  <span>4 Replies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatInterface;