import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import APIService from "../APIService/APIService";
import HelperService from "../AdditionalHelperMethods/HelperService";
import { useNavigate } from "react-router-dom";

export const Carousel = () => {
  const { carouselPosts } = useAuth();
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselPosts.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselPosts.length) % carouselPosts.length,
    );
  };

  const handleIndexClick = ({ index }: { index: any }) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative overflow-hidden rounded-lg lg:h-[500px] h-[250px]">
          {carouselPosts.map((post, index) => (
            <div
              key={index}
              className={`${
                index === activeIndex ? "block" : "hidden"
              } duration-700 ease-in-out rounded-xl`}
              data-carousel-item=""
            >
              <img
                src={post.img}
                className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl cursor-pointer "
                alt={`Image ${index + 1}`}
                onClick={() => {
                  navigate(`/post/${post._id}`);
                }}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col w-full absolute z-30 space-x-3 -translate-x-1/2 bottom-7 left-1/2 bg-[#0f000036]">
          <div className="flex flex-col items-center w-full my-4 ">
            <h2 className="text-white text-2xl lg:text-5xl font-semibold">
              {carouselPosts[activeIndex]?.title}
            </h2>
            <div className="flex w-11/12 text-white lg:text-lg text-sm justify-center text-center">
              {carouselPosts[activeIndex]
                ? HelperService.truncateTitle(
                    carouselPosts[activeIndex]?.description,
                    15,
                  )
                : null}
            </div>
          </div>
          <div className="flex flex-row justify-center">
            {carouselPosts.map((_, index) => (
              <div className="mx-1" key={index}>
                <button
                  type="button"
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? "bg-blue-500" : "bg-[#ffffff8f]"
                  }`}
                  aria-current={index === activeIndex ? "true" : "false"}
                  aria-label={`Slide ${index + 1}`}
                  data-carousel-slide-to={index}
                  onClick={() => handleIndexClick({ index: index })}
                ></button>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev=""
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next=""
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};
