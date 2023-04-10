import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const fetchProductItem = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(API_URL);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchProductItem();
  }, []);
  return (
    <div className="grid grid-cols-4 w-11/12 max-w-[1200px] mx-auto gap-x-8 gap-y-8 mt-14">
      {isLoading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        posts.map((post) => <Product key={post.id} post={post} />)
      ) : (
        <div className="flex justify-center items-center">No Data Found</div>
      )}
    </div>
  );
};

export default Home;
