import React, { useState, useEffect } from 'react';
import bgImage2 from '../assets/bgImage10.webp';
import blackImg from '../assets/blackImg.jpg';
import map from '../assets/map.png';
import WhatsAppIcon from '../assets/whatsapp2.png'; // make sure this exists
import '../index.css';

function Home() {
  const [backgroundImage, setBackgroundImage] = useState(blackImg);
  const [showText, setShowText] = useState(false);
  const [showLineup, setShowLineup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBackgroundImage(bgImage2);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setShowText(true), 0);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <div
        className="relative min-h-screen bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >

        {/* TOP HEADER TEXT (FIXED SPACING) */}
        {showText && (
          <div className="absolute top-4 w-full flex justify-center z-10">
            <div
              className="px-6 py-2 text-4xl font-cinzel font-bold
                         bg-gray-900/70 backdrop-blur-md rounded-lg"
              style={{ color: '#B8A03A' }}
            >
              El Coraza Eventos
            </div>
          </div>
        )}

        {/* CENTER BUTTON */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => setShowLineup(!showLineup)}
            className="px-10 py-4 text-xl font-semibold text-white rounded-full
                       bg-white/30 backdrop-blur-md border border-white/40
                       hover:bg-white/40 transition"
          >
            {showLineup ? 'Hide Line-Up' : 'Click for more info'}
          </button>
        </div>

        {/* LINE-UP OVERLAY */}
        {showLineup && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="max-w-xl p-8 text-center text-red-200 bg-black/70 rounded-xl backdrop-blur-md">
              <h2 className="mb-4 text-4xl font-bold">IMBABURA FESTIVAL DE PAZ</h2>
              <h2 className="mb-2 text-2xl">Fecha: 26.02.2026</h2>
              <h2 className="mb-6 text-2xl">Hora: 22:00</h2>

              <h2 className="mb-4 pt-4 text-4xl font-bold">Line-Up</h2>
              <p className="text-2xl leading-relaxed">
                • Kuri The Sax Guru<br />
                • The Blaze<br />
                • Atawalpa<br />
                • Hernan Cattaneo – Closing Act
              </p>
            </div>
          </div>
        )}

      </div>

      {/* FOOTER SECTION (CLEANED SPACING) */}
      <div className="bg-black text-[#B8A03A]">

        <div className="py-6 text-center text-lg font-extrabold">
          Compra tu billete por WhatsApp
        </div>

        <div className="flex justify-center items-center gap-4 pb-6 text-orange-100 text-lg">
          <span>0967101989</span>
          <img
            src={WhatsAppIcon}
            alt="WhatsApp"
            className="w-8 h-8 hover:opacity-75"
          />
        </div>

        <div className="text-center text-lg py-4 font-extrabold">
          Contactanos por correo
        </div>

        <div className="text-center text-lg pb-6 text-orange-100">
          elCorazaEvents@gmail.com
        </div>

        <div className="text-center text-lg py-4 font-extrabold">
          Ubicación
        </div>

        <div className="flex justify-center pb-8">
          <img
            src={map}
            alt="Location map"
            className="w-1/2 border-8 border-blue-200 rounded-lg"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;
