// import type { Metadata } from "next";
// import { ExternalLink, Github } from "lucide-react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// interface Project {
//     name: string
//     description: string
//     stack: string[]
//     liveLink?: string
//     githubLink: string
// }

// const projects: Project[] = [
//     
//     
// {
//     name: "Github User Finder",
//     description: "This note-storing app serves as a database to store random thoughts, ideas, and information, ensuring nothing is forgotten and can be looked up in constant time. The name is inspired by Sherlock Holmes' mind palace technique",
//     stack: ["next.js", "shadcn/ui", "typescript", "mongodb"],
//     liveLink: "https://github-finder-next-js.vercel.app/",
//     githubLink: "https://github.com/Pal-Yogesh/Github-Finder-NextJS"
// },
// {
//     name: "game pedia",
//     description: "an eBay-like e-commerce auction site, deployed in homeserver",
//     stack: ["django", "sqlite", "docker", "self-hosted"],
//     liveLink: "https://github.com/Pal-Yogesh/Game-Pedia",
//     githubLink: "https://pal-yogesh.github.io/Game-Pedia/"
// },

// {
//     name: "responsive template",
//     description: "Third iteration of my personal website built with aceternity ui",
//     stack: ["next.js 14", "aceternity-ui", "shadcn/ui", "v0dev"],
//     liveLink: "https://pal-yogesh.github.io/Practical-11/",
//     githubLink: "https://github.com/Pal-Yogesh/Practical-11"
// },
// {
//     name: "cv-application",
//     description: "a simple cv application that allows users to input their personal information and display it in a cv format",
//     stack: ["react", "tailwind"],
//     liveLink: "https://cv-application-ruddy-phi.vercel.app",
//     githubLink: "https://github.com/sankhadip-roy/cv-application"
// },
// {
//     name: "resume Builder",
//     description: "a wikipedia-like online encyclopedia",
//     stack: ["django", "docker"],
//     liveLink: "https://pal-yogesh.github.io/resume-builder/",
//     githubLink: "https://github.com/Pal-Yogesh/resume-builder/tree/gh-pages"
// },
// {
//     name: "to-do",
//     description: "simple application to track daily todos",
//     stack: ["mongodb", "express.js", "react", "node.js", "tailwind"],
//     liveLink: "https://pal-yogesh.github.io/To-Do-App/",
//     githubLink: "https://github.com/Pal-Yogesh/To-Do-App/tree/gh-pages"
// },
// {
//     name: "Online Code Compiler",
//     description: "indigenous crypto currency investigation tool",
//     stack: ["APIs", "django", "docker"],

//     githubLink: "https://github.com/Pal-Yogesh/onlinecodecompiler"
// },

// {
//     name: "Gemini Chat AI",
//     description: "calculator-web-app",
//     stack: ["react"],
//     liveLink: "https://gemini-chat-ai-dun.vercel.app/",
//     githubLink: "https://github.com/Pal-Yogesh/gemini-chat-ai"
// },
// {
//     name: "old portfolio",
//     description: "clone of google search, image search, advanced search",
//     stack: ["html", "css"],
//     liveLink: "https://pal-yogesh.github.io/yogesh_portfolio/",
//     githubLink: "https://github.com/Pal-Yogesh/yogesh_portfolio"
// },

// {
//     name: "more",
//     description: "there are few more, check on github",
//     stack: ["..."],
//     githubLink: "https://github.com/Pal-Yogesh"
// },
// ]

// export const metadata: Metadata = {
//     title: 'projects',
//     description: 'all projects made by yogesh pal',
//     icons: {
//         icon: '/favicons/favicon-projects.ico',
//     },
// };

