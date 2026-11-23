"use client";

import { useEffect, useRef } from "react";
import { ADS_CONFIG, isBannerUnit } from "@/lib/ads-config";

export const AD_RESERVE: Record<string, { minH: number; minW?: number; iframeH: number; iframeW: number }> = {
  banner728x90: { minH: 90, minW: 728, iframeH: 90, iframeW: 728 },
  banner468x60: { minH: 60, minW: 468, iframeH: 60, iframeW: 468 },
  banner300x250: { minH: 250, minW: 300, iframeH: 250, iframeW: 300 },
  banner160x600: { minH: 600, minW: 160, iframeH: 600, iframeW: 160 },
  banner160x300: { minH: 300, minW: 160, iframeH: 300, iframeW: 160 },
  banner320x50: { minH: 50, minW: 320, iframeH: 50, iframeW: 320 },
  nativeBanner: { minH: 120, iframeH: 120, iframeW: 320 },
};

export type AdSlotName = keyof typeof AD_RESERVE | "nativeBanner";

function injectScriptsFromHtml(html: string, target: HTMLElement) {
  target.innerHTML = html;
  target.querySelectorAll("script").forEach((old) => {
    const s = document.createElement("script");
    [...old.attributes].forEach((a) => s.setAttribute(a.name, a.value));
    s.textContent = old.textContent;
    old.replaceWith(s);
  });
}

function injectScriptsFromHtmlToDocument(html: string, parent: HTMLElement) {
  const wrap = document.createElement("div");
  wrap.innerHTML = html;
  wrap.querySelectorAll("script").forEach((old) => {
    const s = document.createElement("script");
    [...old.attributes].forEach((a) => s.setAttribute(a.name, a.value));
    s.textContent = old.textContent;
    parent.appendChild(s);
  });
  wrap.querySelectorAll(":not(script)").forEach((el) => {
    if (el.tagName !== "SCRIPT") parent.appendChild(el);
  });
}

export function AdSlot({
  slot,
  className = "",
  label,
}: {
  slot: AdSlotName;
  className?: string;
  label?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const code = (ADS_CONFIG[slot] ?? "").trim();
  const reserve = AD_RESERVE[slot] ?? { minH: 60, iframeH: 60, iframeW: 300 };

  useEffect(() => {
    if (!code || isBannerUnit(code) || !ref.current) return;
    injectScriptsFromHtml(code, ref.current);
  }, [code]);

  if (!code) {
    return null;
  }

  if (isBannerUnit(code)) {
    return (
      <div
        className={`ad-slot flex w-full justify-center overflow-hidden pointer-events-auto ${className}`}
        aria-label={label ?? "Advertisement"}
        data-ad-slot={slot}
      >
        <iframe
          title={label ?? "Advertisement"}
          src={code}
          width={reserve.iframeW}
          height={reserve.iframeH}
          className="max-w-full border-0 bg-transparent"
          style={{ width: reserve.iframeW, height: reserve.iframeH, maxWidth: "100%" }}
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`ad-slot flex w-full justify-center overflow-hidden pointer-events-auto ${className}`}
      aria-label={label ?? "Advertisement"}
      data-ad-slot={slot}
    >
      <div
        ref={ref}
        className="w-full flex justify-center"
        style={{ minHeight: reserve.minH, minWidth: reserve.minW }}
      />
    </div>
  );
}

export function AdGlobalScripts() {
  useEffect(() => {
    const pop = ADS_CONFIG.popunder?.trim();
    const social = ADS_CONFIG.socialBar?.trim();
    if (pop) injectScriptsFromHtmlToDocument(pop, document.head);
    if (social) injectScriptsFromHtmlToDocument(social, document.body);
  }, []);
  return null;
}

export function SponsoredSmartlink() {
  const href = ADS_CONFIG.smartlink?.trim();
  if (!href) return null;

  return (
    <p className="text-center text-sm text-gray-500 dark:text-gray-400 py-2">
      <a href={href} target="_blank" rel="sponsored noopener noreferrer" className="underline">
        Sponsored
      </a>
    </p>
  );
}