import React from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import * as P from "./parts";

const CircleItem = ({ number, children, icon }) => {
  return (
    <P.Wrapper>
      {!!icon
        ? <P.Icon>{icon}</P.Icon>
        : <P.Number><CountUp end={number} duration={5} /></P.Number>
      }
      <P.Content>
        {children}
      </P.Content>
    </P.Wrapper>
  );
};

export default CircleItem;

CircleItem.propTypes = {
  icon: PropTypes.string,
  number: PropTypes.number,
  children: PropTypes.node,
};