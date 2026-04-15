
// import Link from "next/link";
// import { Poppins } from "next/font/google";

// import { cn } from "@/lib/utils"


// const poppins = Poppins({
//         subsets : ["latin"],
//         weight : ["700"]
// })



// export const Footer =() =>{
//     return (
//         <footer className="border-t font-medium bg-white">
//             <div className="max-w-(--breakpoint-xl) max-auto flex items-center h-full gap-2 px-4 py-6 lg:px-12">
//                 <p>Powered by</p>
//                 <Link href={process.env.NEXT_PUBLIC_APP_URL!}>
//                 <span className={cn("text-2xl font-semibold" ,poppins.className)}>
//                 ZuBiFy
//                 </span>
//                 </Link>
//             </div>
//         </footer>
//     )
// }

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t bg-white">
      <div className="px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-semibold text-sm">
          © {new Date().getFullYear()} ZuBiFy, Inc.
        </p>
        <nav className="flex items-center gap-5 text-sm text-muted-foreground">
          <Link href="/about" className="hover:text-black transition-colors">
            About
          </Link>
          <Link href="/features" className="hover:text-black transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-black transition-colors">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-black transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
};