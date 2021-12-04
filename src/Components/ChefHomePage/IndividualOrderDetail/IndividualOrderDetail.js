import React from "react";

import styles from "./IndividualOrderDetail.module.css";

function IndividualOrderDetail({ order }) {
  return (
    <div className={styles.OrderDetailsWrapper}>
      <p className={styles.OrderUserName}>{order.userName}</p>
      <p className={styles.OrderNumberOfPerson}>{order.numberOfPeople}</p>
    </div>
  );
}

export default IndividualOrderDetail;
