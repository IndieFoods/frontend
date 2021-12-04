import axios from "axios";

import Logo from "../Assets/_LOGO/Logo.svg";
import { VERIFY_ORDER_URL } from "../Utils/constants";
import notify from "../Utils/helper/notifyToast";

export const payementService = async (
  subscriptionData,
  amount,
  accessToken
) => {
  try {
    var options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount,
      currency: "INR",
      name: "IndieFoods",
      description: "Test Transaction",
      image: Logo,
      subscription_id: subscriptionData.subscriptionId,
      handler: async function (response) {
        await PaymentVerification(
          response.razorpay_payment_id,
          response.razorpay_signature,
          subscriptionData.orderId,
          accessToken
        );
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      notify(response.error.code, "error");
      notify(response.error.description, "error");
      notify(response.error.source, "error");
      notify(response.error.step, "error");
      notify(response.error.reason, "error");
      notify(response.error.metadata.order_id, "error");
      notify(response.error.metadata.payment_id, "error");
    });
    rzp1.open();
  } catch (error) {
    throw error;
  }
};

export const PaymentVerification = async (
  razorpay_payment_id,
  razorpay_signature,
  orderId,
  accessToken
) => {
  try {
    const { data } = await axios.post(
      VERIFY_ORDER_URL,
      {
        razorpay_payment_id,
        razorpay_signature,
        orderId,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    notify("Payment Successful", "success");
    return data;
  } catch (error) {
    throw error;
  }
};
