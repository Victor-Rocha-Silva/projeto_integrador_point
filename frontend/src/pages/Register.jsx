export default function Register() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold text-slate-800 text-center">Point</h1>
          <p className="text-center text-slate-500 mt-2">Crie sua conta</p>
  
          <form className="mt-8 space-y-4">
            <input className="w-full border border-slate-300 rounded-lg px-4 py-3" placeholder="Nome completo" />
            <input className="w-full border border-slate-300 rounded-lg px-4 py-3" placeholder="E-mail" />
            <input className="w-full border border-slate-300 rounded-lg px-4 py-3" placeholder="Senha" type="password" />
  
            <select className="w-full border border-slate-300 rounded-lg px-4 py-3">
              <option value="">Tipo de conta</option>
              <option value="candidate">Candidato</option>
              <option value="company">Empresa</option>
            </select>
  
            <button className="w-full bg-slate-800 text-white py-3 rounded-lg hover:bg-slate-700 transition">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    );
  } 