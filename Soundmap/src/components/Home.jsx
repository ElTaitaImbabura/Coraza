import React, { useEffect, useRef, useState } from 'react';

import bgImage2 from '../assets/bgImage10.webp';
import blackImg from '../assets/blackImg.jpg';
import southAmericaMap from '../assets/south-america-map.png';
import WhatsAppIcon from '../assets/whatsapp2.png';

import '../index.css';

function Home() {
  const [backgroundImage, setBackgroundImage] = useState(blackImg);
  const [showText, setShowText] = useState(false);
  const [showLineup, setShowLineup] = useState(false);
  const [activeSound, setActiveSound] = useState(null);

  const audioRef = useRef(null);

  /*
   * x and y determine the position of each dot on the map.
   *
   * x = percentage from the left
   * y = percentage from the top
   *
   * Change the audio paths to match your own files.
   * Files placed in public/audio can be referenced as:
   * /audio/filename.wav
   */
  const soundLocations = [
    // Ten locations throughout South America
    {
      id: 'ecuador',
      name: 'Ecuador',
      x: 31,
      y: 34,
      audio: '/audio/ecuador.wav',
    },
    {
      id: 'colombia',
      name: 'Colombia',
      x: 34,
      y: 23,
      audio: '/audio/colombia.wav',
    },
    {
      id: 'venezuela',
      name: 'Venezuela',
      x: 47,
      y: 24,
      audio: '/audio/venezuela.wav',
    },
    {
      id: 'peru',
      name: 'Peru',
      x: 34,
      y: 47,
      audio: '/audio/peru.wav',
    },
    {
      id: 'bolivia',
      name: 'Argentinas',
      x: 48,
      y: 56,
      audio: '/audio/DEVENIR _Joha.wav',
    },
    {
      id: 'brazil-north',
      name: 'Northern Brazil',
      x: 59,
      y: 38,
      audio: '/audio/brazil-north.wav',
    },
    {
      id: 'brazil-east',
      name: 'Eastern Brazil',
      x: 72,
      y: 51,
      audio: '/audio/brazil-east.wav',
    },
    {
      id: 'paraguay',
      name: 'Paraguay',
      x: 57,
      y: 63,
      audio: '/audio/paraguay.wav',
    },
    {
      id: 'uruguay',
      name: 'Uruguay',
      x: 61,
      y: 75,
      audio: '/audio/uruguay.wav',
    },
    {
      id: 'chile',
      name: 'Chile',
      x: 42,
      y: 72,
      audio: '/audio/chile.wav',
    },

    // Five additional locations in Argentina
    {
      id: 'argentina-jujuy',
      name: 'Jujuy, Argentina',
      x: 49,
      y: 65,
      audio: '/audio/argentina-jujuy.wav',
      argentina: true,
    },
    {
      id: 'argentina-cordoba',
      name: 'Córdoba, Argentina',
      x: 52,
      y: 73,
      audio: '/audio/argentina-cordoba.wav',
      argentina: true,
    },
    {
      id: 'argentina-buenos-aires',
      name: 'Buenos Aires, Argentina',
      x: 58,
      y: 78,
      audio: '/audio/argentina-buenos-aires.wav',
      argentina: true,
    },
    {
      id: 'argentina-neuquen',
      name: 'Neuquén, Argentina',
      x: 45,
      y: 82,
      audio: '/audio/argentina-neuquen.wav',
      argentina: true,
    },
    {
      id: 'argentina-patagonia',
      name: 'Patagonia, Argentina',
      x: 48,
      y: 91,
      audio: '/audio/argentina-patagonia.wav',
      argentina: true,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setBackgroundImage(bgImage2);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const playSound = async (location) => {
    // Clicking the currently active dot stops its audio.
    if (activeSound === location.id && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setActiveSound(null);
      return;
    }

    // Stop the previously playing audio.
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const newAudio = new Audio(location.audio);
    audioRef.current = newAudio;

    newAudio.addEventListener(
      'ended',
      () => {
        setActiveSound(null);
      },
      { once: true }
    );

    newAudio.addEventListener(
      'error',
      () => {
        console.error(`Could not load audio file: ${location.audio}`);
        setActiveSound(null);
      },
      { once: true }
    );

    try {
      await newAudio.play();
      setActiveSound(location.id);
    } catch (error) {
      console.error('Audio playback failed:', error);
      setActiveSound(null);
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setActiveSound(null);
  };

  const activeLocation = soundLocations.find(
    (location) => location.id === activeSound
  );

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <div
        className="relative min-h-screen bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* TOP HEADER TEXT */}
        {showText && (
          <div className="absolute top-4 z-10 flex w-full justify-center">
            <div
              className="
                rounded-lg bg-gray-900/70 px-6 py-2
                text-4xl font-bold font-cinzel backdrop-blur-md
              "
              style={{ color: '#B8A03A' }}
            >
              El Coraza Eventos
            </div>
          </div>
        )}

        {/* CENTER BUTTON */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={() => setShowLineup((current) => !current)}
            className="
              rounded-full border border-white/40 bg-white/30
              px-10 py-4 text-xl font-semibold text-white
              backdrop-blur-md transition hover:bg-white/40
            "
          >
            {showLineup ? 'Hide Line-Up' : 'Click for more info'}
          </button>
        </div>

        {/* LINE-UP OVERLAY */}
        {showLineup && (
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="max-w-xl rounded-xl bg-black/70 p-8 text-center text-red-200 backdrop-blur-md">
              <h2 className="mb-4 text-4xl font-bold">
                IMBABURA FESTIVAL DE PAZ
              </h2>

              <h2 className="mb-2 text-2xl">Fecha: 26.02.2026</h2>
              <h2 className="mb-6 text-2xl">Hora: 22:00</h2>

              <h2 className="mb-4 pt-4 text-4xl font-bold">Line-Up</h2>

              <p className="text-2xl leading-relaxed">
                • Kuri The Sax Guru
                <br />
                • The Blaze
                <br />
                • Atawalpa
                <br />
                • Hernan Cattaneo – Closing Act
              </p>
            </div>
          </div>
        )}
      </div>

      {/* SOUND MAP SECTION */}
      <section className="bg-black px-4 py-16 text-[#B8A03A]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-3xl font-extrabold md:text-4xl">
              Sonidos de Sudamérica
            </h2>

            <p className="mx-auto max-w-2xl text-base text-orange-100 md:text-lg">
              Presiona uno de los puntos del mapa para escuchar su sonido.
              Presiona el mismo punto nuevamente para detenerlo.
            </p>
          </div>

          {/* MAP CONTAINER */}
          <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border-4 border-[#B8A03A]/70 bg-slate-950 p-3">
            <div className="relative">
              <img
                src={southAmericaMap}
                alt="Interactive map of South America"
                className="block h-auto w-full select-none object-contain"
                draggable="false"
              />

              {soundLocations.map((location) => {
                const isActive = activeSound === location.id;

                return (
                  <button
                    key={location.id}
                    type="button"
                    onClick={() => playSound(location)}
                    aria-label={`Play sound for ${location.name}`}
                    title={location.name}
                    className={`
                      group absolute z-10 -translate-x-1/2 -translate-y-1/2
                      rounded-full border-2 border-white
                      transition duration-200
                      hover:scale-125 focus:outline-none
                      focus:ring-4 focus:ring-yellow-300/60
                      ${
                        location.argentina
                          ? 'h-4 w-4 bg-red-500 md:h-5 md:w-5'
                          : 'h-5 w-5 bg-yellow-400 md:h-6 md:w-6'
                      }
                      ${
                        isActive
                          ? 'scale-125 animate-pulse shadow-[0_0_20px_rgba(250,204,21,1)]'
                          : 'shadow-[0_0_10px_rgba(255,255,255,0.8)]'
                      }
                    `}
                    style={{
                      left: `${location.x}%`,
                      top: `${location.y}%`,
                    }}
                  >
                    {/* HOVER LABEL */}
                    <span
                      className="
                        pointer-events-none absolute bottom-full left-1/2
                        mb-2 hidden -translate-x-1/2 whitespace-nowrap
                        rounded-md bg-black/90 px-2 py-1
                        text-xs font-semibold text-white
                        group-hover:block group-focus:block
                      "
                    >
                      {location.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* MAP LEGEND */}
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-orange-100">
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-full border-2 border-white bg-yellow-400" />
              <span>Sudamérica</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-full border-2 border-white bg-red-500" />
              <span>Argentina</span>
            </div>
          </div>

          {/* AUDIO STATUS */}
          <div className="mt-8 text-center">
            <p className="mb-4 text-lg text-orange-100">
              {activeLocation
                ? `Reproduciendo: ${activeLocation.name}`
                : 'Ningún sonido está reproduciéndose'}
            </p>

            <button
              type="button"
              onClick={stopAudio}
              disabled={!activeSound}
              className="
                rounded-full border border-[#B8A03A]
                px-6 py-2 font-semibold text-[#B8A03A]
                transition hover:bg-[#B8A03A] hover:text-black
                disabled:cursor-not-allowed disabled:opacity-40
              "
            >
              Detener audio
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <div className="bg-black text-[#B8A03A]">
        <div className="py-6 text-center text-lg font-extrabold">
          Compra tu billete por WhatsApp
        </div>

        <div className="flex items-center justify-center gap-4 pb-6 text-lg text-orange-100">
          <span>0967101989</span>

          <img
            src={WhatsAppIcon}
            alt="WhatsApp"
            className="h-8 w-8 hover:opacity-75"
          />
        </div>

        <div className="py-4 text-center text-lg font-extrabold">
          Contáctanos por correo
        </div>

        <div className="pb-6 text-center text-lg text-orange-100">
          elCorazaEvents@gmail.com
        </div>
      </div>
    </div>
  );
}

export default Home;