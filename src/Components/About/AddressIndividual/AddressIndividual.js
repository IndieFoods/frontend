import React, { useEffect, useRef } from "react";

import Styles from "./AddressIndividual.module.css";

import { updateTextareaHeight } from "../helpers";

import useMediaQuery from "./../../../Utils/helper/useMediaQuery";

function AddressIndividual({
  address,
  isEditable,
  keyindex,
  dataChangeFun,
  focusIndex,
}) {
  const addressRef = useRef(123);
  const pincodeRef = useRef(123);

  const [windowWidth] = useMediaQuery();

  useEffect(() => {
    updateTextareaHeight(addressRef.current);
  }, [windowWidth]);

  useEffect(() => {
    if (address.address) {
      addressRef.current.value = address?.address;
    }
    if (address.pincode) {
      pincodeRef.current.value = address.pincode;
    }
    updateTextareaHeight(addressRef.current);
  }, [address]);

  useEffect(() => {
    if (isEditable && keyindex === focusIndex) {
      addressRef.current.focus();
    }
  }, [isEditable]);

  function handleDataChange() {
    dataChangeFun(keyindex, {
      address: addressRef.current.value,
      pincode: pincodeRef.current.value,
    });
  }

  return (
    <div className={Styles.Wrapper}>
      <textarea
        onChange={(e) => {
          updateTextareaHeight(e.target);
          handleDataChange();
        }}
        className={Styles.Address}
        disabled={!isEditable}
        ref={addressRef}
        defaultValue={address.address}
      />
      <input
        onChange={(e) => {
          handleDataChange();
        }}
        className={Styles.Pincode}
        disabled={!isEditable}
        ref={pincodeRef}
        defaultValue={address.pincode}
        maxLength={6}
        name="pincode"
        type="number"
      />
    </div>
  );
}

export default AddressIndividual;
