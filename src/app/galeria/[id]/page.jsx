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
    <div className="flex flex-col items-center min-h-screen w-full py-12 px-4 md:px-8">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl mt-8">
        {/* Cocktail Card */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full max-w-sm">
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
        </div>

        {/* Instructions and Actions */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="w-full bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-6 border border-gray-200 dark:border-gray-700">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Instrucciones de preparación
            </h4>
            <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              {instructionsES
                ? instructionsES
                : cocktail.strInstructions ||
                  "No hay instrucciones disponibles para este cóctel."}
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <Link
              href="/galeria"
              className="text-gray-900  bg-white hover:bg-gray-100 border border-gray-300 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 px-6 py-3 rounded-2xl shadow-md transition-colors duration-200"
            >
              Volver a la galería
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
