import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/home.css";
import prof from "../images/rlarson.PNG";

export default function Home() {
  return (
    <div className="flex-grow-1 d-flex justify-content-center">
      <div className="d-flex justify-content-evenly rounded-5 col-8 h-75 home align-self-center">
        <div className="h-75 col-4 align-self-center title d-flex flex-column">
          <div>Ryan Larson</div>
          <div>Full Stack Developer</div>
        </div>
        <div className="d-flex col-4 h-75 align-self-center">
          <img
            className="rounded-5 align-self-center h-100 w-100"
            src={prof}
          ></img>
        </div>
      </div>
    </div>
  );
}
