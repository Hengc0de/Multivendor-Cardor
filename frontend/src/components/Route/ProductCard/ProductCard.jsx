import React, { useState } from "react";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineStar,
  AiOutlineHeart,
  AiOutlineEye,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import ProductDetailCard from "../ProductDetailCard/ProductDetailCard.jsx";
const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const d = data.name;
  const product_name = d.replace(/\s+/g, "-");
  return (
    <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
      <Link to={`product/${product_name}`}>
        <img
          className="w-full h-[170px] object-contain"
          src={data.image_Url[0].url}
          alt=""
        />
      </Link>
      <Link to={"/"}>
        <h5 className={` text-blue-700 font-[300] py-3`}>{data.shop.name}</h5>
      </Link>
      <Link to={`product/${product_name}`}>
        <h4 className="pb-3 font-[500]">
          {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
        </h4>
        <div className="flex">
          {/* <AiOutlineStar className="" /> */}
          <AiFillStar className="mr-2" color="gold" />
          <AiFillStar className="mr-2" color="gold" />
          <AiFillStar className="mr-2" color="gold" />
          <AiFillStar className="mr-2" color="gold" />
          <AiOutlineStar className="mr-2" color="gold" />
        </div>
        <div className="py-3 flex items-center justify-between">
          <div className="flex">
            <h5 className={`${styles.productDiscountPrice}`}>
              ${data.price === 0 ? data.price : data.discount_price}
            </h5>
            <h4 className={`${styles.price}`}>
              {data.price ? "$" + data.price : null}
            </h4>
          </div>
          <span className="font-[400] text-gray-500 text-sm text-[17px]">
            {data.total_sell} Sold
          </span>
        </div>
      </Link>
      {/* side options */}

      <div>
        {click ? (
          <AiFillHeart
            size={30}
            onClick={() => setClick(!click)}
            color={click ? "red" : "#333"}
            title="Remove from wishlist"
            className="cursor-pointer p-1 bg-white rounded-md absolute z-10 right-2 top-5"
          />
        ) : (
          <AiOutlineHeart
            size={30}
            onClick={() => setClick(!click)}
            color={click ? "red" : "#333"}
            title="Add to wishlist"
            className="cursor-pointer p-1 bg-white rounded-md z-10 absolute right-2 top-5"
          />
        )}
        <AiOutlineEye
          size={30}
          onClick={() => setOpen(!open)}
          color={"#333"}
          title="Quick View"
          className="cursor-pointer p-1 bg-white rounded-md z-10 absolute right-2 top-14"
        />
        <AiOutlineShoppingCart
          size={30}
          onClick={() => setOpen(!open)}
          color={"#444"}
          title="Add to cart"
          className="cursor-pointer p-1 bg-white rounded-md z-10 absolute right-2 top-24"
        />
        {open ? <ProductDetailCard setOpen={setOpen} data={data} /> : null}
      </div>
    </div>
  );
};

export default ProductCard;
