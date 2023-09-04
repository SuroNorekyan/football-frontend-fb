import React from "react";
import { useParams } from "react-router-dom";
import { Post } from "../models/models";
import { SideFeed } from "../Components/SideFeed";
import { Menu } from "../Components/Menu";
import { FeaturedNews } from "../Components/FeaturedNews";
import Footer from "../Components/Footer";
import HelperService from "../AdditionalHelperMethods/HelperService";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Feed } from "../Components/Feed";

interface PostDetailsProps {
  posts: Post[];
}

const PostDetails: React.FC<PostDetailsProps> = ({ posts }) => {
  const { postId } = useParams<{ postId: string }>();
  const post = posts.find((p) => p._id === postId);
  let regularUrl: string | undefined;

  if (!post) {
    console.log(postId);
    return <div>Post not found</div>;
  }
  if (post.videoUrl) {
    regularUrl = HelperService.convertToEmbedUrl(post.videoUrl);
  }

  return (
    <>
      <Menu />
      <div className="flex flex-row w-full justify-center bg-gray-200  ">
        <div className="flex w-11/12 lg:flex-row flex-col flex-wrap my-4">
          <div className="flex flex-col lg:w-3/5 w-full px-2 rounded-xl ">
            <div className="w-full flex flex-row justify-start items-center px-4 text-xl mt-4">
              <BiSolidTimeFive className="text-2xl text-[#1E293B]" />
              <p className="px-2">{post.date}</p>
            </div>
            <div className="w-full flex px-4 text-2xl font-bold my-4">
              {post.title}
            </div>
            <div className="flex lg:w-full w-full px-2 lg:my-4 overflow-hidden ">
              <div className="rounded-xl overflow-hidden">
                <img src={post.img} alt={post.title} />
              </div>
            </div>
            <div className="flex lg:w-full w-full px-2 my-8 overflow-hidden ">
              {post.description}
            </div>
            <div className="flex lg:w-full w-full px-2 my-8 overflow-hidden h-96">
              {post.videoUrl ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={regularUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <p className="text-gray-500 mt-4">
                  No video content is available for this post.
                </p>
              )}
            </div>
          </div>
          <div className="hidden lg:w-2/5 w-full px-2 lg:my-0 lg:flex flex-col">
            <SideFeed postsPerPage={10} />
            <button className="flex w-full justify-center">
              <p className="px-2">Տեսնել ավելին</p>
              <BsArrowUpRightCircle />
            </button>
            <div className="flex w-full justify-center ">
              <div className="w-full flex h-44 border-2 border-black rounded-xl"></div>
            </div>
          </div>

          <div className="w-full flex ">
            {" "}
            <div className="flex lg:w-full w-full px-2 lg:my-4 justify-start ">
              <Feed />
            </div>
          </div>
          <div className="w-full my-16 ">
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

export default PostDetails;
