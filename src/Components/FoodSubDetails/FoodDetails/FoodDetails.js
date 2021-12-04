import React, { useState } from "react";

import styles from "./FoodDetails.module.css";

import tempData from "../../TempData";

import { data } from "../../StaticData";
import FoodItem from "../FoodItem/FoodItem";
import NavigationList from "../../NavigationList";

function FoodDetails() {

  const foodDetails = tempData.foodData;
  const foodCategories = data.foodSubDetails.foodCategories;
  const [activeFoodCategory, setActiveFoodCategory] = useState(
    foodCategories[0]
  );

  const handleCategoryClick = (category) => {
    setActiveFoodCategory(category);
  };

  const foodList = foodDetails[activeFoodCategory].map((foodItem, index) => {
    return (
      <div key={index} className={styles.FoodCatogery}>
        <FoodItem data={foodItem} />
      </div>
    );
  });

  return (
    <>
      <div className={styles.FoodDetailsWrapper}>
        <NavigationList activeCategory={activeFoodCategory} onCategoryChange={handleCategoryClick} categories={foodCategories} />
        <div className={styles.FoodDetails}>{foodList}</div>
      </div>
    </>
  );
}

export default FoodDetails;
