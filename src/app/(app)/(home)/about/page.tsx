
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F4F4F0]">
      {/* Hero Banner */}
      <div className="bg-black text-white px-6 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <p className="text-sm font-medium tracking-widest uppercase text-white/50">
            About ZuBiFy
          </p>
          <h1
            className={cn(
              "text-5xl lg:text-7xl font-bold leading-tight",
              poppins.className
            )}
          >
            The marketplace
            <br />
            built for creators.
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed pt-2">
            Zubify gives every creator their own branded storefront — and every
            buyer a curated place to discover great digital products.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="px-6 lg:px-12 py-16 max-w-5xl mx-auto space-y-14">
        <section className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white border rounded-sm p-8 space-y-4">
            <h2 className={cn("text-2xl font-bold", poppins.className)}>
              Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We believe every creator deserves a professional storefront
              without needing to hire a developer. Zubify gives you your own
              subdomain, your own brand, and a full payment pipeline — all in
              one place.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We handle the infrastructure so you can focus entirely on what
              matters: creating great products and growing your audience.
            </p>
          </div>

          <div className="bg-white border rounded-sm p-8 space-y-4">
            <h2 className={cn("text-2xl font-bold", poppins.className)}>
              Why Zubify?
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Your own subdomain — yourname.zubify.com",
                "Stripe Connect — earnings straight to your bank",
                "No commissions on top of Stripe fees",
                "Buyers get a personal library of all purchases",
                "Built on Next.js 15 — blazing fast",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 size-2 rounded-full bg-black shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="space-y-6">
          <h2 className={cn("text-3xl font-bold", poppins.className)}>
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                step: "01",
                title: "Create your storefront",
                body: "Sign up, connect your Stripe account, and claim your subdomain. Done in under 5 minutes.",
              },
              {
                step: "02",
                title: "List your products",
                body: "Upload ebooks, templates, courses, code, music — anything digital. Set your own price.",
              },
              {
                step: "03",
                title: "Get paid",
                body: "Buyers checkout via Stripe. Earnings land directly in your bank account. No waiting.",
              },
            ].map(({ step, title, body }) => (
              <div
                key={step}
                className="bg-white border rounded-sm p-6 space-y-3"
              >
                <span
                  className={cn(
                    "text-6xl font-bold text-black/8 block",
                    poppins.className
                  )}
                >
                  {step}
                </span>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="bg-black text-white rounded-sm p-8 space-y-4">
          <h2 className={cn("text-2xl font-bold", poppins.className)}>
            Built with serious technology
          </h2>
          <p className="text-white/60 leading-relaxed max-w-xl">
            Zubify is built on a modern, production-grade stack — the same
            technologies used at scale by top tech companies.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "Next.js 15",
              "TypeScript",
              "PayloadCMS",
              "tRPC",
              "Stripe Connect",
              "MongoDB",
              "Zustand",
              "Tailwind CSS",
              "Vercel",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm border border-white/20 rounded-full text-white/80 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}