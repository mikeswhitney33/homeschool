"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { pageLinkInfo } from "@/assets/constants";

function Navlink({label, link, active}: {label: string, link: string, active: boolean}) {
    return <Link className={`
            ${active ? "text-blue-600" : "text-gray-700 dark:text-gray-300"}
            hover:text-blue-600
        `} href={link}>
        {label}
    </Link>
}


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    return (
        <>
            <div className="hidden md:grid md:grid-cols-[1fr_auto] space-x-6 p-4">
                <div></div>
                <div className={`flex flex-wrap gap-4`}>
                    {pageLinkInfo.map(({label, link}) => 
                        <Navlink key={label} label={label} link={link} active={link === pathname}/>
                    )}
                </div>
            </div>
            <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {
                    isOpen 
                    ? "Close Menu"
                    : "Open Menu"
                }
            </div>
            {
                isOpen && (
                    <div className="md:hidden grid gap-4">
                        {pageLinkInfo.map(({label, link}) => 
                            <Navlink key={label} label={label} link={link} active={link === pathname}/>
                        )}
                    </div>
                )
            }

        </>

    )
}
