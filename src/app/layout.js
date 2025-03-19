import "./globals.css";

export const metadata = {
  title: 'GeminiTest',
  description: 'Una réplica de Gemini para pruebas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}