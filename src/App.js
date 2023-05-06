import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import CatIndex from "./pages/CatIndex"
import CatShow from "./pages/CatShow"
import CatNew from "./pages/CatNew"
import CatEdit from "./pages/CatEdit"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer"
import "./App.css"

const App = () => {
  const [cats, setCats] = useState([])

  useEffect(() => {
    readCat()
  }, [])

  const readCat = () => {
    fetch("http://localhost:3000/cats")
      .then((response) => response.json())
      .then((payload) => {
        setCats(payload)
      })
      .catch((error) => console.log(error))
  }

  const createCat = (createdCat) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(createdCat),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => readCat())
      .catch((error) => console.log("cat create error:", error))
  }

  const updateCat = (updatedCat, id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      body: JSON.stringify(updatedCat),
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => readCat())
      .catch((error) => console.log("cat update error:", error))
  }

  const deleteCat = (id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => readCat())
      .catch((error) => console.log("delete error:", error))
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex cats={cats} />} />
        <Route
          path="/catshow/:id"
          element={<CatShow cats={cats} deleteCat={deleteCat} />}
        />
        <Route path="/catnew" element={<CatNew createCat={createCat} />} />
        <Route
          path="/catedit/:id"
          element={<CatEdit cats={cats} updateCat={updateCat} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
