import React from "react";

import styles from "./Navbar.module.css";

import data from "../TempData";
import { images } from "../StaticData";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Navbar() {
  const userData = useSelector((state) => state.userReducer.userData);
  const history = useHistory();
  return (
    <div className={styles.Wrapper}>
      <div className={styles.SubWrapper}>
        <div className={styles.LeftWrapper}>
          <img
            src={images.logo}
            alt="Logo"
            className={styles.Logo}
            onClick={() => {
              if (userData.name) {
                history.push("/home");
              } else {
                history.push("/");
              }
            }}
          />
          <div className={styles.PincodeWrapper}>
            <img
              src={images.location}
              alt="pincode"
              className={styles.Location}
            />
            <span className={styles.Pincode}>
              {userData.name ? userData.address[0].pincode : ""}
            </span>
          </div>
        </div>
        <div
          className={styles.RightWrapper}
          onClick={() => {
            history.push("/profile");
          }}
        >
          <img
            src={images.defaultProfilePhoto}
            alt="Default Profile Photo"
            className={styles.ProfilePhoto}
          />
          <span className={styles.UserName}>
            {userData.name ? userData.name : ""}
          </span>
        </div>
      </div>
      <div className={styles.PincodeWrapperMobile}>
        <img src={images.location} alt="pincode" className={styles.Location} />
        <span className={styles.Pincode}>
          {userData.name ? userData.address[0].pincode : ""}
        </span>
      </div>
    </div>
  );
}

export default Navbar;
