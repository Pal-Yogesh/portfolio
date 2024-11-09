import type { Metadata } from "next";
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Project {
    name: string
    description: string
    stack: string[]
    liveLink?: string
    githubLink: string
}

const projects: Project[] = [
    {
        name: "chat-app [building]",
        description: "chat room where users can chat with each other in real time",
        stack: ["socket.io", "react", "node.js", "mongodb"],
        githubLink: "https://github.com/sankhadip-roy/chat-app"
    },
    {
        name: "walkman [building]",
        description: "A mobile app inspired by Star-Lord's Walkman from Guardians of the Galaxy. This app allows users to play locally downloaded songs & features a retro UI design reminiscent of the classic Walkman",
        stack: ["app-dev", "react-native", "expo", "android", 'ios'],
        liveLink: "https://expo.dev/accounts/sankhadiproy/projects/walkman/builds/9768b449-7b42-4f9b-8851-63b728640b62",
        githubLink: "https://github.com/sankhadip-roy/walkman"
    },
    {
        name: "endoscopy-detection [building]",
        description: "ml based image processing project to identify abnormalities in endoscopy images",
        stack: ["cnn", "glcm", "gabor filter", "tensorflow"],
        githubLink: "https://github.com/codecult-org/endoscopy-detection"
    },
    {
        name: "mind-palace",
        description: "This note-storing app serves as a database to store random thoughts, ideas, and information, ensuring nothing is forgotten and can be looked up in constant time. The name is inspired by Sherlock Holmes' mind palace technique",
        stack: ["next.js", "shadcn/ui", "typescript", "mongodb"],
        liveLink: "https://mind-palace.sankhadiproy.me",
        githubLink: "https://github.com/sankhadip-roy/mind-palace"
    },
    {
        name: "commerce",
        description: "an eBay-like e-commerce auction site, deployed in homeserver",
        stack: ["django", "sqlite", "docker", "self-hosted"],
        liveLink: "https://sankha-commerce-serveit.codecult.tech",
        githubLink: "https://github.com/sankhadip-roy/commerce"
    },
    {
        name: "leaf-disease-detection",
        description: "machine learning project to detect leaf disease using image processing, backend deployed in homeserver",
        stack: ["next.js", "flask", "ml", "docker"],
        liveLink: "https://leaf-orpin.vercel.app",
        githubLink: "https://github.com/codecult-org"
    },
    {
        name: "portfolio-v3",
        description: "Third iteration of my personal website built with aceternity ui",
        stack: ["next.js 14", "aceternity-ui", "shadcn/ui", "v0dev"],
        liveLink: "https://sankhadiproy.me",
        githubLink: "https://github.com/sankhadip-roy/portfolio-v3"
    },
    {
        name: "cv-application",
        description: "a simple cv application that allows users to input their personal information and display it in a cv format",
        stack: ["react", "tailwind"],
        liveLink: "https://cv-application-ruddy-phi.vercel.app",
        githubLink: "https://github.com/sankhadip-roy/cv-application"
    },
    {
        name: "wiki",
        description: "a wikipedia-like online encyclopedia",
        stack: ["django", "docker"],
        liveLink: "https://wiki-sankha.onrender.com",
        githubLink: "https://github.com/sankhadip-roy/wiki"
    },
    {
        name: "to-do",
        description: "simple application to track daily todos",
        stack: ["mongodb", "express.js", "react", "node.js", "tailwind"],
        githubLink: "https://github.com/sankhadip-roy/to-do"
    },
    {
        name: "crypto-invesigation-tool",
        description: "indigenous crypto currency investigation tool",
        stack: ["APIs", "django", "docker"],
        liveLink: "https://sankha-crypto.onrender.com",
        githubLink: "https://github.com/sankhadip-roy/crypto-invesigation-tool"
    },
    {
        name: "tic-tac-toe",
        description: "tic-tac-toe-web-app",
        stack: ["react"],
        liveLink: "https://sankhadip-roy.github.io/tic-tac-toe",
        githubLink: "https://github.com/sankhadip-roy/tic-tac-toe"
    },
    {
        name: "calculator",
        description: "calculator-web-app",
        stack: ["react"],
        liveLink: "https://sankhadip-roy.github.io/calculator",
        githubLink: "https://github.com/sankhadip-roy/calculator"
    },
    {
        name: "google-search",
        description: "clone of google search, image search, advanced search",
        stack: ["html", "css"],
        liveLink: "https://sankhadip-roy.github.io/search",
        githubLink: "https://github.com/sankhadip-roy/search"
    },
    {
        name: "portfolio-v1-v2",
        description: "old portfolio websites",
        stack: ["html", "css", "js", "bootstrap"],
        liveLink: "https://sankhadip-roy.github.io/portfolio-v1-v2",
        githubLink: "https://github.com/sankhadip-roy/portfolio-v1-v2"
    },
    {
        name: "weather",
        description: "website for checking current information about weather",
        stack: ["html", "css", "js", "weather-api"],
        liveLink: "https://sankhadip-roy.github.io/weather-site",
        githubLink: "https://github.com/sankhadip-roy/weather-site"
    },
    {
        name: "more",
        description: "there are few more, check on github",
        stack: ["..."],
        githubLink: "https://github.com/sankhadip-roy"
    },
]

export const metadata: Metadata = {
    title: 'projects',
    description: 'all projects made by sankhadip roy',
    icons: {
        icon: '/favicons/favicon-projects.ico',
    },
};

export default function PersonalProjects() {
    return (
        <div className="min-h-screen bg-black text-gray-100 p-4 sm:p-8">
            <h1 className=" p-5 pb-10 text-3xl sm:text-4xl font-bold mb-6 text-center text-white">all coding projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pb-16">
                {projects.map((project, index) => (
                    <Card key={index} className="bg-gray-800 border-gray-700 shadow-md flex flex-col">
                        <CardHeader className="p-4">
                            <CardTitle className="text-xl text-white">{project.name}</CardTitle>
                            <CardDescription className="text-gray-300 text-sm">{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 flex-grow">
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech, techIndex) => (
                                    <span key={techIndex} className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex flex-wrap gap-2 justify-start">
                            {project.liveLink && (
                                <Button asChild variant="secondary" size="sm" className="bg-gray-200 text-gray-800 hover:bg-gray-300 flex-grow sm:flex-grow-0">
                                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        live link
                                    </Link>
                                </Button>
                            )}
                            <Button asChild variant="secondary" size="sm" className="bg-gray-200 text-gray-800 hover:bg-gray-300 flex-grow sm:flex-grow-0">
                                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                    <Github className="mr-2 h-4 w-4" />
                                    gitHub
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}