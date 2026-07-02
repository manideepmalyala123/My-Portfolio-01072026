import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const menuItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: .7 }}
      className="fixed top-0 left-0 w-full z-50"
    >

      <nav
        className={`
          mx-auto
          mt-5
          max-w-7xl
          w-[92%]
          px-8
          py-5
          flex
          justify-between
          items-center
          bg-[var(--card)
          transition-all
          duration-500
          ${scrolled
            ? "glass shadow-2xl"
            : "bg-transparent"}
        `}
      >

        <div className="text-4xl font-bold gradient-text">
          MD
        </div>
       <ul className="hidden md:flex gap-10">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                //className="cursor-pointer text-gray-300 hover:text-primary transition"
                className="text-gray-300 hover:text-primary transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* <a
          href="/resume.pdf"
          download="Manideep_Resume.pdf"
          className="rounded-full bg-primary px-7 py-3 font-semibold hover:scale-105 transition"
        >
          Resume
        </a> */}
        <a
          href="/resume.pdf"
          download="Manideep_Resume.pdf"
          className="hidden md:block rounded-full bg-primary px-7 py-3 font-semibold hover:scale-105 transition"
        >
          Resume
        </a>
      </nav>

      {menuOpen && (
        <div className="md:hidden glass mt-3 mx-auto w-[92%] rounded-2xl p-6">
          <ul className="flex flex-col gap-5">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-300 hover:text-primary transition"
                >
                  {item.label}
                </a>
              </li>
            ))}

            <a
              href="/resume.pdf"
              download="Manideep_Resume.pdf"
              className="bg-primary rounded-full py-3 text-center font-semibold"
            >
              Resume
            </a>
          </ul>
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;