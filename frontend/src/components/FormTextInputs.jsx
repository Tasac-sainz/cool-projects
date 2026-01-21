import "react";
import PropTypes from "prop-types";
import "../styles/form-text.css";

const FormTextInputs = ({ updateFormData, formData, errors }) => {
  const handleChangeInput = (ev) => {
    updateFormData(ev.target.name, ev.target.value)
  };

  return (
    <>
      <div className="project__form">
        <h1>Información</h1>
        <h3>Cuéntanos sobre el proyecto</h3>

        <input
          name="nameProj"
          id="nameProj"
          placeholder="Nombre del proyecto"
          value={formData.nameProj}
          onChange={handleChangeInput}
        />
        <p className="input-error-placeholder">{errors.nameProj}</p>
        <input
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          value={formData.slogan}
          onChange={handleChangeInput}
        />
        <div className="repo-demo">
            <input
            name="repo"
            id="repo"
            placeholder="Repositorio"
            value={formData.repo}
            onChange={handleChangeInput}
            className={`repo ${errors.repo ? "input-error-placeholder" : ""}`}
          />
          <input
            name="demo"
            id="demo"
            placeholder="Demo"
            value={formData.demo}
            onChange={handleChangeInput}
          />
        </div>
        <input
          name="techs"
          id="techs"
          placeholder="Tecnologías"
          value={formData.techs}
          onChange={handleChangeInput}
        />
        <p className="input-error-placeholder">{errors.techs}</p>
        <textarea
          name="description"
          id="description"
          placeholder="Descripción"
          value={formData.description}
          onChange={handleChangeInput}
        />
        <p className="input-error-placeholder">{errors.description}</p>
      </div>

      <div className="owner__form">
        <h3>Cuéntanos sobre la autora</h3>

        <input
          name="owner"
          id="owner"
          placeholder="Nombre"
          value={formData.owner}
          onChange={handleChangeInput}
        />
        <p className="input-error-placeholder">{errors.owner}</p>
        <input
          name="jobTitle"
          id="jobTitle"
          placeholder="Trabajo"
          value={formData.jobTitle}
          onChange={handleChangeInput}        />
        <p className="input-error-placeholder">{errors.jobTitle}</p>
      </div>
    </>
  );
};

FormTextInputs.propTypes = {
  formData: PropTypes.shape({
    nameProj: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    techs: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    authorImage: PropTypes.string,
    owner: PropTypes.string.isRequired,
    jobTitle: PropTypes.string,
    projectImage: PropTypes.string,
  }).isRequired,
    updateFormData: PropTypes.func.isRequired,  
  errors: PropTypes.shape({
    nameProj: PropTypes.string,
    slogan: PropTypes.string,
    repo: PropTypes.string,
    demo: PropTypes.string,
    techs: PropTypes.string,
    description: PropTypes.string,
    owner: PropTypes.string,
    jobTitle: PropTypes.string,
  }).isRequired,
};

export default FormTextInputs;
