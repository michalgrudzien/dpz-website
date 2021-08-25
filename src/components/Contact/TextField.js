import React from "react";
import styled from "styled-components";

import colors from "utils/colors";

import { FormControl, ErrorLabel } from "./partials";

const Input = styled.input`
  display: block;
  position: relative;
  width: 100%;
  border: none;
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  padding: 1em 2em 1em 1em;
  border-bottom: 1px ${colors.darkBlue} solid;
  transition: all 100ms ease-in;

  :focus {
    outline: none;
    border-bottom: 1px ${colors.turquoise} solid;
  }

  ${({ error }) =>
    error &&
    `
    &&{
        border-bottom: 1px ${colors.red} solid;
    }
  `}

  ${({ valid }) =>
    valid &&
    `
    &&{
        border-bottom: 1px ${colors.green} solid;
    }
  `}
`;

const TextField = ({
  type,
  name,
  label,
  onChange,
  onBlur,
  value,
  touched,
  error,
}) => {
  const hasError = touched && error;
  const isValid = touched && !error;

  return (
    <FormControl valid={isValid}>
      <Input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={label}
        error={hasError}
        valid={isValid}
      />
      {hasError && <ErrorLabel>{error}</ErrorLabel>}
    </FormControl>
  );
};

export default TextField;
