import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_xg1hghh",
        "template_ml2fdxo",
        {
          from_name: form.name,
          to_name: "Firman",
          from_email: form.email,
          to_email: "firmankhoiril13@gmail.com",
          message: form.message,
        },
        "MZD88Pp9KdjimBGhE"
      )
      .then(
        () => {
          setLoading(false), alert(`Thank You ${form.name}, I will get back for you as soon as possible.`);
          setForm({ ...form, message: "", name: "", email: "" });
        },
        (err) => {
          setLoading(false);
          alert(`Somethings went wrong. / ${err}`);
        }
      );
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Whats your name"
              className="bg-tertiary px-6 py-4 placeholder:text-secondary outline-none text-white rounded-xl border-transparent font-medium "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Whats your email"
              className="bg-tertiary px-6 py-4 placeholder:text-secondary outline-none text-white rounded-xl border-transparent font-medium "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Whats do you want to say?"
              className="bg-tertiary px-6 py-4 placeholder:text-secondary outline-none text-white rounded-xl border-transparent font-medium "
            />
          </label>
          <button className="bg-tertiary py-3 px-8 outline-none w-fit tet-white font-bold shadow-md shadow-primary rounded-xl" type="submit">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xs:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
