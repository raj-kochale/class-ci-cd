'use client';

import Image from "next/image";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Dynamically import confetti to avoid SSR issues
const Confetti = dynamic(() => import('react-confetti'), {
  ssr: false
});

export default function BirthdayPage() {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 relative overflow-hidden">
      <Confetti
        width={dimensions.width}
        height={dimensions.height}
        numberOfPieces={200}
        recycle={true}
      />
      
      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 animate-bounce">
            Happy Birthday Raj! 🎉
          </h1>
          
          <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
              Wishing you a day filled with happiness and a year filled with joy. 
              May all your dreams come true and may you be blessed with success in everything you do! 
              Here&apos;s to another amazing year of your life! 🎂
            </p>
          </div>

          <div className="relative w-64 h-64 mx-auto">
            <Image
              src="/birthday-cake.gif"
              alt="Birthday Cake"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-md mx-auto">
            <audio controls className="w-full" autoPlay>
              <source src="/birthday-song.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </main>

      <div className="absolute bottom-4 right-4 text-sm text-gray-600">
        Made with ❤️ for Raj
      </div>
    </div>
  );
} 