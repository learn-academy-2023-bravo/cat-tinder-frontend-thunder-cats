import { render, screen } from "@testing-library/react";
import CatIndex from "../pages/CatIndex";
import mockCats from "../mockCats";
import { BrowserRouter } from "react-router-dom";

describe("<CatIndex />", () => {
  it("renders cat cards", () => {
    render(
      <BrowserRouter>
        <CatIndex cats={mockCats} />
      </BrowserRouter>
    );
    mockCats.forEach((cat) => {
      const catName = screen.getByText(cat.name);
      expect(catName).toBeInTheDocument();
    });
  });
});
