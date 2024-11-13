
"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import IconCloud from "@/components/ui/icon-cloud";


const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
const webdev_frontend = [
    {
        id: 1,
        name: "Html",
        designation: "webdev",
        image:
            "https://github.com/user-attachments/assets/aeb3edd4-9f9c-45ff-9910-c0454acd2064",
    },
    {
        id: 2,
        name: "CSS",
        designation: "webdev",
        image:
            "https://github.com/user-attachments/assets/3d7fd03e-d86f-4bf0-ab3d-1491f6df6bea",
    },
    {
        id: 3,
        name: "React",
        designation: "webdev",
        image:
            "https://github.com/user-attachments/assets/8f4ea6f7-582c-4076-9e89-3c5cbe845f67",
    },
    // {
    //     id: 4,
    //     name: "Vite",
    //     designation: "webdev",
    //     image:
    //         "https://github.com/user-attachments/assets/93c28ebe-66ba-4a17-95e8-76a9e5475be5",
    // },
    {
        id: 5,
        name: "Next.js",
        designation: "framework",
        image:
            "https://github.com/user-attachments/assets/beb1474c-11d6-4ef2-bb77-8bc7345dfaae",
    },
    {
        id: 6,
        name: "Tailwind",
        designation: "design",
        image:
            "https://github.com/user-attachments/assets/cf952c7a-72b1-4309-9ca7-c6fb3197063c",
    },
    {
        id: 7,
        name: "Bootstrap",
        designation: "design",
        image:
            "/assets/bootstrap.svg",
    },
    {
        id: 8,
        name: "shadcn/ui",
        designation: "design",
        image:
            "/assets/shadcn.png",
    },
    {
        id: 9,
        name: "Angular",
        designation: "Frontend",
        image:
            "/assets/angular-icon.svg",
    },


];

const webdev_backend = [
    {
        id: 1,
        name: "Next.js",
        designation: "framework",
        image:
            "https://github.com/user-attachments/assets/beb1474c-11d6-4ef2-bb77-8bc7345dfaae",
    },
    {
        id: 2,
        name: "Express.js",
        designation: "backend",
        image:
            "https://github.com/user-attachments/assets/119d41a3-6d7d-4eef-bf1d-ce0fa800bd5b",
    },
    {
        id: 3,
        name: "Node.js",
        designation: "backend",
        image:
            "https://github.com/user-attachments/assets/2574acf8-d05a-4d7e-9f5b-9103332f9d0d",
    },
    {
        id: 4,
        name: "mongoDB",
        designation: "database",
        image:
            "https://github.com/user-attachments/assets/53d0f079-5b89-450d-bcae-c46c7a7072ab",
    },
    {
        id: 5,
        name: "Firebase",
        designation: "database",
        image:
            "/assets/firebase-icon.svg",
    },
    // {
    //     id: 6,
    //     name: "django",
    //     designation: "backend",
    //     image:
    //         "https://github.com/user-attachments/assets/2d8411a8-2259-49c7-aa09-c0c734136839",
    // },
    // {
    //     id: 7,
    //     name: "flask",
    //     designation: "backend",
    //     image:
    //         "/assets/flask.png",
    // },
]

const languages = [
    // {
    //     id: 1,
    //     name: "C",
    //     designation: "language",
    //     image:
    //         "https://github.com/user-attachments/assets/df596ca0-0511-4af0-97d9-0563990f58c5",
    // },
    // {
    //     id: 2,
    //     name: "C++",
    //     designation: "language",
    //     image:
    //         "https://github.com/user-attachments/assets/f7a89f8e-c5f8-4fc5-8ed1-fbb8d75e7232",
    // },
    {
        id: 3,
        name: "Javascript",
        designation: "language",
        image:
            "https://github.com/user-attachments/assets/8782efe4-c6fd-4af1-b1d5-e7c849e72b29",
    },
    {
        id: 4,
        name: "Python",
        designation: "language",
        image:
            "/assets/faviconPython.png",
    },
    {
        id: 5,
        name: "Java",
        designation: "language",
        image:
            "/assets/java.svg",
    },
    {
        id: 6,
        name: "SQL",
        designation: "language",
        image:
            "/assets/sql.jpg",
    },
    // {
    //     id: 7,
    //     name: "Solidity",
    //     designation: "web-3 contract language",
    //     image:
    //         "/assets/solidity2.png",
    // },
];

const tools = [
    {
        id: 1,
        name: "Socket.IO",
        designation: "websocket library",
        image:
            "/assets/socketio.svg",
    },
    {
        id: 2,
        name: "git",
        designation: "tool",
        image:
            "/assets/git.png",
    },
    // {
    //     id: 3,
    //     name: "docker",
    //     designation: "tool",
    //     image:
    //         "/assets/docker.webp",
    // },
    {
        id: 4,
        name: "Cloudinary",
        designation: "Cloudinary",
        image:
            "/assets/cloudinary.svg",
    },
    {
        id: 5,
        name: "postman",
        designation: "tool",
        image:
            "/assets/postman.png",
    },
    {
        id: 6,
        name: "EmailJS",
        designation: "client-side tool",
        image:
            "/assets/emailjs.svg",
    },
    // {
    //     id: 5,
    //     name: "linux",
    //     designation: "os",
    //     image:
    //         "/assets/linux.png",
    // },
    // {
    //     id: 6,
    //     name: "AWS",
    //     designation: "amazon web services",
    //     image:
    //         "/assets/aws.png",
    // },
    // {
    //     id: 7,
    //     name: "gcp",
    //     designation: "google cloud platform",
    //     image:
    //         "/assets/gcp.png",
    // },

];

export function Techstacks() {
    return (
        <div>
            <div className="md:flex md:flex-row md:justify-evenly">
                <div>
                    <span className=" p-5 flex justify-center items-center text-xl font-bold text-[#4b4c4f]">webdev-frontend</span>
                    <div className="flex flex-wrap items-center justify-center mb-10 w-full">
                        <AnimatedTooltip items={webdev_frontend} />
                    </div>
                </div>
                <div>
                    <span className="p-5 flex justify-center items-center text-xl font-bold text-[#4b4c4f]">Webdev-Backend-Database</span>
                    <div className="flex flex-row items-center justify-center mb-10 w-full">
                        <AnimatedTooltip items={webdev_backend} />
                    </div>
                </div>
                <div>
                    <span className="p-5 flex justify-center items-center text-xl font-bold text-[#4b4c4f]">Languages</span>
                    <div className="flex flex-row items-center justify-center mb-10 w-full">
                        <AnimatedTooltip items={languages} />
                    </div>
                </div>
            </div>
            <div className="md:flex md:flex-row md:justify-evenly">
                <div>
                    <span className="p-5 flex justify-center items-center text-xl font-bold text-[#4b4c4f]">Tools</span>
                    <div className="flex flex-row items-center justify-center mb-10 w-full">
                        <AnimatedTooltip items={tools} />
                    </div>
                </div>
            </div>
            <div className="hidden  md:flex justify-center items-center pb-20">

                <div className="w-[400px] h-[340px] flex justify-center items-center">

                    <IconCloud iconSlugs={slugs} />
                </div>

            </div>
        </div>
    );
}