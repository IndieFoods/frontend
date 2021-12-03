import { UPDATE_ACCESS_TOKEN, UPDATE_USER_DATA } from "../ActionTypes";

export const userReducer = (
    state = {
        accessToken: null,
        userData: {
            id: null,
            name: null,
            phone: null,
            address: [
                {
                    address: null,
                    pincode: null,
                }
            ],
            email: null,
        }
    },
    action
) => {
    switch (action.type) {
        case UPDATE_ACCESS_TOKEN: {
            return {
                ...state,
                accessToken: action.details,
            };
        }

        case UPDATE_USER_DATA: {
            return {
                ...state,
                userData: action.details,
            };
        }
        default:
            return state;
    }
};