"use client";

import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data
const about = {
  title: "About me",
  description:
    "I am Tulsi Bhushan, Engineering student with a major in IoT. My journey in technology encompasses a diverse range of projects. I have a robust skill set in programming languages such as C, C++ and Python, alongside a solid foundation in web technologies like HTML, CSS,JavaScript, ReactJS and NextJS. With hands-on experience in both software and hardware, I am eager to contribute to and grow as a versatile engineer.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tulsi Bhushan",
    },
    {
      fieldName: "Email",
      fieldValue: "bhushantulsibidya@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I gained practical experience in software development and project execution. I worked on IoT projects like a home automation system and an automated greenhouse, and developed several websites using HTML, CSS, JavaScript, and the MERN stack. Proficient in C, C++ and Python.",
  items: [
    {
      company: "Jitulex",
      position: "IoT and Coding Intern",
      duration: "Jan 2024 - Feb 2024",
    },
    {
      company: "DJS Arya",
      position: "Embedded system Member",
      duration: "June 2022 - June 2023",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "My academic journey has equipped me with a strong foundation in programming, software development, and project management. My dedication to learning and excellence is reflected in my participation and success in various hackathons and technical competitions.",
  items: [
    {
      institution: "Dwarkadas J. Sanghvi College of Engineering",
      degree: "B.E/ BTECH",
      duration: "2021-2025",
      result: 8.87,
    },
    {
      institution: "D. G. Ruparel College of Arts and Science",
      degree: "XII-HIGH SCHOOL",
      duration: "2019-2021",
      result: 94.6,
    },
  ],
};

//Skills data
const skills = {
  title: "My Skills",
  description:
    "Skills are essential for personal and professional growth, helping individuals excel in their careers and adapt to various challenges.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
  ],
};

//achievements data
const achievements = {
  title: "My Achievements/Co-curricular",
  description:
    "Celebrating achievements highlights my skills, dedication, and the value I bring to any team or endeavor, showcasing ability to achieve goals and make a positive impact.",
  myachievements: [
    {
      ach: "Secured First runner-up in UNPLUGGED Hackathon organized by IETE.",
    },
    {
      ach: "Won 3rd place at Tech Expo organised by DJS Trinity, followed Best Department award in DJ Sanhgvi College.",
    },
    {
      ach: "Won second place for Smart and Automated Greenhouse Project in Prakalp 2.0",
    },
    {
      ach: "Won 1st Place in DJS Strike Competition",
    },
    {
      ach: "Shortlisted for IC-SIT Competition.",
    },
    {
      ach: "Presented our satellite design at International CanSat Comp sponsored by NASA.",
    },
    {
      ach: "Secured first place in Quiz competition organized by DJS Express",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.0, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]  mt-[30px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#292942] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#292942] h-[230px] py-8 px-12 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <h2 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            Score: {item.result}
                          </h2>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="rounded-full w-[6px] h-[6px] bg-accent "></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={50}>
                          <Tooltip>
                            <TooltipTrigger className=" w-full h-[150px] bg-[#292942] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* achievements */}
            <TabsContent value="achievements" className="w-full h-full">
              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{achievements.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {achievements.description}
                  </p>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:gap-[30px] gap-4">
                  {achievements.myachievements.map((achievement, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#292942] h-[95px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                      >
                        <span className="text-accent">{achievement.ach}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap=[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0 mt-5 mb-5">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4 "
                      >
                        <span className="text-white/60 ">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
