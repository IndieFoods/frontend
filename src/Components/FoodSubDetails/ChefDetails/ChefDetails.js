import React from "react";

import styles from "./ChefDetails.module.css";

import { images } from "../../../Components/StaticData";
import { ReactComponent as VegIcon } from "../../../Assets/Home/VegIcon.svg";
import Button from "../../Button";

function ChefDetails({
  ChefName,
  ChefRating,
  ChefDescription,
  ChefProfilePhoto,
  ChefCategory,
  CostPerPerson,
  setIsPopUpOpen,
}) {
  const costPerPersonList = CostPerPerson.map((item, index) => {
    return (
      <div className={styles.ChefFoodPriceWrapper} key={index}>
        <p className={styles.ChefFoodTitle}>{item.foodType}</p>
        <p className={styles.ChefFoodPrice}>{item.cost}</p>
      </div>
    );
  });

  return (
    <div className={styles.ChefDetailsContainer}>
      <div className={styles.ChefDetailsWrapper}>
        <img
          src={ChefProfilePhoto}
          alt="Chef Profile Photo"
          className={styles.ChefProfilePhoto}
        />
        <div className={styles.ChefInformationWrapper}>
          <div className={styles.ChefInformation}>
            <h3 className={styles.ChefName}>{ChefName}</h3>
            <p className={styles.ChefDiscription}>{ChefDescription}</p>
          </div>
          <div className={styles.ChefRatingWrapper}>
            <p className={styles.ChefRating}>{ChefRating}</p>
            <img
              src={images.ratingStar}
              alt="Rating Star"
              className={styles.ChefRatingStar}
            />
          </div>
          <div className={styles.ChefFoodCategoryWrapper}>
            <p className={styles.ChefFoodCategory}>{ChefCategory}</p>
            <VegIcon className={styles.ChefFoodCategoryIcon} />
          </div>
        </div>
      </div>
      <div className={styles.ChefPricesWrapper}>
        <p className={styles.ChefPricesTitle}>Cost per person</p>
        <div className={styles.ChefPricesContainer}>{costPerPersonList}</div>
        <Button
          content="Subscribe"
          fontSize="var(--font-15)"
          mainColor="var(--orange-primary)"
          wrapperClass={styles.ChefSubscribeButton}
          onClick={() => {
            setIsPopUpOpen(true);
          }}
        />
      </div>
    </div>
  );
}

export default ChefDetails;
