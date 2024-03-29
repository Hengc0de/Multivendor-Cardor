import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";

const DropDown = ({ categoriesData, setDropDown }) => {
  const navigate = useNavigate();
  const submitHandle = (i) => {
    navigate(`/products?category=${i.title}`);
    setDropDown(false);
    window.location.reload();
  };
  return (
    <div className="pb-4 w-[270px] bg-white absolute z-30 rounded-b-md shadow-sm ">
      {categoriesData &&
        categoriesData.map((i, index) => (
          <div
            key={index}
            className={`${styles.noramlFlex} hover:bg-gray-200 cursor-pointer`}
            onClick={() => submitHandle(i)}
          >
            <img
              src={i.image_Url}
              className=" w-[25px] h-[25px] object-contain ml-[10px] select-none"
              //   style={{
              //     width: "25px",
              //     height: "25px",
              //     objectFit: "contain",
              //     marginLeft: "10px",
              //     userSelect: "none",
              //   }}
              alt="img"
            />
            <h3 className="m-3 font-medium font-sans cursor-pointer select-none ">
              {i.title}
            </h3>
          </div>
        ))}
    </div>
  );
};

export default DropDown;
