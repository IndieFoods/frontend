import React from "react";

import styles from "./FoodItem.module.css";
import VegIcon from "./../../VegIcon/index";

function FoodItem({ data }) {

  return (
    <div className={styles.FoodItemContainer}>
      <img src={data.image} alt="food-item" className={styles.FoodItemPhoto} />
      <div className={styles.FoodItemDetails}>
        <p className={styles.FoodItemName}>{data.name}</p>
        <div
          className={styles.FoodItemTypeWrapper}
        >
          <VegIcon isVeg={data.isVeg} isDefault />
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
