import React from "react";
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  createTheme,
  themes,
} from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

//Css file
import "./project.css";

//Projects
import PetAdopt from "../../assets/img/projects/PetAdopt.png";
import EVFY from "../../assets/img/projects/EVFY.png";
import TotoList from "../../assets/img/projects/Todolist.png";


//Skills
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";

// Custom timline theme
const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: "#efefef",
  },
  date: {
    backgroundColor: "#ec4b4f",
  },
  marker: {
    borderColor: "#070d59",
  },
  timelineTrack: {
    backgroundColor: "#ec4b4f",
  },
});

const ProjectTimeline = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline theme={customTheme}>
        <Events>
          {/* //Animal Adoption Website */}
          <ImageEvent
            date="30th September, 2021"
            className="text-center"
            text="PetAdopt"
            src={PetAdopt}
            alt="PetAdopt"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is my first static
                        html page for the first lab assignment.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            Allows choose different headers, look for
                            information, and submit contact form.
                          </li>
                          <li>Non-Responsive</li>
                          <li>No data connection with the backend</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="L_HTML5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="L_CSS3 "
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/zq170829/m1-assignment"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/zq170829/m1-assignment"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          <ImageEvent
            date="15th December, 2021"
            className="text-center"
            text="EVFY"
            src={EVFY}
            alt="EVFY"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is an group project
                        from a real client. It has both the server side and the
                        client side.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Allows users register/login/edit account</li>
                          <li>Responsive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="L_HTML5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS "
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="L_JAVASCRIPT"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JAVA
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="L_MONGODB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://codesandbox.io/s/todo-list-v5-rx2qt"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://codesandbox.io/s/todo-list-v5-rx2qt"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          {/* //Todolist */}
          <ImageEvent
            date="30th January, 2022"
            className="text-center"
            text="TotoList"
            src={TotoList}
            alt="TotoList"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is an Simple
                        To-do-list App based on React framework.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            Allows users to add/delete/update do-to-list item
                          </li>
                          <li>Powered by React.js</li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="L_REACT"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              REACT
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP}
                                alt="L_BOOTSTRAP "
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_BOOTSTRAP}
                                alt="REACT_BOOTSTRAP"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React Bootstrap
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://codesandbox.io/s/todo-list-v5-rx2qt"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://codesandbox.io/s/todo-list-v5-rx2qt"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* //ExpenseTracker */}
        </Events>
      </Timeline>
    </div>
  );
};

export default ProjectTimeline;
