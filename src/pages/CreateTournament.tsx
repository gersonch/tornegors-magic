import {
  Calendar,
  Users,
  Clock,
  Trophy,
  Settings,
  Image,
  Info,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const CreateTournament = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
          Crear Nuevo Torneo
        </h1>
        <p className="text-tornegors-light/70 mb-8">
          Configura todos los detalles para tu competición perfecta.
        </p>

        {/* Progress tracker */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-tornegors-orange flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <span className="ml-2 font-medium">Información Básica</span>
            </div>
            <div className="h-px bg-tornegors-orange/30 flex-grow mx-4"></div>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-tornegors-darkgray flex items-center justify-center text-tornegors-light/70 font-bold text-sm">
                2
              </div>
              <span className="ml-2 font-medium text-tornegors-light/70">
                Configuración
              </span>
            </div>
            <div className="h-px bg-tornegors-darkgray/30 flex-grow mx-4"></div>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-tornegors-darkgray flex items-center justify-center text-tornegors-light/70 font-bold text-sm">
                3
              </div>
              <span className="ml-2 font-medium text-tornegors-light/70">
                Finalizar
              </span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="tech-card p-8">
          <form>
            {/* Tournament Info Section */}
            <div className="mb-8">
              <h2 className="text-xl font-display font-semibold mb-6 flex items-center">
                <Info size={20} className="mr-2 text-tornegors-orange" />
                Información del Torneo
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nombre del Torneo
                  </label>
                  <input
                    type="text"
                    className="tech-input w-full"
                    placeholder="Ej: Campeonato Nacional 2025"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">
                    Descripción
                  </label>
                  <textarea
                    className="tech-input w-full h-24"
                    placeholder="Describe brevemente tu torneo..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Settings Section */}
            <div className="mb-8">
              <h2 className="text-xl font-display font-semibold mb-6 flex items-center">
                <Settings size={20} className="mr-2 text-tornegors-orange" />
                Configuración de Liga
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Formato de Competición
                  </label>
                  <select className="tech-input w-full">
                    <option>Liga (todos contra todos)</option>
                    <option>Eliminación Simple</option>
                    <option>Eliminación Doble</option>
                    <option>Grupos + Playoffs</option>
                    <option>Suizo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <div className="flex items-center">
                      <Users size={16} className="mr-1 text-tornegors-orange" />
                      Número de Participantes
                    </div>
                  </label>
                  <input
                    type="number"
                    className="tech-input w-full"
                    placeholder="Ej: 16"
                    min="2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <div className="flex items-center">
                      <Trophy
                        size={16}
                        className="mr-1 text-tornegors-orange"
                      />
                      Premio Total
                    </div>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-tornegors-light/70">
                      $
                    </span>
                    <input
                      type="text"
                      className="tech-input w-full pl-8"
                      placeholder="Ej: 1000"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 bg-tornegors-orange hover:bg-orange-600 text-white font-medium rounded-md transition-all duration-200"
              >
                Siguiente Paso
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTournament;
