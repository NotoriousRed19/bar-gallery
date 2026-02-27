import Image from "next/image";

export default function ImageItem({
  id,
  src,
  alt,
  category,
  glass,
  ingredients = [],
  size = 140,
}) {
  return (
    <div
      className="bg-white border border-white/30 rounded-xl overflow-hidden shadow-sm transition-shadow duration-300 flex flex-col md:flex-row hover:translate-y-[-3px] shadow-gray-800 hover:shadow-[0_0_35px_rgba(0,0,0,0.25)] max-w-2xl md:max-w-4xl mx-auto h-full min-h-0"
      style={{ minHeight: size + 32, height: '100%' }}
    >
      {/* Imagen */}
      <div
        className="flex items-center justify-center w-full md:w-auto h-full min-h-0"
        style={{ width: size, minWidth: size, height: '100%', alignSelf: 'stretch', padding: 0, background: 'linear-gradient(180deg, #23272f 0%, #181a20 100%)' }}
      >
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="object-cover w-full h-full rounded-lg"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      {/* Información */}
      <div className="p-6 flex-1 flex flex-col bg-gray-700 text-white justify-center items-center md:items-start">
        <h3 className="font-semibold text-2xl mb-2 text-center md:text-left text-white">
          {alt}
        </h3>
        <div className="text-xs text-gray-400 mb-2 text-center md:text-left">ID: {id}</div>
        <div className="text-sm mb-2 w-full">
          <span className="block">
            <strong>Tipo:</strong> {category || "Desconocido"}
          </span>
          <span className="block">
            <strong>Vaso:</strong> {glass || "Desconocido"}
          </span>
        </div>
        <div className="text-sm mb-2 w-full">
          <strong>Ingredientes:</strong>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs w-full">
          {ingredients.map((ing, i) => (
            <span
              key={i}
              className="bg-gray-800/60 px-2 py-1 rounded text-white"
            >
              {ing}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
