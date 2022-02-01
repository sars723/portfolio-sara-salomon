import React from "react";
import uniqid from "uniqid";
import { skills } from "../../portfolio";
import "./Skills.css";
const Skills = () => {
  if (!skills.length) return null;
  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">Skills</h2>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={uniqid()} className="skills-list-item btn btn--plain">
            <img src={skill} alt="" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
