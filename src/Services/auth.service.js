import axios from "axios";

import { SIGNUP_USER_URL, SIGNUP_CHEF_URL } from "../Utils/constants";

export const signupUser = async (name, phone, address, email, accessToken) => {
  try {
    const { data } = await axios.post(
      SIGNUP_USER_URL,
      {
        name,
        phone,
        address,
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return data;
  } catch (err) {
    throw err;
  }
};

export const signupChef = async (name, phone, address, email, fssaiId, cuisine, accessToken) => {
  try {
    const { data } = await axios.post(SIGNUP_CHEF_URL,
      {
        name,
        phone,
        address,
        email,
        fssaiId,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return data;
  } catch (err) {
    throw err;
  }
};
