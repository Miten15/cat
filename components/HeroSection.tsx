
"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-left z-0"
        style={{ 
          backgroundImage: "url('/jbg.png')",
          transform: `translateY(${offset * 0.5}px)`
        }}
      ></div>
      
      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
        <h1 className="text-7xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-xl">Scroll down to see the parallax effect</p>
      </div>

      {/* Overlay Images */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <Image
          src="/jleft.png"
          alt="Left Rock"
          layout="fill"
          objectFit="contain"
          objectPosition="left center"
          style={{ transform: `translateY(${offset * 0.2}px)` }}
        />
        <Image
          src="/jright.png"
          alt="Right Rock"
          layout="fill"
          objectFit="contain"
          objectPosition="center "
          style={{ transform: `translateY(${offset * 0.3}px)` }}
        />
      </div>
    </div>
  );
};

export default HeroSection;