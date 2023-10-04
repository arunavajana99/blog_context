import { useContext, useEffect } from "react";
import "./App.css";
import Blogs from "./Components/Blogs";
import Header from "./Components/Header";
import Pagination from "./Components/Pagination";
import { AppContext } from "./Context/AppContext";

function App() {
  const { fetchBlogData } = useContext(AppContext);

  useEffect(() => {
    fetchBlogData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Blogs />
      <Pagination />
    </>
  );
}

export default App;
