import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import Styles from "./SignInUp.module.css";

import { FormControlLabel, RadioGroup, Typography } from "@mui/material";
import StyledMUIInput from "./Helpers/StyledMUIInput";

import { useLocation, useHistory } from "react-router-dom";

import {
  MobileNumberTextMask,
  PinCodeTextMask,
  FSSAITextMask,
  CustomisedRadio,
  colourStyles,
} from "./Helpers/StyledMUIInput";

import Button from "../Button";
import BottomText from "./Helpers/BottomText";

import { signUpData, cuisinesOptions } from "../StaticData";
import {
  firebaseAuthConfirmOTP,
  firebaseAuthSendOTP,
} from "../../Services/signInUp.service";
import { useDispatch } from "react-redux";
import { signupChef, signupUser } from "../../Services/auth.service";
import notify from "../../Utils/helper/notifyToast";
import { getUser } from "./../../Services/user.service";
import { getChefs } from "../../Services/chef.service";

const animatedComponentsForSelect = makeAnimated();

function SignUp() {
  const history = useHistory();
  const location = useLocation();
  const formRef = React.useRef(123);

  const dispatch = useDispatch();

  const [values, setValues] = React.useState({
    textmask: "",
    numberformat: "",
    PinCode: "",
    Mobile: "",
    FSSAI: "",
    cuisine: [],
  });

  const [isChefSelected, setIsChefSelected] = React.useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleDataValidation = () => {
    if (formRef.current.elements.Name.value === "") {
      notify("Please enter your name", "warning");
      return false;
    }
    if (formRef.current.elements.Mobile.value.length !== 10) {
      notify("Please enter valid mobile number", "warning");
      return false;
    }
    if (formRef.current.elements.Address.value === "") {
      notify("Please enter your address", "warning");
      return false;
    }
    if (formRef.current.elements.Pincode.value.length !== 6) {
      notify("Please enter valid pin code", "warning");
      return false;
    }
    if (
      formRef.current.elements.UserType.value === "Chef" &&
      formRef.current.elements.FSSAI.value === ""
    ) {
      notify("Please enter your FSSAI number", "warning");
      return false;
    }
    return true;
  };

  const handleSignUp = async (otp, confirmationResult) => {
    const userData = await firebaseAuthConfirmOTP(otp, confirmationResult);
    const name = formRef.current.elements.Name.value;
    const mobile = formRef.current.elements.Mobile.value;
    const tempAddress = formRef.current.elements.Address.value;
    const pincode = formRef.current.elements.Pincode.value;
    const email = formRef.current.elements.Email.value;
    const userType = formRef.current.elements.UserType.value;
    let cuisine;
    let fssaiID;
    if (userType === "Chef") {
      fssaiID = formRef.current.elements.FSSAI.value;
      cuisine = values.cuisine;
    }
    const address = [
      {
        address: tempAddress,
        pincode,
      },
    ];

    if (userData.accessToken) {
      dispatch({
        type: "UPDATE_ACCESS_TOKEN",
        details: userData.accessToken,
      });
      try {
        if (userType === "User") {
          await signupUser(name, mobile, address, email, userData.accessToken);
        } else {
          await signupChef(
            name,
            mobile,
            address,
            email,
            fssaiID,
            cuisine,
            userData.accessToken
          );
        }
        fetchUserData(userData.accessToken, userData.uid, dispatch);
        history.push("/home");
      } catch (err) {
        notify(err?.response?.data?.errors[0]?.message, "error");
      }
    }
  };

  const fetchUserData = async (accessToken, uid, dispatch) => {
    dispatch({
      type: "UPDATE_ACCESS_TOKEN",
      details: { accessToken, uid },
    });

    const userData = await getUser(accessToken);
    const chefDetails = await getChefs();

    dispatch({
      type: "UPDATE_USER_DATA",
      details: userData,
    });
    dispatch({
      type: "UPDATE_CHEF_DATA",
      details: chefDetails,
    });
  };

  async function SignUp(e) {
    e.preventDefault();
    const mobile = formRef.current.elements.Mobile.value;

    if (handleDataValidation()) {
      const confirmationResultRes = await firebaseAuthSendOTP(mobile, true);

      dispatch({
        type: "UPDATE_AUTH_DATA",
        details: {
          confirmationResult: confirmationResultRes,
        },
      });

      if (confirmationResultRes) {
        dispatch({
          type: "UPDATE_POPUPSTATUS",
          details: {
            isOpen: true,
            verifyFun: handleSignUp,
            mobile,
          },
        });
      }
    }
  }

  const handleInputChange = (inputValue) => {
    const cuisine = inputValue.map((input) => input.value);
    setValues({
      ...values,
      cuisine,
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
      <div className={Styles.UpperSection}>
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
            onChange={(e) => {
              setIsChefSelected(e.target.value === "Chef");
            }}
          >
            <FormControlLabel
              value="User"
              control={<CustomisedRadio />}
              label={
                <Typography
                  sx={{ fontSize: "var(--font-16)", fontWeight: 500 }}
                >
                  User
                </Typography>
              }
            />
            <FormControlLabel
              value="Chef"
              control={<CustomisedRadio />}
              label={
                <Typography
                  sx={{ fontSize: "var(--font-16)", fontWeight: 500 }}
                >
                  Chef
                </Typography>
              }
            />
          </RadioGroup>
          {isChefSelected ? (
            <>
              <StyledMUIInput
                fullWidth
                id="Fssai"
                label="FSSAI ID"
                variant="standard"
                name="FSSAI"
                maxLength={14}
                value={values.FSSAI}
                onChange={handleChange}
                InputProps={{
                  inputComponent: FSSAITextMask,
                }}
                margin="dense"
              />
              <div className={Styles.CuisineWrapper}>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponentsForSelect}
                  options={cuisinesOptions}
                  onChange={handleInputChange}
                  styles={colourStyles}
                  isMulti
                />
              </div>
            </>
          ) : null}
          <Button
            content="Continue"
            mainColor="var(--orange-primary)"
            fontSize="var(--font-20)"
            wrapperClass={Styles.SignInUpButton}
            id="sign-in-button"
          />
        </form>
      </div>
      <div className={Styles.BottomSecWrapper}>
        <BottomText data={signUpData} />
      </div>
    </div>
  );
}

export default SignUp;
