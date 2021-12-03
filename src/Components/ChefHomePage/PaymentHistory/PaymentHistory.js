import React from 'react'

import styles from './PaymentHistory.module.css';

import tempData from '../../TempData';
import PaymentHistoryIndividual from '../PaymentHistoryIndividual/PaymentHistoryIndividual';

function PaymentHistory() {

    const paymentData = tempData.orders.paymentHistory;
    const paymentHistoryHeadings = ['customer name', 'amount(₹)', 'date & time'];

    const paymentList = paymentData.map((payment) => {
        return (
            <PaymentHistoryIndividual paymentDetails={payment} />
        )
    });

    const paymentHistoryHeadingList = paymentHistoryHeadings.map((heading) => {
        return (
            <p className={styles.PaymentHistoryHeading}>
                {heading}
            </p>
        )
    });

    return (
        <div className={styles.PaymentHistoryContainer}>
            <p className={styles.PaymentHistoryTitle}>
                Payment History
            </p>
            <div className={styles.PaymentHistoryHeadingContainer}>
                {paymentHistoryHeadingList}
            </div>
            <div className={styles.PaymentHistoryWrapper}>
                {paymentList}
            </div>
        </div>
    )
}

export default PaymentHistory
