import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Post } from "../models/models";
import APIService from "../APIService/APIService";
import { useNavigate } from "react-router-dom";

interface AuthContextProps {
  posts: Post[];
  carouselPosts: Post[];
  sideFeedPosts: Post[];
  feedPost: Post[];
  featuredPosts: Post[];
  analyticsPosts: Post[];
  handleLogin: (
    values: { username: string; password: string },
    navigate?: (path: string) => void,
  ) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [carouselPosts, setCarouselPosts] = useState<Post[]>([]);
  const [sideFeedPosts, setSideFeedPosts] = useState<Post[]>([]);
  const [feedPost, setFeedPosts] = useState<Post[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([]);
  const [analyticsPosts, setAnalyticsPosts] = useState<Post[]>([]);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = APIService.fetchPosts(
          `${backendUrl}/posts`,
          "GET",
        );
        const carouselResponse = APIService.fetchPosts(
          `${backendUrl}/posts/carousel`,
          "GET",
        );
        const sideFeedResponse = APIService.fetchPosts(
          `${backendUrl}/posts/sideFeed`,
          "GET",
        );
        const feedResponse = APIService.fetchPosts(
          `${backendUrl}/posts/feed`,
          "GET",
        );
        const featuredResponse = APIService.fetchPosts(
          `${backendUrl}/posts/featured`,
          "GET",
        );
        const analyticsPostsResponse = APIService.fetchPosts(
          `${backendUrl}/posts/analytics`,
          "GET",
        );
        setPosts(await postsResponse);
        setCarouselPosts(await carouselResponse);
        setSideFeedPosts(await sideFeedResponse);
        setFeedPosts(await feedResponse);
        setFeaturedPosts(await featuredResponse);
        setAnalyticsPosts(await analyticsPostsResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleLogin = async (
    values: { username: string; password: string },
    navigate?: (path: string) => void,
  ) => {
    try {
      const response = await fetch(`${backendUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(await data);
        localStorage.setItem("accessToken", data.access_token);
        if (navigate) {
          navigate("/admin/main");
        }
      } else {
        // Handle the case of incorrect credentials
        alert("The provided user credentials are incorrect.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        posts,
        carouselPosts,
        sideFeedPosts,
        feedPost,
        featuredPosts,
        analyticsPosts,
        handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
