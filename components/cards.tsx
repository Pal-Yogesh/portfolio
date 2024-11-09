'use client'
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function Cards() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "chat-app [building]",
        description:
            "chat room where users can chat with each other in real time, used socket.io, react, node.js, mongodb",
        link: "https://github.com/sankhadip-roy/chat-app",
    },
    {
        title: "walkman [building]",
        description:
            "a mobile app where users can play locally downloaded songs & features a retro UI design, used react-native, expo",
        link: "https://expo.dev/accounts/sankhadiproy/projects/walkman/builds/9768b449-7b42-4f9b-8851-63b728640b62",
    },
    {
        title: "mind-palace",
        description:
            "note-storing app serves as a database to store random thoughts, ideas, and information, used next.js, shadcn/ui, typescript, mongodb",
        link: "https://mind-palace.sankhadiproy.me",
    },
    {
        title: "commerce",
        description:
            "an eBay-like e-commerce auction site, used django, sqlite, docker",
        link: "https://sankha-commerce-serveit.codecult.tech",
    },
    {
        title: "leaf-disease-detection",
        description:
            "machine learning project to detect leaf disease using image processing, used next.js, flask, ml, docker",
        link: "https://leaf-orpin.vercel.app",
    },
    {
        title: "cv-application",
        description:
            "a simple cv application that allows users to input their personal information and display it in a cv format, used react, tailwind",
        link: "https://cv-application-ruddy-phi.vercel.app",
    },
];
