import React from "react";
import ReactDOM from "react-dom/client";

const wrap = ReactDOM.createRoot(document.querySelector(".wrapper"));
const h2 = React.createElement("h2", {}, "React 2");
wrap.render(h2);
