import React from 'react';
import { Camera, Music, Palette, Film, Mic, Brush } from 'lucide-react';

const Portfolios = () => {
  const artists = [
    {
      name: 'Zara Ahmed',
      profession: 'Photographer',
      description: 'Capturing moments that tell stories. Specialized in portrait and event photography with a unique artistic vision.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Camera,
    },
    {
      name: 'Hassan Ali',
      profession: 'Musician',
      description: 'Creating melodies that touch souls. Expert in traditional Pakistani music and contemporary fusion compositions.',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Music,
    },
    {
      name: 'Ayesha Khan',
      profession: 'Digital Artist',
      description: 'Bringing imagination to life through digital art, illustrations, and creative design solutions for modern brands.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Palette,
    },
    {
      name: 'Omar Farooq',
      profession: 'Filmmaker',
      description: 'Crafting visual narratives that inspire and entertain. Specializing in documentaries and commercial productions.',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Film,
    },
    {
      name: 'Fatima Malik',
      profession: 'Voice Artist',
      description: 'Lending voice to characters and stories with passion. Expert in Urdu, English, and regional language voice-overs.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Mic,
    },
    {
      name: 'Ali Raza',
      profession: 'Graphic Designer',
      description: 'Creating visual identities that make brands memorable. Specializing in logo design and brand development.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Brush,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-sky-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">Portfolios</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
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
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-500 p-3 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <artist.icon className="text-white" size={20} />
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-sm font-semibold text-slate-800">View Portfolio</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors duration-300">{artist.name}</h3>
                <p className="text-sky-600 font-semibold mb-3 text-sm uppercase tracking-wide">{artist.profession}</p>
                <p className="text-slate-600 leading-relaxed text-sm">{artist.description}</p>
                <div className="mt-4 flex items-center text-sky-600 hover:text-blue-600 font-semibold transition-colors duration-200 group-hover:translate-x-2 transform">
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