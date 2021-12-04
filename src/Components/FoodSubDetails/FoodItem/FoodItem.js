import React, { useEffect, useRef } from "react";

import styles from "./FoodItem.module.css";
import { ReactComponent as VegIcon } from "../../../Assets/Home/VegIcon.svg";

function FoodItem({ data }) {
  const vegIconRef = useRef(123);

  useEffect(() => {
    let childNodes = vegIconRef.current.childNodes;
    for (let i = 0; i < childNodes.length; i++) {
      if (data.type === "veg") {
        childNodes[i].setAttribute("fill", "var(--pure-green)");
      } else {
        childNodes[i].setAttribute("fill", "var(--red)");
      }
    }
  }, [data.type]);

  return (
    <div className={styles.FoodItemContainer}>
      <img src={data.image} alt="food-item" className={styles.FoodItemPhoto} />
      <div className={styles.FoodItemDetails}>
        <p className={styles.FoodItemName}>{data.name}</p>
        <div
          className={styles.FoodItemTypeWrapper}
          style={
            data.type === "veg"
              ? { color: "var(--pure-green)" }
              : { color: "var(--red)" }
          }
        >
          <VegIcon ref={vegIconRef} className={styles.FoodItemTypeIcon} />
          <p className={styles.FoodItemType}>{data.type}</p>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
