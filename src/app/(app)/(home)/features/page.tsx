import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  ShoppingBag,
  Store,
  CreditCard,
  Library,
  Star,
  Shield,
  Zap,
  Globe,
} from "lucide-react";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

const features = [
  {
    icon: Store,
    title: "Multi-Tenant Storefronts",
    description:
      "Every seller gets their own subdomain — yourname.zubify.com. Your brand, your URL, your store. No shared URLs, no confusion.",
    tag: "For Sellers",
  },
  {
    icon: CreditCard,
    title: "Stripe Connect Payments",
    description:
      "Payments flow directly to sellers via Stripe Connect. No holding periods, no manual withdrawals — your money, your account.",
    tag: "Payments",
  },
  {
    icon: ShoppingBag,
    title: "Cart & Checkout",
    description:
      "A smooth, persistent cart powered by Zustand. Buyers can add products from any seller and checkout in one seamless flow.",
    tag: "For Buyers",
  },
  {
    icon: Library,
    title: "Personal Library",
    description:
      "Every purchase is saved to the buyer's personal library. Access your digital products any time, from any device, forever.",
    tag: "For Buyers",
  },
  {
    icon: Star,
    title: "Reviews & Ratings",
    description:
      "Verified buyers can leave star ratings and written reviews. Aggregated scores are displayed on every product page.",
    tag: "Community",
  },
  {
    icon: Shield,
    title: "Access Control",
    description:
      "Products are gated behind purchase verification. Only users who bought a product can view or download it.",
    tag: "Security",
  },
  {
    icon: Zap,
    title: "Instant Performance",
    description:
      "Built with React Server Components, infinite-scroll prefetching, and Suspense boundaries. Pages feel instant — always.",
    tag: "Performance",
  },
  {
    icon: Globe,
    title: "End-to-End Type Safety",
    description:
      "The entire API is built with tRPC and Zod. Every request and response is fully typed — no runtime surprises.",
    tag: "Developer",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#F4F4F0]">
      {/* Header */}
      <div className="bg-black text-white px-6 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <p className="text-sm font-medium tracking-widest uppercase text-white/50">
            Features
          </p>
          <h1
            className={cn(
              "text-5xl lg:text-7xl font-bold leading-tight",
              poppins.className
            )}
          >
            Everything you need
            <br />
            to sell digital products.
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed pt-2">
            Zubify ships with a complete, production-ready feature set — from
            storefronts to Stripe payouts. No plugins, no bolt-ons.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="px-6 lg:px-12 py-16 max-w-5xl mx-auto space-y-14">
        <div className="grid sm:grid-cols-2 gap-4">
          {features.map(({ icon: Icon, title, description, tag }) => (
            <div
              key={title}
              className="bg-white border rounded-sm p-6 space-y-3"
            >
              <div className="flex items-start justify-between">
                <div className="size-10 rounded-sm bg-black flex items-center justify-center">
                  <Icon className="size-5 text-white" />
                </div>
                <span className="text-xs font-medium border rounded-full px-2.5 py-1 text-muted-foreground">
                  {tag}
                </span>
              </div>
              <h3 className={cn("text-lg font-bold", poppins.className)}>
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Architecture highlight */}
        <section className="bg-white border rounded-sm p-8 space-y-4">
          <h2 className={cn("text-2xl font-bold", poppins.className)}>
            Multi-tenant architecture
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            A single Next.js deployment powers both the marketplace and every
            seller storefront. Subdomains are resolved at the middleware layer —
            no separate deployments, no extra cost per seller.
          </p>
          <div className="grid sm:grid-cols-3 gap-3 pt-2">
            {[
              { url: "zubify.com", label: "Main Marketplace" },
              { url: "sairah.zubify.com", label: "Seller Storefront" },
              { url: "zubify.com/admin", label: "CMS Admin Panel" },
            ].map(({ url, label }) => (
              <div
                key={url}
                className="border rounded-sm p-4 bg-[#F4F4F0] space-y-1"
              >
                <p className="font-mono text-sm font-semibold">{url}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-black text-white rounded-sm p-10 text-center space-y-4">
          <h2 className={cn("text-3xl font-bold", poppins.className)}>
            Ready to start selling?
          </h2>
          <p className="text-white/60 max-w-sm mx-auto">
            Create your free Zubify account and have your first product live in
            under 10 minutes.
          </p>
          <Link
            href="/sign-up"
            className="inline-block mt-2 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
          >
            Get started — it&apos;s free
          </Link>
        </div>
      </div>
    </div>
  );
}