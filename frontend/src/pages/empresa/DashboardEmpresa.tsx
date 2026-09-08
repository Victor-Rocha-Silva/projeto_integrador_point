import { useEffect, useState } from "react";
import api from "../../api/axios";
import { useAuth } from "../../context/AuthContext";

export default function DashboardEmpresa() {
  const { usuario, logout } = useAuth();
  const [vagas, setVagas] = useState<any[]>([]);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [requisitos, setRequisitos] = useState("");

  async function carregarVagas() {
    const resp = await api.get("/vagas/minhas");
    setVagas(resp.data);
  }

  useEffect(() => {
    carregarVagas();
  }, []);

  async function criarVaga(e: React.FormEvent) {
    e.preventDefault();
    await api.post("/vagas", { titulo, descricao, requisitos });
    setTitulo("");
    setDescricao("");
    setRequisitos("");
    carregarVagas();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-brand text-white p-4 flex justify-between items-center">
        <h1 className="font-semibold">Area da Empresa</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm">{usuario?.email}</span>
          <button onClick={logout} className="text-sm underline">
            Sair
          </button>
        </div>
      </header>

      <main className="p-6 max-w-3xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow p-4">
          <h2 className="font-semibold mb-3">Publicar nova vaga</h2>
          <form onSubmit={criarVaga} className="space-y-3">
            <input
              className="w-full border rounded-md px-3 py-2"
              placeholder="Titulo da vaga"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
            <textarea
              className="w-full border rounded-md px-3 py-2"
              placeholder="Descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            />
            <textarea
              className="w-full border rounded-md px-3 py-2"
              placeholder="Requisitos"
              value={requisitos}
              onChange={(e) => setRequisitos(e.target.value)}
              required
            />
            <button className="bg-brand text-white px-4 py-2 rounded-md hover:bg-brand-light">
              Publicar vaga
            </button>
          </form>
        </section>

        <section>
          <h2 className="font-semibold mb-3">Minhas vagas</h2>
          <div className="space-y-4">
            {vagas.map((vaga) => (
              <div key={vaga.id} className="bg-white rounded-lg shadow p-4">
                <h3 className="font-bold text-brand">{vaga.titulo}</h3>
                <p className="text-sm text-gray-500 mb-2">Status: {vaga.status}</p>
                <p className="text-sm text-gray-700">
                  Candidaturas recebidas: {vaga.candidaturas?.length || 0}
                </p>
              </div>
            ))}
            {vagas.length === 0 && <p className="text-gray-500">Nenhuma vaga publicada ainda.</p>}
          </div>
        </section>
      </main>
    </div>
  );
}
