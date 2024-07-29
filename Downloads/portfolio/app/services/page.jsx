"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      " Creating responsive and interactive websites using HTML, CSS and JavaScript. My expertise in ReactJS and the MERN stack allows me to develop dynamic, responsive applications.",
    href: "https://github.com/Tulsi-Bhushan",
  },
  {
    num: "02",
    title: "Technical Blogs",
    description:
      "On my technical blog, I share insights and experiences from my journey in the tech world. The blog covers a range of topics. I aim to provide valuable information and practical solutions.",
    href: "https://bhushantulsibidya.wordpress.com/",
  },
  {
    num: "03",
    title: "IoT solutions",
    description:
      "Crafting IoT solutions that blend hardware, software, and network components to create integrated systems for effective data collection, analysis, and automation, enhancing overall operational efficiency.",
    href: "https://www.youtube.com/playlist?list=PLaMuAgZ1yqQ7iDZuieYaAyw351rtCmaGn",
  },
  {
    num: "04",
    title: "UI/UX Designs",
    description:
      "Designing user interfaces and experiences that are both functional and visually appealing, with a focus on creating intuitive interactions and enhancing user satisfaction.",
    href: "https://github.com/Tulsi-Bhushan",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 mt-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* Top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-yellow-300 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-yellow-300 transition-all duration-500">
                  {service.title}
                </h2>
                {/*Description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
