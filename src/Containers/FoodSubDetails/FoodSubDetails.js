import React, { useEffect, useState } from "react";

import Navbar from "./../../Components/Navbar";
import ChefDetails from "./../../Components/FoodSubDetails/ChefDetails";
import FoodDetails from "./../../Components/FoodSubDetails/FoodDetails";
import PopUp from "./../../Components/PopUp/PopUp";
import SubscriptionPop from "../../Components/FoodSubDetails/SubscriptionPop";

import { data } from "../../Components/StaticData";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { fetchMenuItems } from "../../Services/chef.service";
import notify from "../../Utils/helper/notifyToast";

const foodCategories = data.foodSubDetails.foodCategories;

const tempData = {
  name: "John Doe",
  phone: "9966445522",
  email: "abc@xyz.com",
  address: Array(1).fill({
    address: `Shop No 48, Heera Panna Shopping Centre, Haji Ali, Cumballa Hill, Mumbai, Maharashtra`,
    pincode: "400026",
  }),
  bankDetails: {
    bankName: "HDFC Bank",
    accountNumber: "123456789",
    ifscCode: "HDFC0001",
  },
  image:
    "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422.jpg",
  pricing: {
    breakfast: 100,
    lunch: 200,
    snacks: 50,
    dinner: 300,
  },
  foodTypes: ["north-indian", "south-indian", "chinese"],
  fssaiId: "12345678901234",
  menu: Array(15)
    .fill({})
    .map((_, index) => {
      return {
        id: index,
        name: "Poha 3",
        isVeg: Math.random() > 0.5,
        image:
          "https://img.etimg.com/thumb/msid-74572648,width-640,resizemode-4,imgsize-246114/people-say-no-to-non-veg.jpg",
        type: foodCategories[Math.floor(Math.random() * foodCategories.length)],
      };
    }),
  ratings: 4.5,
};

function FoodSubDetails() {
  // Fetch Menu Data from backend
  // Fetch Chef Data from Datalayer

  const allChefDetails = useSelector((state) => state.chefReducer.chefData);
  const cid = useParams().cid;

  const [chefData, setChefData] = useState(tempData);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [menuItems, setMenuItems] = React.useState([]);

  async function getMenuItems() {
    try {
      if (!cid) return;
      const menuItems = await fetchMenuItems(cid);
      setMenuItems(menuItems);
    } catch (e) {
      notify(e.response.data.errors[0].message, "error");
    }
  }

  useEffect(() => {
    const tempChefData = allChefDetails.filter((obj) => obj.uid === cid);
    setChefData(tempChefData[0]);
    console.log(tempChefData);
    getMenuItems()
  }, [allChefDetails]);


  return (
    <>
      <div>
        <Navbar />
        {chefData?.name ?
          <ChefDetails
            ChefName={chefData.name}
            ChefDescription={chefData.foodTypes.join(", ")}
            ChefRating='4.5'
            ChefProfilePhoto={chefData.profilePicture}
            ChefCategory={chefData.isVeg}
            CostPerPerson={chefData.pricing}
            setIsPopUpOpen={setIsPopUpOpen}
          />
          : null
        }
        <FoodDetails menuData={menuItems ? menuItems : tempData.menu} />
      </div>

      {chefData?.name ?
        <PopUp
          ContentComp={<SubscriptionPop chefData={chefData} />}
          isOpen={isPopUpOpen}
          closeFun={() => {
            setIsPopUpOpen(false);
          }}
          isClosable={true}
        />
        : null
      }
    </>
  );
}

export default FoodSubDetails;
