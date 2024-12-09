import React from 'react';
import { Droplets, Clock, ClipboardCheck, PhoneCall } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Droplets className="w-12 h-12 text-blue-500" />,
      title: 'Agua a Granel',
      description: 'Suministro de agua purificada en grandes cantidades para empresas.',
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-500" />,
      title: 'Entregas Programadas',
      description: 'Sistema de entregas regulares según sus necesidades específicas.',
    },
    {
      icon: <ClipboardCheck className="w-12 h-12 text-blue-500" />,
      title: 'Limpieza de Tinacos',
      description: 'Servicio profesional de limpieza y mantenimiento de tinacos.',
    },
    {
      icon: <PhoneCall className="w-12 h-12 text-blue-500" />,
      title: 'Soporte 24/7',
      description: 'Atención al cliente disponible las 24 horas, los 7 días de la semana.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}