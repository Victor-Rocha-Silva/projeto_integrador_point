import { useEffect, useState } from "react";
import api from "../../api/axios";
import { useAuth } from "../../context/AuthContext";

export default function DashboardCandidato() {
  const { usuario, logout } = useAuth();
  const [vagas, setVagas] = useState<any[]>([]);

  useEffect(() => {
    api.get("/vagas").then((resp) => setVagas(resp.data));
  }, []);

  async function candidatar(vagaId: string) {
    await api.post("/candidaturas/" + vagaId);
    alert("Candidatura enviada!");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-brand text-white p-4 flex justify-between items-center">
        <h1 className="font-semibold">Area do Candidato</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm">{usuario?.email}</span>
          <button onClick={logout} className="text-sm underline">
            Sair
          </button>
        </div>
      </header>

      <main className="p-6 max-w-3xl mx-auto">
        <h2 className="text-lg font-semibold mb-4">Vagas disponiveis</h2>
        <div className="space-y-4">
          {vagas.map((vaga) => (
            <div key={vaga.id} className="bg-white rounded-lg shadow p-4">
              <h3 className="font-bold text-brand">{vaga.titulo}</h3>
              <p className="text-sm text-gray-500 mb-2">{vaga.empresa?.razaoSocial}</p>
              <p className="text-gray-700 mb-3">{vaga.descricao}</p>
              <button
                onClick={() => candidatar(vaga.id)}
                className="bg-brand text-white text-sm px-4 py-2 rounded-md hover:bg-brand-light"
              >
                Candidatar-se
              </button>
            </div>
          ))}
          {vagas.length === 0 && <p className="text-gray-500">Nenhuma vaga aberta no momento.</p>}
        </div>
      </main>
    </div>
  );
}
