import "@/app/admin/globals.css"

import NavItem from "../ui/admin/nav/nav-item"


export default function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body>

                <header className="p-4 shadow-lg flex gap-1">
                    <svg className="w-6 h-6 text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"/>
                    </svg>

                    <h1>Routine Planner</h1>
                </header>
                <div className="flex">

                    <aside className="p-4 shadow-lg">
                        <nav className=" ">
                    
                        <ul className="flex flex-col gap-2">
                            <NavItem 
                                url="/admin/" 
                                label="Dashboard" 
                                icon={
                                    <svg className="w-6 h-6 text-neutral-400 group-hover:text-black transition-all" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
                                    </svg>
                                }
                            />
                             

                             <NavItem 
                                url="/admin/planner" 
                                label="Daily Planner" 
                                icon={
                                    <svg className="w-6 h-6 text-neutral-400 group-hover:text-black transition-all" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
                                    </svg>
                                }
                            />

                             <NavItem 
                                url="/admin/meal-planner" 
                                label="Meal Planner" 
                                icon={
                                    <svg className="w-6 h-6 text-neutral-400 group-hover:text-black transition-all" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" d="M18.011 13H20c-.367 2.5551-2.32 4.6825-4.9766 5.6162V20H8.97661v-1.3838C6.31996 17.6825 4.36697 15.5551 4 13h14.011Zm0 0c1.0995-.0059 1.989-.8991 1.989-2 0-.8637-.5475-1.59948-1.3143-1.87934M18.011 13H18m0-3.99997c.2409 0 .4718.04258.6857.12063m0 0c.8367-1.0335.7533-2.67022-.2802-3.50694-1.0335-.83672-2.5496-.6772-3.3864.35631-.293-1.50236-1.7485-2.15377-3.2509-1.8607-1.5023.29308-2.48263 1.74856-2.18956 3.25092C8.9805 6.17263 7.6182 5.26418 6.15462 6.00131 4.967 6.59945 4.45094 8.19239 5.04909 9.38002m0 0C4.37083 9.66467 4 10.3357 4 11.1174 4 12.1571 4.84288 13 5.88263 13m-.83354-3.61998c.2866-.12029 1.09613-.40074 2.04494.3418m5.27497-.89091c1.0047-.4589 2.1913-.01641 2.6502.98832"/>
                                    </svg>
                                }
                            />
                            <NavItem 
                                url="/admin/bills/" 
                                label="Budget & Bills" 
                                icon={
                                    <svg className="w-6 h-6 text-neutral-400 group-hover:text-black transition-all" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                                    </svg>
                                }
                            />

                        </ul>
                    </nav>
                    </aside>

                    <main className="container relative h-[calc(100vh-56px)] flex-1 p-14 bg-secondary overflow-auto">
                        {children}
                    </main>

                </div>               
            </body>
        </html>
    )
}