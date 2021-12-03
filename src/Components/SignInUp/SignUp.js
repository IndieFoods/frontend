import React from "react";

import Styles from "./SignInUp.module.css";

import { FormControlLabel, RadioGroup, Typography } from "@mui/material";
import StyledMUIInput from "./Helpers/StyledMUIInput";

import { useLocation } from "react-router-dom";

import {
  MobileNumberTextMask,
  PinCodeTextMask,
  CustomisedRadio,
} from "./Helpers/StyledMUIInput";

import Button from "../Button";
import BottomText from "./Helpers/BottomText";

import { signUpData } from "../StaticData";

function SignUp() {
  const location = useLocation();
  const formRef = React.useRef(123);

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
          location.pathname === "/signup"
            ? "translatex(0)"
            : "translatex(100%)",
      }}
    >
      <span className={Styles.Title}>{signUpData.title}</span>
      <form ref={formRef} className={Styles.Form} onSubmit={SignUp}>
        <StyledMUIInput fullWidth id="Name" label="Name" variant="standard" />
        <StyledMUIInput
          fullWidth
          label="Mobile"
          value={values.Mobile}
          onChange={handleChange}
          name="Mobile"
          id="MobileSignUp"
          InputProps={{
            inputComponent: MobileNumberTextMask,
          }}
          variant="standard"
          margin="dense"
        />

        <StyledMUIInput
          fullWidth
          id="Address"
          label="Address"
          variant="standard"
          margin="dense"
        />
        <StyledMUIInput
          fullWidth
          id="Pincode"
          label="Pincode"
          variant="standard"
          name="Pincode"
          maxLength={6}
          value={values.Pincode}
          onChange={handleChange}
          InputProps={{
            inputComponent: PinCodeTextMask,
          }}
          margin="dense"
        />
        <StyledMUIInput
          fullWidth
          id="Email"
          label="Email address ( Optional )"
          variant="standard"
          type="email"
          margin="dense"
          autoComplete="username"
        />
        <RadioGroup
          row
          aria-label="Type"
          defaultValue="User"
          name="UserType"
          className={Styles.RadioWrapper}
        >
          <FormControlLabel
            value="User"
            control={<CustomisedRadio />}
            label={
              <Typography sx={{ fontSize: "var(--font-16)", fontWeight: 500 }}>
                User
              </Typography>
            }
          />
          <FormControlLabel
            value="Chef"
            control={<CustomisedRadio />}
            label={
              <Typography sx={{ fontSize: "var(--font-16)", fontWeight: 500 }}>
                Chef
              </Typography>
            }
          />
        </RadioGroup>

        <Button
          content="Continue"
          mainColor="var(--orange-primary)"
          fontSize="var(--font-20)"
          wrapperClass={Styles.SignInUpButton}
          id="sign-in-button"
        />
      </form>
      <div className={Styles.BottomSecWrapper}>
        <BottomText data={signUpData} />
      </div>
    </div>
  );
}

export default SignUp;
