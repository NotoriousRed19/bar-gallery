"use client";

import ImageGrid from "@/components/molecules/ImageGrid";

import useImageA from "@/hooks/useImageA";

export default function ImageGallery({ selectedLetter = "A" }) {
  const { images, loading, error } = useImageA(selectedLetter.toLowerCase());

  if (loading) {
    return <p className="text-center text-gray-400">Cargando imágenes...</p>;
  }
  if (error) {
    return (
      <p className="text-center text-red-500">
        Error al cargar las imágenes: {error.message}
      </p>
    );
  }

  return <ImageGrid images={images} />;
}
