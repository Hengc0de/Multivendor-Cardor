import React from "react";
import styles from "../../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 my-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            className="w-[150px] h-[1/2] object-contain "
            src="https://i.ebayimg.com/images/g/rP4AAOSwiMRbDbgM/s-l1600.jpg"
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            className="w-[150px] h-[1/2] object-contain "
            src="https://i.ebayimg.com/images/g/rP4AAOSwiMRbDbgM/s-l1600.jpg"
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            className="w-[150px] h-[1/2] object-contain "
            src="https://i.ebayimg.com/images/g/rP4AAOSwiMRbDbgM/s-l1600.jpg"
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            className="w-[150px] h-[1/2] object-contain "
            src="https://i.ebayimg.com/images/g/rP4AAOSwiMRbDbgM/s-l1600.jpg"
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            className="w-[150px] h-[1/2] object-contain "
            src="https://i.ebayimg.com/images/g/rP4AAOSwiMRbDbgM/s-l1600.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
