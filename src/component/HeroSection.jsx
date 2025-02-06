import { motion, useInView } from "motion/react";
import { FacebookIcon, Instagram, Linkedin, Github } from "lucide-react";
import { useRef } from "react";
const HeroSection = () => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: false, amount: 0.2 });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: false, amount: 0.2 });
  return (
    <main className="p-7 mx-auto max-w-7xl">
      <motion.div
        ref={ref1}
        whileHover={{
          cursor: "pointer",
          boxShadow: "0px 0px 60px #14B8A6",
          scale: 1.1,
          transition: {
            duration: 0.3,
          },
        }}
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="relative mt-16 px-auto mx-auto w-40 h-40 bg-red-500 rounded-full"
      >
        <img
          className="absolute z-40 w-full h-full  mb-2 object-cover rounded-full"
          src="https://res-console.cloudinary.com/dpz8bmqix/thumbnails/v1/image/upload/v1738871262/YWZ6YWxfeG5hc25k/drilldown"
          alt="profile pic"
        />
        <div className="absolute z-10 rounded-full bg-gradient-to-r  from-emerald-700 via-zinc-700 to-teal-700 animate-spin -inset-[5px] "></div>
      </motion.div>

      <div className="flex flex-col justify-between gap-3  items-center mx-auto max-w-7xl md:flex-row">
        <motion.div
          ref={ref2}
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "tween" }}
          className="w-full mt-10 lg:mt-20 bg-gradient-to-r from-zinc-100 to-teal-800 text-transparent bg-clip-text"
        >
          <h1 className=" text-4xl font-extrabold font-poppins">
            <span className="text-teal-500">Hi</span>, I' Mohd Afzal Ansari
          </h1>
          <h2 className=" text-6xl font-bold">Full-Stack Web Developer</h2>
          <p className="lg:px-20 mt-6 text-center text-2xl font-mono font-bold">
            MERN Stack{" "}
            <motion.span
              whileTap={{
                rotate: 30,

                transition: { duration: 0.5, type: "spring", stiffness: 500 },
              }}
              style={{
                display: "inline-block",
                fontSize: "24px",
                cursor: "pointer",
              }}
              className="text-teal-500"
            >
              Enthusiast
            </motion.span>
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "tween" }}
          className="flex w-full mt-15 lg:w-[600px] lg:mt-20 flex justify-between items-center"
        >
          <motion.div
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href="https://www.linkedin.com/in/mohd-afzal-ansari-154a6a28b/">
              <Linkedin className="hover:text-teal-300 hover:animate-none block h-10 w-10 transform md:translate-y-[-50px] animate-pulse text-teal-600" />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href="https://github.com/Afzal1603">
              <Github className="hover:text-teal-300 hover:animate-none  block h-10 w-10 transform md:translate-y-[50px] animate-pulse text-teal-600 " />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href="https://www.facebook.com/people/Afzal-Ansari/pfbid02W6hBwfNTAqnC2Hu1NZbhAyXbg5npPHo47jDwyGXjb5uzEmYvPgjGf5FemLL7RwRul/?rdid=VUd2r7oLgRLOeTm9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19yxWzmXwa%2F">
              <FacebookIcon className="hover:text-teal-300 hover:animate-none block h-10 w-10 transform animate-pulse md:translate-y-[-50px] text-teal-600" />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href="https://www.instagram.com/_.ingenium__/">
              <Instagram className="hover:text-teal-300 hover:animate-none  block h-10 w-10 transform animate-pulse md:translate-y-[50px] text-teal-600" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="flex flex-col items-center justify-center lg:mt-20">
        <a
          href="#projects"
          className="relative mx-auto mt-10 border hover:cursor-pointer px-6 py-2 rounded-md text-white font-mono border-white group overflow-hidden"
        >
          <span className="relative z-20">Projects</span>
          <span className="absolute z-10 left-0 bottom-0 w-0 h-full bg-gradient-to-r from-teal-700 to-zinc-800 group-hover:w-full transition-all duration-300 ease-out "></span>
        </a>
      </div>
    </main>
  );
};

export default HeroSection;