// export default function PersonalProjects() {
//     return (
//         <div className="min-h-screen bg-black text-gray-100 p-4 sm:p-8">
//             <h1 className=" p-5 pb-10 text-3xl sm:text-4xl font-bold mb-6 text-center text-white">All Projects</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pb-16">
//                 {projects.map((project, index) => (
//                     <Card key={index} className="bg-gray-800 border-gray-700 shadow-md flex flex-col">
//                         <CardHeader className="p-4">
//                             <CardTitle className="text-xl text-white">{project.name}</CardTitle>
//                             <CardDescription className="text-gray-300 text-sm">{project.description}</CardDescription>
//                         </CardHeader>
//                         <CardContent className="p-4 pt-0 flex-grow">
//                             <div className="flex flex-wrap gap-2">
//                                 {project.stack.map((tech, techIndex) => (
//                                     <span key={techIndex} className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded">
//                                         {tech}
//                                     </span>
//                                 ))}
//                             </div>
//                         </CardContent>
//                         <CardFooter className="p-4 pt-0 flex flex-wrap gap-2 justify-start">
//                             {project.liveLink && (
//                                 <Button asChild variant="secondary" size="sm" className="bg-gray-200 text-gray-800 hover:bg-gray-300 flex-grow sm:flex-grow-0">
//                                     <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
//                                         <ExternalLink className="mr-2 h-4 w-4" />
//                                         live link
//                                     </Link>
//                                 </Button>
//                             )}
//                             <Button asChild variant="secondary" size="sm" className="bg-gray-200 text-gray-800 hover:bg-gray-300 flex-grow sm:flex-grow-0">
//                                 <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
//                                     <Github className="mr-2 h-4 w-4" />
//                                     gitHub
//                                 </Link>
//                             </Button>
//                         </CardFooter>
//                     </Card>
//                 ))}
//             </div>
//         </div>
//     )
// }



import type { Metadata } from "next";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
    name: string;
    description: string;
    stack: string[];
    liveLink?: string;
    githubLink?: string;
}

const digital360Projects: Project[] = [
    {
        name: "Boarding Admissions",
        description: "A mobile app inspired by Star-Lord's Walkman from Guardians of the Galaxy. This app allows users to play locally downloaded songs & features a retro UI design reminiscent of the classic Walkman",
        stack: ["Next.js", "Tailwind CSS", "Firebase", "Cloudinary", "Emailjs", "Gsap"],
        liveLink: "https://www.boardingadmissions.com/",

    },
    {
        name: "Goedu",
        description: "",
        stack: ["Next.js", "Tailwind CSS", "Firebase", "Cloudinary", "Emailjs", "Gsap"],
        liveLink: "https://go-edu-pvfa.vercel.app/",

    },
    {
        name: "Prashil Rawat Portfolio",
        description: "A client portfolio project",
        stack: ["React.js", "Tailwind CSS"],
        liveLink: "https://prashilrawat.in/",

    },
];

