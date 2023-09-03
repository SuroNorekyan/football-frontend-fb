import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";

export const AdminMainPage = () => {
  const [deleteUrl, setDeleteUrl] = useState("");
  const accessToken = localStorage.getItem("accessToken");
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    console.log(accessToken);
  });
  const handleSubmit = async (values: any) => {
    try {
      const response = await fetch(`${backendUrl}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          title: values.title,
          description: values.description,
          author: values.author,
          img: values.image,
          videoUrl: values.videoUrl,
          carousel: values.carousel,
          sideFeed: values.sideFeed,
          feed: values.feed,
          featured: values.featured,
          analytics: values.analytics,
        }),
      });

      if (response.ok) {
        alert("Post sent successfully!");
      } else {
        // Handle the case of an error
        console.error("Error adding post");
      }
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`${backendUrl}/posts/${deleteUrl}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.ok) {
        alert(`POST ${deleteUrl} deleted successfully!`);
        setDeleteUrl(""); // Clear the delete URL field after successful deletion
      } else {
        alert(`Error deleting post ${deleteUrl}!`);
      }
    } catch (error) {
      console.log("Error deleting the post", deleteUrl);
    }
  };

  return (
    <>
      {accessToken ? (
        <>
          <div className="max-w-md mx-auto bg-white p-8 shadow-md my-8">
            <h2 className="text-xl font-semibold mb-4">Add New Post</h2>
            <Formik
              initialValues={{
                title: "",
                description: "",
                author: "",
                image: "",
                videoUrl: "",
                carousel: false,
                sideFeed: false,
                feed: false,
                featured: false,
                analytics: false,
              }}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="mb-4">
                  <label htmlFor="title" className="block text-sm font-medium">
                    Title
                  </label>
                  <Field
                    type="text"
                    id="title"
                    name="title"
                    className="mt-1 p-2 border rounded w-full"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium"
                  >
                    Description
                  </label>
                  <Field
                    type="text"
                    id="description"
                    name="description"
                    className="mt-1 p-2 border rounded w-full"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="author" className="block text-sm font-medium">
                    Author
                  </label>
                  <Field
                    type="text"
                    id="author"
                    name="author"
                    className="mt-1 p-2 border rounded w-full"
                  />
                  <ErrorMessage
                    name="author"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="image" className="block text-sm font-medium">
                    Image URL
                  </label>
                  <Field
                    type="text"
                    id="image"
                    name="image"
                    className="mt-1 p-2 border rounded w-full"
                  />
                  <ErrorMessage
                    name="image"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="videoUrl"
                    className="block text-sm font-medium"
                  >
                    Video URL
                  </label>
                  <Field
                    type="text"
                    id="videoUrl"
                    name="videoUrl"
                    className="mt-1 p-2 border rounded w-full"
                  />
                  <ErrorMessage
                    name="videoUrl"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* New carousel checkbox */}
                <div className="mb-4 flex flex-row items-center w-full">
                  <label className=" text-sm font-medium flex flex-row items-center ">
                    <Field
                      type="checkbox"
                      name="carousel"
                      className="mr-2 scale-125"
                    />
                    Is Carousel
                  </label>
                  <ErrorMessage
                    name="carousel"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* New sideFeed checkbox */}
                <div className="mb-4">
                  <label className="block text-sm font-medium">
                    <Field
                      type="checkbox"
                      name="sideFeed"
                      className="mr-2 scale-125"
                    />
                    Is sideFeed
                  </label>
                  <ErrorMessage
                    name="sideFeed"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* New feed checkbox */}
                <div className="mb-4">
                  <label className="block text-sm font-medium">
                    <Field
                      type="checkbox"
                      name="feed"
                      className="mr-2 scale-125"
                    />
                    Is feed
                  </label>
                  <ErrorMessage
                    name="feed"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* New featured checkbox */}
                <div className="mb-4">
                  <label className="block text-sm font-medium">
                    <Field
                      type="checkbox"
                      name="featured"
                      className="mr-2 scale-125"
                    />
                    Is featured
                  </label>
                  <ErrorMessage
                    name="featured"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* New analytics checkbox */}
                <div className="mb-4">
                  <label className="block text-sm font-medium">
                    <Field
                      type="checkbox"
                      name="analytics"
                      className="mr-2 scale-125"
                    />
                    Is analytics
                  </label>
                  <ErrorMessage
                    name="analytics"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Add Post
                  </button>
                </div>
              </Form>
            </Formik>
          </div>

          <div className="w-full flex flex-row my-8 justify-center">
            <p className="text-2xl text-center text-red-700">
              USE THIS TO DELETE A POST BASED ON THE ID
            </p>
          </div>

          <div className="max-w-md mx-auto bg-white p-8 shadow-md my-16">
            {/* Form for deleting a post */}
            <h2 className="text-xl font-semibold mb-4">Delete Post</h2>
            <Formik
              initialValues={{
                deleteUrl: "", // Ensure the initial value is set
              }}
              onSubmit={() => handleDelete()}
            >
              <Form>
                <div className="mb-4">
                  <label
                    htmlFor="deleteUrl"
                    className="block text-sm font-medium"
                  >
                    URL to Delete
                  </label>
                  <Field
                    type="text"
                    id="deleteUrl"
                    name="deleteUrl"
                    className="mt-1 p-2 border rounded w-full"
                    value={deleteUrl} // Use the state value here
                    onChange={(e: {
                      target: { value: React.SetStateAction<string> };
                    }) => setDeleteUrl(e.target.value)}
                  />
                  <ErrorMessage
                    name="deleteUrl"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete Post
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </>
      ) : null}
    </>
  );
};
