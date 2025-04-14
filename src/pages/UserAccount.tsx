import { Link, useNavigate } from "react-router-dom";
import {
  Trophy,
  Calendar,
  Users,
  Edit,
  Plus,
  BarChart,
  Settings,
  Clock,
} from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useEffect, useState } from "react";
import { client } from "@/supabase/client";
import { CreateProfile } from "@/components/CreateProfile";
const UserAccount = () => {
  const user = useAuthStore((state) => state.user);
  const [data, setData] = useState(null);
  const [isProfileCompleted, setIsProfileCompleted] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const { data: profiles, error } = await client
        .from("profiles")
        .select("user_name")
        .eq("id", user?.id); // Asegúrate de filtrar por el usuario actual

      if (error) {
        console.error("Error al obtener perfil:", error);
        return;
      }

      if (
        !profiles ||
        profiles.length === 0 ||
        profiles[0].user_name === null
      ) {
        setIsProfileCompleted(false);
      } else {
        setData(profiles);
      }
    };

    if (user) fetchUserProfile();
  }, [user]);

  const tournaments = [
    {
      id: 1,
      name: "Copa Latinoamericana 2025",
      game: "League of Legends",
      participants: 16,
      status: "En progreso",
      startDate: "15/05/2025",
      logo: "https://placehold.co/100x100/1f2937/f97316?text=CL25",
    },
    {
      id: 2,
      name: "Torneo Nacional CS2",
      game: "Counter-Strike 2",
      participants: 32,
      status: "Planificado",
      startDate: "10/06/2025",
      logo: "https://placehold.co/100x100/1f2937/f97316?text=TN",
    },
    {
      id: 3,
      name: "Ultimate FIFA Challenge",
      game: "FIFA 24",
      participants: 64,
      status: "Completado",
      startDate: "05/02/2025",
      logo: "https://placehold.co/100x100/1f2937/f97316?text=UFC",
    },
  ];
  if (!isProfileCompleted) {
    navigate("/crear-perfil", { replace: true });
  }
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* User Profile Header */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative">
            <div className="h-24 w-24 md:h-32 md:w-32 rounded-full bg-tornegors-darkgray overflow-hidden border-4 border-tornegors-orange flex items-center justify-center text-2xl font-bold text-tornegors-light">
              JD
            </div>
            <button className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-tornegors-orange flex items-center justify-center">
              <Edit size={14} className="text-white" />
            </button>
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-display font-bold">
              {data ? data[0].user_name : "Cargando..."}{" "}
            </h1>
            <p className="text-tornegors-light/70 mb-3">@torneomaster2025</p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <div className="bg-tornegors-darkgray/50 py-1 px-3 rounded-full text-sm flex items-center">
                <Trophy size={14} className="text-tornegors-orange mr-1" />
                <span>8 Torneos</span>
              </div>
              <div className="bg-tornegors-darkgray/50 py-1 px-3 rounded-full text-sm flex items-center">
                <Calendar size={14} className="text-tornegors-orange mr-1" />
                <span>Desde 10/2024</span>
              </div>
              <div className="bg-tornegors-darkgray/50 py-1 px-3 rounded-full text-sm flex items-center">
                <Users size={14} className="text-tornegors-orange mr-1" />
                <span>256 Participantes</span>
              </div>
            </div>
          </div>

          <div className="md:ml-auto">
            <button className="px-4 py-2 bg-tornegors-darkgray hover:bg-tornegors-darkgray/80 text-tornegors-light rounded-md flex items-center">
              <Settings size={16} className="mr-2" />
              Configuración
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-tornegors-darkgray/70 mb-8">
        <nav className="flex space-x-6 overflow-x-auto" aria-label="Tabs">
          <button className="border-b-2 border-tornegors-orange text-tornegors-orange px-1 py-4 font-medium">
            Mis Torneos
          </button>
          <button className="border-b-2 border-transparent text-tornegors-light/70 hover:text-tornegors-light/90 px-1 py-4 font-medium">
            Estadísticas
          </button>
          <button className="border-b-2 border-transparent text-tornegors-light/70 hover:text-tornegors-light/90 px-1 py-4 font-medium">
            Plantillas
          </button>
          <button className="border-b-2 border-transparent text-tornegors-light/70 hover:text-tornegors-light/90 px-1 py-4 font-medium">
            Equipos
          </button>
        </nav>
      </div>

      {/* Create Tournament Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-display font-semibold">Mis Torneos</h2>
        <Link
          to="/crear-torneo"
          className="px-4 py-2 bg-tornegors-orange hover:bg-orange-600 text-white rounded-md flex items-center transition-all duration-200"
        >
          <Plus size={16} className="mr-1" />
          Crear Torneo
        </Link>
      </div>

      {/* Tournaments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {tournaments.map((tournament) => (
          <div key={tournament.id} className="tech-card glow-effect">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src={tournament.logo}
                  alt={tournament.name}
                  className="h-14 w-14 rounded-md mr-3"
                />
                <div>
                  <h3 className="font-display font-semibold">
                    {tournament.name}
                  </h3>
                  <p className="text-sm text-tornegors-light/70">
                    {tournament.game}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-tornegors-darkgray/50 p-2 rounded">
                  <div className="text-xs text-tornegors-light/70 mb-1">
                    Participantes
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="text-tornegors-orange mr-2" />
                    <span>{tournament.participants}</span>
                  </div>
                </div>

                <div className="bg-tornegors-darkgray/50 p-2 rounded">
                  <div className="text-xs text-tornegors-light/70 mb-1">
                    Fecha Inicio
                  </div>
                  <div className="flex items-center">
                    <Calendar
                      size={16}
                      className="text-tornegors-orange mr-2"
                    />
                    <span>{tournament.startDate}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    tournament.status === "En progreso"
                      ? "bg-tornegors-orange/20 text-tornegors-orange"
                      : tournament.status === "Planificado"
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-green-500/20 text-green-400"
                  }`}
                >
                  {tournament.status}
                </span>

                <div className="flex space-x-2">
                  <button className="p-2 bg-tornegors-darkgray hover:bg-tornegors-darkgray/80 rounded text-tornegors-light">
                    <Edit size={16} />
                  </button>
                  <button className="p-2 bg-tornegors-darkgray hover:bg-tornegors-darkgray/80 rounded text-tornegors-light">
                    <BarChart size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Empty Tournament Slot */}
        <div className="border-2 border-dashed border-tornegors-darkgray/40 rounded-lg flex flex-col items-center justify-center p-10 text-center">
          <div className="h-16 w-16 rounded-full bg-tornegors-darkgray/30 flex items-center justify-center mb-4">
            <Plus size={24} className="text-tornegors-light/50" />
          </div>
          <h3 className="font-display font-semibold mb-2">Nuevo Torneo</h3>
          <p className="text-sm text-tornegors-light/50 mb-4">
            Crea un nuevo torneo para tu comunidad
          </p>
          <Link
            to="/crear-torneo"
            className="px-4 py-2 bg-tornegors-darkgray hover:bg-tornegors-darkgray/80 text-tornegors-light rounded-md text-sm"
          >
            Comenzar
          </Link>
        </div>
      </div>

      {/* Activity Section */}
      <div className="tech-card p-6 mt-8">
        <h3 className="text-xl font-display font-semibold mb-4 flex items-center">
          <Clock size={20} className="mr-2 text-tornegors-orange" />
          Actividad Reciente
        </h3>

        <div className="space-y-4">
          <div className="flex items-start gap-3 pb-4 border-b border-tornegors-darkgray/30">
            <div className="h-10 w-10 rounded-full bg-tornegors-darkgray/50 flex items-center justify-center flex-shrink-0">
              <Trophy size={16} className="text-tornegors-orange" />
            </div>
            <div>
              <p>
                <span className="font-semibold">Copa Latinoamericana 2025</span>
                <span className="text-tornegors-light/70">
                  {" "}
                  - Ronda 3 completada
                </span>
              </p>
              <p className="text-sm text-tornegors-light/50">Hace 2 horas</p>
            </div>
          </div>

          <div className="flex items-start gap-3 pb-4 border-b border-tornegors-darkgray/30">
            <div className="h-10 w-10 rounded-full bg-tornegors-darkgray/50 flex items-center justify-center flex-shrink-0">
              <Users size={16} className="text-tornegors-orange" />
            </div>
            <div>
              <p>
                <span className="font-semibold">Torneo Nacional CS2</span>
                <span className="text-tornegors-light/70">
                  {" "}
                  - 8 nuevos equipos registrados
                </span>
              </p>
              <p className="text-sm text-tornegors-light/50">Ayer</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-tornegors-darkgray/50 flex items-center justify-center flex-shrink-0">
              <Trophy size={16} className="text-tornegors-orange" />
            </div>
            <div>
              <p>
                <span className="font-semibold">Ultimate FIFA Challenge</span>
                <span className="text-tornegors-light/70">
                  {" "}
                  - Equipo "Los Campeones" ganó el torneo
                </span>
              </p>
              <p className="text-sm text-tornegors-light/50">Hace 3 días</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
