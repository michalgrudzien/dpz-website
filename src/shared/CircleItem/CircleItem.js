import React from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import * as P from "./parts";

const CircleItem = ({ number, children, icon, activeIcon, className }) => {


  return (
    <P.Wrapper className={className} activeIcon={activeIcon}>
      {number
        ? (
          <>
            <P.Number>
              <CountUp end={number} duration={5} />
            </P.Number>
            < P.Content>
              {children}
            </P.Content>
          </>
        )
        : (
          <>
            <P.Icon icon={icon} activeIcon={activeIcon} />
            < P.StyledContent>
              {children}
            </P.StyledContent>
          </>
        )
      }
    </P.Wrapper>
  );
};

export default CircleItem;

CircleItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  activeIcon: PropTypes.string,
  number: PropTypes.number,
  children: PropTypes.node,
};