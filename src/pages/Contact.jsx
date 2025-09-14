import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data
    alert('Message sent successfully! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00203f] to-[#005f73] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-white/80 mt-4 text-sm md:text-base">Let's connect and discuss your next project</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <div className="bg-white/20 rounded-xl p-4 md:p-6 border border-white/30 hover:bg-white/25 transition-all duration-300">
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6 flex items-center gap-3">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Information
              </h2>
              
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/10 rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-white font-semibold text-sm md:text-base">Email</div>
                    <div className="text-white/70 text-xs md:text-sm break-all">mohammad.mazraani@st.ul.edu.lb</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/10 rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-white font-semibold text-sm md:text-base">Phone</div>
                    <div className="text-white/70 text-xs md:text-sm">+961 76 470 460</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/10 rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-white font-semibold text-sm md:text-base">Location</div>
                    <div className="text-white/70 text-xs md:text-sm">Beirut, Lebanon</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/20 rounded-xl p-4 md:p-6 border border-white/30 hover:bg-white/25 transition-all duration-300">
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6 flex items-center gap-3">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Response Time
              </h2>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg border border-white/20">
                  <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0"></div>
                  <span className="text-white/90 text-sm md:text-base">Email: Within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg border border-white/20">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full flex-shrink-0"></div>
                  <span className="text-white/90 text-sm md:text-base">Phone: Business hours only</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg border border-white/20">
                  <div className="w-3 h-3 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span className="text-white/90 text-sm md:text-base">Available for freelance projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white/20 rounded-xl p-4 md:p-6 border border-white/30 hover:bg-white/25 transition-all duration-300">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6 flex items-center gap-3">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Send a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <label className="block text-white/90 text-xs md:text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-white/90 text-xs md:text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-white/90 text-xs md:text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none text-sm md:text-base"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 text-sm md:text-base"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 md:mt-8 text-center">
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-4 md:p-6 border border-white/20 hover:from-green-500/30 hover:to-blue-500/30 transition-all duration-300">
            <p className="text-white/80 text-base md:text-lg">
               Let's create something amazing together
            </p>
            <p className="text-white/60 text-xs md:text-sm mt-2">
              I'm always excited to work on new projects and collaborate with fellow developers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
