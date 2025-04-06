
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-tornegors-darkgray/80 backdrop-blur-md border-t border-tornegors-darkgray/90 py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold orange-gradient-text mb-4">TORNEGORS</h3>
            <p className="text-tornegors-light/70 text-sm">
              La plataforma definitiva para la creación y gestión de torneos competitivos. 
              Organiza, administra y disfruta de tus competiciones con tecnología de vanguardia.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-tornegors-light/70 hover:text-tornegors-orange transition-colors">Inicio</a></li>
              <li><a href="/crear-torneo" className="text-tornegors-light/70 hover:text-tornegors-orange transition-colors">Crear Torneo</a></li>
              <li><a href="/login" className="text-tornegors-light/70 hover:text-tornegors-orange transition-colors">Iniciar Sesión</a></li>
              <li><a href="/register" className="text-tornegors-light/70 hover:text-tornegors-orange transition-colors">Registrarse</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-tornegors-light/70">soporte@tornegors.com</li>
              <li className="text-tornegors-light/70">+56 9 1234 5678</li>
              <li className="text-tornegors-light/70">Santiago, Chile</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-tornegors-darkgray/50 text-center text-sm text-tornegors-light/50">
          © {new Date().getFullYear()} Tornegors. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
