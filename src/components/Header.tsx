import React from 'react';
import { Droplets } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Droplets size={32} className="text-blue-200" />
            <h1 className="text-2xl font-bold">Aquaskandik</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#services" className="hover:text-blue-200 transition">Servicios</a></li>
              <li><a href="#schedule" className="hover:text-blue-200 transition">Agendar</a></li>
              <li><a href="#contact" className="hover:text-blue-200 transition">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}