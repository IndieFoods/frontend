import React from "react";

import Styles from "./SignInUp.module.css";

import StyledMUIInput from "./Helpers/StyledMUIInput";

import { useLocation } from "react-router-dom";

import { MobileNumberTextMask } from "./Helpers/StyledMUIInput";

import Button from "../Button";
import BottomText from "./Helpers/BottomText";

import { signInData } from "../StaticData";

function SignIn() {
  const location = useLocation();

  const [values, setValues] = React.useState({
    textmask: "",
    numberformat: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div
      className={Styles.Wrapper}
      style={{
        transform:
          location.pathname === "/signin"
            ? "translatex(0)"
            : "translatex(100%)",
      }}
    >
      <div className={Styles.UpperSection}>
        <span className={Styles.Title}>{signInData.title}</span>
        <form className={Styles.Form} onSubmit={SignIn}>
          <StyledMUIInput
            fullWidth
            label="Mobile"
            value={values.Mobile}
            onChange={handleChange}
            name="Mobile"
            id="Mobile"
            InputProps={{
              inputComponent: MobileNumberTextMask,
            }}
            variant="standard"
            margin="dense"
            autoComplete="username"
          />

          <Button
            content="Continue"
            mainColor="var(--orange-primary)"
            fontSize="var(--font-20)"
            wrapperClass={Styles.SignInUpButton}
          />
        </form>
      </div>
      <div className={Styles.BottomSecWrapper}>
        <BottomText data={signInData} />
      </div>
    </div>
  );
}

export default SignIn;
