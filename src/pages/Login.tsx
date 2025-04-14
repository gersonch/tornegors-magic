import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowRight, Divide } from "lucide-react";
import { client } from "@/supabase/client";
import { useAuthStore } from "@/store/useAuthStore";
import { useFetchUser } from "@/lib/getUser";
const Login = () => {
  useFetchUser(); // Hook para obtener el usuario actual y manejar el estado de autenticación
  const user = useAuthStore((state) => state.user); // Obtener el usuario del estado global
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await client.auth.signInWithOtp({
        email,
      });

      alert("Se ha enviado un enlace de inicio de sesión a tu correo.");
    } catch (error) {
      console.error("Error inesperado:", error);
      alert("Ocurrió un error inesperado. Intenta nuevamente.");
    }
  };

  const localStorageUser = localStorage.getItem(
    "sb-tqbisnixqrchmsoonugw-auth-token"
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {!localStorageUser ? (
        <div className="max-w-md mx-auto">
          <div className="tech-card overflow-hidden">
            {/* Header with orange accent */}
            <div className="py-6 bg-gradient-to-r from-tornegors-orange to-orange-600 text-white text-center">
              <h1 className="text-2xl font-display font-bold">
                Iniciar Sesión
              </h1>
              <p className="text-white/80 text-sm mt-1">
                Accede a tu cuenta Tornegors
              </p>
            </div>

            {/* Login Form */}
            <div className="p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label className="block text-sm font-medium mb-2">
                    Correo Electrónico
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={18} className="text-tornegors-light/50" />
                    </div>
                    <input
                      type="email"
                      className="tech-input w-full pl-10"
                      placeholder="ejemplo@correo.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded bg-tornegors-darkgray border-tornegors-darkgray text-tornegors-orange focus:ring-tornegors-orange/20 h-4 w-4"
                    />
                    <span className="ml-2 text-sm text-tornegors-light/70">
                      Mantener sesión iniciada
                    </span>
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
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen bg-gray-900">
          <p className="text-lg text-gray-200">Cargando...</p>
        </div>
      )}
    </div>
  );
};

export default Login;
