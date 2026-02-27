import Image from "next/image";

export default function ImageItem({
  src,
  alt,
  category,
  glass,
  ingredients = [],
  size = 140,
}) {
  return (
    <div className="bg-white border border-white/30 rounded-xl overflow-hidden shadow-sm transition-shadow duration-300 flex flex-row hover:translate-y-[-3px] shadow-gray-800 hover:shadow-[0_0_35px_rgba(0,0,0,0.25)] max-w-2xl">
      {/* Imagen a la izquierda */}
      <div
        className="flex items-center justify-center bg-gray-800"
        style={{ width: size, minWidth: size, height: size }}
      >
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="object-contain rounded-lg"
        />
      </div>
      {/* Información a la derecha */}
      <div className="p-4 flex-1 flex flex-col bg-gray-700 text-white justify-center">
        <h3 className="font-semibold text-lg mb-2 text-left text-white">
          {alt}
        </h3>
        <div className="text-sm mb-1">
          <span className="block">
            <strong>Tipo:</strong> {category || "Desconocido"}
          </span>
          <span className="block">
            <strong>Vaso:</strong> {glass || "Desconocido"}
          </span>
        </div>
        <div className="text-sm mb-1">
          <strong>Ingredientes:</strong>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs">
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
