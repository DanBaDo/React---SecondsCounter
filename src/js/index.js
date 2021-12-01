//import external modules

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";

// Resources

import "../styles/index.scss";

// Components
import Digit from "./component/Digit.jsx";
import CounterComponent from "./component/CounterComponent.jsx";

//Logic
const counterSize = 2; // Digits ammount in counter.
let counter = 0;

// Rerender components each second.
setInterval(() => {
	ReactDOM.render(
		<CounterComponent len={counterSize} counter={counter++} />,
		document.querySelector("#app")
	);
}, 1000);
