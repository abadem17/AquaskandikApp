import React, { useState } from 'react';
import { Calendar, Clock, Truck } from 'lucide-react';

export default function ScheduleForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    address: '',
    phone: '',
    date: '',
    time: '',
    volume: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement the actual submission logic
    console.log('Form submitted:', formData);
    alert('Solicitud enviada con éxito. Nos pondremos en contacto pronto.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Agendar Entrega de Agua</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Nombre de la Empresa</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Dirección</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Fecha</label>
            <div className="relative">
              <Calendar className="absolute left-2 top-2.5 text-gray-500" size={20} />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full pl-10 p-2 border rounded focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Hora</label>
            <div className="relative">
              <Clock className="absolute left-2 top-2.5 text-gray-500" size={20} />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full pl-10 p-2 border rounded focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Volumen (Litros)</label>
          <div className="relative">
            <Truck className="absolute left-2 top-2.5 text-gray-500" size={20} />
            <input
              type="number"
              name="volume"
              value={formData.volume}
              onChange={handleChange}
              className="w-full pl-10 p-2 border rounded focus:ring-2 focus:ring-blue-500"
              required
              min="1000"
              step="1000"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Confirmar Solicitud
        </button>
      </form>
    </div>
  );
}