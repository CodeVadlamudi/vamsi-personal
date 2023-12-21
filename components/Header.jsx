import React, {useState} from "react";
import {SocialIcon} from "react-social-icons";
import {motion} from "framer-motion";
import {Bars3BottomRightIcon, XMarkIcon} from "@heroicons/react/24/solid";
import {EnvelopeIcon} from "@heroicons/react/24/outline";

const Links = [
  {id: 1, name: "About", link: "#about"},
  {id: 2, name: "Skills", link: "#skill"},
  {id: 3, name: "Projects", link: "#project"},
  {id: 4, name: "Contact", link: "#contact"},
];

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="py-5 px-10 md:px-20 shadow sticky top-0 bg-white z-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between">
          <motion.a
            initial={{
              x: -500,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            href="/"
            className="text-xl font-semibold"
          >
            Vamsi<span className="text-[#FF5C00]">.</span>
          </motion.a>

          <motion.a
            initial={{
              x: 500,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            href="#contact"
            className="hidden sm:flex items-center space-x-2"
          >
            <EnvelopeIcon className="w-7 h-7" />
            <p className="text-base">Get a touch!</p>
          </motion.a>

          <nav
            className={`absolute top-[68px] border-t flex flex-col space-y-4 bg-white p-5 left-0 w-full duration-300 sm:hidden ${
              toggle ? "left-0" : "left-[-100%]"
            }`}
          >
            <a
              href="/"
              className="font-medium text-[#FF5C00] duration-300 transition-all"
            >
              Home
            </a>
            {Links.map((link) => (
              <a
                key={link.id}
                href={link.link}
                className="font-medium hover:text-[#FF5C00] duration-300 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <motion.button
            initial={{
              x: 500,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            onClick={() => setToggle(!toggle)}
            className="sm:hidden"
          >
            {toggle ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3BottomRightIcon className="w-7 h-7" />
            )}
          </motion.button>
        </div>
      </div>
    </header>
  );
}

export default Header;
