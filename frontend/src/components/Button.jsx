import "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/buttons.css";

const Button = ({ to, text }) => {
  return (
    <>
      <Link to={to}>
        <button>{text}</button>
      </Link>
    </>
  );
};

Button.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
