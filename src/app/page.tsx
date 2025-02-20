import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={300}
        height={100}
      />
      <h1 className="text-4xl font-bold text-white">Hello, World!</h1>
      <p className="text-white">Welcome to your Next.js app.</p>
    </main>
  );
}
