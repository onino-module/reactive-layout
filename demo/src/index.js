import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
import bg1 from "./tech-bg1.jpg";
import ReactiveLayout from "./../../src/reactive-layout/reactive-layout.component";

const Comp1 = props => (
  <div>
    Composant 1<button onClick={props.scrollNext}>test</button>
  </div>
);
const Comp2 = props => {
  return <div> Composant 2 </div>;
};

const components = [Comp1, Comp2];
const navItems = ["Page 1", "Page 2"];

const navBarStyles = {
  fixedContainer: {},
  centeredContainer: {},
  navButton: {
    fontFamily: "Play",
  },
  rightWrapper: {
    border: "1px solid red",
  },
};

const bgs = [
  {
    color: "blue",
  },
  {
    color: "red",
    img: bg1,
  },
];

const navButtonOptions = {
  color: "#999",
  size: 60,
};

document.querySelector("#demo").style.width = "100%";
document.querySelector("#demo").style.height = "100%";
document.querySelector("#demo").style.overflow = "hidden";
document.body.style.margin = 0;
document.body.style.padding = 0;
document.body.style.overflow = "hidden";

ReactDOM.render(
  <ReactiveLayout
    navBarStyles={navBarStyles}
    isNavVisible={true}
    id="demo"
    navItems={navItems}
    components={components}
    bgs={bgs}
    hideBottomNav={false}
    navButtonOptions={navButtonOptions}
  />,
  document.querySelector("#demo"),
);
