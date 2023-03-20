import React from "react";
import "../components/css/nav.css";
import "bootstrap/dist/css/bootstrap.min.css";

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function PortfolioNav({ currentPage, handlePageChange }) {
  return (
    <div className="navBar d-flex justify-content-center">
      <div className="d-flex col-8 justify-content-center">
        <div className="col-6 align-self-center text-center">
          <a
            href="#home"
            className={
              currentPage === "Home"
                ? "home align-self-center fa fa-dribbble"
                : "home align-self-center fa fa-dribbble"
            }
            onClick={() => handlePageChange("Home")}
          ></a>
        </div>
        <div className="d-flex col-6 justify-content-end media">
          <a
            href="#about"
            className={
              currentPage === "About"
                ? "active-link col-4 align-self-center"
                : "nav-links col-4 align-self-center"
            }
            onClick={() => handlePageChange("About")}
          >
            About Me
          </a>
          <a
            href="#projects"
            className={
              currentPage === "Projects"
                ? "active-link col-4 align-self-center"
                : "nav-links col-4 align-self-center"
            }
            onClick={() => handlePageChange("Projects")}
          >
            Projects
          </a>
          <a
            href="#resume"
            className={
              currentPage === "Resume"
                ? "active-link col-4 align-self-center"
                : "nav-links col-4 align-self-center"
            }
            onClick={() => handlePageChange("Resume")}
          >
            Resume
          </a>
        </div>
      </div>
    </div>
    // <>
    //   <Navbar className="p-3 navBar" variant="dark">
    //     <Container>
    //       <Nav>
    //         <Nav.Link
    //           href="#home"
    //           onClick={() => handlePageChange("Home")}
    //           className={
    //             currentPage === "Home" ? "nav-link active" : "nav-link"
    //           }
    //           id="home"
    //         >
    //           <i className="fas fa-basketball-ball"></i>
    //         </Nav.Link>
    //       </Nav>
    //       <Nav className="justify-content-end link">
    //         <Nav.Link
    //           href="#about"
    //           onClick={() => handlePageChange("About")}
    //           className={
    //             currentPage === "About" ? "nav-link active" : "nav-link"
    //           }
    //         >
    //           About Me
    //         </Nav.Link>
    //         <Nav.Link
    //           href="#projects"
    //           onClick={() => handlePageChange("Projects")}
    //           className={
    //             currentPage === "Projects" ? "nav-link active" : "nav-link"
    //           }
    //         >
    //           Projects
    //         </Nav.Link>
    //         <Nav.Link
    //           href="#contact"
    //           onClick={() => handlePageChange("Contact")}
    //           className={
    //             currentPage === "Contact" ? "nav-link active" : "nav-link"
    //           }
    //         >
    //           Contact
    //         </Nav.Link>
    //         <Nav.Link
    //           href="#resume"
    //           onClick={() => handlePageChange("Resume")}
    //           className={
    //             currentPage === "Resume" ? "nav-link active" : "nav-link"
    //           }
    //         >
    //           Resume
    //         </Nav.Link>
    //       </Nav>
    //     </Container>
    //   </Navbar>
    // </>
  );
}

export default PortfolioNav;
