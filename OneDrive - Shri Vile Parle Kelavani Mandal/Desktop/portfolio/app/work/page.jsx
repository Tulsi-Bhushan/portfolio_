"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Animated Golf website",
    description:
      "In the development of the Sidcup Family Golf website, I implemented a variety of technical features to create an engaging and functional user experience. Utilizing HTML, the website is structured with semantic elements. The use of CSS allows for sophisticated styling. JavaScript is employed to enhance interactivity, and elements that respond to user inputs.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "Javascript" }],
    image: "/assets/work/golf.jpg",
    live: "https://tulsi-bhushan.github.io/Golf-Website/",
    github: "",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Amazon Clone",
    description:
      "I have demonstrated my ability to create responsive and user-friendly E-commerce Website websites using a range of modern technologies. I incorporated interactive elements using JavaScript, enhancing user engagement and functionality.",
    stack: [{ name: "HTML" }, { name: "CSS" }],
    image: "/assets/work/amazon.jpg",
    live: "https://tulsi-bhushan.github.io/E-commerce-Wesbite/",
    github: "",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Multi-Page university Website",
    description: "Building responsive Multi-page university.",
    stack: [{ name: "HTML" }, { name: "CSS" }],
    image: "/assets/work/university.jpg",
    live: "https://tulsi-bhushan.github.io/University-Website/",
    github: "",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Mytunes Music Website",
    description:
      "Building a music website was challenging and also gave creative opportunity to expand my horizon towards more features in CSS. Structuring a music website helped to broaden the creative outlook.",
    stack: [{ name: "HTML" }, { name: "CSS" }],
    image: "/assets/work/music.jpg",
    live: "https://tulsi-bhushan.github.io/Music-Website/",
    github: "",
  },
  {
    num: "05",
    category: "Full stack",
    title: "Real-time Crop monitoring Website",
    description:
      "Web development for smart and automated greenhouse. The data is received through HTTP get command and is played on the website in real time. It can be used by people with balcony garden and also farmers.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "Javascript" }],
    image: "/assets/work/greenhouse.jpg",
    live: "https://www.youtube.com/watch?v=lkwnDlIqwSE",
    github:
      "https://tulsi-bhushan.github.io/Greenhouse-Monitoring-and-Control/",
  },

  {
    num: "06",
    category: "Full stack",
    title: "Game application using full stack",
    description:
      "I have implemented Responsive game Website using MERN stack. I have used Yarn as a library in my project. This game application is similar to Candy Crush game. It is responsive. I have also implemented tailwind CSS in the building of the website. ",
    stack: [{ name: "Yarn" }, { name: "Tailwind CSS" }],
    image: "/assets/work/game.jpg",
    live: "",
    github:
      "https://github.com/Tulsi-Bhushan/Game-application/tree/main/candy-crush-clone",
  },
  {
    num: "07",
    category: "Full stack",
    title: "Building E-commerce website",
    description:
      "I have successfully implemented e-commerce website using MERN stack. It has three sections, men, women and kids. The entire flow of e-commerce website is created.",
    stack: [{ name: "React JS" }, { name: "Express JS" }, { name: "Mongo DB" }],
    image: "/assets/work/ecom.jpg",
    live: "",
    github: "https://github.com/Tulsi-Bhushan/E-commerce",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="flex w-full xl:w-[50%] xl:h-[460px] flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* otuline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">
                {project.category} Project
              </h2>
              {/* project description */}
              <p className="text-white/60 ">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project buttons */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px]  rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Github project buttons */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px]  rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repositary</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full ">
                    <div className="h-[400px] relative group flex justify-center items-center bg-pink-50/30 ">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-fullb bg-black/10 z-10 "></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-3 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-14 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-black/20 hover:bg-accent-hover text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
