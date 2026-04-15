import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For creators just getting started.",
    highlight: false,
    features: [
      "1 storefront subdomain",
      "Up to 10 products",
      "Stripe Connect payments",
      "Buyer library access",
      "Reviews & ratings",
      "Community support",
    ],
    cta: "Start for free",
    href: "/sign-up",
  },
  {
    name: "Creator",
    price: "$12",
    period: "/ month",
    description: "For serious creators building an audience.",
    highlight: true,
    features: [
      "1 storefront subdomain",
      "Unlimited products",
      "Stripe Connect payments",
      "Buyer library access",
      "Reviews & ratings",
      "Priority support",
      "Custom product images",
      "Analytics (coming soon)",
    ],
    cta: "Start free trial",
    href: "/sign-up",
  },
  {
    name: "Business",
    price: "$39",
    period: "/ month",
    description: "For teams and high-volume sellers.",
    highlight: false,
    features: [
      "Multiple storefronts",
      "Unlimited products",
      "Stripe Connect payments",
      "Buyer library access",
      "Reviews & ratings",
      "Dedicated support",
      "Custom domain (soon)",
      "Team access (soon)",
    ],
    cta: "Contact us",
    href: "/contact",
  },
];

const faqs = [
  {
    q: "Does Zubify take a cut of my sales?",
    a: "No. Zubify charges zero platform commission. You only pay Stripe's standard processing fee (2.9% + 30¢ per transaction).",
  },
  {
    q: "How do I get paid?",
    a: "Earnings go directly to your Stripe account via Stripe Connect. There is no payout delay or manual withdrawal needed.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes. You can upgrade or downgrade at any time. Billing is prorated.",
  },
  {
    q: "What counts as a 'digital product'?",
    a: "Anything digital — ebooks, PDFs, design templates, Figma files, code, music files, video courses, and more.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#F4F4F0]">
      {/* Header */}
      <div className="bg-black text-white px-6 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <p className="text-sm font-medium tracking-widest uppercase text-white/50">
            Pricing
          </p>
          <h1
            className={cn(
              "text-5xl lg:text-7xl font-bold leading-tight",
              poppins.className
            )}
          >
            Simple pricing,
            <br />
            no surprises.
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed pt-2">
            No transaction fees on top of Stripe. You keep what you earn.
          </p>
        </div>
      </div>

      <div className="px-6 lg:px-12 py-16 max-w-5xl mx-auto space-y-14">
        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-4 items-start">
          {plans.map(
            ({
              name,
              price,
              period,
              description,
              highlight,
              features,
              cta,
              href,
            }) => (
              <div
                key={name}
                className={cn(
                  "bg-white border rounded-sm p-7 space-y-6",
                  highlight && "border-black ring-2 ring-black"
                )}
              >
                {highlight && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-black text-white rounded-full">
                    Most Popular
                  </span>
                )}

                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                    {name}
                  </p>
                  <div className="flex items-end gap-1">
                    <span
                      className={cn(
                        "text-4xl font-bold",
                        poppins.className
                      )}
                    >
                      {price}
                    </span>
                    <span className="text-muted-foreground text-sm mb-1">
                      {period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {description}
                  </p>
                </div>

                <ul className="space-y-2.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckIcon className="size-4 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={href}
                  className={cn(
                    "block text-center py-3 rounded-full font-semibold text-sm transition-colors",
                    highlight
                      ? "bg-black text-white hover:bg-black/80"
                      : "border border-black text-black hover:bg-black hover:text-white"
                  )}
                >
                  {cta}
                </Link>
              </div>
            )
          )}
        </div>

        {/* Stripe note */}
        <p className="text-center text-sm text-muted-foreground border-t pt-6">
          All plans include Stripe&apos;s standard processing fees (2.9% + 30¢).
          Zubify charges no additional commission on any sale.
        </p>

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className={cn("text-2xl font-bold", poppins.className)}>
            Frequently asked questions
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white border rounded-sm p-6 space-y-2">
                <p className="font-semibold">{q}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}