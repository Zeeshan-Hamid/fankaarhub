import React from 'react';

const Partners = () => {
  const partners = [
 
    {
      name: 'Shoes String',
      logo: '',
    },
    {
      name: 'Octaverse',
      logo: '',
    },
    {
      name: 'Creative Expressions',
      logo: '',
    },
    {
      name: 'Amberz commerce',
      logo: '',
    },
    
    
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
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center overflow-hidden group-hover:bg-white/20 transition-all duration-500">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain p-2"
                      onError={(e) => {
                        // Fallback to displaying the first letter if image fails to load
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML = `<span class="text-white font-bold text-3xl">${partner.name.charAt(0)}</span>`;
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-white font-semibold text-sm sm:text-lg whitespace-nowrap group-hover:text-[#E77C25] transition-colors duration-300">
                    {partner.name}
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