import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Pagination } from "./Pagination";
import { useAuth } from "../Context/AuthContext";
import APIService from "../APIService/APIService";
import HelperService from "../AdditionalHelperMethods/HelperService";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsArrowUpRightCircle, BsArrowUpRightCircleFill } from "react-icons/bs";

export const Feed = () => {
  const { feedPost } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const myDivRef = useRef<HTMLDivElement | null>(null);

  const scrollToDiv = () => {
    if (myDivRef.current) {
      myDivRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const postsPerPage = 10;

  const reversedFeedPost = [];
  for (let i = feedPost.length - 1; i >= 0; i--) {
    reversedFeedPost.push(feedPost[i]);
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = reversedFeedPost.slice(
    indexOfFirstPost,
    indexOfLastPost,
  );

  return (
    <div
      className="w-full flex flex-col items-start py-2 rounded-lg"
      id="myDiv"
      ref={myDivRef}
    >
      {currentPosts.map((post, index) => (
        <div
          key={index}
          className="w-full flex h-44 lg:h-40 flex-row shadow text-white rounded-xl overflow-hidden my-2 duration-100 hover:scale-105 hover:shadow-2xl cursor-pointer"
          onClick={() => {
            navigate(`/post/${post._id}`);
            HelperService.scrollToTop();
          }}
        >
          <div className="flex w-1/3 bg-[#1E293B] h-full lg:h-40 overflow-hidden">
            <div className="w-full justify-center items-center flex bg-[#1E293B] ">
              <img
                src={post.img}
                alt={`img${index + 1}`}
                className="w-full h-full object-cover min-h-full"
              />
            </div>
          </div>

          <div className="flex w-2/3 bg-[#1E293B] shadow">
            <div className="flex flex-col w-full px-4 py-3">
              <div className="flex flex-row items-center w-full  text-xs">
                <BiSolidTimeFive className="text-lg text-white" />
                <p className="px-1">{HelperService.formatDate(post.date)}</p>
              </div>
              <div className="flex w-full  font-bold text-md">{post.title}</div>
              {/*<div className="flex w-full" key={index}>*/}
              {/*  {HelperService.truncateTitle(post.description, 10)}*/}
              {/*</div>*/}
              <div className="flex w-full mt-2 ">{post.author}</div>
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
      <div className="w-full flex flex-col items-center lg:my-4">
        <button
          className="flex w-full justify-center items-center my-4 text-2xl py-2 "
          onClick={() => {
            navigate("/posts");
          }}
        >
          <p className="px-2">Տեսնել ավելին</p>
          <BsArrowUpRightCircle />
        </button>

        <div className="flex w-full justify-center" onClick={scrollToDiv}>
          <Pagination
            currentPage={currentPage}
            postsPerPage={postsPerPage}
            totalPosts={reversedFeedPost.length}
            onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
          />
        </div>
      </div>
    </div>
  );
};
