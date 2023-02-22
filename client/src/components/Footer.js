import React from "react";
import "./css/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "./images/Resume.pdf";

export default function Footer() {
  return (
    <div className="d-flex footer text-center">
      <a
        className="col align-self-center fa fa-github link"
        href="https://github.com/larsonrj"
        target="_blank"
      ></a>
      <a
        className="col align-self-center fa fa-linkedin link"
        href="https://www.linkedin.com/in/ryan-larson-2b5381b8/"
        target="_blank"
      ></a>
      <a
        className="col align-self-center fa fa-envelope link"
        href="mailto:rylarson17@gmail.com"
        target="_blank"
      ></a>
      <a
        className="col align-self-center fa fa-wpforms link"
        href={pdf}
        target="_blank"
      ></a>
    </div>
  );
}
