import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import Footer from "../../Components/Footer";
import MainContainer from "./../../Components/LandingPage/MainContainer";

import Styles from "./LandingPage.module.css";

import { data, images } from "../../Components/StaticData";
import SignUp from "../../Components/SignInUp/SignUp";
import SignIn from "./../../Components/SignInUp/SignIn";
import PopUp from "../../Components/PopUp/PopUp";
import OTPValidator from "../../Components/OTPValidator";
import { useSelector } from "react-redux";

function LandingPage() {
  const Location = useLocation();
  const history = useHistory();

  const popUpStatus = useSelector(state => state.authReducer.popUpStatus);

  const signInUpWrapperRef = React.useRef(123);

  const handleBgOnClick = (e) => {
    if (signInUpWrapperRef.current === e.target) {
      history.push("/");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      if (Location.pathname !== "/") {
        history.push("/");
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div>
        <MainContainer data={data.landingPage} logo={images.logo} />
        <Footer />
      </div>
      <div
        ref={signInUpWrapperRef}
        className={Styles.SignInUpWrapper}
        onClick={handleBgOnClick}
        style={{
          background: Location.pathname !== "/" ? "rgba(0, 0, 0, 0.4)" : "none",
          pointerEvents: Location.pathname !== "/" ? "all" : "none",
        }}
      >
        <SignUp />
        <SignIn />
      </div>
      <PopUp
        ContentComp={<OTPValidator />}
        isOpen={popUpStatus.isOpen}
        isClosable={false}
      />
    </>
  );
}

export default LandingPage;
