import React, { useState, useEffect } from "react";

import styles from "./ChefHomeLeftSec.module.css";

import IndividualOrderDetail from "../IndividualOrderDetail";
import NavigationList from "../../NavigationList";
import { data } from "../../StaticData";
import tempData from "../../TempData";

function ChefHomeLeftSec({ ordersData }) {
  const foodCategories = data.foodSubDetails.foodCategories;

  const [activeCategoryData, setActiveCategoryData] = useState([]);

  const [activeFoodCategory, setActiveFoodCategory] = useState(
    foodCategories[0]
  );

  const handleCategoryClick = (category) => {
    setActiveFoodCategory(category);
  };

  const totalPeople = (orders) => {
    let total = 0;
    orders.map((item) => {
      total += item.numberOfPeople;
    });
    return total;
  };

  const orderList = ordersData
    ?.filter((item) => item.type.includes(activeFoodCategory.charAt(0)))
    .map((item, index) => {
      return <IndividualOrderDetail order={item} key={index} />;
    });

  useEffect(() => {
    if (ordersData) {
      setActiveCategoryData(
        ordersData.filter((item) =>
          item.type.includes(activeFoodCategory.charAt(0))
        )
      );
    }
  }, [activeFoodCategory, ordersData]);

  return (
    <div className={styles.ChefHomeLeftSecWrapper}>
      <p className={styles.ChefHomeLeftSecTitle}>Today's Orders</p>
      <div className={styles.ChefHomeLeftSecContainer}>
        <NavigationList
          activeCategory={activeFoodCategory}
          onCategoryChange={handleCategoryClick}
          categories={foodCategories}
        />
        <div className={styles.OrderDetails}>
          <p className={styles.TotalOrderDetails}>
            <span style={{ color: "black" }}>{activeCategoryData.length}</span>{" "}
            Orders ({" "}
            <span style={{ color: "black" }}>
              {totalPeople(activeCategoryData)}
            </span>{" "}
            People )
          </p>
          {orderList}
        </div>
      </div>
    </div>
  );
}

export default ChefHomeLeftSec;
