import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import app from '../firebase';

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
            alert('Mobile number Invalid, Refresh and try again.');
        } else if (error.code === 'auth/too-many-requests') {
            alert('Too many requests, Try again after some time.');
        } else if (error.code === 'auth/quota-exceeded') {
            alert('Quota exceeded, Try again after some time.');
        } else {
            alert('Error ocuured!');
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
            alert('OTP Invalid!');
        } else {
            alert('error ocuured!');
            console.log(error);
        }
    }
}

