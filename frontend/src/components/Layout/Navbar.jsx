import React from "react";
import styles from "../../styles/styles";
import { navItems } from "../../static/data";
import { Link } from "react-router-dom";
const Navbar = ({ active }) => {
  return (
    <div className={`${styles.noramlFlex}`}>
      {navItems &&
        navItems.map((i, index) => (
          <div key={index}>
            <Link
              to={i.url}
              className={`${
                active === index + 1
                  ? "text-black font-bold font-Gilroy"
                  : "text-gray-500 font-[600] hover:text-black"
              }  px-6 cursor-pointer  font-Gilroy `}
            >
              {i.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
