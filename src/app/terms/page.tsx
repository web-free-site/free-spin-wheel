import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using the Free Spin Wheel random picker in your browser.",
  alternates: { canonical: `${SITE_URL}/terms/` },
};

export default function TermsPage() {
  return (
    <StaticPageShell title="Terms of Use">
      <p>
        {SITE_NAME} is provided free of charge, without warranty. Use the spin wheel for lawful
        purposes only. You are responsible for how you use random results in contests, classrooms, or
        events.
      </p>
      <p>These terms may be updated without notice. Continued use means you accept the current terms.</p>
    </StaticPageShell>
  );
}