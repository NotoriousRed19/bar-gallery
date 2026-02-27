import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t-2 border-gray-900 p-4 shadow-2xl backdrop-blur z-10 mt-auto">
      <div className="flex items-center justify-center md:justify-between">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Galeria De Cocteles. Todos los
          derechos reservados.
        </p>
        <div className="flex space-x-4">
          <Link href="/galeria" className="text-gray-400 hover:text-gray-200">
            {" "}
            Galería
          </Link>
          <Link href="/contacto" className="text-gray-400 hover:text-gray-200">
            Contacto
          </Link>
          <Link href="/about" className="text-gray-400 hover:text-gray-200">
            Acerca de
          </Link>
        </div>
      </div>
    </footer>
  );
}
