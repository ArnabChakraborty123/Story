// Page.js

import React from 'react';
import Navbar from '@/components/navbar';
import Header from '@/components/Header';

function Page() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen">
          <Navbar/>

      <div className="container mx-auto pt-10 ">
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-pink-300">
              Happy Birthday
            </span>{' '}
            <span className="text-gray-400 "> {/* Apply no-glassmorphism class */}
              Koushani
            </span>
            🎂🎉
          </h1>
          <p className="text-white text-lg font-medium italic font-serif leading-relaxed">
            <span className="text-xl">
              Wishing you a fantastic day filled with joy and laughter!
            </span>
          </p>
        </header>
      </div>
      <Header />
    </div>
  );
}

export default Page;
