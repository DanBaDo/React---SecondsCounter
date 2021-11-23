import React from "react";
import PropTypes from "prop-types";

// Components
import Digit from "./Digit.jsx";

/**
 * Counter
 */
const CounterComponent = props => {
	return (
		<div className="d-flex min-vh-100 justify-content-center align-items-center">
			<p>{props.digits}</p>
		</div>
	);
};
CounterComponent.propTypes = {
	digits: PropTypes.arrayOf(Digit).isRequired
};

export default CounterComponent;
