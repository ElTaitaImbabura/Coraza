import React from 'react';

import bgImage1 from '../assets/Celmira.jpeg';
import bgImage2 from '../assets/Lore.jpg';
import bgImage3 from '../assets/awesome2.png';

import '../index.css';

function Home() {
  const artworkSections = [
    {
      id: 'celmira',
      image: bgImage1,
      alt: 'Celimira artwork',
      borderClass: 'border-[#B8A03A]/25',
      marginTop: true,
    },
    {
      id: 'awesome',
      image: bgImage3,
      alt: 'Devenir Insurrectas artwork',
      borderClass: 'border-[#55c9d8]/25',
    },
    {
      id: 'lore',
      image: bgImage2,
      alt: 'Lore artwork',
      borderClass: 'border-[#B8A03A]/25',
    },
  ];

  return (
    <main className="w-full bg-black">
      <h1
        className="
          bg-black
          text-center
          font-cinzel
          tracking-wide
          text-3xl
          md:text-4xl
        "
        style={{ color: '#AB4337' }}
      >
        Devenir Insurrectas
      </h1>

      {artworkSections.map((artwork) => (
        <section
          key={artwork.id}
          className="flex justify-center bg-black px-6 py-2"
        >
          <div
            className={`
              relative
              w-full
              max-w-5xl
              overflow-hidden
              rounded-xl
              border
              shadow-[0_0_60px_rgba(0,0,0,0.9)]
              ${artwork.borderClass}
              ${artwork.marginTop}
            `}
          >
            <img
              src={artwork.image}
              alt={artwork.alt}
              className="
                block
                h-auto
                w-full
                object-contain
                transition-all
                duration-1000
              "
              draggable="false"
            />
          </div>
        </section>
      ))}
    </main>
  );
}

export default Home;