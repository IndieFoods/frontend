import axios from "axios";

import { GET_USER_URL, UPDATE_ADDRESS_URL } from "../Utils/constants";

export const getUser = async (accessToken) => {
    try {
        const { data } = await axios.get(
            GET_USER_URL,
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

export const addAddress = async (address, accessToken) => {
    try {
        const { data } = await axios.put(UPDATE_ADDRESS_URL,
            {
                address
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
