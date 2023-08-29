import React from "react";
import {
  FiMail,
  FiPhone,
  FiFacebook,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";
const Footer: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center lg:flex-row justify-center bg-[#1E293B]">
      <div className="w-11/12 flex flex-col items-center lg:flex-row py-8 text-white">
        <div className="lg:w-1/3 w-full flex flex-col justify-center px-8 lg:py-0 py-8">
          <p className="text-8xl font-extrabold">LOGO</p>
          <p className="text-2xl font-bold">Football News</p>
        </div>
        <div className="lg:w-1/3 w-full flex flex-col  justify-center px-8 lg:py-0 py-8">
          {/*<p className="text-8xl font-extrabold">LOGO</p>*/}
          <p className="text-md font-normal">
            "© 2023 [Your Website Name]. All rights reserved. The content,
            images, and information on this website are protected by copyright
            law. Any unauthorized use or reproduction of the materials on this
            site is prohibited without written permission."
          </p>
        </div>
        <div className="lg:w-1/3 w-full flex flex-col justify-start px-8 lg:py-0 py-8">
          <div className="w-full flex flex-col items-center lg:items-end">
            <div className="flex flex-row justify-center items-center text-white py-2">
              <p className="px-2">FootballNews@gmail.com</p>
              <FiMail className="text-xl cursor-pointer hover:text-blue-200 hover:scale-105" />
            </div>
            <div className="flex flex-row justify-center items-center text-white py-2">
              <p className="px-2">+37412341234</p>
              <FiPhone className="text-xl cursor-pointer hover:text-blue-200 hover:scale-105" />
            </div>
            <div className="flex flex-row justify-center items-center text-white py-2">
              <p className="px-2">FootballNews</p>
              <FiFacebook className="text-xl cursor-pointer hover:text-blue-200 hover:scale-105" />
            </div>
            <div className="flex flex-row justify-center items-center text-white py-2">
              <p className="px-2">FootballNews</p>
              <FiTwitter className="text-xl cursor-pointer hover:text-blue-200 hover:scale-105" />
            </div>
            <div className="flex flex-row justify-center items-center text-white py-2">
              <p className="px-2">FootballNews</p>
              <FiInstagram className="text-xl cursor-pointer hover:text-blue-200 hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
