import { motion, useInView } from "motion/react";
import data from "../data/data";
import { useRef } from "react";
import { Card } from "./Card";
import Contact from "./Contact";
import About from "./About";
const Container = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  return (
    <>
      <motion.div
        id="projects"
        initial={{ y: 80, opacity: 0 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="px-10 py-10 flex justify-center gap-10 flex-wrap"
        ref={ref}
      >
        {data.map((item) => (
          <Card key={item.name} {...item}></Card>
        ))}
      </motion.div>
      <div className="px-10 flex flex-col md:flex-row md:gap-6 md:justify-center">
        <Contact></Contact>
        <About></About>
      </div>
    </>
  );
};

export default Container;
