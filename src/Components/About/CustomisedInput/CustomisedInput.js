import React, { useEffect } from "react";

import Styles from "./CustomisedInput.module.css";

function CustomisedInput({
  keyValue,
  keyIndex,
  type,
  placeholder,
  defaulValue,
  onChange,
  label,
  isEditable,
}) {
  const inputRef = React.useRef(120);
  const handleChange = () => {
    if (onChange) {
      onChange(keyValue, inputRef.current.value);
    }
  };

  useEffect(() => {
    inputRef.current.value = defaulValue;
  }, [defaulValue]);

  useEffect(() => {
    if (isEditable && keyIndex == 0) {
      inputRef.current.focus();
    }
  }, [isEditable]);

  return (
    <div className={Styles.Wrapper}>
      <label htmlFor={keyValue} className={Styles.Label}>
        {label + ":"}
      </label>
      <input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        defaultValue={defaulValue}
        onChange={handleChange}
        className={Styles.Input}
        name={keyValue}
        disabled={!isEditable}
      />
    </div>
  );
}

export default CustomisedInput;
