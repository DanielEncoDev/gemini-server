'use client';

export default function MessageInput({ message, setMessage, handleMessage, handleNewConversation }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#1f1f1f] ">
      <div className="flex justify-center items-center mb-4">
        <button 
          onClick={handleNewConversation}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Ventana de chat */}
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
            {/* Signo de "nuevo" (un signo más) */}
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
          Nueva conversación
        </button>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <input
            type="text"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-white rounded-lg px-4 py-3 pr-12 resize-none focus:outline-none"
            placeholder="Explica tu situación..."
          />
          <button
            onClick={handleMessage}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-500"
          >
            <style jsx>{`
              svg:hover {
                stroke: white;
                filter: brightness(1.5);
              }
            `}</style>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="gray"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 