'use client'
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconBrandLinkedin,
    IconBrandGmail,
    IconHome,
    IconTerminal2,
    IconBrandLeetcode,
    IconBrandInstagram
} from "@tabler/icons-react";
import { usePathname } from 'next/navigation';

export function Dock() {
    const pathname = usePathname();

    const links = [
        {
            title: "home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/",
            hideOn: ['/']
        },
        {
            title: "projects",
            icon: (
                <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/allprojects",
            hideOn: ['/allprojects']
        },
        {
            title: "leetcode",
            icon: (
                <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://leetcode.com/u/Yogeshpal_18/",
        },
        {
            title: "github",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/Pal-Yogesh",
        },
        {
            title: "x",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://x.com/Yogesh_18_Pal",
        },
        {
            title: "linkedin",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/yogesh-pal-7118a023b/",
        },
        {
            title: "mail",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.instagram.com/yogeshpal1/",
        },
        {
            title: "mail",
            icon: (
                <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "mailto:yogeshpal5049@gmail.com",
        },
    ];

    const filteredLinks = links.filter(link => !link.hideOn?.includes(pathname));

    return (
        <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center w-full pb-8">
            <FloatingDock
                items={filteredLinks}
            />
        </div>
    );
}
