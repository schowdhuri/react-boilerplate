import React from "react";
import ReactDOM from "react-dom";
import Todo from "./components/Todo";

import "./styles/index.scss";

function onLoad() {
	var container = document.getElementById("app");
	ReactDOM.render(<Todo />, container);
}
window.addEventListener("load", onLoad);
