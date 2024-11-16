"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import 'swiper/css/effect-cards';

import "swiper/css/pagination";
import "./certificate.css"
import Image from "next/image";
import Link from "next/link";

interface Certificate {
  imageUrl: string;
}

const certificates: Certificate[] = [
  { imageUrl: "/assets/flipkartcertificate.jpg" },
  { imageUrl: "/assets/python.png" },
  { imageUrl: "/assets/cybersecurity.jpeg" },
  { imageUrl: "/assets/madras.png" },
  { imageUrl: "/assets/devtown.jpeg" },
  { imageUrl: "/assets/jovac.png" },
  { imageUrl: "/assets/Nexus Byte.jpg" },
  { imageUrl: "/assets/digital360.png" },
  { imageUrl: "/assets/techno hacks.png" },
  { imageUrl: "/assets/shapemyskill.png" },
];

export function AllCertificate() {
  return (


    <>
      <div className="hidden md:block">

        <div className="flex flex-col items-center ">
          <h2 className="text-4xl font-bold text-[#4b4c4f] mb-6">Certificates</h2>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow]}
            className="mySwiper"
          >
            {certificates.map((cert, index) => (
              <SwiperSlide key={index} className="bg-cover">
                <img

                  src={cert.imageUrl}
                  alt="Certificate"
                  className="rounded-lg  object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex flex-col justify-start items-start overflow-hidden pt-10  px-6 md:px-8 lg:px-10"
          style={{
            background: "linear-gradient(to bottom, rgba(2, 71, 142, 1) -180%, rgba(0, 0, 0, 1) 100%)",
          }}
        >
          {/* <div> */}

          <div className="text-4xl font-bold text-[#4b4c4f] mx-auto">Certificates</div>
          {/* </div> */}
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            spaceBetween={4}
            breakpoints={{
              320: {
                slidesPerView: 1,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {certificates.map((cert, index) => (
              <SwiperSlide 
              style={{width:"220px", height:"280px"}}
              key={index} className="flex flex-col items-center w-[200px] border border-white shadow-lg rounded-2xl">
                <div
                  className="w-full  rounded-b-2xl flex items-center justify-center bg-neutral-800"
                  style={{ boxShadow: "0px 7px 6px 0px #0C263F40" }}
                >
                  <Image
                    src={cert.imageUrl}
                    alt="certificate"
                    width={1000}
                    height={1000}
                    className="object-cover p-1 w-[220px] h-[280px] rounded-2xl"
                  />
                </div>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
