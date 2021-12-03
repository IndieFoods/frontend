import React from "react";

import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import Radio from "@mui/material/Radio";

import { IMaskInput } from "react-imask";

const StyledInput = styled(TextField)({
  "& label": {
    fontSize: "var(--font-16)",
    fontWeight: 400,
    color: "var(--ter-black)",
  },
  "& .MuiInput-input": {
    fontSize: "var(--font-16)",
    fontWeight: 500,
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px white inset",
    },
  },

  "& label.Mui-focused": {
    color: "var(--orange-primary)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "var(--orange-primary)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "var(--orange-primary)",
    },
    "&:hover fieldset": {
      borderColor: "var(--orange-primary)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--orange-primary)",
    },
  },
});

const MobileNumberTextMask = React.forwardRef(function TextMaskCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="#000000000"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});
const PinCodeTextMask = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="#00000"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

function CustomisedRadio(props) {
  return (
    <Radio
      sx={{
        color: "var(--orange-primary)",
        "&.Mui-checked": {
          color: "var(--orange-primary)",
        },
        "& .MuiSvgIcon-root": {
          fontSize: "var(--font-22)",
        },
      }}
      {...props}
    />
  );
}

export default StyledInput;
export { MobileNumberTextMask, PinCodeTextMask, CustomisedRadio };
