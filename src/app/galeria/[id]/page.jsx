"use client";

import { useEffect, useState } from "react";
import ImageItem from "@/components/atoms/ImageItem";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function CocktailDetail() {
  const { id } = useParams();

  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.drinks && data.drinks.length > 0) {
          setCocktail(data.drinks[0]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cocktail:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Cargando...
      </div>
    );
  }
  if (!cocktail) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Cóctel no encontrado.
      </div>
    );
  }

  // Procesar ingredientes para que sea un array como espera ImageItem
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ing = cocktail[`strIngredient${i}`];
    const measure = cocktail[`strMeasure${i}`];
    if (ing)
      ingredients.push(`${measure ? measure.trim() + " " : ""}${ing}`.trim());
  }

  // Obtener instrucciones en español si existen, si no, mostrar mensaje alternativo
  const instructionsES = cocktail.strInstructionsES || null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-screen w-full py-12  from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="w-full mt-5 max-w-6xl">
        <ImageItem
          id={id}
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
          category={cocktail.strCategory}
          glass={cocktail.strGlass}
          ingredients={ingredients}
          size={640}
        />
      </div>
      <div className="w-full max-w-4xl  bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 shadow-lg">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Instrucciones de preparación</h4>
        <p className="text-gray-800 dark:text-gray-200 text-lg">
          {instructionsES ? instructionsES : "No hay instrucciones en español disponibles para este cóctel."}
        </p>
      </div>
      <div className="flex items-center justify-center mt-8">
        <Link
          href="/galeria"
          className="text-white items-center  bg-gray-800 hover:bg-gray-700 border border-gray-600 px-6 py-2 rounded-2xl shadow-md transition-colors duration-200"
        >
          Volver a la galería
        </Link>
      </div>
    </div>
  );
}
