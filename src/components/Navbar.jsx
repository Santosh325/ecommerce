import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
function Navbar() {
  const { cart } = useSelector((state) => state);

  return (
    <div className="flex justify-between w-11/12 max-w-[1200px] mx-auto items-center mb-[100px]">
      <div>
        <NavLink to="/">
          <img
            className="cursor-pointer mt-[6px]"
            src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578"
            alt="logo"
            height={40}
            width={80}
          />
        </NavLink>
      </div>
      <div className="flex space-x-10 items-center text-white">
        <NavLink to="/">
          <p className="cursor-pointer hover:border-b-2 border-white-500">
            Home
          </p>
        </NavLink>
        <NavLink to="/Cart">
          <div className="relative">
            <AiOutlineShoppingCart className="cursor-pointer " />
            {cart.length > 0 ? (
              <span className="absolute bottom-[10px] left-[15px] bg-green-400 rounded-full w-[20px] h-[20px] text-center flex justify-center items-center text-xs">
                {cart.length}
              </span>
            ) : (
              <div></div>
            )}
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
