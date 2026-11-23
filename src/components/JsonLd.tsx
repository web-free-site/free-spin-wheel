import { SITE_NAME, SITE_URL } from "@/lib/site";

const faq = [
  {
    question: "Is Free Spin Wheel really free?",
    answer:
      "Yes. The wheel runs entirely in your browser with no account, no signup, and no paid API calls.",
  },
  {
    question: "Can I share my name list with others?",
    answer:
      "You can paste names into the wheel, save them in your browser, or share a link with names encoded in the URL hash.",
  },
  {
    question: "Does spinning need an internet connection?",
    answer:
      "After the page loads, random spins and winner selection work offline because all logic runs locally.",
  },
  {
    question: "Can I use it for yes or no decisions?",
    answer:
      "Yes. Load a two-option list such as Yes and No, or use the yes or no preset on the home page.",
  },
];

export function HomeJsonLd() {
  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: SITE_NAME,
    url: SITE_URL,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free spin wheel and wheel of names picker. Add names, spin, and pick a random winner in your browser.",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}