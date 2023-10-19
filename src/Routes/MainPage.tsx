import { Menu } from "../Components/Menu";
import { Carousel } from "../Components/Carousel";
import { Feed } from "../Components/Feed";
import { SideFeed } from "../Components/SideFeed";
import { FeaturedNews } from "../Components/FeaturedNews";
import React, { useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Footer from "../Components/Footer";
import { Analytics } from "../Components/Analytics";
import HelperService from "../AdditionalHelperMethods/HelperService";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrsBk70YYMDTILrjaEhsamxB8wZ1zPi-M",
  authDomain: "sdfootballnews.firebaseapp.com",
  projectId: "sdfootballnews",
  storageBucket: "sdfootballnews.appspot.com",
  messagingSenderId: "134577226738",
  appId: "1:134577226738:web:f9b18b14394e51563b216b",
  measurementId: "G-8J9FZ5E376",
};
declare global {
  interface Window {
    yaContextCb: any[];
  }
  const Ya: any;
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const MainPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Log a custom event to track visited users
    logEvent(analytics, "visited_user");

    // You can also log additional events or user properties as needed
    // logEvent(analytics, "custom_event_name", { custom_param: "custom_value" });
  }, []);

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
            <SideFeed postsPerPage={10} />
            <button
              className="flex w-full justify-center"
              onClick={() => {
                navigate("/posts");
              }}
            >
              <p className="px-2">Տեսնել ավելին</p>
              <BsArrowUpRightCircle />
            </button>
            <div className="flex w-full justify-center">
              <div className="w-full flex h-44 border-gray-300 border-[.5px] rounded-xl mt-2"></div>
            </div>
          </div>

          <div className="w-full my-8 ">
            <div className="w-full justify-center flex text-2xl font-bold">
              Անալիտիկա
            </div>
            <div className="w-full flex flex-col lg:my-4">
              <Analytics />
            </div>
          </div>

          <div className="w-full mb-8 ">
            <div className="w-full justify-center flex text-2xl font-bold">
              Թոփ Նորություններ
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
