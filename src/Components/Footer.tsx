import React from "react";
import {
  FiMail,
  FiPhone,
  FiFacebook,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col items-center lg:flex-row justify-center bg-[#1E293B]">
      <div className="w-11/12 flex flex-col items-center lg:flex-row py-8 text-white">
        <div className="lg:w-1/3 w-full flex flex-col justify-center px-8 lg:py-0 py-8">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full flex flex-row justify-center items-center text-3xl font-bold">
              ONside
            </div>
            <div className="w-full flex flex-row text-4xl justify-center items-center">
              <p className="w-3/4 lg:w-2/3 flex flex-row items-center justify-center bg-red-700 py-1 text-5xl font-bold">
                News
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 w-full flex flex-col  justify-center px-8 lg:py-0 py-8">
          {/*<p className="text-8xl font-extrabold">LOGO</p>*/}
          <p className="text-md font-normal text-center lg:text-start">
            "© 2023 ONSIDE.AM.Բոլոր իրավունքները պաշտպանված են. The content,
            images, and information on this website are protected by copyright
            law. Any unauthorized use or reproduction of the materials on this
            site is prohibited without written permission.anp
          </p>
        </div>
        <div className="lg:w-1/3 w-full flex flex-col justify-start px-8 lg:py-0 py-8">
          <div className="w-full flex flex-col items-center lg:items-end">
            <div className="flex flex-row justify-center items-center text-white py-2">
              <p className="px-2">onsidenews.net@gmail.com</p>
              <FiMail className="text-xl cursor-pointer hover:text-blue-200 hover:scale-105" />
            </div>
            <div className="flex flex-row justify-center items-center text-white py-2">
              <p className="px-2">091 474849</p>
              <FiPhone className="text-xl cursor-pointer hover:text-blue-200 hover:scale-105" />
            </div>
            <div className="flex flex-row justify-center items-center text-white py-2">
              <a
                className="px-2"
                href="https://www.facebook.com/ONsidenews.net"
              >
                ONsidenews.net
              </a>
              <FiFacebook
                className="text-xl cursor-pointer hover:text-blue-200 hover:scale-105"
                onClick={() =>
                  navigate("https://www.facebook.com/ONsidenews.net")
                }
              />
            </div>
            <div className="flex flex-row justify-center items-center text-white py-2">
              <a
                className="px-2"
                href="https://instagram.com/onsidenewsnet?igshid=MzRlODBiNWFlZA=="
              >
                ONsidenews.net
              </a>
              <FiInstagram
                className="text-xl cursor-pointer hover:text-blue-200 hover:scale-105"
                onClick={() =>
                  navigate(
                    "https://instagram.com/onsidenewsnet?igshid=MzRlODBiNWFlZA==",
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
