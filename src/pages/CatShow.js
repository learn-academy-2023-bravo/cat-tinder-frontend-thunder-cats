import React from "react"
import { useParams } from "react-router-dom"

const CatShow = ({ cats }) => {
  const { id } = useParams()
  let currentCat = cats.find(cat => cat.id === +id)
  return (
   <main>
    {currentCat && (
      <>
      <img
      alt = 'cat pic'
      src = {currentCat.image}
      />
      <h3>
        {currentCat.name} likes {currentCat.hobbies}
      </h3>
      </>
    )}
   </main>
  )
}

export default CatShow
