import React, { useState } from "react";

import styles from "./FoodDetails.module.css";

import { data } from "../../StaticData";
import FoodItem from "../FoodItem/FoodItem";
import NavigationList from "../../NavigationList";

function FoodDetails({ menuData }) {
  const foodCategories = data.foodSubDetails.foodCategories;

  const [activeFoodCategory, setActiveFoodCategory] = useState(
    foodCategories[0]
  );

  const handleCategoryClick = (category) => {
    setActiveFoodCategory(category);
  };

  const foodList = menuData
    ?.filter((food) => food.type === activeFoodCategory)
    .map((foodItem, index) => {
      return (
        <div key={index} className={styles.FoodCatogery}>
          <FoodItem data={foodItem} />
        </div>
      );
    });

  return (
    <>
      <div className={styles.FoodDetailsWrapper}>
        <NavigationList
          activeCategory={activeFoodCategory}
          onCategoryChange={handleCategoryClick}
          categories={foodCategories}
        />
        <div className={styles.FoodDetails}>{foodList}</div>
      </div>
    </>
  );
}

export default FoodDetails;
