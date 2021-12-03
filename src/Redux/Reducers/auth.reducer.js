import { UPDATE_POPUPSTATUS, UPDATE_AUTH_DATA } from "../ActionTypes";

export const authReducer = (
    state = {
        popUpStatus: {
            isOpen: false,
            verifyFun: null,
            mobile: null
        },
        authData: {
            confirmationResult: null,
        }
    },
    action
) => {
    switch (action.type) {
        case UPDATE_POPUPSTATUS: {
            return {
                ...state,
                popUpStatus: action.details,
            };
        }

        case UPDATE_AUTH_DATA: {
            return {
                ...state,
                authData: action.details,
            };
        }
        default:
            return state;
    }
};