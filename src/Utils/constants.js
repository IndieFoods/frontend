const BASE_URL = 'https://indie-foods.centralindia.cloudapp.azure.com/api/v1';
const AUTH_URL = `${BASE_URL}/auth`;
const USER_URL = `${BASE_URL}/user`;

export const SIGNUP_USER_URL = `${AUTH_URL}/signup-user`;
export const SIGNUP_CHEF_URL = `${AUTH_URL}/signup-chef`;
export const GET_USER_URL = `${USER_URL}/`;
export const ADD_ADDRESS_URL = `${USER_URL}/add-address`;