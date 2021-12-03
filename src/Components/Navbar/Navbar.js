import React from "react";

import styles from "./Navbar.module.css";

import { images } from "../StaticData";

function Navbar() {

  return (
    <div className={styles.Wrapper}>
      <div className={styles.SubWrapper}>
        <div className={styles.LeftWrapper}>
          <img src={images.logo} alt="Logo" className={styles.Logo} />
          <div className={styles.PincodeWrapper}>
            <img
              src={images.location}
              alt="pincode"
              className={styles.Location}
            />
            <span className={styles.Pincode}>321520</span>
          </div>
        </div>
        <div className={styles.RightWrapper}>
          <img
            src={images.defaultProfilePhoto}
            alt="Default Profile Photo"
            className={styles.ProfilePhoto}
          />
          <span className={styles.UserName}>John Doe</span>
        </div>
      </div>
      <div className={styles.PincodeWrapperMobile}>
        <img src={images.location} alt="pincode" className={styles.Location} />
        <span className={styles.Pincode}>321520</span>
      </div>
    </div>
  );
}

export default Navbar;
