"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Mail",
    description: "bhushantulsibidya@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Mumbai, Maharashtra",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: JSON.stringify({
        ...formData,
        access_key: "c806dec7-ae11-437a-8505-a9172078c18a",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    if (result.success) {
      alert("Message sent successfully!");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } else {
      alert("Error sending message.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* form */}
          <div className="xl:w-1/2 order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#292942] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Let's Work Together</h3>
              <p className="text-white/60">
                Passionate about working together to create innovative
                solutions, I bring a strong background in software development
                and a collaborative spirit to every project.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* select */}
              <Select onValueChange={handleServiceChange} required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="UI/UX Designs">UI/UX Designs</SelectItem>
                    <SelectItem value="IoT Solutions">IoT Solutions</SelectItem>
                    <SelectItem value="Blog Writing">Blog Writing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
                required
              />
              {/* btns */}
              <Button type="submit" size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#292942] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
