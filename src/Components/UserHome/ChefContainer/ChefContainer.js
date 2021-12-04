import React, { useEffect, useState } from "react";

import styles from "./ChefContainer.module.css";
import ProfileCard from "../ProfileCard";
import { getChefs } from "../../../Services/chef.service";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

function ChefContainer() {
  const history = useHistory();
  const chefData = useSelector((state) => state.chefReducer.chefData);
  const [resultsCount, setResultsCount] = useState();

  const chefList = chefData?.map((chef, index) => {
    return (
      <ProfileCard
        key={index}
        ChefName={chef.name}
        ChefRating="4.5"
        ChefDescription={chef.foodTypes.join(", ")}
        ChefProfilePhoto={chef.profilePicture}
        onClick={() => history.push(`./chef/${chef.uid}`)}
      />
    );
  });

  useEffect(() => {}, []);

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
