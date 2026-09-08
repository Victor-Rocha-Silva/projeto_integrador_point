import { useEffect, useState } from "react";
import api from "../../api/axios";
import { useAuth } from "../../context/AuthContext";

export default function DashboardAdmin() {
  const { usuario, logout } = useAuth();
  const [empresas, setEmpresas] = useState<any[]>([]);

  async function carregarEmpresas() {
    const resp = await api.get("/empresas");
    setEmpresas(resp.data);
  }

  useEffect(() => {
    carregarEmpresas();
  }, []);

  async function aprovar(id: string, valor: boolean) {
    await api.patch("/empresas/" + id + "/aprovar/" + valor);
    carregarEmpresas();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-brand text-white p-4 flex justify-between items-center">
        <h1 className="font-semibold">Painel Administrativo - Point Media</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm">{usuario?.email}</span>
          <button onClick={logout} className="text-sm underline">
            Sair
          </button>
        </div>
      </header>

      <main className="p-6 max-w-3xl mx-auto">
        <h2 className="font-semibold mb-4">Empresas cadastradas</h2>
        <div className="space-y-4">
          {empresas.map((empresa) => (
            <div key={empresa.id} className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-brand">{empresa.razaoSocial}</h3>
                <p className="text-sm text-gray-500">{empresa.user?.email}</p>
                <p className="text-sm">{empresa.aprovado ? "Aprovada" : "Pendente"}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => aprovar(empresa.id, true)}
                  className="bg-green-600 text-white text-sm px-3 py-1 rounded-md"
                >
                  Aprovar
                </button>
                <button
                  onClick={() => aprovar(empresa.id, false)}
                  className="bg-red-600 text-white text-sm px-3 py-1 rounded-md"
                >
                  Bloquear
                </button>
              </div>
            </div>
          ))}
          {empresas.length === 0 && <p className="text-gray-500">Nenhuma empresa cadastrada ainda.</p>}
        </div>
      </main>
    </div>
  );
}
