"use client";
import Image from "next/image";
import { useState } from "react";

const MediaCarousel = ({ mediaItems, buttonBgColor = "#090909" }) => {
  const isLight = buttonBgColor === "#b2dafa";
  const btnClass = isLight
    ? `bg-[#b2dafa] border-[#000] text-[#000] hover:bg-[#000] hover:text-[#b2dafa]`
    : buttonBgColor === "#090909"
    ? `bg-[#090909] border-white text-white hover:bg-white hover:text-[#090909]`
    : `bg-[#050505] border-white text-white hover:bg-white hover:text-[#050505]`;
  // État pour le carrousel
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentMediaIndex((prev) => 
      prev === 0 ? mediaItems.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentMediaIndex((prev) => 
      prev === mediaItems.length - 1 ? 0 : prev + 1
    );
  };

  const currentMedia = mediaItems[currentMediaIndex];

  return (
    <div className="self-stretch w-full relative flex items-center justify-center my-8">
      {/* Bouton flèche gauche */}
      <button
        className={`absolute left-0 z-10 w-12 h-12 lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8 xs:w-6 xs:h-6 border-2 rounded-full flex items-center justify-center transition-colors duration-200 ${btnClass}`}
        onClick={goToPrevious}
        aria-label="Média précédent"
      >
        <svg className="w-6 h-6 lg:w-6 lg:h-6 md:w-5 md:h-5 sm:w-4 sm:h-4 xs:w-3 xs:h-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>
      
      {/* Container des médias */}
      <div className="w-full max-w-[1000px] mx-auto px-20 lg:px-20 md:px-16 sm:px-12 xs:px-10">
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
          {currentMedia.type === 'image' ? (
            <Image
              className="w-full h-auto object-contain"
              src={currentMedia.src}
              alt={currentMedia.alt}
              width={1000}
              height={400}
              sizes="(max-width: 1000px) 100vw, 1000px"
            />
          ) : (
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={currentMedia.src}
                title={currentMedia.title || currentMedia.alt}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
      
      {/* Bouton flèche droite */}
      <button
        className={`absolute right-0 z-10 w-12 h-12 lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8 xs:w-6 xs:h-6 border-2 rounded-full flex items-center justify-center transition-colors duration-200 ${btnClass}`}
        onClick={goToNext}
        aria-label="Média suivant"
      >
        <svg className="w-6 h-6 lg:w-6 lg:h-6 md:w-5 md:h-5 sm:w-4 sm:h-4 xs:w-3 xs:h-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
        </svg>
      </button>
    </div>
  );
};

export default MediaCarousel;

