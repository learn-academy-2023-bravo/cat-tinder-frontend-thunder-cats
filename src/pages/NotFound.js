import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/catindex">
          <Button className="notfound-btn">Search for cats</Button>
        </Link>
      </Container>
    </div>
  );
};

export default NotFound;
