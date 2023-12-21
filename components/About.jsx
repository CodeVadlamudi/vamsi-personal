import React from "react";
import {motion} from "framer-motion";
import {SocialIcon} from "react-social-icons";

function About() {
  return (
    <section id="about" className="my-28 lg:my-40 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
          <motion.div
            initial={{x: -200, opacity: 0}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1.5}}
            viewport={{once: true}}
            className="md:w-1/2 flex items-center justify-center"
          >
            <div className="relative md:w-60 lg:w-80 h-72 lg:h-96 before:absolute before:-top-4 before:-left-4 before:border-t-4 before:border-l-4 before:w-52 before:h-60 before:border-[#FF5C00] after:absolute after:-bottom-4 after:-right-4 after:border-b-4 after:border-r-4 after:w-52 after:h-60 after:border-[#FF5C00]">
              <img
                src="./images/about.jpg"
                alt="about-img"
                className="w-full lg:w-80 h-full lg:h-96 object-cover rounded-sm"
              />
            </div>
          </motion.div>

          <div className="md:w-1/2 space-y-4">
            <h2 className="text-[#FF5C00] text-2xl md:text-3xl font-semibold">
              About
            </h2>
            <p className="text-base lg:text-lg">
              Greetings, I am a Junior Front-End Developer deeply committed to
              the art of creating captivating and highly responsive web
              experiences. My relentless motivation propels me to achieve
              excellence in my work. I embrace daily challenges as opportunities
              for growth, perpetually expanding my skill set to enhance the
              quality of my contributions. For instance, my exploration of React
              has enabled me to elevate our web pages, thus advancing my
              proficiency in development.
            </p>

            {/* Social Icons */}
            <div className="sm:hidden">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
