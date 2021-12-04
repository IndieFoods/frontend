import React from "react";
import numberWithCommas from "../helper/convertNumberWithComma";

import styles from "./ChefHomePageHighlightIndividual.module.css";

function ChefHomePageHighlightIndividual({
  wrapperClass,
  highlightTitle,
  highlightNumber,
}) {
  return (
    <div
      className={
        styles.ChefHomePageHighlightIndividualContainer + " " + wrapperClass
      }
    >
      <p className={styles.ChefHomePageHighlightIndividualTitle}>
        {highlightTitle}
      </p>
      <p className={styles.ChefHomePageHighlightIndividualNumber}>
        {highlightTitle === "total subscriptions"
          ? highlightNumber
          : "₹" + highlightNumber}
      </p>
    </div>
  );
}

export default ChefHomePageHighlightIndividual;
