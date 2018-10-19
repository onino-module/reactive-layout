import React from "react";
import PropTypes from "prop-types";
import NavButtons from "./scroll-top/nav-buttons.component";

const containerStyle = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "spaceBetween",
  alignItems: "center",
  backgroundSize: "cover",
  overflow: "hidden",
};

const childBoxStyle = {
  flex: "1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
};

const Screen = ({ index, noNav, children, scrollNext, scrollPrev, id }) => {
  return (
    <div style={containerStyle} id={id}>
      <div style={childBoxStyle}>{children || <div />}</div>
      {!noNav && (
        <NavButtons
          index={index}
          scrollNext={scrollNext}
          scrollPrev={scrollPrev}
          id={id}
        />
      )}
    </div>
  );
};

Screen.propTypes = {
  index: PropTypes.number.isRequired,
  noNav: PropTypes.bool,
  children: PropTypes.any,
  id: PropTypes.string.isRequired,
};

export default Screen;
