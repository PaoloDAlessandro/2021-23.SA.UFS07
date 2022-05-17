import "../css/index.css"
import "../img/sun.png"
import "../CHANGELOG.md"
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

function onClickAlert() {
    alert(`${new Date()}`);
}

window.onClickAlert = onClickAlert;

const reactRoot = ReactDOM.createRoot(
    document.getElementById("react-root")
);

reactRoot.render(React.createElement(App));
