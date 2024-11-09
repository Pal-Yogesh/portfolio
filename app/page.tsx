

// import { Cards } from "../components/cards";

import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from "@/components/ui/flip-words";
// import { ExpandableCard } from "@/components/cards2";
// import { ThreeDCard } from "@/components/cards3";
import { Techstacks } from "@/components/techstacks";
import Link from "next/link";
import IconCloud from "@/components/ui/icon-cloud";
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import { ExperienceTimeline } from "@/components/experiencetimeline";
import { AllCertificate } from "@/components/certificate";
import GetInTouch from "@/components/getintouch";

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





export default function Home() {
  const words = ["Web Developer", "Front-End Developer", "open to work"];
  return (
    <>

      <div className="relative min-h-screen pb-52 ">
        <BackgroundLines >
          <div className="flex w-full h-[100vh]  bg-gradient-to-bl from-[#1a1a1a] to-[#000000]">

            <div className="w-[50%] ">
              <div className="flex justify-center items-center">

                <Image
                  src="/assets/yogeshlogo.jpeg"
                  alt="hero"
                  width={200}
                  height={100} />
              </div>

              <FlipWords words={words} />
            </div>
            <div className="w-[50%] ">
              <div className="w-[300px] h-[220px] hidden md:block">

                <IconCloud iconSlugs={slugs} />
              </div>
            </div>
          </div>



          <div className="w-full">
            <ScrollAnimation />
          </div>


          <div className="">
            <ExperienceTimeline />
          </div>
          <div className="z-0 relative bg-gradient-to-bl from-[#1a1a1a] to-[#000000]">


            <div className="flex justify-center items-center p-10">
              <Link href="/allprojects">
                <button type="submit" className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-extrabold text-slate-400 transition-colors focus:outline-none focus:ring-0 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">all projects here &rarr;
                </button>
              </Link>
            </div>




            <span className="flex justify-center items-center text-4xl font-bold text-[#4b4c4f]">Tech Stacks</span><br />
            <Techstacks />
            <br />












          </div>
          <div className=" md:h-[60vh] h-[30vh] bg-gradient-to-bl from-[#1a1a1a] to-[#000000]">
            <AllCertificate />
          </div>

        </BackgroundLines >
      </div >
      <div className="mb-20 bg-[#1a1a1a]">
        <GetInTouch />
      </div>
    </>
  );
}
