import React from "react";

import styles from "./ChefHomePageHighlight.module.css";
import { data } from "../../StaticData";
import tempData from "../../TempData";
import ChefHomePageHighlightIndividual from "../ChefHomePageHighlightIndividual/ChefHomePageHighlightIndividual";

function ChefHomePageHighlight({ highlightData }) {
  const highlights = data.chefHomePage.highlights;
  //   const highlightData = tempData.orders.highlightData;

  const highlightList = highlights.map((highlight, index) => {
    return (
      <ChefHomePageHighlightIndividual
        wrapperClass={styles.HighlightInstance}
        highlightTitle={highlight}
        highlightNumber={highlightData[index]}
        key={index}
      />
    );
  });

  return (
    <div className={styles.ChefHomePageHighlightContainer}>{highlightList}</div>
  );
}

export default ChefHomePageHighlight;
