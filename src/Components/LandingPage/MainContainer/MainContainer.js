import React from "react";

import styles from "./MainContainer.module.css";

import importAll from "./../../../Utils/helper/importAll";

import Button from "../../Button";

import { useHistory } from "react-router-dom";

const images = importAll(
  require.context("../../../Assets/Landing", false, /\.(png|jpe?g|svg)$/)
);

function MainContainer({ data, logo }) {
  const history = useHistory();

  const goToSignUp = () => {
    history.push("/signup");
  };

  const goToSignIn = () => {
    history.push("/signin");
  };

  const imagesArray = data.assetsImages.map((image, index) => {
    return (
      <img
        src={images[`${image}.svg`].default}
        alt="Landing-Page-Assets"
        key={index}
        className={`${styles[image]} ${styles.WrapperImages}`}
      />
    );
  });

  return (
    <div className={styles.Wrapper}>
      {imagesArray}
      <img src={logo} alt="logo" className={styles.Logo} />
      <div className={styles.ContentWrapper}>
        <h2 className={styles.Heading}>{data.title}</h2>
        <h2 className={styles.Heading}>{data.subtitle}</h2>
        <div className={styles.ButtonWrapper}>
          <Button
            content="SignUp"
            mainColor="var(--black)"
            onClick={goToSignUp}
          />
          <Button content="Login" isNotBorder onClick={goToSignIn} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
