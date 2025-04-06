
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const Login = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-md mx-auto">
        <div className="tech-card overflow-hidden">
          {/* Header with orange accent */}
          <div className="py-6 bg-gradient-to-r from-tornegors-orange to-orange-600 text-white text-center">
            <h1 className="text-2xl font-display font-bold">Iniciar Sesión</h1>
            <p className="text-white/80 text-sm mt-1">Accede a tu cuenta Tornegors</p>
          </div>
          
          {/* Login Form */}
          <div className="p-8">
            <form>
              <div className="mb-5">
                <label className="block text-sm font-medium mb-2">Correo Electrónico</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-tornegors-light/50" />
                  </div>
                  <input 
                    type="email" 
                    className="tech-input w-full pl-10" 
                    placeholder="ejemplo@correo.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium">Contraseña</label>
                  <a href="#" className="text-xs text-tornegors-orange hover:text-orange-500">¿Olvidaste tu contraseña?</a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-tornegors-light/50" />
                  </div>
                  <input 
                    type="password" 
                    className="tech-input w-full pl-10" 
                    placeholder="••••••••"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded bg-tornegors-darkgray border-tornegors-darkgray text-tornegors-orange focus:ring-tornegors-orange/20 h-4 w-4" />
                  <span className="ml-2 text-sm text-tornegors-light/70">Mantener sesión iniciada</span>
                </label>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-tornegors-orange hover:bg-orange-600 text-white font-medium rounded-md px-4 py-3 transition-all duration-200 flex items-center justify-center"
              >
                Iniciar Sesión
                <ArrowRight size={18} className="ml-2" />
              </button>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-tornegors-light/70 text-sm">
                ¿No tienes una cuenta? <Link to="/register" className="text-tornegors-orange hover:text-orange-500 font-medium">Regístrate ahora</Link>
              </p>
            </div>
          </div>
        </div>
        
        {/* Social Login */}
        <div className="mt-6 text-center">
          <p className="text-sm text-tornegors-light/70 mb-4">O inicia sesión con</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-tornegors-darkgray p-3 rounded-md hover:bg-tornegors-darkgray/70 transition-all">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.254-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.022A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </button>
            <button className="bg-tornegors-darkgray p-3 rounded-md hover:bg-tornegors-darkgray/70 transition-all">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </button>
            <button className="bg-tornegors-darkgray p-3 rounded-md hover:bg-tornegors-darkgray/70 transition-all">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill="#1877F2"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
