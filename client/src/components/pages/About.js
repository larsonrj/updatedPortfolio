import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/about.css";

export default function About() {
  return (
    <div className="flex-grow-1 d-flex justify-content-center">
      <div className="d-flex justify-content-evenly rounded-5 col-8 h-75 home align-self-center">
        <div className="h-75 col-4 align-self-center title d-flex flex-column">
          <div>About Me:</div>
        </div>
        <div className="d-flex text col-6 h-75 align-self-center align-items-center">
          My name is Ryan Larson and I am a recent graduate of the DU Coding
          Bootcamp in Full Stack Web Development. For the previous 7 years, I
          worked at United Launch Alliance as a Mechanical Engineer on the
          Vulcan Development program. I graduated from the Colorado School of
          Mines with a B.S. in Physics in 2013 and also graduated from Mines
          with a M.S. in Mechanical Engineering in 2014. I recently got married
          to my wife Kayla last year, and became a stepfather to her son Jonah!
          We have fun spending time with our new family together. My other
          hobbies include following all of the Denver professional sports teams,
          playing video games, and playing basketball.
        </div>
      </div>
    </div>
  );
}
