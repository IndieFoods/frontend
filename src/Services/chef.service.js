import axios from "axios";

import {
  FETCH_ALL_CHEFS_URL,
  FETCH_MENU_ITEMS_URL,
  UPDATE_MENU_ITEM_URL,
  UPDATE_PROFILE_DATA_URL,
  UPDATE_PROFILE_PICTURE_URL,
  FETCH_CHEF_ALL_ORDERS,
} from "../Utils/constants";

export const addMenuItem = async (menuItems, accessToken) => {
  try {
    const { data } = await axios.post(
      UPDATE_MENU_ITEM_URL,
      {
        menuItems,
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
export const fetchMenuItems = async (chefId) => {
  try {
    const { data } = await axios.get(FETCH_MENU_ITEMS_URL + chefId);
    return data;
  } catch (err) {
    throw err;
  }
};

export const updateMenuItem = async (menuItems, accessToken) => {
  try {
    const { data } = await axios.put(
      UPDATE_MENU_ITEM_URL,
      {
        menuItems,
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

export const updateProfilePicture = async (imageUrl, accessToken) => {
  try {
    const { data } = await axios.put(
      UPDATE_PROFILE_PICTURE_URL,
      {
        imageUrl,
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
export const updateProfileData = async (
  address,
  foodTypes,
  pricing,
  accessToken
) => {
  try {
    const { data } = await axios.put(
      UPDATE_PROFILE_DATA_URL,
      {
        address,
        foodTypes,
        pricing,
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
export const getChefs = async () => {
  try {
    const { data } = await axios.get(FETCH_ALL_CHEFS_URL);
    return data;
  } catch (err) {
    throw err;
  }
};

export const fetchOrders = async (accessToken) => {
  try {
    const { data } = await axios.get(FETCH_CHEF_ALL_ORDERS, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};
