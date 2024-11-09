
// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import { Timeline } from "@/components/ui/timeline";
// import Modal from "@/components/ui/modal"; 
// import { div } from "framer-motion/client";


// interface ExperienceData {
//   title: string;
//   date: string;
//   description: string[];
//   techStack: string[];
//   certificate: string;
// }

// export function ExperienceTimeline() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

// const openModal = (certificateImage: string) => {
//   setSelectedCertificate(certificateImage);
//   setIsModalOpen(true);
// };

// const closeModal = () => {
//   setIsModalOpen(false);
//   setSelectedCertificate(null);
// };

//   const data: ExperienceData[] = [
//     {
//       title: "Digital 360",
//       date: "June 2024 - Present",
//       description: [
//         "Developed and launched Aceternity UI and Aceternity UI Pro from scratch",
//         "Collaborated with cross-functional teams to optimize user experience",
//         "Implemented responsive designs to ensure cross-platform compatibility"
//       ],
//       techStack: ["/assets/aws.png", "/assets/react.png", "/assets/nextjs.jpeg"],
//       certificate: "/assets/aws.png",
//     },
//     {
//       title: "NexusByte",
//       date: "2021 - 2023",
//       description: [
//         "Created engaging templates for the companys digital products",
//         "Enhanced product design and development processes",
//         "Optimized frontend performance for improved loading times"
//       ],
//       techStack: ["/assets/aws.png", "/assets/html.png", "/assets/tailwind.png"],
//       certificate: "/assets/aws.png",
//     },
//     {
//       title: "TechnoHacks Edutech",
//       date: "2019 - 2021",
//       description: [
//         "Designed educational components and templates for learning platforms",
//         "Increased the efficiency of resource management tools",
//         "Enhanced accessibility for users with diverse backgrounds"
//       ],
//       techStack: ["/assets/aws.png", "/assets/css.png", "/assets/bootstrap.svg"],
//       certificate: "/assets/aws.png",
//     },
//   ];

//   return (
//     <div className="w-full">
//       <Timeline data={data.map((item, index) => ({
//         title: (
//           <>
//           <span 
// onClick={() => openModal(item.certificate)} 
// className="cursor-pointer hover:underline"
//           >
//             {item.title}
//           </span>
//           <br />
//           <span className="text-lg">{item.date}</span>
//           </>
//         ),
//         content: (
//           <div>

//             <ul className="list-disc ml-5 mt-2 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm">
//               {item.description.map((point, idx) => (
//                 <li key={idx}>{point}</li>
//               ))}
//             </ul>
//             <div className="flex space-x-10 mt-6">
//               {item.techStack.map((icon, idx) => (
//                 <Image
//                   key={idx}
//                   src={icon}
//                   alt="Tech stack icon"
//                   width={70}
//                   height={70}
//                   className="object-cover"
//                 />
//               ))}
//             </div>
//           </div>
//         ),
//       }))} />

// {/* Certificate Modal */}
// {isModalOpen && (
//   <Modal isOpen={isModalOpen} onClose={closeModal}>
//     <Image
//       src={selectedCertificate || ""}
//       alt="Certificate"
//       width={600}
//       height={400}
//       className="object-contain"
//     />
//   </Modal>
// )}
//     </div>
//   );
// }



// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import { Timeline } from "@/components/ui/timeline";
// import Modal from "@/components/ui/modal"; 
// import { div } from "framer-motion/client";



// interface ExperienceData {
//   title: string;
//   date: string;
//   description: string[];
//   techStack: string[];
//   certificate: string;
// }

// export function ExperienceTimeline() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

//   const openModal = (certificateImage: string) => {
//     setSelectedCertificate(certificateImage);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedCertificate(null);
//   };
//   const data: ExperienceData[] = [
//     {
//       title: "Digital 360",
//       content: (
//         <div>
//           <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
//             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//           </p>
//           <div className="grid grid-cols-2 gap-4">
//             <Image
//               src="/assets/aws.png"
//               alt="startup template"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-24 md:h-24 lg:h-24 w-24 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />

