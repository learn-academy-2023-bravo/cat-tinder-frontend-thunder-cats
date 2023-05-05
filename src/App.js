import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import CatIndex from "./pages/CatIndex"
import CatShow from "./pages/CatShow"
import CatNew from "./pages/CatNew"
import CatEdit from "./pages/CatEdit"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer"
import mockCats from "./mockCats"
import "./App.css"

function App() {
  const [cats, setCats] = useState(mockCats)

  const createCat = (createdCat) => {}

  const updateCat = (cat, id) => {}

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex cats={cats} />} />
        <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
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
