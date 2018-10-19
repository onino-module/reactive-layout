import React from "react";
import PropTypes from "prop-types";

import NavButtons from "./scroll-top/nav-buttons.component";
import styled from "styled-components";
import { getBgColor } from "../api/theme-utils";

const Container = styled.section.attrs({
  id: props => props.id,
})`
  font-family: "Play", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${getBgColor};
  background-image: ${props => (props.bg ? `url(${props.bg})` : "none")};
  background-size: cover;
  width: ${({ theme }) => theme["screen-width"] + "px"};
  height: ${({ theme }) => theme["screen-height"] + "px"};
  overflow: hidden;
  width: 100vw;
`;

const ChildBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

Container.defaultProps = {
  theme: {
    "screen-width": "100%",
    "screen-height": "100%",
  },
};

const Screen = ({
  index,
  title,
  noNav,
  bg,
  children,
  scrollNext,
  scrollPrev,
  primary = false,
  secondary = false,
  tertiary = false,
  id,
}) => {
  return (
    <Container
      bg={bg || false}
      primary={primary}
      secondary={secondary}
      tertiary={tertiary}
    >
      <ChildBox>{children || <div />}</ChildBox>
      {!noNav && (
        <NavButtons
          index={index}
          scrollNext={scrollNext}
          scrollPrev={scrollPrev}
          id={id}
        />
      )}
    </Container>
  );
};

Screen.propTypes = {
  index: PropTypes.number.isRequired,
  noNav: PropTypes.bool,
  children: PropTypes.any,
  bg: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

export default Screen;
