import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Saqib Rehman',
      designation: 'MISSION',
      description: 'To create a platform where raw student talent meets real industry opportunities giving every Fankaar the stage they deserve',
      image: 'src/assets/images/WhatsApp Image 2025-07-06 at 3.05.20 PM.jpeg',
    },
    {
      name: 'Ali jan Muhammad',
      designation: 'EXECUTION',
      description: "We're not just dreamers -we're doers. Every move we make is a step toward build-ing a culture of collaboration creativity, and opportunity.",
      image: 'src/assets/images/WhatsApp Image 2025-07-06 at 3.05.19 PM.jpeg',
    },
    {
      name: 'Abdul Moiz',
      designation: 'VISION',
      description: 'To become the go-to creative bridge between media students and the professional world, where talent is not just discovered it\'s celebrated.',
      image: 'src/assets/images/fc9f26a3-7f61-427d-9d69-8dbf82c289ef.jpg'
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Meet Our <span className="text-[#095373]">Team</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            The passionate minds behind FunkaarHub, dedicated to connecting talent with opportunity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 via-sky-50 to-blue-50 rounded-2xl p-6 sm:p-8 group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 cursor-pointer border border-slate-200/50"
            >
              <div className="relative mb-6">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl mx-auto object-cover ring-4 ring-sky-200 group-hover:ring-sky-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-600/20 via-blue-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-sky-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
              </div>
              
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors duration-300">{member.name}</h3>
                <p className="text-sky-600 font-semibold mb-4 text-sm uppercase tracking-wide">{member.designation}</p>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm group-hover:text-slate-700 transition-colors duration-300">{member.description}</p>
                
                <div className="flex justify-center space-x-3">
                  <button className="p-3 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-sky-50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group-hover:rotate-12">
                    <Linkedin className="text-sky-600" size={18} />
                  </button>
                  <button className="p-3 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group-hover:-rotate-12">
                    <Twitter className="text-blue-600" size={18} />
                  </button>
                  <button className="p-3 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-cyan-50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group-hover:rotate-12">
                    <Mail className="text-cyan-600" size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;