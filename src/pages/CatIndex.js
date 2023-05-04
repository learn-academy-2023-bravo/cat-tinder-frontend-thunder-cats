import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from "reactstrap"

const CatIndex = ({ cats }) => {
  return (
    <main>
      {cats?.map((cat, index) => {
        return (
          <Card
            color="light"
            style={{
              width: "18rem",
            }}
          >
            <img alt= "Sample" src={cat.image} />
            <CardBody>
              <CardTitle tag="h5">{cat.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {cat.age}
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.
              </CardText>
              <Button>see more details</Button>
            </CardBody>
          </Card>
        )
      })}
    </main>
  )
}

export default CatIndex
