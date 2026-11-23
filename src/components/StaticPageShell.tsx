import Link from "next/link";
import { HUB_URL, SITE_NAME, SITE_URL } from "@/lib/site";

export function StaticPageShell({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-3xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-3">
          <Link href="/" className="font-bold text-lg text-purple-700 hover:underline">
            {SITE_NAME}
          </Link>
          <nav className="flex flex-wrap gap-3 text-sm text-gray-600">
            <Link href="/wheel-of-names/" className="hover:text-purple-700">
              Wheel of names
            </Link>
            <Link href="/spin-the-wheel-yes-or-no/" className="hover:text-purple-700">
              Yes or no
            </Link>
            <Link href="/how-to-pick-a-random-name/" className="hover:text-purple-700">
              How-to
            </Link>
            <a href={HUB_URL} className="hover:text-purple-700">
              More tools
            </a>
          </nav>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-3">{title}</h1>
        {description && <p className="text-lg text-gray-600 mb-8">{description}</p>}
        <div className="prose prose-gray max-w-none space-y-4 text-gray-800 leading-relaxed">
          {children}
        </div>
        <p className="mt-10 text-sm text-gray-500">
          <Link href="/" className="text-purple-700 underline">
            Open the free spin wheel
          </Link>{" "}
          · Canonical: {SITE_URL}
        </p>
      </main>
    </div>
  );
}