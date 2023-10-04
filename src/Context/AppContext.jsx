import { createContext, useState } from "react";
import { BaseUrl } from "../BaseUrl";
import axios from "axios";

// step 1: create context
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  const blogData = async (page) => {
    try {
      const response = await axios.get(`${BaseUrl}?page=${page}`);
      return response.data;
      //console.log(response)
    } catch (error) {
      throw error.response.data;
    }

    // setLoading(true);
    // let url = `${BaseUrl}?page=${page}`;
    // try {
    //   const result = await fetch(url);
    //   const data = await result.json();
    //   console.log(data);
    //   // setPage(data?.page);
    //   // setPosts(data?.posts);
    //   // setTotalPages(data?.totalPages);
    // } catch (e) {
    //   console.log("Error");
    //   // setPage(1);
    //   // setPosts([]);
    //   // setTotalPages(null);
    // }
    // setLoading(false);
  };

  const fetchBlogData = (page) => {
    setLoading(true);
    setPage(page);
    blogData(page)
      .then((res) => {
        console.log(res);
        setPage(res.page);
        setPosts(res.posts);
        setTotalPage(res.totalPages);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  const handlePageChange = (page) => {
    setPage(page);
    fetchBlogData(page);
  };

  const data = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPage,
    setTotalPage,
    fetchBlogData,
    handlePageChange,
  };
  // step 2: providing context
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