//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Early 2023",
//       content: (
//         <div>
//           <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//             I usually run out of copy, but when I see content this big, I try to
//             integrate lorem ipsum.
//           </p>
//           <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//             Lorem ipsum is for people who are too lazy to write copy. But we are
//             not. Here are some more example of beautiful designs I built.
//           </p>
//           <div className="grid grid-cols-2 gap-4">
//             <Image
//               src="/assets/aws.png"
//               alt="hero template"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />

//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Changelog",
//       content: (
//         <div>
//           <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
//             Deployed 5 new components on Aceternity today
//           </p>
//           <div className="mb-8">
//             <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
//               ✅ Card grid component
//             </div>
//             <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
//               ✅ Startup template Aceternity
//             </div>
//             <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
//               ✅ Random file upload lol
//             </div>
//             <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
//               ✅ Himesh Reshammiya Music CD
//             </div>
//             <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
//               ✅ Salman Bhai Fan Club registrations open
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-4">

//             <Image
//               src="/assets/aws.png"
//               alt="cards template"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//           </div>
//         </div>
//       ),
//     },
//   ];
//   return (
//     <div className="w-full h-auto">
//       <Timeline data={data} />
//     </div>
//   );
// }



// "use client"
// import Image from "next/image";
// import React, { useState } from "react";
// import { Timeline } from "@/components/ui/timeline";
// import Modal from "@/components/ui/modal"; 

// export function ExperienceTimeline() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedCertificate, setSelectedCertificate] = useState(null);


//   const openModal = (certificateImage) => {
//     setSelectedCertificate(certificateImage);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedCertificate(null);
//   };

//   const data = [
//     {
//       title: (
//         <>

//       <span
//       onClick={() => openModal(certificate)} 
//       className="cursor-pointer hover:underline"
//       >Digital 360</span>  
//       <br />
//       <span className="text-lg">June 2024 - Present</span>
//       </>
//       ),
//       content: (
//         <div className="mt-[10px]">

//           <ul>


//             <li className="list-disc text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
//               Worked on live projects, applying coding and debugging skills in a practical environment, which strengthened problem-solving abilities and adaptability.
//             </li>
// <li className="list-disc text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
//   Gained hands-on experience in web development through a structured internship with Digital 360,  working on distinct projects, Comparing schools and counseling for colleges completing various tasks and projects over a month.
// </li>
// <li className="list-disc text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
//   This involves me to coordinating with
//   team members, adhering to project timelines, multiple tasks simultaneously.
// </li>

// <li className="list-disc text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
//   Integrated secure payment functionality via PhonePe, facilitating smooth transactions for course purchases.

