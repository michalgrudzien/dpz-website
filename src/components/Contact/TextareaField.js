import React, { useRef } from "react";
import styled from "styled-components";

import colors from "utils/colors";

import { FormControl, ErrorLabel } from "./partials";

const Textarea = styled.textarea`
  display: block;
  position: relative;
  width: 100%;
  border: none;
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  resize: none;
  padding: 1em 2em 1em 1em;
  border: 1px ${colors.darkBlue} solid;
  transition: all 100ms ease-in;

  :focus {
    outline: none;
    border: 1px ${colors.turquoise} solid;
  }

  ${({ error }) =>
    error &&
    `
    &&{
        border: 1px ${colors.red} solid;
    }
  `}

  ${({ valid }) =>
    valid &&
    `
    &&{
        border: 1px ${colors.green} solid;
    }
  `}
`;

const hasScrollbar = (ref) => {
  const { current } = ref;
  if (current === null) return false;

  return current.clientHeight < current.scrollHeight;
};

const TextareaField = ({
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

  const ref = useRef(null);

  return (
    <FormControl valid={isValid} hasScrollbar={hasScrollbar(ref)}>
      <Textarea
        id={name}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={label}
        error={hasError}
        valid={isValid}
        rows={5}
        ref={ref}
      />
      {hasError && <ErrorLabel>{error}</ErrorLabel>}
    </FormControl>
  );
};

export default TextareaField;
