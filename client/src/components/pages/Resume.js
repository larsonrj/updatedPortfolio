import React, { useState } from "react";

export default function Resume() {
  const [currentTab, setCurrentTab] = useState("coding");

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
      return <div>Work</div>;
    }
    return <div>Education</div>;
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
          <a href="#resume" className="nav-links align-self-center">
            Resume
          </a>
        </div>
        <div className="d-flex text col-6 h-75 align-self-center">
          {renderTab()}
        </div>
      </div>
    </div>
  );
}
