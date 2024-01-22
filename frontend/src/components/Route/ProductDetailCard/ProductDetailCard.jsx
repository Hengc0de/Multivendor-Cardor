import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../../styles/styles";
import {
  AiOutlineMessage,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
const ProductDetailCard = ({ setOpen, data }) => {
  const handleMessageSubmit = () => {};
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(false);
  const decrementCount = () => {
    if (count > -1 && count != 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };
  return (
    <div className="bg-[#fff]">
      {data ? (
        <div className="fixed w-full h-screen top-0 left-0 bg-[#00000036] flex z-40 items-center justify-center">
          <div className="w-[90%] gap-2 800px:w-[70%] h-[90vh] overflow-y-scroll 800px:h-[75vh] bg-white rounded-md shadow-sm relative p-4">
            <RxCross1
              size={30}
              className="absolute right-3 top-3 z-50"
              onClick={() => setOpen(false)}
            />
            <div className="block w-full gap-4 mt-5 p-4 800px:flex">
              <div className="w-full  800px:w-1/2">
                <img src={data.image_Url[0].url} alt="" />
                <div className="flex items-center">
                  <img
                    className="w-[50px] h-[50px] rounded-full mr-2"
                    src={data.shop.shop_avatar.url}
                    alt=""
                  />
                  <div>
                    <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                    <h5 className="pb-3 text-sm">
                      ({data.shop.ratings}) Ratings
                    </h5>
                  </div>
                </div>
                <div
                  className={`${styles.button} bg-[#000] mt-4 rounded-md h-11 text-white `}
                  onclick={handleMessageSubmit}
                >
                  <span className="text-white flex items-center">
                    Send Message <AiOutlineMessage className="ml-1" />
                  </span>
                </div>
                <h5 className="text-sm text-gray-500 mt-5 ">
                  {data.total_sell} Sold Out
                </h5>
              </div>
              <div className="w-full 800px:w-1/2 pt-5 pl-[5px] pr-[5px]">
                <h1 className={`${styles.productTitle} mb-5`}>{data.name}</h1>
                <p>{data.description}</p>
                <div className="flex pt-5">
                  <h4 className={`${styles.productDiscountPrice} mb-5`}>
                    ${data.discount_price}
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {data.price ? "$" + data.price : null}
                  </h3>
                </div>
                <div className="flex items-center mt-5 justify-between pr-3">
                  <div>
                    <button
                      onClick={decrementCount}
                      className="bg-black text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out "
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[9px]">
                      {count}
                    </span>
                    <button
                      onClick={() => setCount((prev) => prev + 1)}
                      className="bg-black text-white font-bold rounded-r px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out "
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        onClick={() => setClick(!click)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                        className="cursor-pointer "
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        onClick={() => setClick(!click)}
                        color={click ? "red" : "#333"}
                        title="Add to wishlist"
                        className="cursor-pointer  "
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`${styles.button} mt-6 rounded h-11 flex items-center`}
                >
                  <span className="text-white flex items-center">
                    Add to cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetailCard;
