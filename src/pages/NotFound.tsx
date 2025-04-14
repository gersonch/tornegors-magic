import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="text-center rounded-lg p-8 max-w-md">
        <h1 className="text-6xl font-display font-bold text-tornegors-orange mb-4">
          404
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          ¡Oops! La página que buscas no existe.
        </p>
        <a
          href="/"
          className="bg-tornegors-orange hover:bg-orange-600 text-white font-medium rounded-md px-6 py-3 transition-all duration-200"
        >
          Volver al Inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
