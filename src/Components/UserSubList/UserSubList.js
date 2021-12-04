import React from "react";

import Styles from "./UserSubList.module.css";
import UserSubCard from "./UserSubCard/UserSubCard";

const title = "Your Subscriptions";

function UserSubList({
  subData = Array(12)
    .fill({})
    .map((item, index) => ({
      id: index,
      name: `Sammy Bartell`,
      address: `${index} Shop No 48, Heera Panna Shopping Centre, Haji Ali, Cumballa Hill, Mumbai, Maharashtra - ${400026}`,
      image: `http://picsum.photos/id/${index + 20}/400/300`,
      includes: {
        Breakfast: Math.random() < 0.5,
        Lunch: Math.random() < 0.5,
        Snacks: Math.random() < 0.5,
        Dinner: Math.random() < 0.5,
      },
      noOfPeople: 5,
      isVeg: Math.random() < 0.5,
    })),
}) {
  return (
    <div className={Styles.Wrapper}>
      <div className={Styles.Title}>{title}</div>
      <div className={Styles.ListWrapper}>
        {subData.map((item) => (
          <div key={item.id} className={Styles.ItemWrapper}>
            <UserSubCard cardData={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserSubList;
