import logo from "../Assets/_LOGO/Logo.svg";
import defaultProfilePhoto from "../Assets/_General/DefaultProfilePhoto.svg";
import location from "../Assets/Navbar/Location.svg";
import ratingStar from "../Assets/Home/RatingStar.svg";

export const contactLinks = {
  Facebook: "https://www.facebook.com/",
  Linkedin: "https://www.linkedin.com/",
  Instagram: "https://www.instagram.com/",
};

export const images = {
  logo: logo,
  defaultProfilePhoto: defaultProfilePhoto,
  location: location,
  ratingStar: ratingStar,
};

export const data = {
  landingPage: {
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    assetsImages: [
      "BgOrange",
      "ExtraElem",
      "LeftBgDesigns",
      "PrimaryElems",
      "RightBgDesigns",
      "BowlShadow",
    ],
  },
  chefHomePage: {
    highlights: [
      "total subscriptions",
      "total earnings",
      "last month earnings",
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
        label: "Duration( in days ) :",
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

export const cuisinesOptions = [
  { value: "North Indian", label: "North Indian" },
  { value: "South Indian", label: "South Indian" },
  { value: "Chinese", label: "Chinese" },
  { value: "Italian", label: "Italian" },
  { value: "Mexican", label: "Mexican" },
  { value: "Continental", label: "Continental" },
  { value: "Fast Food", label: "Fast Food" },
  { value: "Bakery", label: "Bakery" },
  { value: "Cafe", label: "Cafe" },
  { value: "Dessert", label: "Dessert" },
];

export const OTPValidatorData = {
  title: "Enter OTP",
  subTitle: "OTP sent Successfully to ",
  ErrorText: "The OTP entered is invalid/incorrect. Please try again.",
  bottomContent: {
    message: "Didn't receive OTP? ",
    highlightText: "Resend Now",
  },
};
