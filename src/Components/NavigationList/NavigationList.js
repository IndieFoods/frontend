import React from 'react'
import useMediaQuery from '../../Utils/helper/useMediaQuery';

import styles from './NavigationList.module.css'

function NavigationList({ activeCategory, onCategoryChange, categories }) {

    const [windowWdthVar] = useMediaQuery();

    const catogeriesList = categories.map((category, index) => {
        return (
            <div
                key={index}
                className={styles.FoodCatogery}
                style={
                    activeCategory === category
                        ? {
                            color: "var(--orange-primary)",
                            boxShadow:
                                windowWdthVar > 500
                                    ? "5px 0px 0px 0px var(--orange-primary)"
                                    : "none",
                        }
                        : {}
                }
                onClick={() => {
                    onCategoryChange(`${category}`);
                }}
            >
                {category}
            </div>
        );
    });

    return (
        <div className={styles.FoodCatogeriesWrapper}>{catogeriesList}</div>
    )
}

export default NavigationList