// </li>
//           </ul>
//           <div className="flex flex-wrap gap-4 mt-5">
//             <Image
//               src="/assets/html.png" alt="startup template"
//               width={40}
//               height={40}
//               className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
// <Image
//   src="/assets/css.png" alt="startup template"
//   width={40}
//   height={40}
//   className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
// />
// <Image
//   src="/assets/js.png" alt="startup template"
//   width={40}
//   height={40}
//   className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
// />
// <Image
//   src="/assets/tailwind.png" alt="startup template"
//   width={40}
//   height={40}
//   className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
// />
// <Image
//   src="/assets/vitejs.png" alt="startup template"
//   width={40}
//   height={40}
//   className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
// />
// <Image
//   src="/assets/react.png" alt="startup template"
//   width={40}
//   height={40}
//   className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
// />
// <Image
//   src="/assets/nextjs.jpeg" alt="startup template"
//   width={40}
//   height={40}
//   className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
// />
// <Image
//   src="/assets/git.png" alt="startup template"
//   width={40}
//   height={40}
//   className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
// />
// <Image
//   src="/assets/nodejs.png" alt="startup template"
//   width={40}
//   height={40}
//   className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
// />
// <Image
//   src="/assets/express.png" alt="startup template"
//   width={40}
//   height={40}
//   className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
// />
// <Image
//   src="/assets/mongodb.png" alt="startup template"
//   width={40}
//   height={40}
//   className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
// />
// <Image
//   src="/assets/postman.png" alt="startup template"
//   width={40}
//   height={40}
//   className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
// />
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: (
//         <>

//       <span
//       onClick={() => openModal(certificate)} 
//       className="cursor-pointer hover:underline"
//       >Nexus Byte</span>  
//       <br />
//       <span className="text-lg">February 2024</span>
//       </>
//       ),
//       content: (
//         <div className="mt-[10px]">

//           <ul>


// <li className="list-disc text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
//   This internship was certified by Nexus Byte, with recognition from the Micro, Small & Medium Enterprises (MSME) ministry, validating the quality and relevance of the training.
// </li>
// <li className="list-disc text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
//   Demonstrated commitment by completing the internship within a set timeframe, showcasing time management skills and self-discipline.
// </li>
// <li className="list-disc text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
//   Worked alongside other interns and mentors, developing teamwork and communication skills crucial for collaborative software development.
// </li>
//           </ul>
// <div className="flex flex-wrap mt-5 gap-4">
//   <Image
//     src="/assets/html.png" alt="hero template"
//     width={40}
//     height={40}
//     className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//   />
//   <Image
//     src="/assets/css.png" alt="feature template"
//     width={40}
//     height={40}
//     className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//   />
//   <Image
//     src="/assets/js.png" alt="bento template"
//     width={40}
//     height={40}
//     className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//   />
//   <Image
//     src="/assets/bootstrap.svg" alt="cards template"
//     width={40}
//     height={40}
//     className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//   />
// </div>
//         </div>
//       ),
//     },
//     {
//       title: (
//         <>

//       <span
//       onClick={() => openModal(certificate)} 
//       className="cursor-pointer hover:underline"
//       >TechnoHacks Edutech</span>  
//       <br />
//       <span className="text-lg">August 2023</span>
//       </>
//       ),
//       content: (
//         <div className="mt-[10px]">

//           <ul className="">
//             <li className="list-disc  text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
//               Gained knowledge on languages like HTML, CSS, and JavaScript.
//             </li>
//             <li className="list-disc text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
//               I completed several projects in this training session.
//             </li>



//           </ul>
//           <div className="flex flex-wrap mt-5 gap-4">
//             <Image
//               src="/assets/html.png" alt="hero template"
//               width={40}
//               height={40}
//               className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//             <Image
//               src="/assets/css.png" alt="feature template"
//               width={40}
//               height={40}
//               className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//             <Image
//               src="/assets/js.png" alt="bento template"
//               width={40}
//               height={40}
//               className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//             <Image
//               src="/assets/bootstrap.svg" alt="cards template"
//               width={40}
//               height={40}
//               className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//           </div>
//         </div>
//       ),
//     },
//   ];
//   return (

//     <>

//     <div className="w-full">
//       <Timeline data={data} />


//     </div>

//           {/* Certificate Modal */}
//           {isModalOpen && (
//         <Modal isOpen={isModalOpen} onClose={closeModal}>
//           <Image
//             src={selectedCertificate || ""}
//             alt="Certificate"
//             width={600}
//             height={400}
//             className="object-contain"
//           />
//         </Modal>
//       )}
//     </>
//   );
// }



"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Timeline } from "@/components/ui/timeline";
import Modal from "@/components/ui/modal";

interface ExperienceData {
  title: React.ReactNode;
  content: React.ReactNode;
  certificateImage: string;
}

export function ExperienceTimeline() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const openModal = (certificateImage: string) => {
    setSelectedCertificate(certificateImage);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  const data: ExperienceData[] = [
    {
      title: (
        <>
          <span
            onClick={() => openModal("/assets/digital360.png")}
            className="cursor-pointer hover:underline"
          >
            Digital 360
          </span>
          <br />
          <span className="text-lg">June 2024 - Present</span>
        </>
      ),
      content: (
        <div className="mt-[10px]">
          <ul>
            <li className="list-disc text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
              Worked on live projects, applying coding and debugging skills in a practical environment, which strengthened problem-solving abilities and adaptability.
            </li>
            <li className="list-disc text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
              Gained hands-on experience in web development through a structured internship with Digital 360,  working on distinct projects, Comparing schools and counseling for colleges completing various tasks and projects over a month.
            </li>
            <li className="list-disc text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
              This involves me to coordinating with
              team members, adhering to project timelines, multiple tasks simultaneously.
            </li>

            <li className="list-disc text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
              Integrated secure payment functionality via PhonePe, facilitating smooth transactions for course purchases.

            </li>
          </ul>
          <div className="flex flex-wrap gap-4 mt-5">

            <Image src="/assets/html-1.svg" alt="HTML" width={40} height={40} className="rounded-lg object-cover" />
            <Image
              src="/assets/css-icon.svg" alt="startup template"
              width={40}
              height={40}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/js.png" alt="startup template"
              width={40}
              height={40}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/tailwind.png" alt="startup template"
              width={40}
              height={40}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/vitejs.png" alt="startup template"
              width={40}
              height={40}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/react-2.svg" alt="startup template"
              width={40}
              height={40}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/nextjs.jpeg" alt="startup template"
              width={40}
              height={40}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/git.png" alt="startup template"
              width={40}
              height={40}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/nodejs.png" alt="startup template"
              width={40}
              height={40}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/express2.png" alt="startup template"
              width={40}
              height={40}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/firebase-icon.svg" alt="startup template"
              width={40}
              height={40}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/mongodb.png" alt="startup template"
              width={40}
              height={40}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/postman.png" alt="startup template"
              width={40}
              height={40}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
      certificateImage: "/assets/digital360.png"
    },
    {
      title: (
        <>
          <span
            onClick={() => openModal("/assets/Nexus Byte.jpg")}
            className="cursor-pointer hover:underline"
          >
            Nexus Byte
          </span>
          <br />
          <span className="text-lg">February 2024</span>
        </>
      ),
      content: (
        <div className="mt-[10px]">
          <ul>
            <li className="list-disc text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
              This internship was certified by Nexus Byte, with recognition from the Micro, Small & Medium Enterprises (MSME) ministry, validating the quality and relevance of the training.
            </li>
            <li className="list-disc text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
              Demonstrated commitment by completing the internship within a set timeframe, showcasing time management skills and self-discipline.
            </li>
            <li className="list-disc text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
              Worked alongside other interns and mentors, developing teamwork and communication skills crucial for collaborative software development.
            </li>
          </ul>
          <div className="flex flex-wrap mt-5 gap-4">
            <Image
              src="/assets/html-1.svg" alt="hero template"
              width={40}
              height={40}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/css-icon.svg" alt="feature template"
              width={40}
              height={40}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/js.png" alt="bento template"
              width={40}
              height={40}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/bootstrap.svg" alt="cards template"
              width={40}
              height={40}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
      certificateImage: "/assets/Nexus Byte.jpg"
    },
    {
      title: (
        <>
          <span
            onClick={() => openModal("/assets/techno hacks.png")}
            className="cursor-pointer hover:underline"
          >
            TechnoHacks Edutech
          </span>
          <br />
          <span className="text-lg">August 2023</span>
        </>
      ),
      content: (
        <div className="mt-[10px]">
          <ul>
            <li className="list-disc text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
              Gained knowledge on languages like HTML, CSS, and JavaScript.
            </li>
            <li className="list-disc text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
              I completed several projects in this training session.
            </li>

          </ul>
          <div className="flex flex-wrap mt-5 gap-4">
            <Image
              src="/assets/html-1.svg" alt="hero template"
              width={40}
              height={40}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/css-icon.svg" alt="feature template"
              width={40}
              height={40}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/js.png" alt="bento template"
              width={40}
              height={40}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/assets/bootstrap.svg" alt="cards template"
              width={40}
              height={40}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
      certificateImage: "/assets/techno hacks.png"
    }
  ];

  return (
    <div>
      <Timeline data={data} />
      {selectedCertificate && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <Image
            src={selectedCertificate}
            alt="Certificate"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </Modal>
      )}
    </div>
  );
}
