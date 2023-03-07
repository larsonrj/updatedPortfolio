import React from "react";

export default function Resume() {
  return (
    <div className="flex-grow-1 d-flex justify-content-center">
      <div className="d-flex justify-content-evenly rounded-5 col-8 h-75 home align-self-center">
        <div className="h-75 col-4 align-self-center title d-flex flex-column justify-content-evenly">
          <div>Coding Bootcamp</div>
          <div>Work Experience</div>
          <div>Education</div>
        </div>
        <div className="d-flex text col-6 h-75 align-self-center align-items-center">
          <ul>
            <li>Javascript</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
