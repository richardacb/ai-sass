'use client'

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { cn } from '../lib/utils';
import { LayoutDashboard, MessageSquare, ImageIcon, VideoIcon, Music, Code, Settings } from "lucide-react"
import { usePathname } from "next/navigation"
import FreeCounter from "./FreeCounter";
const montserrat = Montserrat({ weight: "600", subsets: ["latin"] })

interface SidebarProps {
    apiLimitCount: number;
    isPro: boolean;
}

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500"
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500"
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-500"
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-orange-700"
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/music",
        color: "text-emerald-500"
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/code",
        color: "text-green-500"
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
    },
]

const Sidebar: React.FC<SidebarProps> = ({ apiLimitCount = 0, isPro = false }) => {

    const pathname = usePathname()

    return (
        <div className="flex py-4 space-y-4 flex-col h-full bg-[#111827] text-white">
            <div className="flex-1 px-3 py-2">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image
                            fill
                            alt="logo"
                            src="/logo.png"
                        />
                    </div>
                    <h1 className={cn("text-2xl font-bold", montserrat.className)}>
                        Genius
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className={cn(
                                "flex justify-start w-full p-3 text-sm font-medium transition rounded-lg cursor-pointer group hover:text-white hover:bg-white/10",
                                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <FreeCounter
                apiLimitCount={apiLimitCount}
                isPro={isPro}
            />
        </div>
    );
}

export default Sidebar;
