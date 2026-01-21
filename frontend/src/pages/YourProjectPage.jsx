import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../services/api";
import ProjectPreview from "../components/ProjectPreview";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import PropTypes from "prop-types";
import "../styles/project-preview.css";
import "../styles/your-project.css";


const YourProjectPage = () => {
  const [project, setProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    
    getProjectById(id).then(data => {
      setProject(data);
      setIsLoading(false);
    })

    .catch (() => {
      window.alert("Algo ha ido mal");
      setIsLoading(false);
    })
  }, []);

  return (
    <>
      <Header />
      <div className="button-container">
        <Button to="/project-list" text="Ver Proyectos"/>
      </div>

      {isLoading ? <p className="loading-message">Cargando...</p> : null}

      <div className="yourproject-container">
        <ProjectPreview project={project} />
      </div>
      <Footer />
    </>
  );
};

YourProjectPage.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
};

export default YourProjectPage;
