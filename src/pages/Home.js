import React from "react"
import { Container, Row, Col, Button } from "reactstrap"
import { NavLink } from "react-router-dom"
import "./home.css"

const Home = () => {
  return (
    <div className="home">
      <Container fluid>
        <Row>
          <Col className="home-content text-center my-auto">
            <h1 className="display-3">Welcome to Feline Finder!</h1>
            <p className="lead mb-4">
              Find your new feline friend with our easy-to-use search tool.
            </p>
            <NavLink to="/catindex">
              <Button className="btn-custom" color="danger" size="lg">
                Start Search
              </Button>
            </NavLink>
          </Col>
          <Col xs="12" md="6" className="p-0">
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
  )
}

export default Home
