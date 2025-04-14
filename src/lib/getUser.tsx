import { useEffect } from "react";
import { client } from "@/supabase/client";
import { useAuthStore } from "@/store/useAuthStore";

export const useFetchUser = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const setLoading = useAuthStore((state) => state.setLoading); // Accede a setLoading

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true); // Establecer estado de carga en true

      const {
        data: { session },
      } = await client.auth.getSession();

      if (!session) {
        console.log("No hay sesión activa.");
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await client.auth.getUser();
        if (error) {
          console.error("Error al obtener el usuario:", error.message);
        } else {
          setUser(data.user);
          console.log("Usuario obtenido:", data.user);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
      setLoading(false); // Establecer estado de carga en false una vez que los datos estén listos
    };

    fetchUser();
  }, [setUser, setLoading]);
};
