//@ts-ignore

"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import dynamic from "next/dynamic";
import "@/components/ScrollAnimation.css";
import Link from "next/link";

export default function ScrollAnimation() {
  const [scrollTriggerLoaded, setScrollTriggerLoaded] = useState(false);
  const boxRef = useRef(null);
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    let ScrollTrigger;

    const loadScrollTrigger = async () => {
      if (typeof window !== "undefined") {
        ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
        gsap.registerPlugin(ScrollTrigger);
        setScrollTriggerLoaded(true);
      }
    };

    loadScrollTrigger();

    if (scrollTriggerLoaded) {
      const animation = gsap.to(mainRef.current, {
        rotation: -120,
        duration: 1,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
          pin: true,
        },
      });

      return () => {
        animation.scrollTrigger?.kill();
        animation.kill();
      };
    }
  }, [scrollTriggerLoaded]);

  return (
    <>
      <div
        ref={boxRef}
        className="some h-[85vh] flex justify-center w-full relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, rgba(2, 71, 142, 1) -250%, rgba(0, 0, 0, 1) 100%)",
        }}
      >


        <div className="h-[100px]  flex justify-center items-center pt-10 md:pt-0  text-center md:text-start  md:pl-24 w-full">
          <p className=" text-center  md:text-[40px]   pt-8 md:pt-4 text-4xl font-bold text-[#4b4c4f]  dark:text-neutral-400">
            Projects
          </p>
        </div>
        <div
          ref={mainRef}
          className={`h-[1440px] w-[1440px]  border  flex gap-8 justify-center items-center absolute rounded-[50%] card top-[50%] [&>div]:relative [&>div]:top-[-50%] [&>div]:left-[41%]`}
        >
          <div className="card1 bg-[#1a1a1a] w-[300px] h-[350px] rounded-2xl flex flex-col items-center justify-center shadow-xl">
            {" "}
            <img
              className="w-[200px] h-[200px]"
              src="/assets/Boardinglogo.svg"
              alt="project"
            />{" "}
            <Link href="https://www.boardingadmissions.com/" target="_blank">
              <button className="w-[220px] mt-5 text-[1rem] text-neutral-500 dark:text-neutral-400 h-[50px] rounded-lg bg-[#1a1a1a]">
                BOARDING ADMISSIONS
              </button>
            </Link>
          </div>
          <div className="card2 bg-[#1a1a1a] w-[300px] h-[350px] rounded-2xl flex flex-col items-center justify-center shadow-xl">
            {" "}
            <img
              className="w-[200px] h-[200px]"
              src="/assets/goEdulogo.svg"
              alt="project"
            />{" "}
            <Link href="https://www.goedu.in/" target="_blank">
              <button className="w-[220px] mt-5 text-[1rem] text-neutral-500 dark:text-neutral-400 h-[50px] rounded-lg bg-[#1a1a1a]">
                GOEDU
              </button>
            </Link>
          </div>
          <div className="card3 bg-[#1a1a1a] w-[300px] h-[350px] rounded-2xl flex flex-col items-center justify-center shadow-xl">
            {" "}
            <img
              className="w-[200px] h-[200px]"
              src="/assets/chat-4-512.png"
              alt="project"
            />{" "}
            <Link href="https://chat-web-2rrk.onrender.com" target="_blank">
              {" "}
              <button className="w-[220px] mt-5 text-[1rem] text-neutral-500 dark:text-neutral-400 h-[50px] rounded-lg bg-[#1a1a1a]">
                CHAT APP
              </button>
            </Link>
          </div>
          <div className="card4 bg-[#1a1a1a] w-[300px] h-[350px] rounded-2xl flex flex-col items-center justify-center shadow-xl">
            {" "}
            <img
              className="w-[200px] h-[200px]"
              src="/assets/icons8-github.svg"
              alt="project"
            />{" "}
            <Link href="https://github-finder-next-js.vercel.app/" target="_blank">
              <button className="w-[220px] mt-5 text-[1rem] text-neutral-500 dark:text-neutral-400 h-[50px] rounded-lg bg-[#1a1a1a]">
                GITHUB USER FINDER
              </button>
            </Link>
          </div>
          <div className="card5 bg-[#1a1a1a] w-[300px] h-[350px] rounded-2xl flex flex-col items-center justify-center shadow-xl">
            {" "}
            <img
              className="w-[200px] h-[200px]"
              src="/assets/gamepedia.png"
              alt="project"
            />{" "}
            <Link href="https://pal-yogesh.github.io/Game-Pedia/" target="_blank">
              <button className="w-[230px] mt-5 text-[1rem] text-neutral-500 dark:text-neutral-400 h-[50px] rounded-lg bg-[#1a1a1a]">
                GAME PEDIA
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
