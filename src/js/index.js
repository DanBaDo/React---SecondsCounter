//import external modules

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";

// Resources

import "../styles/index.scss";

// Components
import Digit from "./component/Digit.jsx";
import CounterComponent from "./component/CounterComponent.jsx";

// Logic

// Digits ammount in counter.
const counterSize = 2;

/**
 * Counter object
 */
class Counter {
	_counter = 0;
	/**
	 * Set the size (digit ammount) for counter.
	 * @param {*} digits
	 */
	constructor(digits) {
		this._digits = digits;
	}
	/**
	 * Provides a counter size string whit counter value.
	 */
	get string() {
		return this._counter.toString().padStart(this._digits, "0");
	}
	/**
	 * Provides a array of Digit React components from this.string.
	 */
	get digits() {
		this._counter = (this._counter + 1) % 10 ** this._digits;
		return Array.from(this.string).map((char, idx) => (
			<Digit key={idx} digit={char} />
		));
	}
}

const counter = new Counter(counterSize);

// Rerender components each second.
setInterval(() => {
	ReactDOM.render(
		<CounterComponent digits={counter.digits} />,
		document.querySelector("#app")
	);
}, 1000);
