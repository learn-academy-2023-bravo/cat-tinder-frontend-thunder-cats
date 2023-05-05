import React from "react"
import { useParams, NavLink } from "react-router-dom"
import { Button } from "reactstrap"

const CatShow = ({ cats }) => {
  const { id } = useParams()
  let currentCat = cats.find((cat) => cat.id === +id)
  return (
    <main>
      {currentCat && (
        <>
          <img alt="cat pic" src={currentCat.image} />
          <h3>
            {currentCat.name} likes {currentCat.hobbies}
          </h3>
          <NavLink to={`/catedit/${currentCat.id}`} className="nav-link">
            <Button color="primary">Edit Cat Profile</Button>
          </NavLink>
        </>
      )}
    </main>
  )
}

export default CatShow
