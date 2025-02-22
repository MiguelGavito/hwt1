import Image from "next/image";
import Link from "next/link";

interface ImageProps {
  href: string;
  src: string;
  alt: string;
}


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-4xl font-bold text-white">Tarea 2</h1>
      <p className="text-white">De: Miguel Ángel Gavito González</p>
      
      {/* Contenedor de imágenes en una fila */}
      <div className="flex space-x-4">
        <ImageComponent href="/counter" src="/counteri.png" alt="Image 1" />
        <ImageComponent href="/rectcol" src="/colrecti.png" alt="Image 2" />
      </div>
    </main>
  );
}

function ImageComponent({ href, src, alt }: ImageProps) {
  return (
    <div className="w-60 h-40">
      <Link href={href}>
        <Image src={src} alt={alt} width={300} height={200} />
      </Link>
    </div>
  );
}