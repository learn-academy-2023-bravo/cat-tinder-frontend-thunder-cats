import React from "react"
import { useParams, NavLink, useNavigate } from "react-router-dom"
import { Button } from "reactstrap"

const CatShow = ({ cats, deleteCat }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  let currentCat = cats?.find((cat) => cat.id === +id)

  const handleSubmit = () => {
    deleteCat(id)
    navigate("/catindex")
  }

  return (
    <main className="cat-show-container">
      {currentCat && (
        <>
          <div className="image-container">
            <img alt="cat pic" src={currentCat.image} className="cat-image" />
          </div>
          <div className="cat-info">
            <h3 className="text-center">
              {currentCat.name} is {currentCat.age} and is a {currentCat.breed}{" "}
              and likes {currentCat.hobbies}.
            </h3>
            <div className="button-container d-flex justify-content-center gap-2">
              <NavLink to={`/catedit/${currentCat.id}`} className="nav-link">
                <Button className="btn-primary" color="danger">
                  Edit Cat Profile
                </Button>
              </NavLink>
              <Button
                className="btn-primary"
                color="danger"
                onClick={() => {
                  handleSubmit()
                }}
              >
                Delete Cat Profile
              </Button>
            </div>
          </div>
        </>
      )}
    </main>
  )
}

export default CatShow
