import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { about } from "../../portfolio";
import portfolioImage from "../../assets/images/sara5.jpg";
import cv from "../../assets/documents/CV.pdf";
import "./About.css";
const About = () => {
  const { name, role, description, resume, social } = about;
  return (
    <section className="about" id="about">
      <div className="about-image">
        <img src={portfolioImage} alt="" />
      </div>
      <div className="about-content">
        {name && (
          <h1>
            <span className="about__name">{name}.</span>
          </h1>
        )}
        <p className="about-desc">{description && description}</p>
        <div className="about-contact">
          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label="github"
                  className="link link-icon"
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label="linkedin"
                  className="link link-icon"
                >
                  <LinkedInIcon />
                </a>
              )}
            </>
          )}
        </div>
        <div className="about-download-cv">
          <a href={cv} download="resume.pdf " className="download-cv-btn">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
