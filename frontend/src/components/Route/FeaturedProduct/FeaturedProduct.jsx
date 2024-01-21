import React from "react";
import styles from "../../../styles/styles";
import { productData } from "../../../static/data";
import ProductCard from "../ProductCard/ProductCard";
const FeaturedProduct = () => {
  return (
    <div className={`${styles.section} mt-12`}>
      <div className={`${styles.heading}`}>Featured Products</div>
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px]">
        {productData &&
          productData.map((i, index) => <ProductCard key={index} data={i} />)}
      </div>
    </div>
  );
};

export default FeaturedProduct;
