import React from "react";
import PropTypes from "prop-types";
import ArrowButton from "./scroll-top/arrow-button";

const containerStyle = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "spaceBetween",
  alignItems: "center",
  backgroundSize: "cover",
  overflow: "hidden",
  position: "relative",
};

const childBoxStyle = {
  flex: "1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  // height: "100%",
};

const Screen = ({
  index,
  hideBottomNav,
  children,
  scrollNext,
  scrollPrev,
  id,
  bg,
  navButtonOptions,
}) => {
  const newStyles = {
    backgroundColor: bg.color || "transparent",
    backgroundImage: `url(${bg.img})` || "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div style={containerStyle} id={id}>
      <div style={{ ...childBoxStyle, ...newStyles }}>
        {children || <div />}
      </div>
      {!hideBottomNav && (
        <ArrowButton
          navButtonOptions={navButtonOptions}
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
  hideBottomNav: PropTypes.bool,
  children: PropTypes.any,
  id: PropTypes.string.isRequired,
  bg: PropTypes.shape({
    img: PropTypes.string,
    color: PropTypes.string,
  }),
  screenOptions: PropTypes.object,
  navButtonOptions: PropTypes.shape({
    size: PropTypes.number,
    color: PropTypes.string,
  }),
};

export default Screen;
