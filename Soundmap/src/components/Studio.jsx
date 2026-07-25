import React, { useEffect, useRef, useState } from 'react';

import ecuadorMap from '../assets/ecuador.png';
import argentinaMap from '../assets/argentina.jpg';
import '../index.css';

function Studio() {
  const [showMaps, setShowMaps] = useState(false);
  const [activeSound, setActiveSound] = useState(null);
  const audioRef = useRef(null);

  const ecuadorLocations = [
    { id: 'ecuador-1', name: 'Ecuador 1', x: 20, y: 21, audio: '/audio/DEVENIR _Joha.wav' },
    { id: 'ecuador-2', name: 'Ecuador 2', x: 80, y: 21, audio: '/audio/colombia.wav' },
    { id: 'ecuador-3', name: 'Ecuador 3', x: 47, y: 24, audio: '/audio/venezuela.wav' },
    { id: 'ecuador-4', name: 'Ecuador 4', x: 34, y: 47, audio: '/audio/peru.wav' },
    { id: 'ecuador-5', name: 'Ecuador 5', x: 8, y: 45, audio: '/audio/bolivia.wav' },
    { id: 'ecuador-6', name: 'Ecuador 6', x: 59, y: 38, audio: '/audio/brazil-north.wav' },
    { id: 'ecuador-7', name: 'Ecuador 7', x: 72, y: 51, audio: '/audio/brazil-east.wav' },
    { id: 'ecuador-8', name: 'Ecuador 8', x: 57, y: 63, audio: '/audio/paraguay.wav' },
    { id: 'ecuador-9', name: 'Ecuador 9', x: 30, y: 85, audio: '/audio/uruguay.wav' },
    { id: 'ecuador-10', name: 'Ecuador 10', x: 42, y: 72, audio: '/audio/chile.wav' },
  ];

  const argentinaLocations = [
    { id: 'argentina-1', name: 'Argentina 1', x: 42, y: 15, audio: '/audio/argentina-jujuy.wav' },
    { id: 'argentina-2', name: 'Argentina 2', x: 52, y: 23, audio: '/audio/argentina-cordoba.wav' },
    { id: 'argentina-3', name: 'Argentina 3', x: 58, y: 38, audio: '/audio/argentina-buenos-aires.wav' },
    { id: 'argentina-4', name: 'Argentina 4', x: 40, y: 42, audio: '/audio/argentina-neuquen.wav' },
    { id: 'argentina-5', name: 'Argentina 5', x: 35, y: 70, audio: '/audio/argentina-patagonia.wav' },
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