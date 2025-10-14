import React from 'react';
import { handleRedirect } from '../helpers/handleRedirect';
import { ImageWithFallback } from './ImageWithFallback';

export default function DriversSection() {
  
  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="h-px bg-red-500 w-16"></div>
            <span className="text-red-500 uppercase tracking-wider">Nossa Dupla</span>
            <div className="h-px bg-red-500 w-16"></div>
          </div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            Conheça nossos pilotos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma combinação única de talento, experiência e determinação que representa o futuro da Scuderia Ferrari
          </p>
        </div>

        {/* Drivers Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Charles Leclerc */}
          <div className="group">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-red-500/20">
              {/* Driver Image */}
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback 
                  src={'../../images/chalec01.avif'}
                  alt="Charles Leclerc"
                  className="w-auto h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Driver Number */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">16</span>
                </div>

                {/* Flag */}
                <div className="absolute top-4 left-4 w-8 h-6 bg-red-500 rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs">MC</span>
                </div>
              </div>

              {/* Driver Info */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-3xl text-white mb-2">Charles Leclerc</h3>
                  <p className="text-red-500 uppercase tracking-wider">Piloto Principal</p>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-gray-300 leading-relaxed">
                    Nascido em 1997 em Monte Carlo, é um piloto monegasco de Fórmula 1. 
                    Campeão da Fórmula 2 em 2017, estreou na F1 em 2018 pela Sauber e 
                    desde 2019 corre pela Ferrari, onde é destaque pela velocidade e talento.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">5</div>
                    <div className="text-xs text-gray-400 uppercase">Vitórias</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">26</div>
                    <div className="text-xs text-gray-400 uppercase">Pódios</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">24</div>
                    <div className="text-xs text-gray-400 uppercase">Pole Positions</div>
                  </div>
                </div>

                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 transition-colors duration-300"
                        onClick={() => handleRedirect('https://pt.wikipedia.org/wiki/Charles_Leclerc')}>
                  Ver Mais
                </button>
              </div>
            </div>
          </div>

          {/* Lewis Hamilton */}
          <div className="group">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-red-500/20">
              {/* Driver Image */}
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback 
                  src={'../../images/lewham01.avif'}
                  alt="Lewis Hamilton"
                  className="w-auto h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Driver Number */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">44</span>
                </div>

                {/* Flag */}
                <div className="absolute top-4 left-4 w-8 h-6 bg-blue-600 rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs">GB</span>
                </div>
              </div>

              {/* Driver Info */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-3xl text-white mb-2">Lewis Hamilton</h3>
                  <p className="text-red-500 uppercase tracking-wider">Piloto Principal</p>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-gray-300 leading-relaxed">
                    Nascido em 1985 na Inglaterra, é uma lenda da Fórmula 1 com 7 títulos mundiais. 
                    Ingressou na Ferrari em 2025, trazendo sua vasta experiência e determinação 
                    para conquistar novos títulos com a Scuderia.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">103</div>
                    <div className="text-xs text-gray-400 uppercase">Vitórias</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">197</div>
                    <div className="text-xs text-gray-400 uppercase">Pódios</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">104</div>
                    <div className="text-xs text-gray-400 uppercase">Pole Positions</div>
                  </div>
                </div>

                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 transition-colors duration-300"
                        onClick={() => handleRedirect('https://pt.wikipedia.org/wiki/Lewis_Hamilton')}>
                  Ver Mais
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="h-px bg-gray-600 w-24"></div>
            <span className="text-gray-400 uppercase tracking-wider">Junte-se à tifosi</span>
            <div className="h-px bg-gray-600 w-24"></div>
          </div>
          <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-4 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/30"
                  onClick={() => handleRedirect("https://www.ferrari.com/en-EN/formula1")}>
            Acompanhe a Temporada 2025
          </button>
        </div>
      </div>
    </section>
  );
}