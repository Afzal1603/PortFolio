import { useRef } from "react";
import { motion, useInView } from "motion/react";

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ x: 40, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ type: "tween", duration: 0.7 }}
      className="mb-4 font-mono mx-auto md:mx-0 text-white bg-zinc-900/50 p-6 rounded-lg flex flex-col justify-center"
    >
      <h1 className="max-w-sm text-teal-500 font-bold text-4xl font-mono mx-auto md:mx-0 mb-6">
        About me
      </h1>
      <p className="text-md text-justify max-w-md bg-gradient-to-r from-zinc-300 to-emerald-500 text-transparent bg-clip-text">
        Hi, I’m Mohd Afzal Ansari, a B.Tech 3rd-year Computer Science student at
        SRMSCET, Bareilly, graduating in 2026. I have a strong passion for
        full-stack web development and love working with both front-end and
        back-end technologies. My technical skills include HTML, CSS,
        JavaScript, Node.js, Express, React, Postman, Python, Java, and C. I
        enjoy solving problems, learning new technologies, and building projects
        that enhance my skills. I am always eager to take on new challenges and
        grow as a developer.
      </p>
    </motion.section>
  );
};

export default About;
