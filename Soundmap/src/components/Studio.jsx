import React, { useEffect, useRef, useState } from 'react';

import ecuadorMap from '../assets/ecuador.png';
import argentinaMap from '../assets/argentina.png';
import '../index.css';

function Studio() {
  const [showMaps, setShowMaps] = useState(false);
  const [activeSound, setActiveSound] = useState(null);
  const audioRef = useRef(null);

  const ecuadorLocations = [
    { id: 'ecuador-1', name: 'Gaby', x: 20, y: 30, audio: '/audio/Gaby_Quito_Ecuador.mp3' },
    { id: 'ecuador-2', name: 'Daniela', x: 80, y: 24, audio: '/audio/Daniela_Qutio_Ecuador.mp3' },
    { id: 'ecuador-3', name: 'Andrea', x: 47, y: 24, audio: '/audio/Andrea_Qutio_Ecuador.mp3' },
    { id: 'ecuador-4', name: 'Miñarcaja', x: 34, y: 47, audio: '/audio/Miniarcaja_LasVecis_Chimborazo_Ecuador.mp3' },
    { id: 'ecuador-5', name: 'Gladys', x: 15, y: 40, audio: '/audio/Gladys_Uyumbicho_Ecuador.mp3' },
    { id: 'ecuador-6', name: 'Amupakin', x: 59, y: 38, audio: '/audio/Amupakin_Tena_Ecuador.mp3' },
    { id: 'ecuador-7', name: 'Jhoana', x: 72, y: 51, audio: '/audio/Jhoana_Uyumbicho_Ecuador.mp3' },
    { id: 'ecuador-8', name: 'Nina', x: 57, y: 63, audio: '/audio/Nina_Mindo_Ecuador.mp3' },
    // { id: 'ecuador-10', name: 'Ecuador 10', x: 42, y: 72, audio: '/audio/chile.wav' },
  ];

  const argentinaLocations = [
    { id: 'argentina-1', name: 'Agostina', x: 54, y: 12, audio: '/audio/Agostina_Tucuman_Argentina.mp3' },
    { id: 'argentina-2', name: 'Yrene', x: 52, y: 23, audio: '/audio/Yrene_BuenosAires_Argentina.mp3' },
    { id: 'argentina-3', name: 'Kantuta', x: 58, y: 38, audio: '/audio/Kantuta_BuenosAires_Argentina.mp3' },
    { id: 'ecuador-9', name: 'Sandra', x: 40, y: 69, audio: '/audio/Sandra_peyote.mp3' },
  ];

  const allLocations = [...ecuadorLocations, ...argentinaLocations];

  useEffect(() => {
    const timer = setTimeout(() => setShowMaps(true), 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    return () => {
      if (audioRef.current) audioRef.current.pause();
    };
  }, []);

  const playSound = async (location) => {
    if (activeSound === location.id && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setActiveSound(null);
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const newAudio = new Audio(location.audio);
    audioRef.current = newAudio;

    newAudio.addEventListener('ended', () => setActiveSound(null), { once: true });
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

  const activeLocation = allLocations.find(
    (location) => location.id === activeSound
  );

  const renderMap = (image, alt, locations, dotClassName) => (

    <div className="relative w-full overflow-hidden rounded-2xl border-4 border-[#B8A03A]/70 bg-slate-950 p-3">
      <div className="relative">
        <img
          src={image}
          alt={alt}
          className="block h-auto w-full select-none object-contain"
          draggable="false"
        />

        {locations.map((location) => {
          const isActive = activeSound === location.id;

          return (
            <button
              key={location.id}
              type="button"
              onClick={() => playSound(location)}
              aria-label={`Play sound for ${location.name}`}
              title={location.name}
              className={`group absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white transition duration-200 hover:scale-125 focus:outline-none focus:ring-4 focus:ring-yellow-300/60 h-5 w-5 md:h-6 md:w-6 ${dotClassName} ${
                isActive
                  ? 'scale-125 animate-pulse shadow-[0_0_20px_rgba(250,204,21,1)]'
                  : 'shadow-[0_0_10px_rgba(255,255,255,0.8)]'
              }`}
              style={{ left: `${location.x}%`, top: `${location.y}%` }}
            >
              <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-black/90 px-2 py-1 text-xs font-semibold text-white group-hover:block group-focus:block">
                {location.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-black px-4 py-8 text-[#B8A03A]">
      <div>
        <h1 className="mb-6 text-center md:text-2xl font-cinzel tracking-wide" style={{ color: "#D7E6F8" }}>
          Presiona los círculos para escuchar los saberes de plantas medicinales
        </h1>
      </div>
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center">
        <div
          className={`w-full transition-all duration-1000 ease-in-out ${
            showMaps ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
            {renderMap(
              ecuadorMap,
              'Interactive map of Ecuador',
              ecuadorLocations,
              'bg-red-500'
            )}

            {renderMap(
              argentinaMap,
              'Interactive map of Argentina',
              argentinaLocations,
              'bg-blue-500'
            )}
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-orange-100">
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-full border-2 border-white bg-red-500" />
              <span>Ecuador</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-full border-2 border-white bg-blue-500" />
              <span>Argentina</span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="mb-4 text-lg text-orange-100">
              {activeLocation
                ? `Reproduciendo: ${activeLocation.name}`
                : 'Ningún sonido está reproduciéndose'}
            </p>

            <button
              type="button"
              onClick={stopAudio}
              disabled={!activeSound}
              className="rounded-full border border-[#B8A03A] px-6 py-2 font-semibold text-[#B8A03A] transition hover:bg-[#B8A03A] hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
            >
              Detener audio
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Studio;