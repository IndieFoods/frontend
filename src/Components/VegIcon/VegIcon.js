import React from "react";

import Styles from "./VegIcon.module.css";

import { ReactComponent as Icon } from "../../Assets/Home/VegIcon.svg";

function VegIcon({ isDefault, isVeg, isReversed = false }) {
  return (
    <div
      className={Styles.Wrapper}
      style={{
        "--main-color": isVeg ? "var(--pure-green)" : "var(--red)",
        fontSize: isDefault ? "var(--veg-icon-size)" : "",
        flexDirection: isReversed ? "row-reverse" : "row",
      }}
    >
      <Icon className={Styles.Icon} />
      <span
        className={Styles.IconText}
        style={{
          marginLeft: isReversed ? "0" : "0.5em",
          marginRight: isReversed ? "0.5em" : "",
        }}
      >
        {isVeg ? "Veg" : "Non-Veg"}
      </span>
    </div>
  );
}

export default VegIcon;
