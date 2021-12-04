import React, { useState, useEffect } from "react";

import styles from "./SubscriptionPop.module.css";
import { Checkbox } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import Button from "../../Button";

import { data } from "../../StaticData";
import { initializeOrder } from "../../../Services/order.service";
import { useSelector } from "react-redux";
import { payementService } from "../../../Services/payment.service";
import notify from "../../../Utils/helper/notifyToast";

const defaultData = {
  people: 1,
  days: 4,
};

function SubscriptionPop({ chefData }) {
  // Fetch user Data from Datalayer

  const accessToken = useSelector((state) => state.userReducer.accessToken);
  const userData = useSelector((state) => state.userReducer.userData);
  const [paymentMessage, setPaymentMessage] = useState("");
  const [values, setValues] = useState({
    people: defaultData.people,
    days: defaultData.days,
    address: userData.name ? userData.address[0].address : "",
    summary: {
      breakfast: chefData.pricing.breakfast * defaultData.days * 7,
      lunch: chefData.pricing.lunch * defaultData.days * 7,
      dinner: chefData.pricing.dinner * defaultData.days * 7,
      snacks: chefData.pricing.snacks * defaultData.days * 7,
    },
    summaryTotal:
      chefData.pricing.breakfast * defaultData.days +
      chefData.pricing.lunch * defaultData.days +
      chefData.pricing.dinner * defaultData.days +
      chefData.pricing.snacks * defaultData.days,
    checks: {
      breakfast: true,
      lunch: true,
      dinner: true,
      snacks: true,
    },
  });

  useEffect(() => {
    setValues({
      ...values,
      address: userData.name ? userData.address[0].address : "",
    });
  }, [userData]);

  useEffect(() => {
    setValues({
      ...values,
      summary: {
        breakfast: values.checks.breakfast
          ? chefData.pricing.breakfast * values.days * values.people * 7
          : 0,
        lunch: values.checks.lunch
          ? chefData.pricing.lunch * values.days * values.people * 7
          : 0,
        dinner: values.checks.dinner
          ? chefData.pricing.dinner * values.days * values.people * 7
          : 0,
        snacks: values.checks.snacks
          ? chefData.pricing.snacks * values.days * values.people * 7
          : 0,
      },
      summaryTotal:
        ((values.checks.breakfast
          ? chefData.pricing.breakfast * values.days * values.people
          : 0) +
          (values.checks.lunch
            ? chefData.pricing.lunch * values.days * values.people
            : 0) +
          (values.checks.dinner
            ? chefData.pricing.dinner * values.days * values.people
            : 0) +
          (values.checks.snacks
            ? chefData.pricing.snacks * values.days * values.people
            : 0)) *
        7,
    });
  }, [values.days, values.people, values.checks, chefData]);

  const handleChanges = (checkName, newValue) => {
    setValues({
      ...values,
      checks: {
        ...values.checks,
        [checkName]: newValue,
      },
    });
  };

  const subscribe = async () => {
    // Razorpay integration
    const subType = Object.keys(values.checks)
      .filter((key) => values.checks[key])
      .map((key) => key.charAt(0))
      .join("");

    try {
      const orderDetails = await initializeOrder(
        chefData.uid,
        subType,
        values.address,
        values.people,
        values.days,
        values.summaryTotal / values.days,
        accessToken
      );
      const data = await payementService(
        orderDetails,
        values.summaryTotal / values.days,
        accessToken
      );
    } catch (error) {
      notify("Payment Unsuccessful", "error");
    }
  };

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
            value={values[item.input.name]}
            onChange={(e) => {
              const name = e.target.name;
              const data = e.target.value;

              setValues({ ...values, [name]: data });
            }}
            style={{
              width: `calc(${
                values[item.input.name].toString().length
              }ch + 1.6rem)`,
            }}
          />
        </div>
      );
    }
  );

  const checkboxesList = Object.keys(values.checks).map((item, index) => {
    return (
      <div className={styles.CheckboxWrapper} key={index}>
        <Checkbox
          onChange={(e) => {
            handleChanges(item, e.target.checked);
          }}
          checked={values.checks[item]}
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
        <p
          className={styles.CheckboxPara}
        >{`${item} ( ${chefData.pricing[item]}₹ / person )`}</p>
      </div>
    );
  });

  const selectList = userData.address?.map((item, index) => {
    return (
      <MenuItem
        key={index}
        value={item.address}
        sx={{
          fontSize: "var(--font-15)",
          fontWeight: "600",
          "@media (max-width: 380px)": {
            fontSize: "var(--font-14)",
          },
        }}
      >
        {item.address}
      </MenuItem>
    );
  });

  const summaryList = Object.keys(values.summary).map((item, index) => {
    return (
      <div className={styles.SummarySubWrapper} key={index}>
        <p className={styles.SummarySubPara}>{item}</p>
        <p className={styles.SummarySubPara}>{values.summary[item]}</p>
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
          onChange={(e) => {
            console.log(e.target.value);
          }}
          defaultValue={values.address}
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
          onChange={(e) => {
            setValues({ ...values, address: e.target.value });
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
          <p className={styles.SummarySubPara}>{`₹${values.summaryTotal}`}</p>
        </div>
      </div>
      <Button
        content={`Subscribe and Pay ₹${values.summaryTotal}`}
        mainColor="var(--green)"
        fontSize="var(--font-16)"
        wrapperClass={styles.Button}
        onClick={subscribe}
      />
    </div>
  );
}

export default SubscriptionPop;
