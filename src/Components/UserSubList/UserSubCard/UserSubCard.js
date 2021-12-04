import { Checkbox } from "@mui/material";
import React from "react";
import VegIcon from "../../VegIcon";

import Styles from "./UserSubCard.module.css";

function UserSubCard({ cardData }) {
  function CustomisedCheck(props) {
    return (
      <Checkbox
        sx={{
          padding: 0,
          borderWidth: 0,
          color: "var(--orange-primary)",
          "&.Mui-checked": {
            color: "var(--orange-primary)",
          },
          "& .MuiSvgIcon-root": {
            fontSize: "var(--font-20)",
          },
        }}
        {...props}
      />
    );
  }

  return (
    <div className={Styles.Wrapper}>
      <div className={Styles.ImageSec}>
        <img
          src={cardData.image}
          alt={cardData.name}
          className={Styles.Image}
        />
      </div>
      <div className={Styles.InfoSec}>
        <h4 className={Styles.Name}>{cardData.name}</h4>
        <div className={Styles.AddressSec}>
          <h5 className={Styles.Title}>Address:</h5>
          <div className={Styles.Address}>{cardData.address}</div>
        </div>
        <div className={Styles.IncludesSec}>
          <h5 className={Styles.Title + " " + Styles.IncludesTitle}>
            Included:
          </h5>
          {Object.keys(cardData.includes).map((include, index) => {
            return (
              <div key={index} className={Styles.Includes}>
                <CustomisedCheck
                  inputProps={{ "aria-label": "controlled" }}
                  checked={cardData.includes[include]}
                />
                <span className={Styles.IncludeName}>{include}</span>
              </div>
            );
          })}
        </div>
        {/* <div>{cardData.isVeg ? "Veg" : "Non-Veg"}</div> */}
        <div className={Styles.VegIconWrapper}>
          <VegIcon isVeg={cardData.isVeg} isDefault={true} />
        </div>
      </div>
    </div>
  );
}

export default UserSubCard;
