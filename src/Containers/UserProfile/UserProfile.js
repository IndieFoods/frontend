import React, { useState, useEffect } from "react";

import Styles from "./UserProfile.module.css";

import UserSubList from "./../../Components/UserSubList/UserSubList";
import Navbar from "./../../Components/Navbar/Navbar";
import About from "./../../Components/About";
import { useSelector } from "react-redux";
import { getOrdersOfAUser } from "../../Services/order.service";
import notify from "../../Utils/helper/notifyToast";

function UserProfile() {

  const userData = useSelector((state) => state.userReducer.userData);
  const accessToken = useSelector((state) => state.userReducer.accessToken);
  const [orders, setOrders] = React.useState([]);

  async function fetchUserOrders() {
    try {
      if (!accessToken) return;
      const orderData = await getOrdersOfAUser(accessToken);
      setOrders(orderData);
    } catch (e) {
      notify(e.response.data.errors[0].message, "error");
    }
  }

  useEffect(() => {
    fetchUserOrders()
  }, [accessToken]);

  return (
    <div className={Styles.Wrapper}>
      <Navbar />
      <div className={Styles.SubWrapper}>
        <div className={Styles.SubListWrapper}>
          <UserSubList
            subData={orders}
          />
        </div>
        <div className={Styles.Line} />
        <div className={Styles.AboutWraper}>
          {userData.name ? <About userData={userData} isChef={false} /> : <About isChef={false} />}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
