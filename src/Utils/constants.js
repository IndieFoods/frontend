const BASE_URL = "https://indie-foods.centralindia.cloudapp.azure.com/api/v1";
const AUTH_URL = `${BASE_URL}/auth`;
const USER_URL = `${BASE_URL}/user`;
const CHEF_URL = `${BASE_URL}/chef`;
const MENU_ITEMS__URL = `${BASE_URL}/menuItems`;

export const SIGNUP_USER_URL = `${AUTH_URL}/signup-user`;
export const SIGNUP_CHEF_URL = `${AUTH_URL}/signup-chef`;
export const GET_USER_URL = `${USER_URL}/`;
export const FETCH_ALL_CHEFS_URL = `${CHEF_URL}/`;
export const ADD_ADDRESS_URL = `${USER_URL}/add-address`;
export const FETCH_MENU_ITEMS_URL = `${MENU_ITEMS__URL}/chef`;
export const UPDATE_MENU_ITEM_URL = `${CHEF_URL}/menuItems/`;
export const UPDATE_PROFILE_PICTURE_URL = `${CHEF_URL}/updateProfilePicture`;
