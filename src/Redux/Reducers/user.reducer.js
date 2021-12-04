import { UPDATE_ACCESS_TOKEN, UPDATE_USER_DATA } from "../ActionTypes";

export const userReducer = (
    state = {
        accessToken: null,
        uid: null,
        userData: {}
    },
    action
) => {
    switch (action.type) {
        case UPDATE_ACCESS_TOKEN: {
            return {
                ...state,
                accessToken: action.details.accessToken,
                uid: action.details.uid,
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