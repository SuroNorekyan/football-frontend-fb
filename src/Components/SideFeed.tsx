import React, { useState } from "react";
import { Pagination } from "./Pagination";
import { useAuth } from "../Context/AuthContext";
import APIService from "../APIService/APIService";
import { Link, useNavigate } from "react-router-dom";
import HelperService from "../AdditionalHelperMethods/HelperService";
import { BiSolidTimeFive } from "react-icons/bi";

interface SideFeedProps {
  postsPerPage: number;
}

export const SideFeed: React.FC<SideFeedProps> = ({ postsPerPage }) => {
  const { sideFeedPosts } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const reversedSideFeed = [];
  for (let i = sideFeedPosts.length - 1; i >= 0; i--) {
    reversedSideFeed.push(sideFeedPosts[i]);
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = reversedSideFeed.slice(
    indexOfFirstPost,
    indexOfLastPost,
  );

  return (
    <div className="w-full flex flex-col items-center py-2 rounded-lg border-gray-300 border-[.5px] ">
      {currentPosts.map((post, index) => (
        <div
          key={index}
          className="w-11/12 flex h-40 flex-row shadow text-white rounded-xl overflow-hidden my-2 duration-100 hover:scale-105 hover:shadow-2xl cursor-pointer"
          onClick={() => {
            navigate(`/post/${post._id}`);
            HelperService.scrollToTop();
          }}
        >
          <div className="flex w-1/3 bg-[#1E293B] h-full lg:h-40 overflow-hidden">
            <div className="w-full justify-center items-center flex bg-[#1E293B]">
              <img
                src={post.img}
                alt={`img${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex w-2/3 bg-[#1E293B] shadow">
            <div className="flex flex-col w-full px-4 py-3">
              <div className="flex flex-row items-center w-full  text-xs">
                <BiSolidTimeFive className="text-lg text-white" />
                <p className="px-1">{HelperService.formatDate(post.date)}</p>
              </div>
              <div className="flex w-full  font-bold">{post.title}</div>
              {/*<div className="flex w-full" key={index}>*/}
              {/*  {HelperService.truncateTitle(post.description, 15)}*/}
              {/*</div>*/}
              <div className="flex w-full mt-4 ">{post.author}</div>
              {/* Read more button with Link */}
              <Link
                to={`/post/${post._id}`}
                className="text-blue-500 hover:underline"
              >
                Ավելին
              </Link>
            </div>
          </div>
        </div>
      ))}

      <Pagination
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalPosts={reversedSideFeed.length}
        onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
      />
    </div>
  );
};
