import ImageItem from "@/components/atoms/ImageItem";
import Link from "next/link";

export default function ImageGrid({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
     {images.map((img) => (
        <Link key={img.id} href={`/galeria/${img.id}`}>
        <ImageItem 
          key={img.id} 
          id={img.id}
          src={img.src} 
          alt={img.alt} 
          category={img.category}
          glass={img.glass}
          ingredients={img.ingredients}
          size={260}
        />
        </Link>
      ))}           
      </div>  
    );
}
