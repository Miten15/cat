"use client";
import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-left z-0 "
        style={{
          backgroundImage: "url('/jbg.png')",
        }}
      ></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
        <h1 className="text-7xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-xl">Scroll down to see the parallax effect</p>
      </div>

      {/* Overlay Images */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute left-0 bottom-0 w-full h-full animate-float-slow">
          <Image
            src="/jleft.png"
            alt="Left Rock"
            layout="fill"
            objectFit="contain"
            objectPosition="left bottom"
          />
        </div>
        <div className="absolute right-0 bottom-0 w-full h-full animate-float-fast">
          <Image
            src="/jright.png"
            alt="Right Rock"
            layout="fill"
            objectFit="contain"
            objectPosition="right bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
