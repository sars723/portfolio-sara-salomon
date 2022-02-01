import React from "react";
import uniqid from "uniqid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import "./Projects.css";
import { projects } from "../../portfolio";
import projPreview from "../../assets/documents/project-preview.png";
const Projects = () => {
  if (!projects.length) return null;
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title ">Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project">
            <h3 className="project-name">{project.name}</h3>

            <p className="project-desc">{project.description}</p>
            {project.usedTec && (
              <ul className="project-used-tec">
                {project.usedTec.map((item) => (
                  <li key={uniqid()} className="project-used-tec-item">
                    {item}
                  </li>
                ))}
              </ul>
            )}

            <div className="project-code">
              {project.sourceCodeBE && (
                <a
                  href={project.sourceCode}
                  aria-label="source code"
                  className="link link-icon"
                >
                  Backend Code
                </a>
              )}
              {project.sourceCodeFE && (
                <a
                  href={project.sourceCode}
                  aria-label="source code"
                  className="link link-icon"
                >
                  Frontend Code
                </a>
              )}

              {project.livePreview && (
                <a
                  href={project.livePreview}
                  aria-label="live preview"
                  className="link link-icon"
                >
                  {/* <LaunchIcon /> */}
                  <img src={project.livePreviewImg} alt="" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
