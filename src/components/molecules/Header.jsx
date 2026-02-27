"use client";

import Button from "@/components/atoms/Button";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-gray-800 border-b-2 border-gray-900 p-4 shadow-2xl backdrop-blur z-10 ">
      <div className="flex items-center justify-center md:justify-between">
        <h1
          className="text-2xl font-extrabold underline decoration-gray-500 underline-offset-6 text-gray-300 hover-cards "
          style={{
            textShadow:
              "1px 1px 0px #000, 2px 2px 0px #333, 3px 3px 0px #666, 4px 4px 5px rgba(0,0,0,0.5)",
          }}
        >
          Galeria De Cocteles
        </h1>

        <Button
          className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-2xl border-2 cursor-pointer border-gray-800 w-fit hover-cards "
          onClick={toggleTheme}
        >
          {theme === "dark" ? "Modo Oscuro" : "Modo Claro"}
        </Button>
      </div>
    </header>
  );
}
