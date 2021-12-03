import React, { useEffect } from "react";

import Styles from "./ChefProfile.module.css";

import Navbar from "../../Components/Navbar";
import About from "../../Components/About";
import MenuComp from "./../../Components/MenuComp";
import { useSelector } from "react-redux";
import { fetchMenuItems } from "../../Services/chef.service";


function ChefProfile() {
  const userData = useSelector((state) => state.userReducer.userData);
  const accessToken = useSelector((state) => state.userReducer.accessToken);
  const [menuItems, setMenuItems] = React.useState([]);

  async function getMenuItems() {
    try {
      if (!accessToken) return;
      const menuItems = await fetchMenuItems(accessToken);
      setMenuItems(menuItems);
    } catch (e) {
      alert(e.response.data.errors[0].message);
    }
  };

  useEffect(() => {
    getMenuItems()
  }, [accessToken]);

  return (
    <div className={Styles.Wrapper}>
      <Navbar />
      <div className={Styles.SubWrapper}>
        <div className={Styles.SubListWrapper}>
          <MenuComp
            menuData={menuItems}
          />
        </div>
        <div className={Styles.Line} />
        <div className={Styles.AboutWraper}>
          {userData.name ? <About userData={userData} isChef={true} /> : <About isChef={true} />}
        </div>
      </div>
    </div>
  );
}

export default ChefProfile;
