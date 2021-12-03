import React from 'react'
import numberWithCommas from '../helper/convertNumberWithComma';

import styles from './PaymentHistoryIndividual.module.css';

function PaymentHistoryIndividual({ paymentDetails }) {
    return (
        <div className={styles.PaymentHistoryIndividualWrapper}>
            <p className={styles.PaymentUserName}>{paymentDetails.userName}</p>
            <p className={styles.PaymentAmount}> {numberWithCommas(paymentDetails.amount)}</p>
            <p className={styles.PaymentTimestamp}>{paymentDetails.timestamp}</p>
        </div>
    )
}

export default PaymentHistoryIndividual
