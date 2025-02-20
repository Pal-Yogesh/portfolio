

// import { Cards } from "../components/cards";

// import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from "@/components/ui/flip-words";
// import { ExpandableCard } from "@/components/cards2";
// import { ThreeDCard } from "@/components/cards3";
import { Techstacks } from "@/components/techstacks";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import { ExperienceTimeline } from "@/components/experiencetimeline";
import { AllCertificate } from "@/components/certificate";
import GetInTouch from "@/components/getintouch";







export default function Home() {
  const words = ["<Full Stack Developer />", "<Web Developer />", "<Freelancer />"];
  return (
    <>

      <div className="relative min-h-screen pb-52 ">
        {/* <BackgroundLines > */}
        {/* <div
          className="flex w-full pb-24"
          style={{
            backgroundImage: "url('/assets/homebg.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        > */}

        <div
          className="flex w-full pb-10 md:pb-24 bg-[url('/assets/mobilehomebg.svg')] md:bg-[url('/assets/homebg.svg')] h-[100%] md:h-auto bg-cover bg-center"
        >


          <div className="w-full md:w-[50%] ">
            <div className="md:px-20 px-3 pt-3">

              <Image
                src="/assets/yogeshlogo.png"
                alt="hero"
                width={1000}
                height={1000} className="w-[100px] h-[100px]" />
            </div>

            <FlipWords words={words} />

            <div className="text-xl px-8 md:px-24 font-normal text-neutral-600 dark:text-neutral-300 pt-4 md:pt-8 text-justify">

              I&apos;m a skilled Front-end Developer specializing in Next.js, Tailwind CSS, and the MERN stack, focused on creating visually engaging, responsive user experiences. <br /> <br />
              Driven by a passion for innovation, I tackle complex technical challenges with creative, scalable solutions, staying up-to-date on industry trends to deliver modern and efficient web applications.
            </div>
            <div className="flex justify-center items-center mt-10  md:mt-12">

            <div className="flex justify-center items-center   cursor-pointer "

            >

              <a

                href="/assets/Yogesh_SWE_Resume.pdf"
                download
                className="inline-flex cursor-pointer  h-14 w-40 text-lg animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-extrabold text-slate-400 transition-colors focus:outline-none focus:ring-0 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">Resume
              </a>

              </div>
            </div>
          </div>
          <div className="w-[50%] hidden md:block ">

            <div className="flex justify-center items-center mt-32 ">


              <Image src="/assets/design.gif" unoptimized width={1000} height={1000} alt="gif" className="w-[750px] h-[550px] z-[9999]" />

              <div className="flex justify-center items-center mt-[350px] absolute ">


                <Image src="/assets/bottom.svg" width={1000} height={1000} alt="img" className="w-[550px] h-[200px]" />

              </div>
            </div>

          </div>
        </div>



        <div className="w-full">
          <ScrollAnimation />
        </div>


        <div className=""
          style={{
            background: "linear-gradient(to bottom, rgba(2, 71, 142, 1) -180%, rgba(0, 0, 0, 1) 100%)",
          }}
        >
          <ExperienceTimeline />
        </div>
        {/* <div className="z-0 relative bg-gradient-to-bl from-[#1a1a1a] to-[#000000]"> */}
        <div className="z-0 relative "
          style={{
            background: "linear-gradient(to bottom, rgba(2, 71, 142, 1) -180%, rgba(0, 0, 0, 1) 100%)",
          }}
        >


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
        <div className="md:pt-10 md:h-[60vh] h-[30vh]"
          style={{
            background: "linear-gradient(to bottom, rgba(2, 71, 142, 1) -170%, rgba(0, 0, 0, 1) 100%)",
          }}
        >
          <AllCertificate />
        </div>
        {/* <div className="md:pt-10 md:h-[60vh] h-[30vh] bg-gradient-to-bl from-[#1a1a1a] to-[#000000]">
          <AllCertificate />
        </div> */}

        {/* </BackgroundLines > */}
      </div >
      <div className="mb-20 bg-[#1a1a1a]">
        <GetInTouch />
      </div>
    </>
  );
}
