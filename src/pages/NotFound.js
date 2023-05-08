import React from "react"
import { NavLink } from "react-router-dom"
import { Container, Button } from "reactstrap"
import "./notfound.css"
import cat from "../assets/cat.png"

const NotFound = () => {
  return (
    <div className="notfound">
      <Container>
        <h1 className="notfound-title">Oops!</h1>
        <img src={cat} alt="cat" />
        <p className="notfound-message">
          We couldn't find any cats here. Maybe try searching for them instead?
        </p>
        <NavLink to="/catindex">
          <Button color="danger">Search for cats</Button>
        </NavLink>
      </Container>
    </div>
  )
}

export default NotFound
