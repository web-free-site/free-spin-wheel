import type { Metadata } from "next";
import Link from "next/link";
import { StaticPageShell } from "@/components/StaticPageShell";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Spin the Wheel of Names",
  description:
    "Use a free wheel of names to pick a random winner from your list. No account — add names and spin in the browser.",
  alternates: { canonical: `${SITE_URL}/wheel-of-names/` },
};

const namesHash =
  "#names=Alex%0AJordan%0ASam%0ATaylor%0ARiley%0ACasey&label=Winner";

export default function WheelOfNamesPage() {
  return (
    <StaticPageShell
      title="Spin the wheel of names"
      description="A wheel of names picks one entry at random — perfect for classrooms, giveaways, and team picks."
    >
      <p>
        A <strong>wheel of names</strong> shows every participant on a colorful wheel. When you spin,
        one name is chosen fairly with client-side randomness — no server round trip.
      </p>
      <h2 className="text-xl font-semibold mt-6">Steps</h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Open the home spin wheel and paste one name per line, or use the wheel-of-names preset.</li>
        <li>Click spin and wait for the animation to finish.</li>
        <li>Announce the highlighted winner and spin again if you need another pick.</li>
      </ol>
      <p className="mt-6">
        <Link href={namesHash} className="text-purple-700 font-semibold underline">
          Try the wheel of names now
        </Link>
      </p>
    </StaticPageShell>
  );
}