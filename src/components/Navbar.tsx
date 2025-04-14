import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import { useFetchUser } from "@/lib/getUser";
import { client } from "@/supabase/client";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  useFetchUser(); // Hook para obtener el usuario actual y manejar el estado de autenticación
  const user = useAuthStore((state) => state.user); // Obtener el usuario del estado global
  const userStore = localStorage.getItem("sb-tqbisnixqrchmsoonugw-auth-token"); // Obtener el usuario del localStorage
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Hook para la navegación

  return (
    <nav className="bg-tornegors-darkgray/80 backdrop-blur-md sticky top-0 z-50 border-b border-tornegors-darkgray/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-display font-bold orange-gradient-text">
                TORNEGORS
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="nav-link active">
                Inicio
              </Link>
              {!user ? (
                <>
                  <Link to="/crear-torneo" className="nav-link">
                    Crear Torneo
                  </Link>
                  <Link to="/login" className="nav-link">
                    Iniciar Sesión
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/cuenta" className="nav-link">
                    Mi Cuenta
                  </Link>

                  <button
                    onClick={() => {
                      client.auth.signOut();
                      navigate("/");
                    }}
                    className="nav-link"
                  >
                    <LogOut color="#F97316" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-tornegors-light hover:text-tornegors-orange focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-tornegors-darkgray/90 backdrop-blur-md animate-slide-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="nav-link active block">
              Inicio
            </Link>
            <Link to="/crear-torneo" className="nav-link block">
              Crear Torneo
            </Link>
            <Link to="/login" className="nav-link block">
              Iniciar Sesión
            </Link>
            <Link to="/register" className="nav-link block">
              Registrarse
            </Link>
            <Link to="/cuenta" className="nav-link block">
              Mi Cuenta
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
