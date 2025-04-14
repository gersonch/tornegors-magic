import { useEffect } from "react";
import { client } from "@/supabase/client";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CreateTournament from "./pages/CreateTournament";
import Login from "./pages/Login";

import UserAccount from "./pages/UserAccount";
import NotFound from "./pages/NotFound";
import { useFetchUser } from "./lib/getUser";
import { useAuthStore } from "./store/useAuthStore";
import { CreateProfile } from "./components/CreateProfile";

const queryClient = new QueryClient();

const App = () => {
  useFetchUser(); // Hook para obtener el usuario actual y manejar el estado de autenticación
  const user = useAuthStore((state) => state.user);

  //get localStorage

  useEffect(() => {
    client.auth.getSession().then(({ data }) => {
      const session = data.session;
    });

    // Esto es necesario para manejar el magic link correctamente
    client.auth.onAuthStateChange((event, session) => {
      console.log("Auth event:", event, "Session:", session);
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/crear-torneo"
                  element={
                    user ? <CreateTournament /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/login"
                  element={!user ? <Login /> : <Navigate to="/cuenta" />}
                />

                <Route
                  path="/cuenta"
                  element={user ? <UserAccount /> : <Navigate to="/login" />}
                />
                <Route
                  path="/crear-perfil"
                  element={user ? <CreateProfile /> : <Navigate to="/login" />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
