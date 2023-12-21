import React from "react";
import {useTypewriter, Cursor} from "react-simple-typewriter";
import {SocialIcon} from "react-social-icons";

function Hero() {
  const [text] = useTypewriter({
    words: ["Vadlamudi Vamsi", "Front-End Developer", "<ButLovesCodeMore />"],
    loop: true,
    delaySpeed: 2000,
  });

  const Links = [
    {id: 1, name: "Home", link: "/"},
    {id: 2, name: "About", link: "#about"},
    {id: 3, name: "Skills", link: "#skill"},
    {id: 4, name: "Projects", link: "#project"},
    {id: 5, name: "Contact", link: "#contact"},
  ];
  return (
    <section className="py-16 sm:py-24 md:py-28 lg:py-40 px-5 sm:px-10 xl:px-0 bg-zinc-100">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between lg:flex-row-reverse flex-col">
          <div className="lg:w-1/2 flex justify-end">
            <img
              src="./images/hero.svg"
              alt="hero-img"
              className="h-60 sm:h-72 lg:h-96 w-full object-contain"
            />
          </div>

          <div className="text-center lg:text-start lg:w-1/2 space-y-2 mt-5">
            <h4 className="text-lg font-medium text-gray-500">Hi, Everyone!</h4>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              I am <span className="text-[#FF5C00]">{text}</span>
              <Cursor cursorColor="#FF5C00" />
            </h1>
            <h3 className="uppercase font-semibold tracking-[4px] text-black/60 lg:text-lg">
              React Front-End Developer
            </h3>
            <p>
              A passionate Front-End Developer based in Vijayawada, AP, India.
            </p>

            {/* Hero Social Icons */}
            <div>
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
            </div>

            {/* Hero Navbar */}
            <nav className="space-x-2 sm:space-x-4 space-y-2 sm:space-y-0 hidden sm:block">
              {Links.map((link) => (
                <a
                  key={link.id}
                  href={link.link}
                  className="inline-block px-4 py-2 border-[#FF5C00] border rounded font-medium hover:bg-[#FF5C00] hover:text-white duration-300 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
