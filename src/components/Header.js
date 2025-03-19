export default function Header({user='Test'}) {

  const handleLogout = () => {
    console.log('Cerrando sesión');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.href = '/';
  }
  return (
    <header className="border-b border-gray-700 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">GeminiTest</h1>
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center rounded-full bg-red-400 w-8 h-8  group">
            <p>{user.slice(0, 1).toUpperCase()}</p> 
            <div 
              className="hidden group-hover:block bg-gray-800 text-white text-sm px-2 py-1 rounded mt-2 -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <button onClick={handleLogout}>Cerrar sesión</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 