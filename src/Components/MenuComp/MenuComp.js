import React, { useState, useEffect, useRef } from "react";

import styles from "./MenuComp.module.css";

import { data } from "../StaticData";
import NavigationList from "./../NavigationList";
import MenuFoodItem from "./MenuFoodItem/MenuFoodItem";

import { ReactComponent as EditIcon } from "../../Assets/Profile/EditIcon.svg";
import { ReactComponent as SaveIcon } from "../../Assets/Profile/SaveIcon.svg";
import { ReactComponent as PlusIcon } from "../../Assets/_General/Plus.svg";
import { addMenuItem, updateMenuItem } from "../../Services/chef.service";
import { useSelector } from "react-redux";

const foodCategories = data.foodSubDetails.foodCategories;

const tempData = Array(15)
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
  });

function MenuComp({ menuData = tempData }) {
  const [currentMenuData, setCurrentMenuData] = useState(menuData);
  const updateReqList = useRef([]);
  const newAddReqList = useRef([]);

  const newIDIndexRef = useRef(0);

  const [activeFoodCategory, setActiveFoodCategory] = useState(
    foodCategories[0]
  );

  const [activeCategoryData, setActiveCategoryData] = useState([]);
  const accessToken = useSelector((state) => state.userReducer.accessToken);

  const [isInEditMode, setIsInEditMode] = useState(false);
  const [hasDataChanged, setHasDataChanged] = useState(false);

  const discardChanges = () => {
    console.log(accessToken);
    setCurrentMenuData(menuData);
    setIsInEditMode(false);
    setHasDataChanged(false);
  }

  const objectsEqual = (o1, o2) =>
    Object.keys(o1).length === Object.keys(o2).length &&
    Object.keys(o1).every((p) => o1[p] === o2[p]);

  const handleDataChange = (id, updatedData, newID) => {
    if (id) {
      let posIndex = currentMenuData
        .map(function (e) {
          return e.id;
        })
        .indexOf(id);
      let updatedMenuData = currentMenuData.slice();
      updatedMenuData[posIndex] = updatedData;
      setCurrentMenuData(updatedMenuData);

      let mainMenuData = menuData.filter((obj) => {
        return obj.id === id;
      });

      if (objectsEqual(mainMenuData[0], updatedData)) {
        setHasDataChanged(false);
        if (updateReqList.current.includes(id)) {
          updateReqList.current.splice(updateReqList.current.indexOf(id), 1);
        }
      } else {
        setHasDataChanged(true);
        if (!updateReqList.current.includes(id)) {
          updateReqList.current.push(id);
        }
      }
    } else {
      setHasDataChanged(true);
      let posIndex = currentMenuData
        .map(function (e) {
          return e.newID;
        })
        .indexOf(newID);
      let updatedMenuData = currentMenuData.slice();
      updatedMenuData[posIndex] = updatedData;
      setCurrentMenuData(updatedMenuData);
    }
  };

  useEffect(() => {
    newAddReqList.current = currentMenuData.filter((obj) => {
      return obj.newID !== undefined;
    });
  }, [currentMenuData]);

  const handleSave = async () => {
    setIsInEditMode(false);
    console.log(updateReqList.current);
    console.log(newAddReqList.current);
    console.log(currentMenuData);
    try {
      if (hasDataChanged) {
        if (!accessToken) return;
        setHasDataChanged(false);
        // Send Data to backend
        let updateReqData = [];
        for (let i = 0; i < updateReqList.current.length; i++) {
          updateReqData =
            currentMenuData.filter((obj) => {
              return obj.id === updateReqList.current[i];
            });
        }

        console.log(updateReqData);
        if (updateReqData.length > 0) {
          await updateMenuItem(updateReqData, accessToken);
        }

        const newArray = newAddReqList.current.slice();
        newArray.forEach(function (obj) { delete obj.newID });
        if (newArray.length > 0) {
          await addMenuItem(newArray, accessToken);
        }

        console.log(newArray);
        // Refresh data
      }
    } catch (error) {
      alert(error.response.data.errors[0].message);
    }
  };

  useEffect(() => {
    setCurrentMenuData(menuData);
    updateReqList.current = [];
    newAddReqList.current = [];
  }, [menuData]);

  useEffect(() => {
    filterAndSetActiveCategoryData(activeFoodCategory);
  }, [activeFoodCategory, currentMenuData]);

  useEffect(() => { }, [currentMenuData]);

  const handleCategoryClick = (category) => {
    setActiveFoodCategory(category);
  };
  const filterAndSetActiveCategoryData = (category) => {
    const filteredData = currentMenuData.filter((item) => {
      return item.type === category;
    });
    setActiveCategoryData(filteredData);
  };

  return (
    <>
      <div className={styles.Wrapper}>
        <NavigationList
          activeCategory={activeFoodCategory}
          onCategoryChange={handleCategoryClick}
          categories={foodCategories}
        />
        <div className={styles.MenuFoodItems}>
          <div className={styles.UpperSection}>
            <h3 className={styles.Title}>Menu</h3>
            <div className={styles.EditSaveButtonWrapper}>
              {isInEditMode ? (
                <>
                  <div className={styles.DiscardButton} onClick={discardChanges}>Discard</div>
                  <div
                    className={
                      styles.EditSaveButton +
                      " " +
                      styles.SaveButton +
                      " " +
                      (hasDataChanged ? styles.SaveButtonWithChanges : "")
                    }
                    onClick={() => {
                      handleSave();
                    }}
                  >
                    Save{" "}
                    <SaveIcon
                      className={styles.SaveIcon + " " + styles.EditSaveIcon}
                    />
                  </div>
                </>
              ) : (
                <div
                  className={styles.EditSaveButton + " " + styles.EditButton}
                  onClick={() => {
                    setIsInEditMode(true);
                  }}
                >
                  Edit{" "}
                  <EditIcon
                    className={styles.EditIcon + " " + styles.EditSaveIcon}
                  />
                </div>
              )}
            </div>
          </div>
          <div className={styles.ListWrapper}>
            {activeCategoryData.map((foodItem, index) => {
              return (
                <div
                  key={index}
                  className={styles.FoodItemWrapper}
                  style={
                    index == 0
                      ? {
                        marginTop: "0px",
                      }
                      : {}
                  }
                >
                  <MenuFoodItem
                    data={foodItem}
                    isEditing={isInEditMode}
                    onChangeFun={handleDataChange}
                    keyIndex={index}
                  />
                  {/* <FoodItem data={foodItem} /> */}
                </div>
              );
            })}
          </div>
          <div
            className={styles.AddNewItemWrapper}
            onClick={() => {
              setIsInEditMode(true);
              let newItem = {
                newID: newIDIndexRef.current,
                name: "",
                isVeg: false,
                image: "",
                type: activeFoodCategory,
              };
              newIDIndexRef.current++;
              let tempArray = currentMenuData.slice();
              tempArray.push(newItem);
              setCurrentMenuData(tempArray);
            }}
          >
            <PlusIcon className={styles.AddNewItemIcon} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuComp;
