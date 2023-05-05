import { render, screen } from "@testing-library/react"

import CatEdit from "../pages/CatEdit"

describe("<CatEdit />", () => {
  it("renders without crashing", () => {
    render(<CatEdit/>)
    const element = screen.getByText("Home Page")
    expect(element).toBeInTheDocument()
  })
})
