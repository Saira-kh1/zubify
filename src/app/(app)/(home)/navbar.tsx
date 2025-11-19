"use client"
// bun packages
import Link from "next/link";
import { useState , useEffect} from "react";
import { MenuIcon } from "lucide-react";
//next font and navigation
import { Poppins } from "next/font/google";
import {  usePathname } from "next/navigation";

// alias inputs 
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { NavbarSidebar } from "./navbar-sidebar";






const poppins = Poppins({
    subsets:["latin"],
    weight:["700"],
});

interface NavbarProps{
    href: string;
    children : React.ReactNode;
    isActive? : boolean;
}

const NavbarItem = ({
    href,
    children,
    isActive,
}: NavbarProps) =>{
    return (
        <Button 
        asChild
        variant="outline"
        className={cn("bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
            isActive && "bg-black text-white hover:bg-black hover:text-white "
        )}
        >
        <Link href={href}>{children}</Link>

            </Button>
    )
}

const navbarItems = [
    {  href : "/",
        children : "Home",},
    {
            href: "/about",
            children :  "About",

    },
    {
            href: "/features",
            children :  "Features",

    },
    {
            href: "/pricing",
            children :  "Pricing",

    },
    {
            href: "/contact",
            children :  "Contact",

    },
        
        //  all of these are not important but these are seo pages 

]


export const Navbar = () => {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] =  useState(false);

    return(
       <nav className="h-20 flex border-b justify-between font-medium bg-white">
        <Link href="/"  className= "pl-6  flex items-center">
        <span className={cn("text-5xl  font-semibold", poppins.className)}>ZuBiFy</span>
        
        </Link>
        <NavbarSidebar 
        items={navbarItems }
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}/>


        <div className="items-center  gap-4 hidden lg:flex"> 
            {/* flex for larg screens  */}
        {navbarItems.map((item) =>(
            <NavbarItem
            key={item.href}
            href = {item.href}
            isActive = {pathname === item.href}
        >
            {item.children}
        </NavbarItem>

        ))}
        </div>
        
            <div className="hidden lg:flex h-20">
                <Button  asChild variant="secondary"
                    className= "border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
                    
                ><Link href="/sign-in">Log in</Link></Button>
                <Button asChild variant="secondary"
                    className= "border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400  hover:text-black transition-colors text-lg"
                    ><Link href="/sign-up">Start Selling</Link></Button>
            </div>
            <div className="flex lg:hidden items-center justify-center">
                <Button variant="ghost" className="size-12 border-transparent bg-white"
                onClick={() => setIsSidebarOpen(true)}
                >
                    <MenuIcon/>
                </Button>

            </div>
       </nav>

    )

}

export default Navbar;