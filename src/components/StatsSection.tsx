import React from "react";

export default function StatsSection() {
  const stats = [
    { number: "1950", label: "Ano de Fundação", description: "75 anos de tradição" },
    { number: "243", label: "Vitórias em GPs", description: "Mais vitórias da história" },
    { number: "16", label: "Títulos de Construtores", description: "Recordista absoluto" },
    { number: "15", label: "Títulos de Pilotos", description: "Lendas imortalizadas" }
  ];

  return (
    <section className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Uma História de Glórias
          </h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Números que contam a história da equipe mais vitoriosa da Fórmula 1
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform transition-all duration-300 group-hover:scale-105 group-hover:bg-white/20">
                <div className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {stat.number}
                </div>
                <div className="text-lg text-red-100 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-red-200 opacity-80">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4">
            <div className="h-px bg-red-300 w-16"></div>
            <span className="text-red-100 uppercase tracking-wider">Forza Ferrari</span>
            <div className="h-px bg-red-300 w-16"></div>
          </div>
        </div>
      </div>
    </section>
  );
}