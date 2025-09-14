import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#00203f] to-[#005f73] p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 max-w-4xl w-full mx-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">About This Project</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Project Info */}
          <div className="space-y-6">
            <div className="bg-white/20 rounded-xl p-6 border border-white/30">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Technology Stack
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>React 18 with Hooks</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>React Router for Navigation</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Context API for State Management</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Tailwind CSS for Styling</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span>Framer Motion for Animations</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Vite for Build Tool</span>
                </div>
              </div>
            </div>

            <div className="bg-white/20 rounded-xl p-6 border border-white/30">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Features
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/90">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Interactive Counter with Context</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Smooth Page Transitions</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Responsive Design</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Modern Glassmorphism UI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Project Description */}
          <div className="space-y-6">
            <div className="bg-white/20 rounded-xl p-6 border border-white/30">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Project Overview
              </h2>
              <p className="text-white/90 leading-relaxed mb-4">
                This is a modern Single Page Application (SPA) built with cutting-edge web technologies. 
                The project demonstrates best practices in React development, including component-based 
                architecture, state management, and modern UI/UX design patterns.
              </p>
              <p className="text-white/90 leading-relaxed">
                The application features a beautiful glassmorphism design with smooth animations, 
                responsive layout, and an interactive counter that showcases React Context API usage 
                for global state management.
              </p>
            </div>

            <div className="bg-white/20 rounded-xl p-6 border border-white/30">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Development Timeline
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                  <div>
                    <div className="text-white font-semibold">Project Setup</div>
                    <div className="text-white/70 text-sm">Vite + React + Tailwind CSS</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                  <div>
                    <div className="text-white font-semibold">Core Features</div>
                    <div className="text-white/70 text-sm">Routing, Context, Counter</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                  <div>
                    <div className="text-white font-semibold">UI Enhancement</div>
                    <div className="text-white/70 text-sm">Glassmorphism Design</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                  <div>
                    <div className="text-white font-semibold">Deployment</div>
                    <div className="text-white/70 text-sm">Vercel + GitHub</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-white/20">
            <p className="text-white/80 text-lg">
               Built with passion for modern web development
            </p>
            <p className="text-white/60 text-sm mt-2">
              Demonstrating the power of React ecosystem and modern design principles
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
