export const cuisuineSelectStyles = {
  control: (styles) => ({
    ...styles,
    fontSize: "var(--font-16)",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      fontSize: "var(--font-16)",
      transition: "background-color 0.1s ease",
      ":active": {
        ...styles[":active"],
        backgroundColor: "var(--orange-tertiary)",
      },
      ":hover": {
        ...styles[":hover"],
        backgroundColor: "var(--orange-tertiary)",
      },
      ":visited": {
        ...styles[":visited"],
        backgroundColor: "var(--orange-tertiary)",
      },
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    fontSize: "var(--font-16)",
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    transition: "all 0.2s",
    ":hover": {
      backgroundColor: "var(--ter-black)",
      cursor: "pointer",
      fontSize: "var(--font-16)",
    },
  }),
};
