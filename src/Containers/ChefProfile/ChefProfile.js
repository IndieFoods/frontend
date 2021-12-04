import React, { useEffect } from "react";

import Styles from "./ChefProfile.module.css";

import Navbar from "../../Components/Navbar";
import About from "../../Components/About";
import MenuComp from "./../../Components/MenuComp/index";
import { useSelector } from "react-redux";
import { fetchMenuItems } from "../../Services/chef.service";
import notify from "../../Utils/helper/notifyToast";

function ChefProfile() {

  const userData = useSelector((state) => state.userReducer.userData);
  const uid = useSelector((state) => state.userReducer.uid);
  const [menuItems, setMenuItems] = React.useState([]);

  async function getMenuItems() {
    try {
      if (!uid) return;
      const menuItems = await fetchMenuItems(uid);
      setMenuItems(menuItems);
    } catch (e) {
      notify(e.response.data.errors[0].message, "error");
    }
  }

  useEffect(() => {
    getMenuItems()
  }, [uid]);

  return (
    <div className={Styles.Wrapper}>
      <Navbar />
      <div className={Styles.SubWrapper}>
        <div className={Styles.SubListWrapper}>
          <MenuComp menuData={menuItems} refreshDataFun={getMenuItems} />
        </div>
        <div className={Styles.Line} />
        <div className={Styles.AboutWraper}>
          {userData.name ? (
            <About userData={userData} isChef={true} />
          ) : (
            <About isChef={true} />
          )}

        </div>
      </div>
    </div>
  );
}

export default ChefProfile;
