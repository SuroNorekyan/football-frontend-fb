import { Post } from "../models/models";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Menu } from "../Components/Menu";
import Footer from "../Components/Footer";
import { BiSolidTimeFive } from "react-icons/bi";
import HelperService from "../AdditionalHelperMethods/HelperService";
import { Pagination } from "../Components/Pagination";

interface PostByDateProps {
  posts: Post[];
}

export const PostByDate: React.FC<PostByDateProps> = ({ posts }) => {
  const { postDate } = useParams<{ postDate: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  console.log("Post Date from URL:", postDate);

  if (!postDate) {
    console.log("Invalid date parameter");
    return <div>Invalid date parameter</div>;
  }

  const formattedPostDate = new Date(postDate);

  console.log("Formatted Post Date:", formattedPostDate);

  const matchingPosts = posts.filter((p) => {
    const postDateWithoutTime = new Date(p.date).toDateString();
    const formattedPostDateWithoutTime = formattedPostDate.toDateString();
    return postDateWithoutTime === formattedPostDateWithoutTime;
  });

  if (matchingPosts.length === 0) {
    console.log("No matching posts");
    return <div>Post not found</div>;
  }

  const postsPerPage = 9;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = matchingPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Menu />
      <div className="w-full flex flex-row flex-wrap my-4 justify-center">
        <div className="w-11/12 flex flex-row flex-wrap px-0 lg:px-0 justify-center ">
          {currentPosts.map((singlePost) => (
            <div
              key={singlePost._id}
              className="w-full lg:w-1/4 flex flex-col border-[.5px] border-gray-300 rounded-xl mx-2 my-4 p-2
              duration-100 hover:scale-105 hover:shadow-2xl"
              onClick={() => {
                navigate(`/post/${singlePost._id}`);
                HelperService.scrollToTop();
              }}
            >
              <div className="w-full flex rounded-xl overflow-hidden lg:h-56 h-64 ">
                <img
                  src={singlePost.img}
                  className="w-full h-full object-cover min-h-full"
                  alt={singlePost.title}
                />
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full flex flex-row items-center justify-start">
                  <BiSolidTimeFive className="text-md text-[#1E293B]" />
                  <p className="px-1">
                    {HelperService.formatDate(singlePost.date)}
                  </p>
                </div>
                <div className="w-full flex flex-row font-semibold">
                  {singlePost.title}
                </div>
                <div className="w-full flex flex-row">
                  {HelperService.truncateTitle(singlePost.description, 15)}
                </div>
                <div className="w-full flex flex-row">
                  <Link
                    to={`/post/${singlePost._id}`}
                    className="text-blue-500 hover:underline"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <div className="w-full flex flex-row justify-center">
            <Pagination
              currentPage={currentPage}
              postsPerPage={postsPerPage}
              totalPosts={matchingPosts.length}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
