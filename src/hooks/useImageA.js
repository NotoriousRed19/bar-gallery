"use client";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function useImageA(letter = "A") {
  const { data, error, isLoading } = useSWR(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`,
    fetcher,
  );

  const images = (data?.drinks || []).map((drink) => {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ing = drink[`strIngredient${i}`];
      const measure = drink[`strMeasure${i}`];
      if (ing)
        ingredients.push(`${measure ? measure.trim() + " " : ""}${ing}`.trim());
    }
    return {
      id: drink.idDrink,
      src: drink.strDrinkThumb,
      alt: drink.strDrink,
      category: drink.strCategory || "Desconocido",
      glass: drink.strGlass || "Desconocido",
      ingredients,
    };
  });

  return { images, loading: isLoading, error };
}
