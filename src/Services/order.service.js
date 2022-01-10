import axios from "axios";

import { GET_USER_ORDERS, INITIALIZE_ORDER_URL } from "../Utils/constants";

export const initializeOrder = async (
  chefId,
  type,
  address,
  numberOfPeople,
  numberOfWeeks,
  weeklySubscriptionAmount,
  accessToken,
  isVeg
) => {
  try {
    const { data } = await axios.post(
      INITIALIZE_ORDER_URL,
      {
        chefId,
        type,
        isVeg: isVeg,
        address,
        numberOfPeople: parseInt(numberOfPeople),
        numberOfWeeks: parseInt(numberOfWeeks),
        weeklySubscriptionAmount,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getOrdersOfAUser = async (accessToken) => {
  try {
    const { data } = await axios.get(GET_USER_ORDERS, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
