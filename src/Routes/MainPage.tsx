import { Menu } from "../Components/Menu";
import { Carousel } from "../Components/Carousel";
import { Feed } from "../Components/Feed";
import { SideFeed } from "../Components/SideFeed";
import { FeaturedNews } from "../Components/FeaturedNews";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Footer from "../Components/Footer";
import { Analytics } from "../Components/Analytics";
import HelperService from "../AdditionalHelperMethods/HelperService";
import { Link, useNavigate } from "react-router-dom";

export const MainPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Menu />
      <div className="flex flex-row w-full justify-center bg-gray-200 overflow-hidden  ">
        <div className="flex w-11/12 lg:flex-row flex-col flex-wrap my-4">
          <div className="flex flex-col lg:w-3/5 w-full px-2 ">
            <Carousel />
            <div className="flex lg:w-full w-full px-2 lg:my-4 justify-start ">
              <Feed />
            </div>
          </div>
          <div className="hidden lg:w-2/5 w-full px-2 lg:my-0 lg:flex flex-col">
            <SideFeed postsPerPage={7} />
            <button
              className="flex w-full justify-center"
              onClick={() => {
                navigate("/posts");
              }}
            >
              See more
            </button>
            <div className="flex w-full justify-center">
              <div className="w-full flex h-44 border-gray-300 border-[.5px] rounded-xl mt-2"></div>
            </div>
          </div>

          <div className="w-full my-8 ">
            <div className="w-full justify-center flex text-2xl font-bold">
              Analytics
            </div>
            <div className="w-full flex flex-col my-4">
              <Analytics />
            </div>
          </div>

          <div className="w-full mb-8 ">
            <div className="w-full justify-center flex text-2xl font-bold">
              Featured News
            </div>
            <div className="w-full flex flex-col my-8">
              <FeaturedNews />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
