import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import Tilt from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

const ServiceCard = ({ i, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", i * 0.5, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex flex-col justify-evenly items-center">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white font-bold text-[20px] text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>About Me.</h2>
      </motion.div>
      <motion.p className="text-secondary mt-4 text-[17px] max-w-3xl leading-[30px]" variants={fadeIn("", "", 0.1, 1)}>
        Hi I am Firman Khoiril , I'm a Frontend Web Developer,Fullstack Web Developer, Web 3d developer. i've gained experienced through web development since 2020, if you looking for a experienced frontend web developer who can help you to
        develop your Dream website using React js?. One important and effective edge of mine is I am curious about new the things. I like to coding and make friends . Nice to meet you !☺️
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, i) => (
          <ServiceCard i={i} key={service.title} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
