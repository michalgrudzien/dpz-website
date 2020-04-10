import React from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import * as P from "./parts";

class CircleItem extends React.PureComponent {
  state = {
    icon: this.props.icon,
    isActive: false,
  };

  handleActiveState = () => {
    this.setState((prevState) => ({ isActive: !prevState.isActive }));
  };


  render() {
    const { isActive } = this.state;
    const { icon, activeIcon, number, children, className } = this.props;

    return (
      <P.Wrapper
        className={className}
        onMouseOut={this.handleActiveState}
        onMouseOver={this.handleActiveState}
      >
        {number
          ? (
            <>
              <P.Number>
                <CountUp end={number} duration={5} />
              </P.Number>
              < P.Subtitle>
                {children}
              </P.Subtitle>
            </>
          )
          : (
            <>
              <P.Img src={isActive ? activeIcon : icon} />
              < P.Content isActive={isActive}>
                {children}
              </P.Content>
            </>
          )
        }
      </P.Wrapper>
    );
  }
}

export default CircleItem;

CircleItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  activeIcon: PropTypes.string,
  number: PropTypes.number,
  children: PropTypes.node,
};