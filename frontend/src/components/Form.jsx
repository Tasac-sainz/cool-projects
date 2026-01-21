import { useState } from "react";
import PropTypes from "prop-types";
import FormTextInputs from "./FormTextInputs";
import FormImage from "./FormImage";
import Reset from "../components/Reset";

const Form = ({ formData, updateFormData, addProjects, resetFormData }) => {
  const [errors, setErrors] = useState({});

  const [globalError, setGlobalError] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nameProj)
      newErrors.nameProj = "Este campo es obligatorio";
    if (!formData.techs) newErrors.techs = "Este campo es obligatorio";
    if (!formData.description)
      newErrors.description = "Este campo es obligatorio";
    if (!formData.owner) newErrors.owner = "Este campo es obligatorio";
    if (!formData.jobTitle) newErrors.jobTitle = "Este campo es obligatorio";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setGlobalError("Por favor, completa los campos");
    } else {
      setGlobalError("");
    }

    return Object.keys(newErrors).length === 0;
  };

    const handleCreateProject = () => {
    const isValid = validateForm();
    if (isValid) addProjects();
    };

  return (
    <div className="form__inputs">
      <FormTextInputs
        formData={formData}
        updateFormData={updateFormData}
        errors={errors}
      />
      <FormImage
        formData={formData}
        updateFormData={updateFormData}
        errors={errors}
      />
      <div className="button-container">
        <Reset resetFormData={resetFormData}/>
        <button onClick={handleCreateProject}>Crea tu proyecto</button>
      </div>

      {globalError && (
        <p style={{ color: "red", marginTop: "10px" }}>{globalError}</p>
      )}
    </div>
  );
};

Form.propTypes = {
  formData: PropTypes.shape({
    project: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    techs: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    authorImage: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    job: PropTypes.string,
    image: PropTypes.string.isRequired,
  }).isRequired,
  updateFormData: PropTypes.func.isRequired,
  resetFormData: PropTypes.func.isRequired,
};

export default Form;
