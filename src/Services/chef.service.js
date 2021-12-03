import axios from "axios";

import { FETCH_ALL_CHEFS_URL, FETCH_MENU_ITEMS_URL, UPDATE_MENU_ITEM_URL, UPDATE_PROFILE_PICTURE_URL } from "../Utils/constants";

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
export const fetchMenuItems = async (accessToken) => {
    try {
        const { data } = await axios.get(
            FETCH_MENU_ITEMS_URL,
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

export const updateMenuItem = async (menuItems, accessToken) => {
    try {
        const { data } = await axios.put(UPDATE_MENU_ITEM_URL,
            {
                menuItems
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
        const { data } = await axios.put(UPDATE_PROFILE_PICTURE_URL,
            {
                imageUrl
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
