import React, { useState } from 'react'

import styles from './ChefHomeLeftSec.module.css';

import IndividualOrderDetail from '../IndividualOrderDetail';
import NavigationList from '../../NavigationList';
import { data } from '../../StaticData';
import tempData from "../../TempData";

function ChefHomeLeftSec() {

    const orders = tempData.orders;
    const foodCategories = data.foodSubDetails.foodCategories;

    const [activeFoodCategory, setActiveFoodCategory] = useState(
        foodCategories[0]
    );

    const handleCategoryClick = (category) => {
        setActiveFoodCategory(category);
    };

    const totalPeople = (orders) => {
        let total = 0;
        orders.map((item) => {
            total += item.numberOfPerson;
        })
        return total;
    };

    const orderList = orders[activeFoodCategory].map((item) => {
        return (
            <IndividualOrderDetail order={item} />
        );
    });

    return (
        <div className={styles.ChefHomeLeftSecWrapper}>
            <p className={styles.ChefHomeLeftSecTitle}>Today's Orders</p>
            <div className={styles.ChefHomeLeftSecContainer}>
                <NavigationList activeCategory={activeFoodCategory} onCategoryChange={handleCategoryClick} categories={foodCategories} />
                <div className={styles.OrderDetails}>
                    <p className={styles.TotalOrderDetails}>
                        <span style={{ color: 'black' }}>{orders[activeFoodCategory].length}</span> Orders ( <span style={{ color: 'black' }}>{totalPeople(orders[activeFoodCategory])}</span> People )</p>
                    {orderList}
                </div>
            </div>
        </div>
    )
}

export default ChefHomeLeftSec
