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
        description: "At Boarding Admissions, we excel in preparing students for entrance exams to top boarding schools across India. With over 8 years of experience and a 90% success rate, our specialized courses are meticulously crafted to meet elite institutions demands, ensuring thorough preparation and deep insights.",
        stack: ["/assets/next-js.svg", "/assets/tailwind.png", "/assets/firebase-icon.svg", "/assets/emailjs.svg"],
        liveLink: "https://www.boardingadmissions.com/",
    },
    {
        name: "Goedu",
        description: "Go Edu, India's counseling portal, revolutionizes college admissions with personalized guidance and expert support. Our AI-driven platform ensures students find their perfect college match effortlessly",
        stack: ["/assets/next-js.svg", "/assets/tailwind.png", "/assets/firebase-icon.svg", "/assets/emailjs.svg"],
        liveLink: "https://go-edu-pvfa.vercel.app/",
    },
    {
        name: "Prashil Rawat Portfolio",
        description: "A professional portfolio showcasing client projects, built with Vite.js and Tailwind for optimized performance and a modern design aesthetic.",
        stack: ["/assets/vitejs.png", "/assets/tailwind.png"],
        liveLink: "https://prashilrawat.in/",
    },
    {
        name: "Mayank Gaur Portfolio",
        description: "A professional portfolio, built with Next.js for optimized performance and Tailwind CSS for a modern, responsive design. The integration of EmailJS ensures seamless communication through a user-friendly contact form.",
        stack: ["/assets/next-js.svg", "/assets/tailwind.png","/assets/emailjs.svg"],
        liveLink: "https://mayank-portfolio-jet.vercel.app/",
    },
];
const selfProjects: Project[] = [

    {
        name: "Online Code Compiler",
        description: "An advanced online code compiler offering a full suite of features for developers. This tool allows users to write, compile, and execute code in real-time, with options to save, download, and delete code snippets directly from a personalized dashboard. Users can manage their projects, review past code, user-friendly interface styled with Tailwind CSS. This project demonstrates a powerful, full-stack development experience with Prisma and PostgreSQL.",
        stack: ["/assets/typescript.svg", "/assets/tailwind.png", "/assets/nodejs.png", "/assets/express.png", "/assets/postgresql-icon.svg", "/assets/prisma-3.svg"],
        liveLink: "https://codecompiler.yogeshpal.site/",
        githubLink: "https://github.com/Pal-Yogesh/onlinecodecompiler"
    },

    {
        name: "Gemini Chat AI",
        description: "An interactive AI-powered chat application built with Vite and styled using Tailwind CSS, leveraging the Gemini API for intelligent and responsive conversation capabilities. This app provides users with a seamless chat experience, simulating natural and informative dialogue. Ideal for exploring AI interactions, it demonstrates effective use of API integration in a modern, responsive web app.",
        stack: ["/assets/vitejs.png", "/assets/tailwind.png"],
        liveLink: "https://gemini-chat-ai-dun.vercel.app/",
        githubLink: "https://github.com/Pal-Yogesh/gemini-chat-ai"
    },
    {
        name: "Chat App",
        description: "This is a real-time chat website that allows users to connect with each other in real-time,  Users can Sign Up, Login and Logout using JWT, Utilizing MongoDB as the database for storing chat messages, user profiles, and other application data.",
        stack: ["/assets/react.png", "/assets/tailwind.png", "/assets/nodejs.png", "/assets/express.png", "/assets/mongodb.png", "/assets/socketio.svg"],
        liveLink: "https://chat-web-2rrk.onrender.com/login",
        githubLink: "https://github.com/Pal-Yogesh/chat-app/tree/master"
    },
    {
        name: "Simple Web Page",
        description: "A simple yet interactive web page developed with Angular 18 using standalone components and styled with SASS. This project features a real-time chat room where users can communicate seamlessly. Additionally, it includes an admin panel for managing courses, allowing authorized users to add and delete course listings directly from the interface. This project showcases Angular latest standalone component capabilities alongside real-time data handling.",
        stack: ["/assets/angular-icon.svg", "/assets/sass-1.svg"],
        liveLink: "https://first-angular-project-27560.web.app",
    },
    {
        name: "Github User Finder",
        description: "A GitHub User Finder application built with Next.js and styled with Tailwind CSS, allowing users to quickly search for GitHub profiles by entering a username. This tool fetches and displays user information, including repositories and contributions, and provides a direct link to the user's GitHub profile. Ideal for quickly navigating and exploring GitHub users' public profiles, it showcases efficient API usage and responsive design.",
        stack: ["/assets/next-js.svg", "/assets/tailwind.png"],
        liveLink: "https://github-finder-next-js.vercel.app/",
        githubLink: "https://github.com/Pal-Yogesh/Github-Finder-NextJS"
    },
    {
        name: "Game Pedia",
        description: "You may utilise a simple react app while playing some of the games, implemented by using HTML CSS and JAVASCRIPT.",
        stack: ["/assets/html-1.svg", "/assets/css-icon.svg", "/assets/js.png"],
        liveLink: "https://github.com/Pal-Yogesh/Game-Pedia",
        githubLink: "https://pal-yogesh.github.io/Game-Pedia/"
    },

    {
        name: "Responsive Template",
        description: "This template adapts to various screen sizes, ensuring a smooth user experience on both desktop and mobile devices. It's a great starting point for building personal websites or small business sites, offering a clean design and easy customization options. Explore the live demo or check out the GitHub repository to see the code.",
        stack: ["/assets/html-1.svg", "/assets/css-icon.svg", "/assets/js.png"],
        liveLink: "https://pal-yogesh.github.io/Practical-11/",
        githubLink: "https://github.com/Pal-Yogesh/Practical-11"
    },

    {
        name: "Resume Builder",
        description: "A streamlined and user-friendly Resume Builder application, developed using React and styled with Tailwind CSS, designed to help users create professional resumes effortlessly. This app provides customizable sections for personal information, experience, education, and skills, allowing users to generate a polished resume that can be easily downloaded.",
        stack: ["/assets/react-2.svg", "/assets/tailwind.png"],
        liveLink: "https://pal-yogesh.github.io/resume-builder/",
        githubLink: "https://github.com/Pal-Yogesh/resume-builder/tree/gh-pages"
    },
    {
        name: "To Do App",
        description: "A straightforward and efficient To-Do App built with React and styled using Tailwind CSS, designed to help users manage and track daily tasks. This app utilizes local storage to save tasks, ensuring that todos are preserved even after the browser is closed or refreshed. With a clean interface and essential task management features, perfect for staying organized and keeping track of daily responsibilities.",
        stack: ["/assets/react-2.svg", "/assets/tailwind.png"],
        liveLink: "https://pal-yogesh.github.io/To-Do-App/",
        githubLink: "https://github.com/Pal-Yogesh/To-Do-App/tree/gh-pages"
    },
   
    {
        name: "Old Portfolio",
        description: "",
        stack: ["/assets/html-1.svg", "/assets/css-icon.svg", "/assets/js.png"],
        liveLink: "https://pal-yogesh.github.io/yogesh_portfolio/",
        githubLink: "https://github.com/Pal-Yogesh/yogesh_portfolio"
    },

    {
        name: "more",
        description: "there are few more, check on github",
        stack: ["/assets/icons8-github.svg"],
        githubLink: "https://github.com/Pal-Yogesh"
    }];

