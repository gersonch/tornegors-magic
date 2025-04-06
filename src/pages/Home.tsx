
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Calendar, Trophy, BarChart, Shield } from 'lucide-react';

const Home = () => {
  const features = [
    {
      title: "Torneos Personalizados",
      description: "Configura torneos a tu medida con múltiples formatos y opciones avanzadas",
      icon: <Trophy size={24} />
    },
    {
      title: "Gestión de Equipos",
      description: "Administra equipos, jugadores y participantes con herramientas intuitivas",
      icon: <Users size={24} />
    },
    {
      title: "Calendario Inteligente",
      description: "Programa partidas y eventos con nuestro sistema de calendario automático",
      icon: <Calendar size={24} />
    },
    {
      title: "Estadísticas Detalladas",
      description: "Analiza el rendimiento con métricas y gráficos en tiempo real",
      icon: <BarChart size={24} />
    },
    {
      title: "Premios y Reconocimientos",
      description: "Configura premios personalizados para los ganadores de tus torneos",
      icon: <Award size={24} />
    },
    {
      title: "Seguridad Avanzada",
      description: "Protección de datos y verificación para todos los participantes",
      icon: <Shield size={24} />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-hero-pattern py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="orange-gradient-text">TORNEOS</span> A TU MANERA
            </h1>
            <p className="text-lg md:text-xl mb-8 text-tornegors-light/80">
              La plataforma definitiva para crear, gestionar y disfrutar torneos competitivos con tecnología de vanguardia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/crear-torneo" className="px-6 py-3 bg-tornegors-orange hover:bg-orange-600 text-white font-medium rounded-md transition-all duration-200 text-center">
                Crear Torneo
              </Link>
              <Link to="/register" className="px-6 py-3 bg-tornegors-darkgray hover:bg-gray-700 text-white font-medium rounded-md border border-tornegors-orange/30 transition-all duration-200 text-center">
                Registrarse
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-tornegors-dark to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Características <span className="orange-gradient-text">Premium</span>
            </h2>
            <p className="text-tornegors-light/70">
              Todo lo que necesitas para gestionar tus torneos como un profesional
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="tech-card p-6 glow-effect">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">{feature.title}</h3>
                <p className="text-tornegors-light/70 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-gradient-to-r from-tornegors-darkgray to-tornegors-dark py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            ¿Listo para crear tu <span className="orange-gradient-text">propio torneo</span>?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-tornegors-light/80">
            Únete a miles de organizadores que confían en nuestra plataforma para sus competiciones.
          </p>
          <Link to="/crear-torneo" className="px-8 py-3 bg-tornegors-orange hover:bg-orange-600 text-white font-bold rounded-md transition-all duration-200 inline-block">
            Comenzar Ahora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
