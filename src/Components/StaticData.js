import logo from "../Assets/_LOGO/Logo.svg";
import defaultProfilePhoto from "../Assets/_General/DefaultProfilePhoto.svg";
import location from "../Assets/Navbar/Location.svg";
import ratingStar from "../Assets/Home/RatingStar.svg";

export const data = {
  landingPage: {
    title: "Home-cooked Food Subscription Platform.",
    subtitle: "For the home, by the home.",
    assetsImages: [
      "BgOrange",
      "ExtraElem",
      "LeftBgDesigns",
      "PrimaryElems",
      "RightBgDesigns",
      "BowlShadow",
    ],
  },
  foodSubDetails: {
    foodCategories: ["breakfast", "lunch", "snacks", "dinner"],
    inputRequired: [
      {
        label: "Number of people :",
        input: {
          type: "number",
          name: "people",
          id: "number-of-people",
        },
      },
      {
        label: "Duration( in Weeks ) :",
        input: {
          type: "number",
          name: "days",
          id: "number-of-days",
        },
      },
    ],
    Checkboxes: [
      "Breakfast ( 50 ₹/ person )",
      "Lunch ( 100 ₹/ person )",
      "Snacks ( 50 ₹/ person )",
      "Dinner ( 100 ₹/ person )",
    ],
    addressTempData: [
      "Shop No 48, Heera Panna Shopping Centre, Haji Ali, Cumballa Hill, Mumbai, Maharashtra - 400026",
      "Shop No 49, Heera Panna Shopping Centre, Haji Ali, Cumballa Hill, Mumbai, Maharashtra - 400026",
    ],
    summary: [
      { type: "breakfast", value: "₹5000" },
      { type: "lunch", value: "₹5000" },
      { type: "snacks", value: "₹5000" },
      { type: "dinner", value: "₹5000" },
    ],
  },
  chefHomePage: {
    highlights: [
      "total subscriptions",
      "total earnings",
      "last month earnings",
    ],
  },
};

export const images = {
  logo: logo,
  defaultProfilePhoto: defaultProfilePhoto,
  location: location,
  ratingStar: ratingStar,
};

export const contactLinks = {
  Facebook: "https://www.facebook.com/",
  Linkedin: "https://www.linkedin.com/",
  Instagram: "https://www.instagram.com/",
};

export const signUpData = {
  title: "Sign Up",
  bottomContent: {
    upperText: {
      title: "Already have an account?",
      link: "Sign In",
      linkTo: "/signin",
    },
    bottomText: {
      title: "By signing up you agree to IndieFoods's",
      link: "Terms of Service",
      link2: " Privacy Policy",
      linkTo: "/terms",
      linkTo2: "/privacy",
    },
  },
};

export const cuisinesOptions = [
  { value: "north-indian", label: "North Indian" },
  { value: "south-indian", label: "South Indian" },
  { value: "chinese", label: "Chinese" },
  { value: "bengali", label: "Bengali" },
  { value: "italian", label: "Italian" },
  { value: "mughlai", label: "Mughlai" },
  { value: "biryani", label: "Biryani" },
  { value: "dessert", label: "Dessert" },
  { value: "fast-food", label: "Fast Food" },
  { value: "pizza", label: "Pizza" },
  { value: "burger", label: "Burger" },
];

export const signInData = {
  title: "Sign In",
  bottomContent: {
    upperText: {
      title: "Don't have an account?",
      link: "Sign Up",
      linkTo: "/signup",
    },
    bottomText: {
      title: "By clicking on Continue, you agree to IndieFoods's",
      link: "Terms of Service",
      link2: " Privacy Policy",
      linkTo: "/terms",
      linkTo2: "/privacy",
    },
  },
};

export const OTPValidatorData = {
  title: "Enter OTP",
  subTitle: "OTP sent Successfully to ",
  ErrorText: "The OTP entered is invalid / incorrect. Please try again.",
  bottomContent: {
    message: "Didn't receive OTP? ",
    highlightText: "Resend Now",
  },
};

export const AboutSecHeadersData = {
  personalInfo: "Personal Info",
  addressUser: "Addresses",
  addressChef: "Address",
  bankInfo: "Bank Details",
  pricing: "Pricing (per meal)",
  cuisine: "Cuisine types",

  bankInputData: {
    bankName: {
      label: "Bank Name",
      placeholder: "Enter Bank Name",
      inputType: "text",
    },
    accountNumber: {
      label: "Account Number",
      placeholder: "Enter Account Number",
      inputType: "number",
    },
    ifscCode: {
      label: "IFSC Code",
      placeholder: "Enter IFSC Code",
      inputType: "text",
    },
  },
  pricingInputData: {
    breakfast: {
      label: "Breakfast",
      placeholder: "Enter Price",
      inputType: "number",
    },
    lunch: {
      label: "Lunch",
      placeholder: "Enter Price",
      inputType: "number",
    },
    snacks: {
      label: "Snacks",
      placeholder: "Enter Price",
      inputType: "number",
    },
    dinner: {
      label: "Dinner",
      placeholder: "Enter Price",
      inputType: "number",
    },
  },
};