const pythonMLProjects: Project[] = [
    {
        name: "Spine Disease Detection Using Machine Learning",
        description: "A machine learning model designed to analyze medical images and detect spinal diseases. Uses advanced image processing techniques to assist healthcare professionals in diagnosis and improve patient outcomes.",
        stack: ["/assets/python-5.svg", "/assets/numpy-1.svg"],
        githubLink: "https://github.com/Pal-Yogesh/Spine-Disease-Detection-Using-Machine-Learning"
    },
    {
        name: "Django E-Commerce",
        description: "An e-commerce platform built with Django, offering features like product listings, user authentication, and a shopping cart. Provides a responsive and secure online shopping experience for users.",
        stack: ["/assets/django.svg", "/assets/python-5.svg"],
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
        <div
        >
            <h2 className="text-2xl font-semibold text-center text-[#4b4c4f]  dark:text-neutral-400 mt-8 mb-4">{heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pb-16">
                {projects.map((project, index) => (
                    <Card key={index} className="bg-gradient-to-bl from-[#1a1a1a] to-[#000000] border-gray-700 shadow-md flex flex-col">
                        <CardHeader className="p-4">
                            <CardTitle className="text-xl text-[#4b4c4f]  dark:text-neutral-400">{project.name}</CardTitle>
                            <CardDescription className="text-[#4b4c4f]  dark:text-neutral-400 text-sm">{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 flex-grow">
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech, techIndex) => (
                                    <img src={tech} key={techIndex} alt="Tech stack logo" className="h-8 w-8 rounded" />
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
        <div className="min-h-screen  p-4 sm:p-8 bg-[url('/assets/homebg.svg')]  "
      
        >
            <h1 className="p-5 pb-10 text-3xl sm:text-4xl font-bold mb-6 text-center text-white">All Projects</h1>
            <ProjectList heading="Digital 360" projects={digital360Projects} />
            <ProjectList heading="Self Projects" projects={selfProjects} />
            <ProjectList heading="Python Machine Learning" projects={pythonMLProjects} />

        </div>
    );
}
