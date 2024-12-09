import React from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/+1234567890', '_blank'); // Replace with actual WhatsApp number
  };

  return (
    <section className="py-16 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contacto</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-500" size={24} />
              <div>
                <h3 className="font-semibold">Dirección</h3>
                <p className="text-gray-600">Av. Principal #123, Ciudad</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Phone className="text-blue-500" size={24} />
              <div>
                <h3 className="font-semibold">Teléfono</h3>
                <p className="text-gray-600">+1 234 567 890</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-500" size={24} />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">contacto@aquaskandik.com</p>
              </div>
            </div>

            <button
              onClick={handleWhatsApp}
              className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
            >
              <MessageSquare size={20} />
              <span>Contactar por WhatsApp</span>
            </button>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <iframe
              src="https://maps.app.goo.gl/7DYc5CFc9X1JB3Fg9"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}