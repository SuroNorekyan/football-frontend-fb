import { useAuth } from "../Context/AuthContext";
import React, { useState } from "react";
import { Pagination } from "./Pagination";
import { Link, useNavigate } from "react-router-dom";
import APIService from "../APIService/APIService";
import HelperService from "../AdditionalHelperMethods/HelperService";
import { BiSolidTimeFive } from "react-icons/bi";

export const FeaturedNews = () => {
  const { featuredPosts } = useAuth();
  const postsPerPage = 4; // Number of posts per page
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // Calculate index range for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = featuredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="flex w-full lg:flex-row flex-col flex-wrap justify-center">
      {currentPosts?.map((singlePost, index) => (
        <div className="lg:w-1/2 w-full flex my-2 px-2" key={index}>
          <div className="flex flex-col w-full bg-white rounded-3xl shadow dark:bg-gray-800 ">
            <div className="flex w-full lg:h-96 h-64">
              <div
                className="w-full  overflow-hidden rounded-t-3xl"
                onClick={() => {
                  navigate(`/post/${singlePost._id}`);
                  HelperService.scrollToTop();
                }}
              >
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
                <p className="px-1">{singlePost.date}</p>
              </div>
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {singlePost.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {HelperService.truncateTitle(singlePost.description, 35)}
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
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="flex w-full justify-center">
        <Pagination
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          totalPosts={featuredPosts.length}
          onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
        />
      </div>
    </div>
  );
};
