import React from "react"
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText,
  Row,
  Col,
} from "reactstrap"
import { NavLink } from "react-router-dom"
import "./catindex.css"

const CatIndex = ({ cats }) => {
  return (
    <main className="cat-index-container py-5 bg-light">
      <Row xs="1" sm="2" md="3">
        {cats?.map((cat, index) => {
          return (
            <Col key={cat.id} className="my-2">
              <Card className="cat-card h-100 shadow">
                <img
                  className="card-img-top img-fluid"
                  src={cat.image}
                  alt={cat.name}
                />
                <CardBody>
                  <CardTitle tag="h5">{cat.name}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {cat.age} years old
                  </CardSubtitle>
                  <CardText>{cat.bio}</CardText>
                  <NavLink to={`/catshow/${cat.id}`}>
                    <Button color="danger">See More Details</Button>
                  </NavLink>
                </CardBody>
              </Card>
            </Col>
          )
        })}
      </Row>
    </main>
  )
}

export default CatIndex
