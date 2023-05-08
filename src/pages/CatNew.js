import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import "./CatNew.css"

const CatNew = ({ createCat }) => {
  const navigate = useNavigate()
  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    breed: "",
    hobbies: "",
    image: "",
  })

  const handleChange = (e) => {
    // Spread operator make a copy of state object
    // e.target.name will give us the key we are updating based on input
    // e.target.value will be the new value in state
    setNewCat({ ...newCat, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    createCat(newCat)
    navigate("/catindex")
  }

  return (
    <div className="container my-5">
      <Form>
        <FormGroup>
          <Label for="cat-name">Name</Label>
          <Input
            id="cat-name"
            name="name"
            placeholder="Enter cat's name"
            type="text"
            onChange={handleChange}
            value={newCat.name}
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
            value={newCat.age}
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
            value={newCat.breed}
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
            value={newCat.hobbies}
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
            value={newCat.image}
          />
        </FormGroup>
        <Button color="danger" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default CatNew
