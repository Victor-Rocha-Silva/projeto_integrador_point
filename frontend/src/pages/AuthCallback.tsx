import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AuthCallback() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { salvarToken } = useAuth();

  useEffect(() => {
    const token = params.get("token");
    if (token) {
      salvarToken(token);
      navigate("/", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="p-8 text-center">Entrando...</div>;
}
