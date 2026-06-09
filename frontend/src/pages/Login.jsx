export default function Login() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold text-slate-800 text-center">
            Point
          </h1>
  
          <p className="text-center text-slate-500 mt-2">
            Banco de Talentos
          </p>
  
          <form className="mt-8 space-y-4">
            <div>
              <label className="block text-sm text-slate-600 mb-1">
                E-mail
              </label>
  
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>
  
            <div>
              <label className="block text-sm text-slate-600 mb-1">
                Senha
              </label>
  
              <input
                type="password"
                placeholder="Digite sua senha"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>
  
            <button
              type="submit"
              className="w-full bg-slate-800 text-white py-3 rounded-lg hover:bg-slate-700 transition"
            >
              Entrar
            </button>
          </form>
  
          <p className="text-center text-sm text-slate-500 mt-6">
            Não possui conta? Cadastre-se
          </p>
        </div>
      </div>
    );
  }