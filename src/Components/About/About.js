import React, { useEffect, useState, useRef } from "react";
import Select from "react-select";

import Styles from "./About.module.css";

import { ReactComponent as EditIcon } from "../../Assets/Profile/EditIcon.svg";
import { ReactComponent as SaveIcon } from "../../Assets/Profile/SaveIcon.svg";
import { ReactComponent as PlusIcon } from "../../Assets/_General/Plus.svg";

import { AboutSecHeadersData, cuisinesOptions } from "./../StaticData";

import AddressIndividual from "./AddressIndividual";
import CustomisedInput from "./CustomisedInput";
import { addAddress } from "../../Services/user.service";
import { useSelector } from "react-redux";
import { cuisuineSelectStyles } from "./helpers/CuisineSelectStyles";
import makeAnimated from "react-select/animated";
import { uploadFile } from "../../Services/firebase.service";
import { updateProfilePicture } from "../../Services/chef.service";

const tempData = {
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
  cuisines: ["north-indian", "south-indian", "chinese"],
  fssaiId: "12345678901234",
};

function About({ userData = tempData, isChef = false }) {
  const animatedComponentsForSelect = makeAnimated();

  const profileImageInputRef = useRef(12);
  const profileImageRef = useRef(123);

  const [currentUserData, setCurrentUserData] = useState(userData);

  const [individualChangeStates, setIndividualChangeStates] = useState({
    address: false,
    addFocusIndex: 0,
    pricing: false,
  });

  const [overallStates, setOverallStates] = useState({
    isInEditMode: false,
    hasBeenChanged: false,
  });

  const [cuisineSelectValue, setCuisineSelectValue] = useState([]);
  useEffect(() => {
    setCuisineSelectValue(
      cuisinesOptions.filter((cuisine) =>
        currentUserData.foodTypes?.includes(cuisine.value)
      )
    );
  }, [currentUserData.foodTypes]);

  const accessToken = useSelector((state) => state.userReducer.accessToken);

  useEffect(() => {
    setCurrentUserData(userData);
  }, [userData]);

  useEffect(() => {
    if (arraysEqual(currentUserData.address, userData.address)) {
      setIndividualChangeStates({
        ...individualChangeStates,
        address: false,
      });
    } else {
      setIndividualChangeStates({
        ...individualChangeStates,
        address: true,
      });
    }
  }, [currentUserData.address, userData.address]);

  useEffect(() => {
    if (userData.pricing) {
      if (objectsEqual(currentUserData.pricing, userData.pricing)) {
        setIndividualChangeStates({
          ...individualChangeStates,
          pricing: false,
        });
      } else {
        setIndividualChangeStates({
          ...individualChangeStates,
          pricing: true,
        });
      }
    }
  }, [currentUserData.pricing, userData.pricing]);

  useEffect(() => {
    setOverallStates({
      ...overallStates,
      hasBeenChanged:
        individualChangeStates.address || individualChangeStates.pricing,
    });
  }, [individualChangeStates]);

  const objectsEqual = (o1, o2) =>
    Object.keys(o1).length === Object.keys(o2).length &&
    Object.keys(o1).every((p) => o1[p] === o2[p]);

  const arraysEqual = (a1, a2) =>
    a1.length === a2.length && a1.every((o, idx) => objectsEqual(o, a2[idx]));

  const handleAddressEdit = (posIndex, newAddress) => {
    let tempData = currentUserData.address.slice();
    tempData[posIndex] = newAddress;
    setCurrentUserData({ ...currentUserData, address: tempData });
  };

  const handlePricingEdit = (feildKey, newPricing) => {
    setCurrentUserData({
      ...currentUserData,
      pricing: { ...currentUserData.pricing, [feildKey]: newPricing },
    });
  };

  const saveAddressChanges = async () => {
    if (individualChangeStates.address.hasBeenChanged) {
      await addAddress(currentUserData.address, accessToken);
    }
  };

  const saveData = async () => {
    //Save the data
    setOverallStates({ ...overallStates, isInEditMode: false });
    if (isChef) {
      // Chef Overall API Call
      console.log("Overall API call");
    } else {
      // User Address API Call
      console.log("Address API call");
    }
    // Refetch Data
  };

  const discardChanges = () => {
    setCurrentUserData(userData);
    setOverallStates({ ...overallStates, isInEditMode: false });
  };

  const handleProfileFileChange = async () => {
    const [file] = profileImageInputRef.current.files;
    try {
      if (file) {
        if (!accessToken) return;
        profileImageRef.current.src = URL.createObjectURL(file);
        // Upload image to firebase and call on change
        const downloadURL = await uploadFile(file, 'profile');
        // call api
        await updateProfilePicture(downloadURL, accessToken);
      }
    } catch (err) {
      alert(err.response.data.errors[0].message);
    }
  };

  const handleCuisineSelectChange = (inputValue) => {
    const tempCuisine = inputValue.map((input) => input.value);
    setCurrentUserData({ ...currentUserData, cuisines: tempCuisine });
    setCuisineSelectValue(inputValue);
  };

  return (
    <div className={Styles.Wrapper}>
      <div className={Styles.PersonalInfoWrapper}>
        <h4 className={Styles.PersonalInfoHeader + " " + Styles.InfoHeader}>
          {AboutSecHeadersData.personalInfo}
        </h4>
        <div className={Styles.PersonalInfoContent}>
          {isChef ? <div className={Styles.PersonalInfoImageWrapper}>
            <img
              ref={profileImageRef}
              src={currentUserData.profilePicture}
              alt="Profile"
              className={Styles.PersonalInfoImage}
            />
            <div
              className={Styles.EditImageScrim}
              onClick={() => {
                profileImageInputRef.current.click();
              }}
            >
              <EditIcon className={Styles.EditImageIcon} />
            </div>
            <input
              ref={profileImageInputRef}
              type="file"
              className={Styles.EditImageInput}
              accept="image/*"
              onChange={handleProfileFileChange}
            />
          </div> : null}
          <div className={Styles.PersonalInfoMobileAndEmail}>
            <span className={Styles.PersonalInfoContentMobile}>
              {userData.phone}
            </span>
            <span className={Styles.PersonalInfoContentEmail}>
              {userData.email}
            </span>
            <span className={Styles.PersonalInfoFSSAI}>{userData.fssaiId}</span>
          </div>
        </div>
      </div>
      <div className={Styles.EditableInfoWrapper}>
        <div className={Styles.EditSaveButtonWrapper}>
          {overallStates.isInEditMode ? (
            <>
              <div className={Styles.DiscardButton} onClick={discardChanges}>
                Discard
              </div>
              <div
                className={
                  Styles.EditSaveButton +
                  " " +
                  Styles.SaveButton +
                  " " +
                  (overallStates.hasBeenChanged
                    ? Styles.SaveButtonWithChanges
                    : "")
                }
                onClick={() => {
                  saveData();
                }}
              >
                Save{" "}
                <SaveIcon
                  className={Styles.SaveIcon + " " + Styles.EditSaveIcon}
                />
              </div>
            </>
          ) : (
            <div
              className={Styles.EditSaveButton + " " + Styles.EditButton}
              onClick={() => {
                setOverallStates({
                  ...overallStates,
                  isInEditMode: true,
                });
              }}
            >
              Edit{" "}
              <EditIcon
                className={Styles.EditIcon + " " + Styles.EditSaveIcon}
              />
            </div>
          )}
        </div>
        <div
          className={
            Styles.AddressInfoWrapper + " " + (isChef ? Styles.ChefAddInfo : "")
          }
          style={isChef ? {} : { border: "none" }}
        >
          <h4 className={Styles.AddressInfoHeader + " " + Styles.InfoHeader}>
            {isChef
              ? AboutSecHeadersData.addressChef
              : AboutSecHeadersData.addressUser}
          </h4>

          <div className={Styles.AddressList}>
            {currentUserData.address.map((address, index) => (
              <div
                className={
                  Styles.AddressItem +
                  " " +
                  (index < currentUserData.address.length - 1
                    ? Styles.HasAddressLine
                    : "")
                }
                key={index}
              >
                <AddressIndividual
                  address={address}
                  isEditable={overallStates.isInEditMode}
                  keyindex={index}
                  dataChangeFun={handleAddressEdit}
                  focusIndex={individualChangeStates.addFocusIndex}
                />
              </div>
            ))}
          </div>
          {isChef ? null : (
            <div
              className={Styles.AddAddressWrapper}
              onClick={() => {
                setOverallStates({
                  ...overallStates,
                  isInEditMode: true,
                });
                setIndividualChangeStates({
                  ...individualChangeStates,
                  address: true,
                  addFocusIndex: currentUserData.address.length,
                });
                setCurrentUserData({
                  ...currentUserData,
                  address: [
                    ...currentUserData.address,
                    {
                      address: "",
                      pincode: "",
                    },
                  ],
                });
              }}
            >
              <PlusIcon className={Styles.AddAddressIcon} />
            </div>
          )}
        </div>

        {isChef ? (
          <div className={Styles.PricingInfoWrapper}>
            <h4 className={Styles.PricingInfoHeader + " " + Styles.InfoHeader}>
              {AboutSecHeadersData.pricing}
            </h4>
            <div className={Styles.PricingInfoContent}>
              {Object.keys(AboutSecHeadersData.pricingInputData).map(
                (key, index) => (
                  <div className={Styles.PricingInfoItem} key={index}>
                    <CustomisedInput
                      keyValue={key}
                      keyIndex={index}
                      type={AboutSecHeadersData.pricingInputData[key].inputType}
                      placeholder={
                        AboutSecHeadersData.pricingInputData[key].placeholder
                      }
                      defaulValue={currentUserData.pricing[key]}
                      onChange={handlePricingEdit}
                      label={AboutSecHeadersData.pricingInputData[key].label}
                      isEditable={overallStates.isInEditMode}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        ) : null}
        {isChef ? (
          <div className={Styles.CuisineInfoWrapper}>
            <h4 className={Styles.CuisineInfoHeader + " " + Styles.InfoHeader}>
              {AboutSecHeadersData.cuisine}
            </h4>
            <div className={Styles.CuisineListSelector}>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponentsForSelect}
                options={cuisinesOptions}
                onChange={handleCuisineSelectChange}
                styles={cuisuineSelectStyles}
                value={cuisineSelectValue}
                // value={[
                //   ...cuisinesOptions.filter((cuisine) =>
                //     currentUserData.cuisines.includes(cuisine.value)
                //   ),
                // ]}
                isDisabled={!overallStates.isInEditMode}
                isMulti
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default About;
