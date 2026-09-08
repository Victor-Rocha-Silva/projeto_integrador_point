import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";

type Props = {
  children: ReactNode;
  papeis: Array<"ADMIN" | "CANDIDATO" | "EMPRESA">;
};

export default function ProtectedRoute({ children, papeis }: Props) {
  const { usuario, carregando } = useAuth();

  if (carregando) return <div className="p-8 text-center">Carregando...</div>;
  if (!usuario) return <Navigate to="/login" replace />;
  if (!papeis.includes(usuario.role)) return <Navigate to="/login" replace />;

  return <>{children}</>;
}
