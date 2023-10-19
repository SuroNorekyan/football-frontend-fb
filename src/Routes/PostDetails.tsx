import React, { useEffect, useState } from "react";
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
import RichTextRenderer from "../Components/RichTextRenderer";
interface PostDetailsProps {
  posts: Post[];
}

const PostDetails: React.FC<PostDetailsProps> = ({ posts }) => {
  const { postId } = useParams<{ postId: string }>();
  const post = posts.find((p) => p._id === postId);
  const parse = require("html-react-parser");
  const regularUrl: string | undefined =
    HelperService.convertRegularUrlToEmbedUrl(post?.videoUrl);
  const formattedDate = post ? HelperService.formatDate(post.date) : "";

  // Ensure that post is defined before attempting to set Open Graph tags
  useEffect(() => {
    if (post) {
      // Dynamically set the document title
      document.title = post.title;

      // Dynamically update Open Graph meta tags based on the post data
      const metaTags = document.head.querySelectorAll("meta");

      metaTags.forEach((tag) => {
        if (tag.getAttribute("property") === "og:title") {
          tag.setAttribute("content", post.title);
        }
        if (tag.getAttribute("property") === "og:image") {
          tag.setAttribute("content", post.img);
        }
      });
    }
  }, [post]);

  return (
    <>
      <Menu />
      <div className="flex flex-row w-full justify-center bg-gray-200  ">
        <div className="flex w-11/12 lg:flex-row flex-col flex-wrap my-4">
          <div className="flex flex-col lg:w-3/5 w-full px-2 rounded-xl ">
            <div className="w-full flex flex-row justify-start items-center px-4 text-xl mt-4">
              <BiSolidTimeFive className="text-2xl text-[#1E293B]" />
              <p className="px-2">{formattedDate}</p>
            </div>
            <div className="w-full flex px-4 text-2xl font-bold my-4">
              {post?.title}
            </div>
            <div className="flex lg:w-full w-full px-2 lg:my-4 overflow-hidden ">
              <div className="rounded-xl overflow-hidden">
                <img src={post?.img} alt={post?.title} />
              </div>
            </div>
            <div
              className="flex lg:w-full w-full px-2 my-8 overflow-hidden "
              style={{ whiteSpace: "pre-line" }}
            >
              {post?.description ? (
                <RichTextRenderer htmlContent={post?.description} />
              ) : null}
            </div>
            {post?.img2 ? (
              <div className="flex lg:w-full w-full px-2 lg:my-4 overflow-hidden ">
                <div className="rounded-xl overflow-hidden">
                  <img src={post?.img2} alt={post?.title} />
                </div>
              </div>
            ) : null}

            {post?.videoUrl ? (
              <div className="flex lg:w-full w-full px-2 my-8 overflow-hidden h-96">
                <iframe
                  width="100%"
                  height="100%"
                  src={regularUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ) : null}
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
            <div className="flex lg:hidden w-full px-2 lg:my-4 justify-start ">
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
