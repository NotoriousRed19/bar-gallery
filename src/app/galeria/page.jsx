"use client";
import { useState } from "react";
import ImageGallery from "@/components/organism/ImageGallery";
import Link from "next/link";
import AlphabeticChips from "@/components/molecules/AlphabeticChips";

export default function GaleriaPage() {
  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V", "W","X","Y","Z",
  ];

  const [selectedLetter, setSelectedLetter] = useState("A");

  return (
    <>
      <div className="flex items-center flex-col p-4">
        <h1
          className="text-2xl sm:text-3xl md:text-5xl  font-bold tracking-tight mb-4 text-center underline  underline-offset-6"
          style={{
            textShadow:
              "1px 1px 0px #000, 2px 2px 0px #333, 3px 3px 0px #666, 4px 4px 5px rgba(0,0,0,0.5)",
          }}
        >
          Galería de Imágenes
        </h1>
        <p className="text-3xl font-semibold  mb-2 text-center">
          Explora nuestra selección de cocteles cuidadosamente seleccionados,
          <b /> cada uno con su propia historia y sabor único. Desde los
          clásicos atemporales hasta las creaciones más innovadoras, nuestra
          galería de imágenes te invita a descubrir la belleza y la diversidad
          del mundo de los cocteles. ¡Sumérgete en esta experiencia visual y
          encuentra inspiración para tu próxima mezcla!
        </p>
        <div className="flex items-center flex-col justify-center mb-4">
          <Link
            className="text-gray-300 mt-6 button-bg px-5 py-2 rounded-2xl border-2 border-gray-800 w-fit hover-cards"
            href="/"
          >
            Volver a la Página Principal
          </Link>
        </div>
        <AlphabeticChips
          className="mt-4"
          letters={alphabet}
          onSelect={setSelectedLetter}
        />
        <ImageGallery selectedLetter={selectedLetter} />
      </div>
    </>
  );
}
