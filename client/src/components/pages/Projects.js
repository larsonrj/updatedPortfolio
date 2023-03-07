import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import malie from "../images/malie.PNG";
import park from "../images/park.PNG";
import quiz from "../images/quiz.PNG";
import jate from "../images/jate.PNG";
import pass from "../images/password.PNG";
import guard from "../images/guardian.PNG";
import weather from "../images/weather.PNG";
import work from "../images/work.PNG";
import "../css/card.css";

export default function Projects() {
  return (
    <div className="flex-grow-1 d-flex">
      <div className="container align-self-center">
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div class="card cardStyle h-100">
              <img src={malie} class="card-img-top" alt="The Malie Hotel"></img>
              <div class="card-body">
                <h5 class="card-title cardTitle">The Malie</h5>
                <p class="card-text cardText">
                  Full Stack MERN Application with GraphQL
                </p>
                <div className="linkStyle">
                  <a
                    className="fa fa-link link"
                    href="https://the-malie.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                  <span>
                    {" "}
                    <a
                      className="fa fa-github link"
                      href="https://github.com/BluSkreen/malie-hotel"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card cardStyle h-100">
              <img
                src={park}
                class="card-img-top"
                alt="National Park Finder"
              ></img>
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
                    rel="noreferrer"
                  ></a>
                  <span>
                    {" "}
                    <a
                      className="fa fa-github link"
                      href="https://github.com/Darin1027/Travel-Guide-App"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card cardStyle h-100">
              <img src={quiz} class="card-img-top" alt="Coding Quiz"></img>
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
                    rel="noreferrer"
                  ></a>
                  <span>
                    {" "}
                    <a
                      className="fa fa-github link"
                      href="https://github.com/larsonrj/codeQuiz"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card cardStyle h-100">
              <img src={jate} class="card-img-top" alt="Text Editor"></img>
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
                    rel="noreferrer"
                  ></a>
                  <span>
                    {" "}
                    <a
                      className="fa fa-github link"
                      href="https://github.com/larsonrj/textEditor"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card cardStyle h-100">
              <img
                src={pass}
                class="card-img-top"
                alt="Password Generator"
              ></img>
              <div class="card-body">
                <h5 class="card-title cardTitle">Password Generator</h5>
                <p class="card-text cardText">
                  Javascript app to generate a random password
                </p>
                <div className="linkStyle">
                  <a
                    className="fa fa-link link"
                    href="https://larsonrj.github.io/password-generator/"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                  <span>
                    {" "}
                    <a
                      className="fa fa-github link"
                      href="https://github.com/larsonrj/password-generator"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card cardStyle h-100">
              <img src={guard} class="card-img-top" alt="Guardian Guide"></img>
              <div class="card-body">
                <h5 class="card-title cardTitle">Guardian Guide</h5>
                <p class="card-text cardText">
                  Task list organizer app using MySQL
                </p>
                <div className="linkStyle">
                  <a
                    className="fa fa-link link"
                    href="https://guardian-guide-1222.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                  <span>
                    {" "}
                    <a
                      className="fa fa-github link"
                      href="https://github.com/mo-aden/Guardian-Guide"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card cardStyle h-100">
              <img
                src={weather}
                class="card-img-top"
                alt="Weather Dashboard"
              ></img>
              <div class="card-body">
                <h5 class="card-title cardTitle">Weather Dashboard</h5>
                <p class="card-text cardText">
                  Weather dashboard app using local storage and weather API
                </p>
                <div className="linkStyle">
                  <a
                    className="fa fa-link link"
                    href="https://larsonrj.github.io/weatherDashboard/"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                  <span>
                    {" "}
                    <a
                      className="fa fa-github link"
                      href="https://github.com/larsonrj/weatherDashboard"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card cardStyle h-100">
              <img
                src={work}
                class="card-img-top"
                alt="Work Day Schedule"
              ></img>
              <div class="card-body">
                <h5 class="card-title cardTitle">Work Day Schedule</h5>
                <p class="card-text cardText">
                  Application to track your work day schedule
                </p>
                <div className="linkStyle">
                  <a
                    className="fa fa-link link"
                    href="https://larsonrj.github.io/dailyCalendar/"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                  <span>
                    {" "}
                    <a
                      className="fa fa-github link"
                      href="https://github.com/larsonrj/dailyCalendar"
                      target="_blank"
                      rel="noreferrer"
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
