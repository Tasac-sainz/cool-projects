import "react";
import PropTypes from "prop-types";

const Reset = ({resetFormData }) => {
    return <button onClick={resetFormData}>Limpiar formulario</button>;
};

Reset.propTypes = {
  resetFormData: PropTypes.func.isRequired,
};

export default Reset;
