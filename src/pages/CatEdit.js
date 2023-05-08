import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"

const CatEdit = ({ cats, updateCat }) => {
  const { id } = useParams()
  let currentCat = cats?.find((cat) => cat.id === +id)

  const [editCat, setEditCat] = useState({
    name: currentCat.name,
    age: currentCat.age,
    breed: currentCat.breed,
    hobbies: currentCat.hobbies,
    image: currentCat.image,
  })

  const handleChange = (e) => {
    setEditCat({ ...editCat, [e.target.name]: e.target.value })
  }

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    updateCat(editCat, currentCat.id)
    navigate(`/catshow/${id}`)
  }

  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="cat-name">Name</Label>
          <Input
            id="cat-name"
            name="name"
            placeholder="Enter cat's name"
            type="text"
            onChange={handleChange}
            value={editCat.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cat-age">Age</Label>
          <Input
            id="cat-age"
            name="age"
            placeholder="Enter cat's age"
            type="text"
            onChange={handleChange}
            value={editCat.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cat-breed">Breed</Label>
          <Input
            id="cat-breed"
            name="breed"
            placeholder="Enter cat's breed"
            type="text"
            onChange={handleChange}
            value={editCat.breed}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cat-hobbies">Hobbies</Label>
          <Input
            id="cat-hobbies"
            name="hobbies"
            placeholder="Enter cat's hobbies"
            type="text"
            onChange={handleChange}
            value={editCat.hobbies}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cat-image">Picture</Label>
          <Input
            id="cat-image"
            name="image"
            placeholder="Enter a picture of the cat"
            type="text"
            onChange={handleChange}
            value={editCat.image}
          />
        </FormGroup>
        <Button color="danger" onClick={handleSubmit}>
          Submit Updated Cat
        </Button>
      </Form>
    </div>
  )
}

export default CatEdit
