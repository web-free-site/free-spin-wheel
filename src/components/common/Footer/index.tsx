import Link from "next/link";
import { HUB_URL, SITE_NAME, UPSTREAM_REPO } from "@/lib/site";

interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
  return (
    <footer
      className={`relative mt-20 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      } border-t ${isDark ? "border-gray-700" : "border-gray-200"}`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2
              className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {SITE_NAME}
            </h2>
            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Random name picker and spin wheel — 100% in your browser. Part of the{" "}
              <a href={HUB_URL} className="underline hover:text-purple-500">
                web-free.site
              </a>{" "}
              toolkit.
            </p>
            <p className={`text-sm mt-3 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Wheel app based on{" "}
              <a
                href={UPSTREAM_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                spin-wheel-of-names
              </a>{" "}
              by Hadi Haider (MIT).
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <span className={isDark ? "text-gray-300" : "text-gray-700"}>Guides</span>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <Link href="/wheel-of-names/" className="underline opacity-90 hover:opacity-100">
                Wheel of names
              </Link>
              <Link
                href="/spin-the-wheel-yes-or-no/"
                className="underline opacity-90 hover:opacity-100"
              >
                Yes or no wheel
              </Link>
              <Link
                href="/how-to-pick-a-random-name/"
                className="underline opacity-90 hover:opacity-100"
              >
                Pick a random name
              </Link>
            </div>
            <span className={`mt-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>Legal</span>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <Link href="/privacy/" className="underline opacity-90 hover:opacity-100">
                Privacy
              </Link>
              <Link href="/terms/" className="underline opacity-90 hover:opacity-100">
                Terms
              </Link>
              <Link href="/about/" className="underline opacity-90 hover:opacity-100">
                About
              </Link>
              <Link href="/contact/" className="underline opacity-90 hover:opacity-100">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <p
          className={`mt-8 pt-6 border-t text-xs text-center ${
            isDark ? "border-gray-800 text-gray-500" : "border-gray-200 text-gray-500"
          }`}
        >
          © {new Date().getFullYear()} {SITE_NAME}. Open-source wheel UI (MIT).
        </p>
      </div>
    </footer>
  );
};

export default Footer;