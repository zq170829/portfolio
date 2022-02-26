import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
import Profile from "../../assets/img/profile/profile.svg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-2">ABOUT ME</h1>
        <Container>
          <Row className=" pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded tex align-text-left ">
                <br />
                My name is Qi Zhang. A Front-End Web Developer passionate about
                creating interactive applications and experiences on the web.
                <br />
                <br />
                Recently, I graduated from the Westcliff University Web
                Development Full-Stack Coding Bootcamp. I am passionate about
                coding and solving problems through code, and I am excited to
                work alongside other amazing programmers and learn so much more!
                <br />
                <br />
                I love learning about new technologies, what problems are they
                solving and How can I use them to build better and scalable
                products.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Contact me
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://docs.google.com/document/d/1TGTaYB1MjEgfm2DCRQjFCmttNHP__kFvo6ily6Aar0g/edit#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  {/* <div>
                    <a
                      href="https://medium.com/@adibaabid"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-secondary">
                        Medium
                      </Button>
                    </a>
                  </div> */}
                  <div>
                    <a
                      href="https://github.com/zq170829"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/qizhang-57647514/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
