import { Mail, Phone, Linkedin } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-teal-950 text-white py-4">
      <div className="container mx-auto text-center bg-gradient-to-r from-teal-500 to-zinc-300 text-transparent bg-clip-text">
        <p className="text-lg font-semibold mb-2">Get in Touch</p>
        <div className="flex justify-center gap-8">
          <a
            href="mailto:ingenium005@gmail.com"
            className="hover:text-teal-100 text-teal-500"
          >
            <Mail></Mail>
          </a>
          <a
            href="tel:+918840942697"
            className="hover:text-teal-100 text-teal-500"
          >
            <Phone />
          </a>
          <a
            href="https://www.linkedin.com/in/mohd-afzal-ansari-154a6a28b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-100 text-teal-500"
          >
            <Linkedin />
          </a>
        </div>
        <p className="mt-4 text-sm">
          © 2025 Mohd Afzal Ansari. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
