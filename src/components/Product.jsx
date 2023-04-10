import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/cartSlice";

import toast from "react-hot-toast";
const Product = ({ post }) => {
  const title = post.title;
  const price = post.price;
  const description = post.description;
  const imageUrl = post.image;

  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item Added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("item Removed from Cart");
  };

  return (
    <div className="grid shadow-lg grid-template-column mx-auto max-w-6xl space-y-6 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-2 rounded-md cursor-pointer">
      <div className="title text-md font-bold">
        <p>{title.split(" ").slice(0, 3).join(" ") + " ..."}</p>
      </div>
      <div className="description text-sm ">
        <p>{description.split(" ").slice(0, 12).join(" ") + " ..."}</p>
      </div>
      <div className="imageSection flex justify-center items-center  h-[200px]">
        <img
          src={imageUrl}
          alt="img"
          className="object-cover object-fit h-full"
        />
      </div>
      <div className="flex justify-between mt-4">
        <p className="font-[800] text-sm text-green-600">${price}</p>
        <div>
          {cart.some((p) => p.id === post.id) ? (
            <button
              onClick={removeFromCart}
              className="border border-black px-[4px] py-[3px] text-[0.75rem] mr-[6px] rounded-sm bg-[#dcdcdc]"
            >
              Remove Item
            </button>
          ) : (
            <button
              onClick={addToCart}
              className="border border-black px-[4px] py-[3px] text-[0.75rem] mr-[6px] rounded-sm"
            >
              Add Item
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
