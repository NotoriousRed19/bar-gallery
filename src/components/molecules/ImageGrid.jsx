import ImageItem from "@/components/atoms/ImageItem";
import Link from "next/link";

export default function ImageGrid({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 w-full max-w-7xl mx-auto px-4">
     {images.map((img) => (
        <Link key={img.id} href={`/galeria/${img.id}`} className="block h-full">
        <ImageItem 
          key={img.id} 
          id={img.id}
          src={img.src} 
          alt={img.alt} 
          category={img.category}
          glass={img.glass}
          ingredients={img.ingredients}
        />
        </Link>
      ))}           
      </div>  
    );
}
