import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Customize Your Wheel",
  description: `Change colors, sounds, and behavior on ${SITE_NAME}.`,
  alternates: { canonical: `${SITE_URL}/customize/` },
};

export default function CustomizeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}