import React, { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { categoriesData, productData } from "../../static/data";
import { CgProfile } from "react-icons/cg";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import Navbar from "./Navbar.jsx";
import DropDown from "./DropDown.jsx";
const Header = ({ activeheading }) => {
  console.log({ activeheading });
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropdown, setDropDown] = useState(false);
  const handleSearchChange = (e) => {
    const term = e.target.value;
    if (term.length === 0) {
      setSearchData(null);
      setSearchTerm(term);
      return;
    }
    setSearchTerm(term);
    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div>
            <Link to="/">
              <img
                src="./1x/Asset 1.png"
                className="w-20 object-cover"
                alt=""
              />
            </Link>
          </div>
          {/* searchbox */}
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h4-[40px] w-full px-2 font-Gilroy py-2 border-gray-700 border-[2px] rounded-md "
            />
            <AiOutlineSearch className="absolute text-2xl right-3 top-3 cursor-pointer" />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm z-30">
                {searchData &&
                  searchData.map((i, index) => {
                    const d = i.name;
                    const Product_name = d.replace(/\s+/g, "-");
                    return (
                      <Link to={`/product/${Product_name}`} key={index}>
                        <div className=".w-full font-Gilroy flex items-start py-3 px-3 hover:bg-gray-200">
                          <img
                            src={i.image_Url[0].url}
                            alt=""
                            className="w-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                        <hr />
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>
          <div className={`${styles.button}  `}>
            <Link to="/seller">
              <h1 className="text-white flex items-center">
                Become seller <IoIosArrowForward className="ml-1 " />{" "}
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active ? "shadow-sm fixed top-0 left-0 z-50" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-gray-200 h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/* category */}
          <div>
            <div className="relative h-[60px] mt-[10px] w-[270] hidden 1000px:block">
              <BiMenuAltLeft
                size={30}
                onClick={() => setDropDown(!dropdown)}
                className="absolute top-3 left-2 cursor-pointer"
              />
              <button
                onClick={() => setDropDown(!dropdown)}
                className={`h-[100%] w-full flex justify-between font-semibold  items-center px-10 bg-white font-Gilroy text-lg select-none rounded-t-md`}
              >
                {" "}
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                onClick={() => setDropDown(!dropdown)}
                className="absolute right-2 top-5 cursor-pointer"
              />
              {dropdown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          {/* navbar items */}
          <div className={`styles.noraml-flex`}>
            <Navbar active={activeheading} />
          </div>

          <div className={`${styles.noramlFlex}`}>
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                <AiOutlineHeart className="text-gray-600" size={25} />
                <span className="absolute right-[-5px] top-[-5px] rounded-full bg-black text-white w-4 h-4 top right p-0 m-0 font-gilroy text-center text-[12px] leading-tight">
                  0
                </span>
              </div>
            </div>
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                <AiOutlineShoppingCart className="text-gray-600" size={25} />
                <span className="absolute right-[-5px] top-[-5px] rounded-full bg-black text-white w-4 h-4 top right p-0 m-0 font-gilroy text-center text-[12px] leading-tight">
                  0
                </span>
              </div>
            </div>
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                <Link to="/login">
                  <CgProfile className="text-gray-600" size={25} />
                </Link>
                {/* <span className="absolute right-[-5px] top-[-5px] rounded-full bg-black text-white w-4 h-4 top right p-0 m-0 font-gilroy text-center text-[12px] leading-tight">
                  0
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
