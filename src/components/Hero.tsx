import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[500px] bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-4">Suministro de Agua a Granel</h1>
          <p className="text-xl mb-8">Servicio confiable y profesional para empresas. Garantizamos la calidad y puntualidad en cada entrega.</p>
          <a 
            href="#schedule" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Agendar Entrega
          </a>
        </div>
      </div>
    </div>
  );
}