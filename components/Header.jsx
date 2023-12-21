import React, {useState} from "react";
import {SocialIcon} from "react-social-icons";
import {motion} from "framer-motion";
import {Bars3BottomRightIcon, XMarkIcon} from "@heroicons/react/24/solid";

const Links = [
  {id: 1, name: "About", link: "#about"},
  {id: 2, name: "Skills", link: "#skill"},
  {id: 3, name: "Projects", link: "#project"},
  {id: 4, name: "Contact", link: "#contact"},
];

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="p-5 sm:p-4 shadow sticky top-0 bg-white z-10">
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

          {/* Hero Social Icons */}
          <motion.div
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
            className="hidden sm:flex"
          >
            <SocialIcon
              url="https://github.com/CodeVadlamudi"
              bgColor="transparent"
              fgColor="black"
              target="_blank"
            />
            <SocialIcon
              url="https://www.instagram.com/_vamsi_v/"
              bgColor="transparent"
              fgColor="black"
              target="_blank"
            />
            <SocialIcon
              url="https://www.youtube.com/channel/UC3iIMON2momGpXK2ib9gW-A"
              bgColor="transparent"
              fgColor="black"
              target="_blank"
            />
          </motion.div>

          <nav
            className={`absolute top-[80px] border-t flex flex-col space-y-4 bg-white p-5 left-0 w-full duration-300 sm:hidden ${
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
