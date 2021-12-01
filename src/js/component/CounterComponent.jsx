import React from "react";
import PropTypes from "prop-types";

// Components
import Digit from "./Digit.jsx";

/**
 * Counter
 */
const CounterComponent = ({ len, counter }) => {
	function string() {
		return counter.toString().padStart(len, "0");
	}

	return (
		<div className="d-flex min-vh-100 justify-content-center align-items-center">
			<p>
				{Array.from(string()).map((char, idx) => (
					<Digit key={idx} digit={char} />
				))}
			</p>
		</div>
	);
};
CounterComponent.propTypes = {
	len: PropTypes.number.isRequired,
	counter: PropTypes.number.isRequired
};

export default CounterComponent;
