export default function Login() {
  function entrarComGoogle() {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
    window.location.href = apiUrl + "/auth/google";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-10 text-center max-w-sm w-full">
        <h1 className="text-2xl font-bold text-brand mb-2">Point Talentos</h1>
        <p className="text-gray-500 mb-6">Banco de talentos da Point Media</p>
        <button
          onClick={entrarComGoogle}
          className="w-full bg-brand hover:bg-brand-light text-white font-medium py-2 rounded-md transition"
        >
          Entrar com Google
        </button>
      </div>
    </div>
  );
}
