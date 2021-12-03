import React, { useState } from "react";

import styles from "./ChefContainer.module.css";
import ProfileCard from "../ProfileCard";

import data from "../../TempData";

function ChefContainer() {
  const [resultsCount, setResultsCount] = useState(25);

  const chefList = data.userhome.chef.map((chef, index) => {
    return (
      <ProfileCard
        key={index}
        ChefName={chef.ChefName}
        ChefRating={chef.ChefRating}
        ChefDescription={chef.ChefDescription}
        ChefProfilePhoto={chef.ChefProfilePhoto}
      />
    );
  });

  return (
    <div className={styles.Wrapper}>
      <p className={styles.ChefCount}>
        <span>{resultsCount}</span>
        Results Found
      </p>
      <div className={styles.ChefList}>{chefList}</div>
    </div>
  );
}

export default ChefContainer;
