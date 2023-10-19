import { useAuth } from "../Context/AuthContext";
import React, { useRef, useState } from "react";
import { Pagination } from "./Pagination";
import { Link, useNavigate } from "react-router-dom";
import APIService from "../APIService/APIService";
import HelperService from "../AdditionalHelperMethods/HelperService";
import { BiSolidTimeFive } from "react-icons/bi";
import RichTextRenderer from "./RichTextRenderer";

export const FeaturedNews = () => {
  const { featuredPosts } = useAuth();
  const postsPerPage = 4; // Number of posts per page
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const myDivRef = useRef<HTMLDivElement | null>(null);

  const scrollToDiv = () => {
    if (myDivRef.current) {
      myDivRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const reversedFeaturedPosts = [];
  for (let i = featuredPosts.length - 1; i >= 0; i--) {
    reversedFeaturedPosts.push(featuredPosts[i]);
  }

  // Calculate index range for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = reversedFeaturedPosts.slice(
    indexOfFirstPost,
    indexOfLastPost,
  );

  return (
    <div
      className="flex w-full lg:flex-row flex-col flex-wrap justify-center"
      id="myDiv"
      ref={myDivRef}
    >
      {currentPosts?.map((singlePost, index) => (
        <div
          className="lg:w-1/2 w-full flex my-2 px-2 "
          onClick={() => {
            navigate(`/post/${singlePost._id}`);
            HelperService.scrollToTop();
          }}
          key={index}
        >
          <div className="flex flex-col w-full bg-white rounded-3xl shadow dark:bg-gray-800  ">
            <div className="flex w-full lg:h-96 h-64 cursor-pointer">
              <div className="w-full  overflow-hidden rounded-t-3xl">
                <img
                  src={singlePost.img}
                  alt={`img${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-5 rounded-3xl">
              <div className="flex flex-row items-center mb-3 font-normal text-gray-700 dark:text-gray-400">
                <BiSolidTimeFive className="text-xl text-white" />
                <p className="px-1">
                  {HelperService.formatDate(singlePost.date)}
                </p>
              </div>
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {singlePost.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {
                  <RichTextRenderer
                    htmlContent={singlePost.description}
                    maxLength={450}
                  />
                }
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {singlePost.author}
              </p>
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <Link
                  to={`/post/${singlePost._id}`}
                  className="text-white hover:underline"
                  onClick={HelperService.scrollToTop}
                >
                  Ավելին
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="flex w-full justify-center" onClick={scrollToDiv}>
        <Pagination
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          totalPosts={reversedFeaturedPosts.length}
          onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
        />
      </div>
    </div>
  );
};
