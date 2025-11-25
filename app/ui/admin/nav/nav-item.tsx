import Link from "next/link"
import React from "react"


export default function NavItem({
    label, url, icon
}: {
    label : string,
    url : string,
    icon: React.ReactNode
}){
    return (
        <li className="p-2 pr-4 bg-neutral-200 rounded group hover:text-black">
            <Link href={url} className="flex gap-2 text-neutral-500 transition-all group-hover:text-black flex-row items-center flex-nowrap text-sm">{icon} {label}</Link>
        </li>

    )
}