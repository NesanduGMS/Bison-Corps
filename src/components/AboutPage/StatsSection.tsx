import React from 'react';

export default function Hero() {
  return (
    <section className="py-16 bg-blue-50 text-[#001F3F] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 z-10 relative">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#001F3F]">
          Our Impact 
          <span className="inline-block ml-2">
            <svg width="50" height="8" viewBox="0 0 50 8" className="inline">
              <path d="M1 4 L49 4" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { count: '500+', label: 'Clients Worldwide' },
            { count: '1,000+', label: 'Projects Completed' },
            { count: '100+', label: 'Team Members' },
            { count: '15+', label: 'Years of Experience' }
          ].map((item, index) => (
            <div key={index} className="p-6 rounded-lg bg-white shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-amber-500">
              <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {index === 0 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  )}
                  {index === 1 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  )}
                  {index === 2 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  )}
                  {index === 3 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  )}
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-[#001F3F]">{item.count}</div>
              <div className="w-10 h-1 bg-amber-500 mx-auto mb-3"></div>
              <p className="text-base text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating shapes (optional, reduced size) */}
      <div className="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-amber-500/10 animate-pulse"></div>
      <div className="absolute top-1/3 right-16 w-12 h-12 rounded-full bg-[#6A9AB0]/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-6 h-6 rounded-full bg-[#001F3F]/10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-2/3 right-1/3 w-8 h-8 rounded-full bg-amber-500/10 animate-pulse" style={{ animationDelay: '0.8s' }}></div>

      {/* Bottom Wave (Navy Blue Wave over Blue-50 Background) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <div className="absolute bottom-0 left-0 w-full h-16 bg-blue-50"></div>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-16"
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            fill="#eff6ff" 
          />
        </svg>
      </div>
    </section>
  );
}
