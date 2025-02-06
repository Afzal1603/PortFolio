import { motion } from "motion/react";
import { Home, Download } from "lucide-react";
const Navbar = () => {
  return (
    <div>
      <header className="fixed z-50 h-14 bg-white/10 w-full backdrop-blur-xl max-w-screen top-0">
        <div className=" max-w-screen mx-auto flex items-center justify-between px-6 h-full text-white font-mono text-lg">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href="#">
              <Home className="w-8 h-8" />
            </a>
          </motion.div>

          <nav>
            <ul className="flex space-x-6 gap-1.5 font-semibold">
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href="../assests/Final.pdf"
                  download="Mohd_Afzal_Ansari_Resume.pdf"
                  className="hover:text-teal-300 transition download-btn flex gap-1"
                >
                  <Download></Download>
                  Resume
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="#contact" className="hover:text-teal-300 transition">
                  Contact
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="#about" className="hover:text-teal-300 transition">
                  About
                </a>
              </motion.li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
