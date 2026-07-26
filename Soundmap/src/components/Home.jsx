import React, { useEffect, useRef, useState } from 'react';

import bgImage3 from '../assets/awesome2.png';
import bgImage2 from '../assets/Lore.jpg';
import bgImage1 from '../assets/Celmira.jpeg';
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

  const soundLocations = [
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

  const brickWallStyle = {
    backgroundColor: '#6f3028',
    backgroundImage: `
      linear-gradient(
        335deg,
        rgba(0, 0, 0, 0.22) 23px,
        transparent 23px
      ),
      linear-gradient(
        155deg,
        rgba(0, 0, 0, 0.22) 23px,
        transparent 23px
      ),
      linear-gradient(
        335deg,
        rgba(0, 0, 0, 0.22) 23px,
        transparent 23px
      ),
      linear-gradient(
        155deg,
        rgba(0, 0, 0, 0.22) 23px,
        transparent 23px
      )
    `,
    backgroundSize: '58px 58px',
    backgroundPosition: '0 2px, 4px 35px, 29px 31px, 34px 6px',
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      {/* SECOND ARTWORK SECTION */}
      <section className="flex justify-center bg-black py-10 px-6">
        <div
          className="
            relative
            w-full
            max-w-5xl
            rounded-xl
            overflow-hidden
            border
            border-[#B8A03A]/25
            shadow-[0_0_60px_rgba(0,0,0,0.9)]
          "
        >
          <img
            src={bgImage1}
            alt="Second artwork"
            className="
              block
              w-full
              h-auto
              object-contain
              transition-all
              duration-1000
            "
            draggable="false"
          />
        </div>
      </section>
      {/* SECOND ARTWORK SECTION */}
      <section className="flex justify-center bg-black py-10 px-6">
        <div
          className="
            relative
            w-full
            max-w-5xl
            rounded-xl
            overflow-hidden
            border
            border-[#55c9d8]/25
            shadow-[0_0_60px_rgba(0,0,0,0.9)]
          "
        >
          <img
            src={bgImage3}
            alt="Second artwork"
            className="
              block
              w-full
              h-auto
              object-contain
              transition-all
              duration-1000
            "
            draggable="false"
          />
        </div>
      </section>
      <section className="flex justify-center bg-black py-10 px-6">
        <div
          className="
            relative
            w-full
            max-w-5xl
            rounded-xl
            overflow-hidden
            border
            border-[#B8A03A]/25
            shadow-[0_0_60px_rgba(0,0,0,0.9)]
          "
        >
          <img
            src={backgroundImage}
            alt="El Coraza artwork"
            className="
              block
              w-full
              h-auto
              object-contain
              transition-all
              duration-1000
            "
          />
        </div>
      </section>
      {/* SOUND MAP SECTION */}
      <section className="bg-black py-8 text-[#AB4337]">
        <div className="mx-auto max-w-5xl">
          <div className=" text-center">
            <h2 className="mb-2 text-2xl  md:text-3xl">
              Lorena Mancero
            </h2>
            <h2 className="mb-2 text-2xl  md:text-3xl">
              Directora del Proyecto
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;