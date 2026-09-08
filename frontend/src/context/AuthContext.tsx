import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import api from "../api/axios";

type Usuario = {
  userId: string;
  email: string;
  role: "ADMIN" | "CANDIDATO" | "EMPRESA";
};

type AuthContextType = {
  usuario: Usuario | null;
  carregando: boolean;
  salvarToken: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  usuario: null,
  carregando: true,
  salvarToken: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [carregando, setCarregando] = useState(true);

  async function carregarUsuario() {
    const token = localStorage.getItem("token");
    if (!token) {
      setCarregando(false);
      return;
    }
    try {
      const resp = await api.get("/auth/me");
      setUsuario(resp.data);
    } catch {
      localStorage.removeItem("token");
      setUsuario(null);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregarUsuario();
  }, []);

  function salvarToken(token: string) {
    localStorage.setItem("token", token);
    carregarUsuario();
  }

  function logout() {
    localStorage.removeItem("token");
    setUsuario(null);
  }

  return (
    <AuthContext.Provider value={{ usuario, carregando, salvarToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
