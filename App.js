import React from "react";
import ReactDOM from "react-dom";
const heading = React.createElement("h1", { className: "red" }, "Hi Prasad");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
