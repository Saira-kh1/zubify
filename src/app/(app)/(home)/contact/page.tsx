import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Mail, Github, MessageSquare } from "lucide-react";

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F4F4F0]">
      {/* Header */}
      <div className="bg-black text-white px-6 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto space-y-4">
          <p className="text-sm font-medium tracking-widest uppercase text-white/50">
            Contact
          </p>
          <h1
            className={cn(
              "text-5xl lg:text-7xl font-bold leading-tight",
              poppins.className
            )}
          >
            Let&apos;s talk.
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed pt-2">
            Questions, feedback, or collaboration? We&apos;d love to hear from
            you.
          </p>
        </div>
      </div>

      <div className="px-6 lg:px-12 py-16 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left — Contact Options */}
          <div className="space-y-4">
            <h2 className={cn("text-xl font-bold mb-6", poppins.className)}>
              Ways to reach us
            </h2>

            {[
              {
                icon: Mail,
                label: "Email",
                value: "hello@zubify.com",
                sub: "We reply within 24 hours",
                href: "mailto:hello@zubify.com",
              },
              {
                icon: Github,
                label: "GitHub",
                value: "github.com/zubify",
                sub: "Open an issue or PR",
                href: "https://github.com",
              },
              {
                icon: MessageSquare,
                label: "Support",
                value: "Open a support ticket",
                sub: "For technical issues",
                href: "#",
              },
            ].map(({ icon: Icon, label, value, sub, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 bg-white border rounded-sm p-5 hover:border-black transition-colors group"
              >
                <div className="size-10 rounded-sm bg-black flex items-center justify-center shrink-0">
                  <Icon className="size-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                    {label}
                  </p>
                  <p className="font-semibold">{value}</p>
                  <p className="text-xs text-muted-foreground">{sub}</p>
                </div>
              </a>
            ))}

            {/* Quick response guarantee */}
            <div className="bg-black text-white rounded-sm p-6 space-y-2 mt-6">
              <p className={cn("font-bold text-lg", poppins.className)}>
                Fast response guarantee
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                We aim to respond to every inquiry within one business day.
                Critical support issues are prioritised.
              </p>
            </div>
          </div>

          {/* Right — Message Form */}
          <div className="bg-white border rounded-sm p-8 space-y-5">
            <h2 className={cn("text-xl font-bold", poppins.className)}>
              Send a message
            </h2>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold">Your name</label>
                <input
                  type="text"
                  placeholder="e.g. Ahmad Raza"
                  className="w-full border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold">Email address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold">Subject</label>
                <select className="w-full border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all bg-white">
                  <option>General enquiry</option>
                  <option>Technical support</option>
                  <option>Billing question</option>
                  <option>Partnership / collaboration</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold">Message</label>
                <textarea
                  rows={5}
                  placeholder="What's on your mind?"
                  className="w-full border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all resize-none"
                />
              </div>

              <button className="w-full bg-black text-white py-3 rounded-full font-semibold text-sm hover:bg-black/80 transition-colors">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}