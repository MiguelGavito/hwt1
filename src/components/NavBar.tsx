import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between bg-blue-600 shadow-sm">
        <div className="flex items-center gap-8">
            <div className="flex gap-6">
                <Link href="/" className="text-white hover:text-gray-200">
                    Home
                </Link>
                <Link href="/counter" className="text-white hover:text-gray-200">
                    Counter
                </Link>
                <Link href="/rectcol" className="text-white hover:text-gray-200">
                    Colored Rectangles
                </Link>
            </div>
        </div>
    </nav>
  )
}