import { UPDATE_CHEF_DATA } from "../ActionTypes";

export const chefReducer = (
    state = {
        chefData: []
    },
    action
) => {
    switch (action.type) {
        case UPDATE_CHEF_DATA: {
            return {
                ...state,
                chefData: action.details,
            };
        }

        default:
            return state;
    }
};