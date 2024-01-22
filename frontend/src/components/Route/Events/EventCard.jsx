import React from "react";
import styles from "../../../styles/styles";
import CountDown from "./CountDown.jsx";
const EventCard = ({ active }) => {
  return (
    <div
      className={`w-full block bg-white  rounded-lg ${
        active ? "unset" : "mb-12"
      }   lg:flex p-3 gap-2 `}
    >
      <div className="w-full  m-auto">
        <img
          src="https://car-images.bauersecure.com/wp-images/164826/1752x1168/best_electric_luxury_car_bmw_i7.jpg?mode=max&quality=90&scale=down"
          alt=""
        />
      </div>
      <div className="w-full flex flex-col justify-center p-3">
        <h2 className={`text-2xl font-bold my-3`}>Bmw X7 (G07)</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sed
          harum ea labore ex aperiam quos cumque iste fugiat assumenda optio
          error omnis aspernatur consequuntur itaque vero facere corporis
          exercitationem nihil, in iure odio molestiae iusto. Accusamus suscipit
          inventore vitae? Magni, amet. Magni laudantium quasi dicta, at
          deserunt molestias harum?
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              $123
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] ">$123</h5>
          </div>
          <span className="pr-3 font-[400] text-sm text-gray-500">
            120 sold
          </span>
        </div>
        <CountDown />
      </div>
    </div>
  );
};

export default EventCard;
