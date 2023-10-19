import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useAuth } from "../Context/AuthContext";
import HelperService from "../AdditionalHelperMethods/HelperService";
import { Link, useNavigate } from "react-router-dom";

export const AnalyticsCarousel = () => {
  const { analyticsPosts } = useAuth();
  const navigate = useNavigate();
  const reversedAnalyticsPosts = [];
  for (let i = analyticsPosts.length - 1; i >= 0; i--) {
    reversedAnalyticsPosts.push(analyticsPosts[i]);
  }
  return (
    <div className="w-full flex ">
      <div className="lg:flex hidden items-center justify-center w-full h-full py-24 px-4">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="flex"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={analyticsPosts.length}
          visibleSlides={3}
          step={2}
          infinite={true}
          naturalSlideHeight={0}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8
               cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex w-full gap-5 items-center justify-center transition ease-out duration-700 "
                >
                  {reversedAnalyticsPosts.map((singlePost, index) => (
                    <Slide index={index} key={singlePost._id}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto h-72 rounded-3xl overflow-hidden">
                        <img
                          src={singlePost.img}
                          alt="black chair and white table"
                          className="w-full h-full object-cover min-h-full"
                        />
                        <div
                          className="flex flex-col justify-end items-end bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 cursor-pointer"
                          onClick={() => {
                            navigate(`/post/${singlePost._id}`);
                            HelperService.scrollToTop();
                          }}
                        >
                          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white bg-[#5f5e5e4a] p-4">
                            {singlePost.title}
                          </h2>
                        </div>
                      </div>
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 "
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
      <div className="lg:hidden flex items-center justify-center w-full h-full py-10 px-4">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="flex"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={analyticsPosts.length}
          visibleSlides={1}
          step={1}
          infinite={false}
          naturalSlideHeight={0}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8
               cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex w-full gap-4 lg:gap-10 items-center justify-center transition ease-out duration-700 "
                >
                  {reversedAnalyticsPosts.map((singlePost, index) => (
                    <Slide index={index} key={singlePost._id}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto h-64 rounded-3xl overflow-hidden">
                        <img
                          src={singlePost.img}
                          alt="black chair and white table"
                          className="object-cover object-center w-full h-full"
                        />
                        <div
                          className="flex flex-col items-end justify-end bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 cursor-pointer"
                          onClick={() => {
                            navigate(`/post/${singlePost._id}`);
                            HelperService.scrollToTop();
                          }}
                        >
                          <h2 className="lg:text-xl leading-4 text-lg font-semibold lg:leading-5 text-white bg-[#5f5e5e4a] p-4">
                            {singlePost.title}
                          </h2>
                        </div>
                      </div>
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 "
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};
