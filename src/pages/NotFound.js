import React from "react";
import { Navlink } from "react-router-dom";
import { Container, Button } from "reactstrap";
import "./notfound.css";

const NotFound = () => {
  return (
    <div className="notfound">
      <Container>
        <h1 className="notfound-title">Oops!</h1>
        <p className="notfound-message">
          We couldn't find any cats here. Maybe try searching for them instead?
        </p>
        <Navlink to="/catindex">
          <Button className="notfound-btn">Search for cats</Button>
        </Navlink>
      </Container>
    </div>

  );
};

export default NotFound;
