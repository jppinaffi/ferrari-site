import React from 'react';
import { handleRedirect } from '../helpers/handleRedirect';
import { ImageWithFallback } from './ImageWithFallback';
//import exampleImage from 'figma:asset/3f8353ffb76660cfda5fdb716d3a2ad16c8d7277.png';

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image/Video simulation */}
      <div className="absolute inset-0">
        <ImageWithFallback 
          src={'../../images/SF-25.jpg'}
          alt="Ferrari F1 Car"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Overlay gradients for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            {/* Main heading */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
                Potência e elegância
              </h1>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-red-500 text-2xl md:text-3xl font-bold tracking-wider">SF-25</span>
                <div className="h-px bg-red-500 flex-1 max-w-24"></div>
              </div>
            </div>

            {/* Subtitle and description */}
            <div className="mb-8 space-y-4">
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed">
                Descubra a lenda que continua a fazer história na Fórmula 1
              </p>
              <p className="text-lg text-gray-300 max-w-xl">
                Desde 1950, a Scuderia Ferrari representa a excelência, tradição e inovação no automobilismo mundial.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                      onClick={() => handleRedirect('https://www.ferrari.com/en-EN/formula1/sf-25')}>
                Descubra
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 transition-all duration-300"
                      onClick={() => handleRedirect('https://www.youtube.com/watch?v=ZWKp63JTvgE') }>
                Assista ao Vídeo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Side stats */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="text-white space-y-8 text-right">
          <div>
            <div className="text-3xl font-bold text-red-500">16</div>
            <div className="text-sm uppercase tracking-wider">Títulos de Construtores</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500">15</div>
            <div className="text-sm uppercase tracking-wider">Títulos de Pilotos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500">74</div>
            <div className="text-sm uppercase tracking-wider">Anos de História</div>
          </div>
        </div>
      </div>
    </section>
  );
}