const selfProjects: Project[] = [
    {
        name: "chat-app",
        description: "Chat room where users can chat with each other in real-time",
        stack: ["socket.io", "React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
        liveLink: "https://chat-web-2rrk.onrender.com/login",
        githubLink: "https://github.com/Pal-Yogesh/chat-app/tree/master"
    },
    {
        name: "Simple CRUD App",
        description: "Chat room where users can chat with each other in real-time",
        stack: ["Angular", "SCSS"],
        liveLink: "https://first-angular-project-27560.web.app",
    },
    {
        name: "Github User Finder",
        description: "This note-storing app serves as a database to store random thoughts, ideas, and information, ensuring nothing is forgotten and can be looked up in constant time. The name is inspired by Sherlock Holmes' mind palace technique",
        stack: ["Next.js", "Tailwind CSS"],
        liveLink: "https://github-finder-next-js.vercel.app/",
        githubLink: "https://github.com/Pal-Yogesh/Github-Finder-NextJS"
    },
    {
        name: "game pedia",
        description: "an eBay-like e-commerce auction site, deployed in homeserver",
        stack: ["HTML", "CSS", "JS"],
        liveLink: "https://github.com/Pal-Yogesh/Game-Pedia",
        githubLink: "https://pal-yogesh.github.io/Game-Pedia/"
    },

    {
        name: "responsive template",
        description: "Third iteration of my personal website built with aceternity ui",
        stack: ["HTML", "CSS", "JS"],
        liveLink: "https://pal-yogesh.github.io/Practical-11/",
        githubLink: "https://github.com/Pal-Yogesh/Practical-11"
    },

    {
        name: "resume Builder",
        description: "a wikipedia-like online encyclopedia",
        stack: ["React.js", "Chakra UI", "CSS"],
        liveLink: "https://pal-yogesh.github.io/resume-builder/",
        githubLink: "https://github.com/Pal-Yogesh/resume-builder/tree/gh-pages"
    },
    {
        name: "to-do",
        description: "simple application to track daily todos",
        stack: ["React.js", "CSS"],
        liveLink: "https://pal-yogesh.github.io/To-Do-App/",
        githubLink: "https://github.com/Pal-Yogesh/To-Do-App/tree/gh-pages"
    },
    {
        name: "Online Code Compiler",
        description: "indigenous crypto currency investigation tool",
        stack: ["Typescript", "Next.js", "Shadcn ui", "Tailwind CSS", "Postgre SQL", "Prisma ORM", "Node.js", "Express.js", "Tanstack Query"],

        githubLink: "https://github.com/Pal-Yogesh/onlinecodecompiler"
    },

    {
        name: "Gemini Chat AI",
        description: "calculator-web-app",
        stack: ["React.js", "Tailwind CSS", "Gemini API"],
        liveLink: "https://gemini-chat-ai-dun.vercel.app/",
        githubLink: "https://github.com/Pal-Yogesh/gemini-chat-ai"
    },
    {
        name: "old portfolio",
        description: "clone of google search, image search, advanced search",
        stack: ["html", "css", "js"],
        liveLink: "https://pal-yogesh.github.io/yogesh_portfolio/",
        githubLink: "https://github.com/Pal-Yogesh/yogesh_portfolio"
    },

    {
        name: "more",
        description: "there are few more, check on github",
        stack: ["..."],
        githubLink: "https://github.com/Pal-Yogesh"
    }];

const pythonMLProjects: Project[] = [
    {
        name: "Spine Disease Detection Using Machine Learning",
        description: "Machine learning project to detect spine disease using image processing.",
        stack: ["html", "css", "js", "bootstrap"],
        githubLink: "https://github.com/Pal-Yogesh/Spine-Disease-Detection-Using-Machine-Learning"
    },
    {
        name: "Django E-Commerce",
        description: "An e-commerce website developed with Django.",
        stack: ["html", "css", "js", "django"],
        githubLink: "https://github.com/Pal-Yogesh/Django-E-Commerce"
    }
];
export const metadata: Metadata = {
    title: 'Projects',
    description: 'All projects made by Yogesh Pal',
    icons: {
        icon: '/favicons/favicon-projects.ico',
    },
};

function ProjectList({ heading, projects }: { heading: string; projects: Project[] }) {
    return (
        <div>
            <h2 className="text-2xl font-semibold text-center text-white mt-8 mb-4">{heading}</h2>
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
                                        Live Link
                                    </Link>
                                </Button>
                            )}
                            {project.githubLink && (
                                <Button asChild variant="secondary" size="sm" className="bg-gray-200 text-gray-800 hover:bg-gray-300 flex-grow sm:flex-grow-0">
                                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                        <Github className="mr-2 h-4 w-4" />
                                        GitHub
                                    </Link>
                                </Button>
                            )}
                        </CardFooter>

                    </Card>
                ))}
            </div>
        </div>
    );
}

export default function PersonalProjects() {
    return (
        <div className="min-h-screen bg-black text-gray-100 p-4 sm:p-8">
            <h1 className="p-5 pb-10 text-3xl sm:text-4xl font-bold mb-6 text-center text-white">All Projects</h1>
            <ProjectList heading="Digital 360" projects={digital360Projects} />
            <ProjectList heading="Self Projects" projects={selfProjects} />
            <ProjectList heading="Python Machine Learning" projects={pythonMLProjects} />
            
        </div>
    );
}
