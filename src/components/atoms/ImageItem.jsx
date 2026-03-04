import Image from "next/image";

export default function ImageItem({
  id,
  src,
  alt,
  category,
  glass,
  ingredients = [],
}) {
  return (
    <div className="bg-gray-800 border border-gray-700 hover:border-gray-500 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col hover:-translate-y-1 h-full w-full mx-auto group">
      {/* Imagen */}
      <div className="w-full aspect-square relative bg-gradient-to-b from-[#23272f] to-[#181a20] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      {/* Información */}
      <div className="p-5 flex-1 flex flex-col bg-gray-800 text-white">
        <h3 className="font-semibold text-xl mb-1 text-white line-clamp-1">
          {alt}
        </h3>
        <div className="text-xs text-gray-400 mb-4 font-mono">ID: {id}</div>
        <div className="text-sm mb-3 space-y-1 text-gray-300 flex-1">
          <p className="flex justify-between border-b border-gray-700 pb-1">
            <span className="text-gray-400">Tipo</span>
            <span className="font-medium text-right text-sm">
              {category || "Desconocido"}
            </span>
          </p>
          <p className="flex justify-between border-b border-gray-700 pb-1 pt-1">
            <span className="text-gray-400">Vaso</span>
            <span className="font-medium text-right text-sm break-words max-w-[60%]">
              {glass || "Desconocido"}
            </span>
          </p>
        </div>
        <div>
          <strong className="text-xs text-gray-400 uppercase tracking-wider mb-2 block">
            Ingredientes
          </strong>
          <div className="flex flex-wrap items-center gap-1.5 text-xs w-full">
            {ingredients.slice(0, 4).map((ing, i) => (
              <span
                key={i}
                className="bg-gray-700/80 px-2 py-1 rounded text-gray-200 border border-gray-600"
              >
                {ing}
              </span>
            ))}
            {ingredients.length > 4 && (
              <span className="bg-gray-700/80 px-2 py-1 rounded text-gray-200 border border-gray-600">
                +{ingredients.length - 4} más
              </span>
            )}
            {ingredients.length === 0 && (
              <span className="text-gray-500 italic">No especificados</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
