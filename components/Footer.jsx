import React from "react";
import {SocialIcon} from "react-social-icons";

function Footer() {
  return (
    <footer className="bg-[#363636] py-5 px-10">
      <div className="max-w-screen-xl mx-auto text-center flex items-center justify-between flex-col sm:flex-row space-y-2 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <img
            src="./images/avatar.jpg"
            alt="footer-img"
            className="w-8 h-8 object-cover rounded-sm"
          />
          <p className="text-white">
            Created by <a href="/">Vadlamudi Vamsi</a>
          </p>
        </div>

        <div>
          <SocialIcon
            url="https://github.com/CodeVadlamudi"
            bgColor="transparent"
            fgColor="white"
            target="_blank"
          />
          <SocialIcon
            url="https://www.instagram.com/_vamsi_v/"
            bgColor="transparent"
            fgColor="white"
            target="_blank"
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UC3iIMON2momGpXK2ib9gW-A"
            bgColor="transparent"
            fgColor="white"
            target="_blank"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
