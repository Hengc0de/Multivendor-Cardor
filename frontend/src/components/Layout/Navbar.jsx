import React from "react";
import styles from "../../styles/styles";
import { navItems } from "../../static/data";
import { Link } from "react-router-dom";
const Navbar = ({ active }) => {
  {
    console.log(active);
  }

  return (
    <div className={`${styles.noramlFlex}`}>
      {navItems &&
        navItems.map((i, index) => (
          <div key={index}>
            <Link
              to={i.url}
              className={`${
                active === index + 1
                  ? "text-[#000000] font-semibold"
                  : "text-gray-500 "
              } pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
            >
              {i.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
