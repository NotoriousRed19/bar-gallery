import "@/globals.css";
import Header from "@/components/molecules/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import Footer from "@/components/molecules/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Galeria De Cocteles</title>
      </head>
      <body className=" shadow-lg flex flex-col min-h-screen">
        <ThemeProvider>
          <Header />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
