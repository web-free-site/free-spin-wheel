import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact for Free Spin Wheel support and feedback.",
  alternates: { canonical: `${SITE_URL}/contact/` },
};

export default function ContactPage() {
  return (
    <StaticPageShell title="Contact">
      <p>
        Email:{" "}
        <a href="mailto:gentil@quevvy.com" className="text-purple-700 underline">
          gentil@quevvy.com
        </a>
      </p>
      <p>
        Website:{" "}
        <a href="https://gentil.quevvy.com" className="text-purple-700 underline">
          gentil.quevvy.com
        </a>
      </p>
    </StaticPageShell>
  );
}