import React, { useState } from "react";

import Navbar from "./../../Components/Navbar";
import ChefDetails from "./../../Components/FoodSubDetails/ChefDetails";
import FoodDetails from "./../../Components/FoodSubDetails/FoodDetails";
import PopUp from "./../../Components/PopUp/PopUp";
import SubscriptionPop from "../../Components/FoodSubDetails/SubscriptionPop";

import data from "../../Components/TempData";

function FoodSubDetails() {

  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  return (
    <>
      <div>
        <Navbar />
        <ChefDetails
          ChefName={data.userhome.chef[0].ChefName}
          ChefDescription={data.userhome.chef[0].ChefDescription}
          ChefRating={data.userhome.chef[0].ChefRating}
          ChefProfilePhoto={data.userhome.chef[0].ChefProfilePhoto}
          ChefCategory={data.userhome.chef[0].ChefCategory}
          CostPerPerson={data.foodData.costPerPerson}
          setIsPopUpOpen={setIsPopUpOpen}
        />
        <FoodDetails />
      </div>
      <PopUp
        ContentComp={<SubscriptionPop />}
        isOpen={isPopUpOpen}
        closeFun={() => {
          setIsPopUpOpen(false);
        }}
        isClosable={true}
      />
    </>
  );
}

export default FoodSubDetails;
