import React, { useEffect } from "react";

import Styles from "./OTPValidator.module.css";

import { ReactComponent as Arrow } from "../../Assets/PopUp/Arrow.svg";

import { OTPValidatorData } from "../StaticData";

import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { firebaseAuthSendOTP } from "../../Services/signInUp.service";

function OTPValidator() {
  const formRef = React.useRef(101);

  const popUpStatus = useSelector(state => state.authReducer.popUpStatus);
  const confirmationResult = useSelector(state => state.authReducer.authData.confirmationResult);
  const dispatch = useDispatch();
  const [otp, setOtp] = React.useState("");
  const [errorInOTP, setErrorInOTP] = React.useState(false);
  const [isVerifyingInProgress, setIsVerifyingInProgress] =
    React.useState(false);

  function handleOtpChange(otp) {
    setOtp(otp);
  }

  useEffect(() => {
    if (otp.length === 6) {
      verifyOTP();
    }
  }, [otp]);

  async function handleResendOTPClick() {
    setOtp('');
    setErrorInOTP(false);

    const confirmationResultRes = await firebaseAuthSendOTP(popUpStatus.mobile, false);

    dispatch({
      type: "UPDATE_AUTH_DATA",
      details: {
        confirmationResult: confirmationResultRes,
      }
    });

  }

  async function verifyOTP(e) {
    setIsVerifyingInProgress(true);
    setErrorInOTP(false);
    // console.log(otp);
    // console.log(formRef.current.elements);

    try {
      // VERIFY
      // let delayres = await delay(2000);
      // throw new Error("Verification Failed");
      await popUpStatus.verifyFun(otp, confirmationResult);
      setIsVerifyingInProgress(false);
      // goto home
    } catch (e) {
      console.log(e);
      setErrorInOTP(true);
      setIsVerifyingInProgress(false);
    }
  }

  function delay(delayInms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }

  return (
    <div className={Styles.Wrapper}>
      <div className={Styles.Title}>{OTPValidatorData.title}</div>
      <div className={Styles.SubText}>
        {OTPValidatorData.subTitle + " " + popUpStatus.mobile}
      </div>
      <form className={Styles.OTPForm} onSubmit={verifyOTP} ref={formRef}>
        <OtpInput
          value={otp}
          onChange={handleOtpChange}
          numInputs={6}
          separator={<span> &nbsp; &nbsp; </span>}
          containerStyle={Styles.OTPInputContainer}
          inputStyle={Styles.OTPInput}
          focusStyle={Styles.OTPInputFocus}
          disabledStyle={Styles.OTPInputDisabled}
          errorStyle={Styles.OTPInputError}
          isInputNum
          isDisabled={isVerifyingInProgress}
        />
        {errorInOTP ? (
          <div className={Styles.OTPValidatorErrorText}>
            {OTPValidatorData.ErrorText}
          </div>
        ) : null}
      </form>
      <div className={Styles.BottomText}>
        <span className={Styles.BottomTextTitle}>
          {OTPValidatorData.bottomContent.message}
        </span>
        <span className={Styles.BottomTextLink} onClick={handleResendOTPClick}>
          {OTPValidatorData.bottomContent.highlightText}
        </span>
      </div>
    </div >
  );
}

export default OTPValidator;
