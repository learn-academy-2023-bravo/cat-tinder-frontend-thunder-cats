import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <Container>
          <Row>
            <Col xs="12" sm="6">
              <h1 className="display-3">Welcome to Feline Finder!</h1>
              <p className="lead">
                Find your new feline friend with our easy-to-use search tool.
              </p>
              <hr className="my-2" />
              <p>Start your search now!</p>
              <p className="lead">
                <Link to="/catindex">
                  <button className="btn btn-primary">Search for cats</button>
                </Link>
              </p>
            </Col>
            <Col xs="12" sm="6">
              <div className="cat-image-container">
                <img
                  className="cat-image"
                  src="https://i.pinimg.com/474x/d7/59/03/d75903ce596e02f6a244ea55b6e4b813.jpg"
                  alt="Cat"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="about">
        <Container>
          <h2>About Feline Finder</h2>
          <hr />
          <Row>
            <Col xs="12" sm="6">
              <p>
                Feline Finder is a platform for cat lovers to find their next
                feline friend. With our comprehensive search tool, you can find
                cats by breed, age, and other attributes.
              </p>
            </Col>
            <Col xs="12" sm="6">
              <img
                className="about-image"
                src="https://i.pinimg.com/474x/d7/59/03/d75903ce596e02f6a244ea55b6e4b813.jpg"
                alt="Cat"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
