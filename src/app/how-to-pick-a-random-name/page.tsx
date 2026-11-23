import type { Metadata } from "next";
import Link from "next/link";
import { StaticPageShell } from "@/components/StaticPageShell";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Pick a Random Name",
  description:
    "How to pick a random name with a free spin wheel: paste your list, spin, and share results fairly.",
  alternates: { canonical: `${SITE_URL}/how-to-pick-a-random-name/` },
};

export default function HowToPickRandomNamePage() {
  return (
    <StaticPageShell
      title="How to pick a random name"
      description="Step-by-step guide for fair random name selection online."
    >
      <p>
        Picking a random name should be transparent. This guide uses a browser spin wheel so everyone
        can see the list before the spin.
      </p>
      <h2 className="text-xl font-semibold mt-6">Steps</h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          <strong>Collect names</strong> — one per line in a text file or spreadsheet, then copy them.
        </li>
        <li>
          <strong>Paste into Free Spin Wheel</strong> and load participants so each name appears on the
          wheel.
        </li>
        <li>
          <strong>Spin once</strong> for a single winner, or remove winners and spin again for multiple
          picks.
        </li>
        <li>
          <strong>Share your list</strong> using the URL hash (names=…) so others load the same entries.
        </li>
      </ol>
      <h2 className="text-xl font-semibold mt-6">Tips for fairness</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Show the screen to participants before spinning.</li>
        <li>Do not edit the list after the spin starts.</li>
        <li>For large groups, remove winners after each spin to avoid duplicates.</li>
      </ul>
      <p className="mt-6">
        <Link href="/" className="text-purple-700 font-semibold underline">
          Start picking a random name
        </Link>
      </p>
    </StaticPageShell>
  );
}