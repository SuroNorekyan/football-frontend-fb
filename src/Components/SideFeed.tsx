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

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sideFeedPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="w-full flex flex-col items-center py-2 rounded-lg border-gray-300 border-[.5px] ">
      {currentPosts.map((post, index) => (
        <div
          key={index}
          className="w-11/12 flex flex-row text-white rounded-xl overflow-hidden my-2 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex w-1/3 bg-[#1E293B] h-32 overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              onClick={() => {
                navigate(`/post/${post._id}`);
              }}
            >
              <img
                src={post.img}
                alt={`img${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex w-2/3 bg-[#1E293B]  shadow">
            <div className="flex flex-col w-full border-2 border-black px-4 justify-center">
              <div className="flex flex-row items-center w-full text-xs">
                <BiSolidTimeFive className="text-md text-white" />
                <p className="px-1">{post.date}</p>
              </div>
              <div className="flex w-full text-sm font-bold">{post.title}</div>
              <div className="flex w-full text-xs ">
                {HelperService.truncateTitle(post.description, 15)}
              </div>
              <div className="flex w-full text-sm ">{post.author}</div>
              <Link
                to={`/post/${post._id}`}
                className="text-blue-500 hover:underline"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      ))}

      <Pagination
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalPosts={sideFeedPosts.length}
        onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
      />
    </div>
  );
};
