import React from "react";
import PropTypes from "prop-types";

/**
 * One digit
 */
const Digit = props => {
	return (
		<span className="fs-1 bg-dark text-white p-3 m-1 rounded-3">
			{props.digit}
		</span>
	);
};
Digit.propTypes = {
	digit: PropTypes.string.isRequired
};

export default Digit;
