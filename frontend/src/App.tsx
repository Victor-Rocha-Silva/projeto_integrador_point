import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import AuthCallback from "./pages/AuthCallback";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardCandidato from "./pages/candidato/DashboardCandidato";
import DashboardEmpresa from "./pages/empresa/DashboardEmpresa";
import DashboardAdmin from "./pages/admin/DashboardAdmin";

function Home() {
  const { usuario, carregando } = useAuth();

  if (carregando) return <div className="p-8 text-center">Carregando...</div>;
  if (!usuario) return <Navigate to="/login" replace />;

  if (usuario.role === "ADMIN") return <Navigate to="/admin" replace />;
  if (usuario.role === "EMPRESA") return <Navigate to="/empresa" replace />;
  return <Navigate to="/candidato" replace />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/auth/callback" element={<AuthCallback />} />

      <Route
        path="/candidato"
        element={
          <ProtectedRoute papeis={["CANDIDATO"]}>
            <DashboardCandidato />
          </ProtectedRoute>
        }
      />

      <Route
        path="/empresa"
        element={
          <ProtectedRoute papeis={["EMPRESA"]}>
            <DashboardEmpresa />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute papeis={["ADMIN"]}>
            <DashboardAdmin />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
