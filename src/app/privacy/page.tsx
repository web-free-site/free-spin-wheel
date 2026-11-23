import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Free Spin Wheel handles your data — browser-local lists, optional ads, and analytics.",
  alternates: { canonical: `${SITE_URL}/privacy/` },
};

export default function PrivacyPage() {
  return (
    <StaticPageShell title="Privacy Policy">
      <p>
        {SITE_NAME} keeps your name lists and wheel settings in your browser (local storage). We do
        not upload your entries to our servers because spinning runs entirely client-side.
      </p>
      <p>
        Cloudflare Web Analytics on this site collects anonymous usage metrics. When enabled, Adsterra
        ad units may set third-party cookies under their own policies.
      </p>
      <p>Questions: gentil@quevvy.com</p>
    </StaticPageShell>
  );
}