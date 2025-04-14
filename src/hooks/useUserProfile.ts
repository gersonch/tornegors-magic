import { useEffect, useState } from "react";
import { client } from "@/supabase/client";
import { useAuthStore } from "@/store/useAuthStore";

export const useUserProfile = () => {
  const user = useAuthStore((state) => state.user);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;

      const { data, error } = await client
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (!error) {
        setProfile(data);
      }

      setLoading(false);
    };

    fetchProfile();
  }, [user]);

  return { profile, setProfile, loading };
};
