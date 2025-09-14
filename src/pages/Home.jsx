import React from "react";
import { useAppContext } from "../context/AppContext";

export default function Home() {
  const { count, setCount } = useAppContext();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#00203f] to-[#005f73]">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 max-w-md w-full mx-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Counter App</h1>
          <p className="text-white/80 mb-8">Interactive Counter with Beautiful Design</p>
          
          {/* Counter Display */}
          <div className="bg-white/20 rounded-xl p-6 mb-8 border border-white/30">
            <div className="text-6xl font-bold text-white mb-2">{count}</div>
            <div className="text-white/70 text-sm">Current Value</div>
          </div>
          
          {/* Button Container */}
          <div className="space-y-4">
            {/* Increment Button */}
            <button
              onClick={() => setCount(count + 1)}
              className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Increment
              </span>
            </button>
            
            {/* Decrement Button */}
            <button
              onClick={() => setCount(count - 1)}
              disabled={count === 0}
              className={`w-full px-6 py-3 font-semibold rounded-xl transition-all duration-300 transform ${
                count === 0
                  ? 'bg-gray-500/50 text-gray-300 cursor-not-allowed'
                  : 'bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white hover:scale-105 hover:shadow-lg active:scale-95'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                </svg>
                Decrement
              </span>
            </button>
            
            {/* Reset Button */}
            <button
              onClick={() => setCount(0)}
              className="w-full px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reset
              </span>
            </button>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 text-white/60 text-sm">
            <p>✨ Click buttons to interact with the counter</p>
          </div>
        </div>
      </div>
    </div>
  );
}
