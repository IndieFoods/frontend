import React from "react";

import styles from "./UserHome.module.css";

import Navbar from "../../Components/Navbar";
import ChefContainer from "../../Components/UserHome/ChefContainer";

import { images } from "../../Components/StaticData";

function UserHome() {
  return (
    <div className={styles.Wrapper}>
      <Navbar images={images} />
      <ChefContainer images={images} />
    </div>
  );
}

export default UserHome;
