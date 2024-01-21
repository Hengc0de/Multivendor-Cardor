import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { footerProductLinks, footercompanyLinks } from "../../../static/data";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-black py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          Subscribe to <span className="text-blue-700">Cardor</span> to get
          updates from us
        </h1>
        <div>
          <input
            type="text"
            required
            placeholder="Enter your email..."
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded  px-2 focus:outline-none"
          />
          <button className="text-white bg-blue-700 px-5 duration-300 py-2.5 hover:bg-blue-500 rounded-md md:w-auto w-full">
            Subscribe
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center ">
          <img
            className="flex items-center rounded-md p-2 bg-white"
            src="./1x/Asset 1.png"
            alt=""
            // style={{ filter: "brightness(0) invert(1)" }}
          />
          <br />
          <p>World of amazing cars.</p>
          <div className="flex items-center mt-[15px] ">
            <AiOutlineFacebook
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiOutlineTwitter
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiOutlineInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiOutlineYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div>
        </ul>
        <ul className="text-center sm:text-start">
          <h1 className="pb-1 font-semibold">Company</h1>
          {footerProductLinks.map((link) => (
            <li key={link.name}>
              <Link
                className="text-gray-400 hover:text-blue-700 duration-300 text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className=",b-1 font-semibold">Car Types</h1>
          {footercompanyLinks.map((link) => (
            <li key={link.name}>
              <Link
                className="text-gray-400 hover:text-blue-700 duration-300 text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 items-center  sm:grid-cols-2  lg:grid-cols-3 gap-10 text-center pt-2  text-gray-400 text-sm ">
        <span> &copy; 2024 BunHeng. All rights reserved.</span>
        <span> Terms - Privacy Policy</span>
        <img
          className="w-[250px] rounded-md items-center"
          style={{ alignSelf: "center", margin: "auto" }}
          src="https://t4.ftcdn.net/jpg/04/19/95/85/360_F_419958510_5RWBOEdL8zk7f4YNv7jnpsnnY2yEbekX.jpg "
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
