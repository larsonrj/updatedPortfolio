import React, { useState } from "react";
import download from "../images/Resume.pdf";

export default function Resume() {
  const [currentTab, setCurrentTab] = useState("coding");

  const headerStyle = {
    color: "#fec524",
  };
  const linkStyle = {
    color: "#8b2131",
  };

  const renderTab = () => {
    if (currentTab === "coding") {
      return (
        <div>
          Graduate of the Denver University Full Stack Coding Bootcamp
          demonstrating fundamental knowledge in the following technologies:
          <ul>
            <li>Command Line</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Javascript</li>
            <li>Git</li>
            <li>Express</li>
            <li>Database Theory</li>
            <li>JQuery</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Node</li>
            <li>React</li>
          </ul>
        </div>
      );
    }
    if (currentTab === "work") {
      return (
        <div>
          <h2 style={headerStyle}>United Launch Alliance</h2>
          <div>Modeling and Simulations Engineer:</div>
          <ul>
            <li>
              Product Lifecycle Management for the Atlas and Delta programs
            </li>
            <li>
              Performed drawing reviews, 3D modeling and revision control for
              design deliverables
            </li>
            <li>
              Used NX/Teamcenter and Windchill/Creo for CAD work and
              drawing/model revision control
            </li>
          </ul>
          <div>Mechanical Engineer:</div>
          <ul>
            <li>Mechanical Engineer on Vulcan development program</li>
            <li>
              Worked within Agile workflow process throughout development of
              Vulcan rocket
            </li>
            <li>
              Performed trade studies for mechanical structures design and
              presented designs to Chief Engineers
            </li>
            <li>
              Engineering support at manufacturing site during initial build of
              Vulcan Upper Stage
            </li>
          </ul>
        </div>
      );
    }
    return (
      <div className="align-self-center">
        <h2 style={headerStyle}>Colorado School of Mines</h2>
        <ul>
          <li>Master of Science - Mechanical Engineering, May 2014</li>
          <li>Bachelor of Science - Engineering Physics, May 2013</li>
        </ul>
      </div>
    );
  };
  return (
    <div className="flex-grow-1 d-flex justify-content-center">
      <div className="d-flex justify-content-evenly rounded-5 col-8 h-75 home align-self-center">
        <div className="h-75 col-4 align-self-center title d-flex flex-column justify-content-evenly">
          <a
            href="#coding"
            className={
              currentTab === "coding"
                ? "active-link align-self-center"
                : "nav-links align-self-center"
            }
            onClick={() => setCurrentTab("coding")}
          >
            Coding Bootcamp
          </a>
          <a
            href="#work"
            className={
              currentTab === "work"
                ? "active-link align-self-center"
                : "nav-links align-self-center"
            }
            onClick={() => setCurrentTab("work")}
          >
            Work Experience
          </a>
          <a
            href="#education"
            className={
              currentTab === "education"
                ? "active-link align-self-center"
                : "nav-links align-self-center"
            }
            onClick={() => setCurrentTab("education")}
          >
            Education
          </a>
          <a
            href={download}
            className="nav-links align-self-center"
            style={linkStyle}
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
        <div className="d-flex text col-6 h-75 align-self-center">
          {renderTab()}
        </div>
      </div>
    </div>
  );
}
