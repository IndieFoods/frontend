import React from "react";

import styles from "./ProfileCard.module.css";
import { images } from "../../StaticData";

function ProfileCard({
  ChefName,
  ChefRating,
  ChefDescription,
  ChefProfilePhoto,
}) {
  return (
    <div className={styles.ProfileCardWrapper}>
      <div className={styles.ProfileCard}>
        <img
          src={ChefProfilePhoto}
          alt="Chef Photo"
          className={styles.ProfilePhoto}
        />
        <div className={styles.ProfileCardContentWrapper}>
          <h3 className={styles.ProfileName}>{ChefName}</h3>
          <div className={styles.ProfileCardRatingWrapper}>
            <p className={styles.ProfileRating}>{ChefRating}</p>
            <img
              src={images.ratingStar}
              alt="Rating Star"
              className={styles.ProfileRatingStar}
            />
          </div>
        </div>
        <p className={styles.ProfileDiscription}>{ChefDescription}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
