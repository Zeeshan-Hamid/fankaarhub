import React, { useEffect, useRef } from 'react';
import { ArrowRight, Star, Play, ChevronRight } from 'lucide-react';

const Hero = () => {
  const featuredArtists = [
    {
      name: 'Ayza Zahid',
      role: 'Creative Writer',
      image: '/images/1 (6).jpeg'
    },
    {
      name: 'Eesa Ahmad',
      role: 'Director',
      image: '/images/1 (5).jpeg'
    },
    {
      name: 'Aima Saqlain',
      role: 'Voice Artist',
      image: '/images/1 (3).jpeg'
    }
  ];

  const counterRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const animateCounters = () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach((counter) => {
      const targetAttr = counter.getAttribute('data-target');
      if (targetAttr === null) return;
      
      const target = parseInt(targetAttr, 10);
      const duration = 2000; // 2 seconds
      const step = target / (duration / 30); // Update every 30ms
      let current = 0;
      
      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.textContent = Math.ceil(current).toString();
          setTimeout(updateCounter, 30);
        } else {
          counter.textContent = target.toString();
        }
      };
      
      updateCounter();
    });
  };

  return (
    <div className="relative overflow-hidden bg-[#095373] pt-20">
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-[#E77C25]/20 blur-3xl"></div>
        <div className="absolute top-[60%] -left-[5%] w-[30%] h-[40%] rounded-full bg-[#E77C25]/10 blur-3xl"></div>
        <div className="absolute top-[20%] right-[20%] w-[15%] h-[15%] rounded-full bg-white/5 blur-xl"></div>
      </div>

      {/* Main hero section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-[#E77C25]/10 rounded-full">
              <span className="text-[#E77C25] font-medium text-sm mr-2">Pakistan's Premier Artist Platform</span>
              <div className="w-1 h-1 rounded-full bg-[#E77C25]"></div>
              <span className="text-white/70 text-xs ml-2">Founded in 2025</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight text-center sm:text-left">
              WE ARE
              <br />
              <span className="relative">
                <span className="relative z-10 text-[#E77C25]">FUNKAARS</span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-[#E77C25]/20 rounded-lg -z-0"></span>
              </span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-lg">
              Connecting Pakistan's most talented artists with leading media houses through innovation and creativity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center bg-[#E77C25] hover:bg-[#E77C25]/90 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 group">
                Explore Talent
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button className="flex items-center justify-center border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm group">
                <Play className="mr-2 fill-white" size={20} />
                Watch Showreel
              </button>
            </div>
            
           
          </div>
          
          {/* Right content - Featured artists */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#E77C25]/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#E77C25]/10 rounded-full blur-3xl"></div>
            
            <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10">
              <div className="absolute top-4 right-4 bg-[#E77C25] text-white text-xs font-bold px-3 py-1 rounded-full">
                FEATURED
              </div>
              
              <h3 className="text-white font-semibold mb-4">Trending Artists</h3>
              
              <div className="space-y-4">
                {featuredArtists.map((artist, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 hover:bg-white/5 rounded-xl transition-colors duration-200">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{artist.name}</h4>
                      <p className="text-[#E77C25] text-sm">{artist.role}</p>
                    </div>
                    <button className="ml-auto bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-200">
                      <ChevronRight className="text-white" size={16} />
                    </button>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-6 py-3 text-center text-white/80 hover:text-white text-sm font-medium border-t border-white/10 transition-colors duration-200">
                View All Artists
              </button>
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div ref={counterRef} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: 500, label: 'Artists', icon: '🎭' },
            { value: 50, label: 'Media Partners', icon: '🏢' },
            { value: 200, label: 'Projects', icon: '📝' },
            { value: 1000, label: 'Success Stories', icon: '🏆' }
          ].map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-colors duration-300">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-bold text-white counter" data-target={stat.value}>
                0
              </div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#E77C25] rounded-full animate-ping"></div>
      <div className="absolute bottom-32 right-16 w-3 h-3 bg-[#E77C25] rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-white rounded-full animate-bounce"></div>
    </div>
  );
};

export default Hero;