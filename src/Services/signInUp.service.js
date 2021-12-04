import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import notify from "../Utils/helper/notifyToast";

export const firebaseAuthSendOTP = async (mobile, reCAPTCHA) => {
    try {
        const auth = getAuth();

        if (reCAPTCHA) {
            window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
                'size': 'invisible'
            }, auth);
        }

        const phoneNumber = '+91' + mobile;
        const appVerifier = window.recaptchaVerifier;

        const confirmationresult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
        return confirmationresult;
    } catch (error) {
        if (error.code === 'auth/invalid-phone-number') {
            notify('Mobile number Invalid, Refresh and try again.', 'error');
        } else if (error.code === 'auth/too-many-requests') {
            notify('Too many requests, Try again after some time.', 'error');
        } else if (error.code === 'auth/quota-exceeded') {
            notify('Quota exceeded, Try again after some time.', 'error');
        } else {
            notify('Error ocuured!', 'error');
            console.log(error);
        }
    }
}

export const firebaseAuthConfirmOTP = async (password, confirmationResult) => {
    try {
        const result = await confirmationResult.confirm(password);
        return result.user;
    } catch (error) {
        if (error.code === 'auth/invalid-verification-code') {
            notify('OTP Invalid!', 'error');
        } else {
            notify('error ocuured!', 'error');
            console.log(error);
        }
    }
}

