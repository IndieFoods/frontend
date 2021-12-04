import React, { useState } from "react";

import styles from "./SubscriptionPop.module.css";
import { Checkbox } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import Button from "../../Button";

import { data } from "../../StaticData";

function SubscriptionPop() {
  const [value, setValue] = useState({
    people: "3",
    days: "30",
  });

  const inputRequiredList = data.foodSubDetails.inputRequired.map(
    (item, index) => {
      return (
        <div className={styles.InputWrapper} key={index}>
          <p className={styles.LablePara}>{item.label}</p>
          <input
            type={item.input.type}
            name={item.input.name}
            id={item.input.id}
            className={styles.Input}
            value={value[item.input.name]}
            onChange={(e) => {
              const name = e.target.name;
              const data = e.target.value;

              setValue({ ...value, [name]: data });
            }}
            style={{
              width: `calc(${
                value[item.input.name].toString().length
              }ch + 1.6rem)`,
            }}
          />
        </div>
      );
    }
  );

  const checkboxesList = data.foodSubDetails.Checkboxes.map((item, index) => {
    return (
      <div className={styles.CheckboxWrapper} key={index}>
        <Checkbox
          sx={{
            padding: "0.4rem",
            borderWidth: 0,
            color: "var(--black)",
            "@media (max-width: 380px)": {
              padding: "0.1rem",
            },
            "&.Mui-checked": {
              color: "var(--black)",
            },
            "& .MuiSvgIcon-root": {
              fontSize: "var(--font-20)",
            },
          }}
        />
        <p className={styles.CheckboxPara}>{item}</p>
      </div>
    );
  });

  const selectList = data.foodSubDetails.addressTempData.map((item, index) => {
    return (
      <MenuItem
        key={index}
        value={item}
        sx={{
          fontSize: "var(--font-15)",

          fontWeight: "600",
          "@media (max-width: 380px)": {
            fontSize: "var(--font-14)",
          },
        }}
      >
        {item}
      </MenuItem>
    );
  });

  const summaryList = data.foodSubDetails.summary.map((item, index) => {
    return (
      <div className={styles.SummarySubWrapper} key={index}>
        <p className={styles.SummarySubPara}>{item.type}</p>
        <p className={styles.SummarySubPara}>{item.value}</p>
      </div>
    );
  });

  return (
    <div className={styles.Wrapper}>
      <form className={styles.UpperWrapper}>{inputRequiredList}</form>
      <form className={styles.CheckBoxWrapperWrapper}>{checkboxesList}</form>
      <form className={styles.AddressWrapper}>
        <p className={styles.AddressPara}>Address : </p>
        <Select
          defaultValue={data.foodSubDetails.addressTempData[0]}
          sx={{
            width: "100%",
            fontSize: "var(--font-15)",
            fontWeight: "600",
            borderWidth: "0",
            "@media (max-width: 380px)": {
              fontSize: "var(--font-14)",
            },

            "& .MuiSelect-select": {
              whiteSpace: "normal !important",
              padding: 0,
            },
            ".MuiOutlinedInput-notchedOutline": {
              borderWidth: "0 !important",
            },
            "& .MuiSelect-icon": {
              fontSize: "var(--font-20)",
            },
          }}
        >
          {selectList}
        </Select>
      </form>
      <div className={styles.SummaryWrapper}>
        <p className={styles.SummaryPara}>Summary</p>
        {summaryList}
        <hr className={styles.HorizontalLine} />
        <div className={`${styles.SummarySubWrapper} ${styles.GrandTotal}`}>
          <p className={styles.SummarySubPara}>Grand Total</p>
          <p className={styles.SummarySubPara}>₹18000</p>
        </div>
      </div>
      <Button
        content="Subscribe and Pay ₹18000"
        mainColor="var(--green)"
        fontSize="var(--font-16)"
        wrapperClass={styles.Button}
      />
    </div>
  );
}

export default SubscriptionPop;
