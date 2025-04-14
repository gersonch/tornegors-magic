import { client } from "@/supabase/client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function CreateProfile() {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener el usuario autenticado
    client.auth.getUser().then(({ data, error }) => {
      if (data?.user) {
        setUserId(data.user.id);
      }
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) {
      setMessage("Usuario no autenticado");
      return;
    }

    const { data, error } = await client
      .from("profiles")
      .update({ user_name: userName })
      .eq("id", userId)
      .select();

    if (error) {
      console.error("Error updating profile:", error.message);
      setMessage("Error al actualizar el perfil");
    } else {
      setMessage("Nombre de usuario actualizado con éxito");
      setUserName("");
      setSuccess(true);
    }
  };

  if (success) {
    navigate("/cuenta", { replace: true });
  }

  return (
    <div className="max-w-md mx-auto mt-20">
      <div className="tech-card overflow-hidden">
        {/* Header */}
        <div className="py-6 bg-gradient-to-r from-tornegors-orange to-orange-600 text-white text-center">
          <h1 className="text-2xl font-display font-bold">Crear Perfil</h1>
          <p className="text-white/80 text-sm mt-1">
            Completa tu perfil para continuar
          </p>
        </div>

        {/* Formulario */}
        <div className="p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block text-sm font-medium mb-2">
                Nombre de Usuario
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="tech-input w-full"
                  placeholder="Gamer123"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-tornegors-orange hover:bg-orange-600 text-white font-medium rounded-md px-4 py-3 transition-all duration-200 flex items-center justify-center"
            >
              Crear Perfil
            </button>
          </form>

          {message && (
            <p className="mt-4 text-center text-sm text-tornegors-light/70">
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
