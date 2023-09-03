import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostDetails from "./Routes/PostDetails";
import { useAuth } from "./Context/AuthContext";
import { MainPage } from "./Routes/MainPage";
import { PostByDate } from "./Routes/PostByDate";
import { Login } from "./Routes/Login";
import { AdminMainPage } from "./Routes/AdminMainPage";
import { AllPosts } from "./Routes/AllPosts";
import { AnalyticsPosts } from "./Routes/AnalyticsPosts";

function App() {
  const { posts } = useAuth();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post/:postId" element={<PostDetails posts={posts} />} />
        <Route path="/posts/:postDate" element={<PostByDate posts={posts} />} />
        <Route path="/posts" element={<AllPosts allPosts={posts} />} />
        <Route
          path="/analytics"
          element={<AnalyticsPosts allPosts={posts} />}
        />
        <Route path="admin/login" element={<Login />} />
        <Route path="/admin/main" element={<AdminMainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
