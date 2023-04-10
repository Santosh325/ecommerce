import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed from Cart");
  };

  return (
    <div className="flex flex-row space-x-10 my-10 border:bottom border:red-400 border-b-2 min-h-[20px]">
      <div className="min-w-[200px] mb-10 ">
        <img
          src={item.image}
          alt="cart item"
          className="object-cover h-[200px] object-fit"
        />
      </div>
      <div>
        <h1 className="font-bold">
          {item.title.split(" ").slice(0, 4).join("") + "..."}
        </h1>
        <h4>
          {item.description.length > 40
            ? item.description.slice(0, 140) + " ..."
            : item.description}
        </h4>
        <div className="flex justify-between mt-10 ">
          <p>$ {item.price}</p>
          <div
            onClick={removeFromCart}
            className="w-[32px] h-[32px] bg-red-100 flex items-center justify-center rounded-full cursor-pointer"
          >
            <MdDeleteForever />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
