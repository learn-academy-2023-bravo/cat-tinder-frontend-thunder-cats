import React from "react"
import { useParams, NavLink, useNavigate } from "react-router-dom"
import { Button } from "reactstrap"

const CatShow = ({ cats, deleteCat }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  let currentCat = cats.find((cat) => cat.id === +id)

  const handleSubmit = () => {
    deleteCat(id)
    navigate("/catindex")
  }
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
          <Button
            color="primary"
            onClick={() => {
              handleSubmit()
              window.location.reload()
            }}
          >
            Delete Cat Profile
          </Button>
        </>
      )}
    </main>
  )
}

export default CatShow
