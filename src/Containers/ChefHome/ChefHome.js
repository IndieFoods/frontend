import React, { useEffect } from "react";

import styles from "./ChefHome.module.css";

import ChefHomeLeftSec from "../../Components/ChefHomePage/ChefHomeLeftSec";
import ChefHomePageHighlight from "../../Components/ChefHomePage/ChefHomePageHighlight/ChefHomePageHighlight";
import PaymentHistory from "../../Components/ChefHomePage/PaymentHistory/PaymentHistory";
import Navbar from "../../Components/Navbar";

import { images } from "../../Components/StaticData";
import { useSelector } from "react-redux";
import { fetchOrders } from "./../../Services/chef.service";
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

const types = ["bl", "blsd", "sd", "ld"];

const tempData = Array(2)
  .fill(null)
  .map((_, index) => ({
    id: index,
    userName: `User ${index}`,
    dailySubscriptionAmount: Math.floor(Math.random() * 500),
    numberOfDays: Math.floor(Math.random() * 40) + 5,
    numberOfPeople: Math.floor(Math.random() * 5) + 1,
    totalAmount: Math.floor(Math.random() * 20000) + 1000,
    userAddress: "",
    chefAddress: "",
    chefProfilePicture: "",
    type: types[Math.floor(Math.random() * 4)],
    isVeg: Math.random() > 0.5,
    startDate: randomDate(new Date(2021, 11, 4), new Date(2021, 12, 4)),
  }));

function ChefHome() {
  const chefData = useSelector((state) => state.userReducer.userData);
  const accessToken = useSelector((state) => state.userReducer.accessToken);

  const [ordersData, setOrdersData] = React.useState();
  const [highlightData, setHighlightData] = React.useState([0, 0, 0]);

  const [todaysOrders, setTodaysOrders] = React.useState([]);

  useEffect(async () => {
    try {
      let data = await fetchOrders(accessToken);
      console.log(data);
      // set Orders Data
      data = data.map((order) => {
        return {
          ...order,
          startDate: new Date(order.startDate._seconds * 1000),
        };
      });
      setOrdersData(data);
    } catch (error) {
      console.log(error);
    }
  }, [chefData]);

  useEffect(() => {
    const tmpTodaysOrders = ordersData?.filter(
      (order) =>
        order.startDate.getDate() === new Date().getDate() &&
        order.startDate.getMonth() === new Date().getMonth() &&
        order.startDate.getFullYear() === new Date().getFullYear()
    );
    setTodaysOrders(tmpTodaysOrders);

    let totalOrders = ordersData?.length;
    let totalEarnings = ordersData?.reduce((acc, curr) => {
      return acc + curr.totalAmount;
    }, 0);
    let totalEarningInLastMonth = ordersData?.reduce((acc, curr) => {
      if (
        curr.startDate.getMonth() === new Date().getMonth() &&
        curr.startDate.getFullYear() === new Date().getFullYear()
      ) {
        return acc + curr.totalAmount;
      }
      return acc;
    }, 0);
    setHighlightData([totalOrders, totalEarnings, totalEarningInLastMonth]);
  }, [ordersData]);

  return (
    <div>
      <Navbar images={images} />
      <div className={styles.ChefHomeWrapper}>
        <ChefHomeLeftSec ordersData={todaysOrders} />
        <div className={styles.ChefHomeRightSec}>
          <ChefHomePageHighlight highlightData={highlightData} />
          <PaymentHistory paymentData={ordersData} />
        </div>
      </div>
    </div>
  );
}

export default ChefHome;
