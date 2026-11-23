import type { Metadata } from "next";
import Link from "next/link";
import { StaticPageShell } from "@/components/StaticPageShell";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Spin the Wheel Yes or No",
  description:
    "Spin a yes or no wheel for quick decisions. Two options, one random answer — free and in your browser.",
  alternates: { canonical: `${SITE_URL}/spin-the-wheel-yes-or-no/` },
};

export default function YesOrNoPage() {
  return (
    <StaticPageShell
      title="Spin the wheel yes or no"
      description="Load Yes and No on the wheel and let chance decide."
    >
      <p>
        A <strong>yes or no spin wheel</strong> is the fastest way to settle a binary choice. Add only two
        labels, spin once, and read the result.
      </p>
      <h2 className="text-xl font-semibold mt-6">Steps</h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>On the home page, click the Yes or no preset (or enter Yes and No on separate lines).</li>
        <li>Press spin and watch the pointer land on one option.</li>
        <li>Need a tie-breaker? Spin again.</li>
      </ol>
      <p className="mt-6">
        <Link href="/#names=Yes%0ANo&label=Answer" className="text-purple-700 font-semibold underline">
          Open the yes or no wheel
        </Link>
      </p>
    </StaticPageShell>
  );
}