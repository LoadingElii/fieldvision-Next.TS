"use client";
import clsx from "clsx";
import { redirect, usePathname } from "next/navigation";

const links = [
    { name: "Home", href: "/dashboard/home"},
    { name: "Games", href: "/dashboard/games"},
    { name: "Account", href: "/dashboard/account"},
    { name: "Logout", href: "/login"},
]

export default function Navlinks() {
    const pathname = usePathname();

    return (
     <div className="flex justify-around">
          {links.map((link) => {
            return (
              <button
                key={link.name}
                onClick={() => redirect(link.href)}
                className={clsx(
                "h-20 text-white hover:text-white hover:opacity-50" , 
               { "text-blue-400": pathname === link.href, },
              )}
            >
             <p className="">{link.name}</p>  
           </button> 
           );
           })}
     </div>
    )
}