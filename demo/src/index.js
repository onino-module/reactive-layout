import React from "react";
import ReactDOM from "react-dom";
import "./app.css";

import bg1 from "./tech-bg1.jpg";
import bg2 from "./tech-bg2.jpg";
import bg3 from "./tech-bg3.jpg";
import bg4 from "./tech-bg4.jpg";
import bg5 from "./tech-bg5.jpg";

import ReactiveLayout from "./../../src/reactive-layout/reactive-layout.component";
import textsFr from "./texts-fr.json";
import textsEn from "./texts-en.json";

const Comp1 = () => <div> Composant 1 </div>;
const Comp2 = () => <div> Composant 2 </div>;
const Comp3 = () => <div> Composant 3 </div>;
const Comp4 = () => <div> Composant 4 </div>;
const Comp5 = () => <div> Composant 5 </div>;

// const data = {
//   texts: {
//     fr: textsFr,
//     en: textsEn,
//   },
//   lng: "en",
//   components: [Comp1, Comp2, Comp3, Comp4, Comp5],
//   bgs: [bg1, bg2, bg3, bg4, bg5],
// };

const components = [Comp1, Comp2, Comp3, Comp4, Comp5];

document.querySelector("#demo").style.width = "100%";
document.querySelector("#demo").style.height = "100%";
document.querySelector("#demo").style.overflow = "hidden";
document.body.style.margin = 0;
document.body.style.padding = 0;
document.body.style.overflow = "hidden";
ReactDOM.render(
  <ReactiveLayout
    id="demo"
    navItems={textsFr.navItems}
    components={components}
  />,
  document.querySelector("#demo"),
);
