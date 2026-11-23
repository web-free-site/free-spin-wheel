import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";
import { SITE_NAME, SITE_URL, UPSTREAM_REPO } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "About Free Spin Wheel — web-free.site toolkit and MIT spin wheel by Hadi Haider.",
  alternates: { canonical: `${SITE_URL}/about/` },
};

export default function AboutPage() {
  return (
    <StaticPageShell title={`About ${SITE_NAME}`}>
      <p>
        {SITE_NAME} is a browser-based wheel of names and random picker hosted at{" "}
        <strong>free-spin-wheel.web-free.site</strong>, part of the free tools collection on{" "}
        <a href="https://web-free.site/?ref=spin-wheel">web-free.site</a>.
      </p>
      <p>
        The interactive wheel is derived from the open-source project{" "}
        <a href={UPSTREAM_REPO} target="_blank" rel="noopener noreferrer">
          spin-wheel-of-names
        </a>{" "}
        by <strong>Hadi Haider</strong>, used under the MIT License. We thank Hadi for publishing a
        complete, customizable spin wheel.
      </p>
      <p>Maintained by Gentil M. in Kigali, Rwanda.</p>
    </StaticPageShell>
  );
}