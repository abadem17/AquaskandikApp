import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ScheduleForm from './components/ScheduleForm';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Services />
      <section id="schedule" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Agendar Servicio</h2>
          <ScheduleForm />
        </div>
      </section>
      <Contact />
      <footer className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Aquaskandik. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;