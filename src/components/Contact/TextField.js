import React from "react";
import styled from "styled-components";

import colors from "utils/colors";
import tickIconImg from "assets/images/tick_icon.svg";

const FormControl = styled.div`
  display: block;
  position: relative;
  margin-bottom: 3em;
  &::after {
    display: block;
    content: "";
    width: 1.25em;
    height: 1.25em;
    background-image: url(${tickIconImg});
    background-size: cover;
    position: absolute;
    right: 5px;
    top: 5px;
    transition: all 100ms ease-out;
    opacity: 0;
    transform: translateY(-5px);
  }

  ${({ valid }) =>
    valid &&
    `
    &::after{
        opacity: 1;
        transform: none;
    }
  `}
`;

const Input = styled.input`
  display: block;
  position: relative;
  width: 100%;
  border: none;
  font-size: 1.2rem;
  padding: 1em 0.5em 1em 2em;
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

const ErrorLabel = styled.span`
  color: ${colors.red};
  display: inline-block;
  padding: 0.5em;
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
