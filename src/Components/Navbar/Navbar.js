import React from "react";

import styles from "./Navbar.module.css";

import data from "../TempData";
import { images } from "../StaticData";
import { useSelector } from "react-redux";

function Navbar() {

  const userData = useSelector(state => state.userReducer.userData);

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
            <span className={styles.Pincode}>{userData.address[0].pincode}</span>
          </div>
        </div>
        <div className={styles.RightWrapper}>
          <img
            src={images.defaultProfilePhoto}
            alt="Default Profile Photo"
            className={styles.ProfilePhoto}
          />
          <span className={styles.UserName}>{userData.name}</span>
        </div>
      </div>
      <div className={styles.PincodeWrapperMobile}>
        <img src={images.location} alt="pincode" className={styles.Location} />
        <span className={styles.Pincode}>{userData.address[0].pincode}</span>
      </div>
    </div>
  );
}

export default Navbar;
