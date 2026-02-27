import Button from "@/components/atoms/Button";

export default function AlphabeticChips({ letters, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-6">
      {letters.map((letter) => (
        <Button
          key={letter}
          className=" button-bg button-hover border-gray-800 border-2 text-gray-300 hover-chips hover:cursor-pointer rounded-2xl w-10 h-10 transition duration-300 ease-in-out"
          onClick={() => onSelect(letter)}
        >
          {letter}
        </Button>
      ))}
    </div>
  );
}
