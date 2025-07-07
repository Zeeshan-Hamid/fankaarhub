import React from 'react';

const Partners = () => {
  const partners = [
    'ARY Digital',
    'Geo Entertainment',
    'Hum TV',
    'Express Entertainment',
    'Urdu 1',
    'A-Plus Entertainment',
    'BOL Entertainment',
    'Aaj Entertainment',
    'PTV Home',
    'TV One',
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#095373]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#E77C25]">Partners</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Collaborating with Pakistan's leading media houses to create exceptional opportunities
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll hover:pause-animation">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 sm:mx-6 bg-white/10 backdrop-blur-sm rounded-2xl px-6 sm:px-8 py-6 sm:py-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 cursor-pointer group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#E77C25] rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                    <span className="text-white font-bold text-lg sm:text-xl">
                      {partner.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-sm sm:text-lg whitespace-nowrap group-hover:text-[#E77C25] transition-colors duration-300">
                    {partner}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;