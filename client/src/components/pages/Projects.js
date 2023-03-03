import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import malie from "../images/malie.PNG";
import park from "../images/park.PNG";
import quiz from "../images/quiz.PNG";
import jate from "../images/jate.PNG";
import "../css/card.css";

export default function Projects() {
  return (
    <div className="flex-grow-1 d-flex">
      <div className="container align-self-center">
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div class="card cardStyle h-100">
              <img src={malie} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title cardTitle">The Malie</h5>
                <p class="card-text cardText">Full Stack MERN Application</p>
                <div className="linkStyle">
                  <a
                    className="fa fa-link link"
                    href="https://the-malie.herokuapp.com/"
                    target="_blank"
                  ></a>
                  <span>
                    {" "}
                    <a
                      className="fa fa-github link"
                      href="https://github.com/BluSkreen/malie-hotel"
                      target="_blank"
                    ></a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card cardStyle h-100">
              <img src={park} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title cardTitle">National Park Finder</h5>
                <p class="card-text cardText">
                  Search Application using the National Park API
                </p>
                <div className="linkStyle">
                  <a
                    className="fa fa-link link"
                    href="https://darin1027.github.io/Travel-Guide-App/"
                    target="_blank"
                  ></a>
                  <span>
                    {" "}
                    <a
                      className="fa fa-github link"
                      href="https://github.com/Darin1027/Travel-Guide-App"
                      target="_blank"
                    ></a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card cardStyle h-100">
              <img src={quiz} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title cardTitle">Broncos Quiz</h5>
                <p class="card-text cardText">
                  Quiz game with countdown and score calculator
                </p>
                <div className="linkStyle">
                  <a
                    className="fa fa-link link"
                    href="https://larsonrj.github.io/codeQuiz/"
                    target="_blank"
                  ></a>
                  <span>
                    {" "}
                    <a
                      className="fa fa-github link"
                      href="https://github.com/larsonrj/codeQuiz"
                      target="_blank"
                    ></a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card cardStyle h-100">
              <img src={jate} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title cardTitle">J.A.T.E.</h5>
                <p class="card-text cardText">
                  Progressive Web Application that can be installed to desktop
                </p>
                <div className="linkStyle">
                  <a
                    className="fa fa-link link"
                    href="https://gentle-reef-57644.herokuapp.com/"
                    target="_blank"
                  ></a>
                  <span>
                    {" "}
                    <a
                      className="fa fa-github link"
                      href="https://github.com/larsonrj/textEditor"
                      target="_blank"
                    ></a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
