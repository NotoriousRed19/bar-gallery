import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center flex-col p-4">
      <h1
        className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center underline  underline-offset-6"
        style={{
          textShadow:
            "1px 1px 0px #000, 2px 2px 0px #333, 3px 3px 0px #666, 4px 4px 5px rgba(0,0,0,0.5)",
        }}
      >
        Bienvenido a la Galeria de Cocteles
      </h1>
      <p className="text-3xl font-semibold  mb-2 text-center">
        Explora una colección de cocteles increíbles y descubre nuevas recetas
        para mejorar tu experiencia en la barra
        <br /> Navega por nuestras categorías y encuentra la aplicación perfecta
        para tus necesidades, Salud!
      </p>
      <Link
        className="text-gray-300 button-bg mt-6 px-5 py-2 rounded-2xl border-2 border-gray-800 w-fit hover-cards button-hover"
        href="/galeria"
      >
        Ir a la Galería de Cocteles
      </Link>
      <p className="text-3xl font-semibold  mt-4 text-center">
        ¡Sumérgete en el mundo de los cocteles y encuentra tu próxima mezcla
        favorita!
      </p>
    </div>
  );
}
