import React from 'react';
import { BookOpen, Video, Palette, Mic, UserRound, Scissors } from 'lucide-react';

const Portfolios = () => {
  const artists = [
    {
      name: 'Ayza Zahid',
      profession: 'Creative Writer',
      description: 'Words are her canvas. Ayza weaves emotion and imagination into every line. A proud Fankaar giving stories a voice',
      image:'src/assets/images/1 (6).jpeg',
      icon: BookOpen,
    },
    {
      name: 'Eesa Ahmad',
      profession: 'Director',
      description: 'Vision beyond the lens. Eesa shapes stories from concept to screen. A proud Fankaar leading ideas to life.',
      image: 'src/assets/images/1 (5).jpeg',
      icon: Video,
    },
    {
      name: 'Usman Khan',
      profession: 'Anchor Person',
      description: 'Confident. Clear. Captivating. Usman commands attention with every word. A proud Fankaar who speaks with purpose.',
      image: 'src/assets/images/1 (4).jpeg',
      icon: Palette,
    },
    {
      name: 'Aima Saqlain',
      profession: 'Voice Over Artist',
      description: 'Aima breathes life into every character. Her voice is the heartbeat of stories. A proud Fankaar who brings characters to life.',
      image: 'src/assets/images/1 (3).jpeg',
      icon: Mic,
    },
    {
      name: 'Zaid Shahzad',
      profession: 'Fashion Model',
      description: 'Style meets confidence. Zaid owns every frame with presence and poise. A proud Fankaar reshaping modern fashion narratives.',
      image: 'src/assets/images/1 (2).jpeg',
      icon: UserRound,
    },
    {
      name: 'Mubashir Sardar',
      profession: 'Video Editor',
      description: 'Crafting visual stories frame by frame, Mubashir brings imagination to life through his expert editing. A proud Fankaar who believes every cut counts.',
      image: 'src/assets/images/1 (1).jpeg',
      icon: Scissors,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#333333] mb-4">
            Our <span className="text-[#095373]">Portfolios</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#555555] max-w-2xl mx-auto">
            Discover the incredible talent of our featured artists and their creative journeys
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {artists.map((artist, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-72 sm:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 bg-[#095373] p-3 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <artist.icon className="text-white" size={20} />
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-sm font-semibold text-[#095373]">View Portfolio</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#333333] mb-2 group-hover:text-[#095373] transition-colors duration-300">{artist.name}</h3>
                <p className="text-[#E77C25] font-semibold mb-3 text-sm uppercase tracking-wide">{artist.profession}</p>
                <p className="text-[#555555] leading-relaxed text-sm">{artist.description}</p>
                <div className="mt-4 flex items-center text-[#095373] hover:text-[#E77C25] font-semibold transition-colors duration-200 group-hover:translate-x-2 transform">
                  <span className="text-sm">Explore Work</span>
                  <span className="ml-2 group-hover:ml-4 transition-all duration-300">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolios;