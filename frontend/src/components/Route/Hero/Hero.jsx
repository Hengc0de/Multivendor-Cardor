import React from "react";
import styles from "../../../styles/styles";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full flex-col items-center  bg-no-repeat flex pt-20`}
      style={{
        backgroundImage:
          "url(https://preview.free3d.com/img/2020/02/2374253368823514478/cj9v4mfe.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`${styles.section} text-center flex-col flex items-center w-[90$] 800px:w-[60%]`}
      >
        <h1
          className={`text-[35px] text-white leading-[1.2] 800px:text-[60px] font-Gilroy font-bold capitalize`}
        >
          Discover your best ride.
        </h1>
        <p className="pt-5 text-white text-[16px] font-Gilroy font-[400] shadow-xl">
          Best car marketplace collection for car enthusiast, Cardor .
        </p>
        <div className={`${styles.button} flex items-center mt-8 `}>
          <Link to="/products">
            <h1 className="text-white flex items-center">Shop now </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
