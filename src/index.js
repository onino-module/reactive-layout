// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./exemple/exemple";

// ReactDOM.render(<App defaultLanguage="fr" />, document.getElementById("root"));

import App from "./reactive-layout/reactive-layout.component";
import WithData from "./reactive-layout/services/with-data";
import WithTheme from "./reactive-layout/services/with-theme";

const ReactiveLayout = App;
export default ReactiveLayout;
export const withData = WithData;
export const withTheme = WithTheme;
