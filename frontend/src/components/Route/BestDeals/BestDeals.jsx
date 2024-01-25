import React, { useState } from "react";
import { useEffect } from "react";
import { productData } from "../../../static/data";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard.jsx";
const BestDeals = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const d =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);
    const firstFive = d.slice(0, 5);
    setData(firstFive);
  }, []);
  return (
    <div className={`${styles.section}`}>
      {/* className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px]"      <div className={`${styles.heading}`}>Best Deals</div> */}
      <div className="mb-12">
        {data && data.map((i, index) => <ProductCard key={index} data={i} />)}
      </div>
    </div>
  );
};

export default BestDeals;
