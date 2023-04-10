import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="flex justify-between items-between w-11/12 max-w-[1200px] h-[80vh] mt-[60px] mx-auto gap-x-10 ">
      {cart.length > 0 ? (
        <div className="flex gap-x-20">
          <div className="w-[50%]">
            {cart.map((item, index) => (
              <CartItem key={index} item={item} itemIndex={index} />
            ))}
          </div>
          <div className="flex flex-col space-y-60 justify-start">
            <div>
              <p className="text-green-700 text-2xl font-bold">Your Cart</p>
              <div className="text-green-700 text-3xl font-bold">
                <h1>Summary</h1>
              </div>
              <p className="font-bold text-[16px] mt-3">
                <span>Total Items: {cart.length}</span>
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold text-[16px]"> Total Amount: </span>
                <span className="font-bold text-[18px]">
                  $ {totalAmount.toFixed(2)}
                </span>
              </p>
              <button className="bg-green-700 text-white py-2 px-8 font-bold rounded-md w-[320px] mt-4">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[80vh] w-11/12 max-w-[1200px] flex justify-center items-center flex-col mx-auto">
          <h1 className="w-full mx-auto text-center font-bold text-2xl">
            No Item Found
          </h1>
          <NavLink to="/">
            <button className="border bg-green-400 text-white font-bold py-4 px-8 mt-[14px] rounded-md hover:bg-[#f5f5f5] hover:text-green-400 hover:border-green-400 hover:border-[3px]">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
