export default function WelcomeMessage({user='Test'}) {

  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div>
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">
          Hola {user.charAt(0).toUpperCase() + user.slice(1)}
        </h2>
      </div>
    </div>
  );
} 