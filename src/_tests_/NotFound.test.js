import { render, screen } from "@testing-library/react";
import NotFound from "../pages/NotFound.js";

describe("<NotFound />", () => {
  it("renders without crashing", () => {
    render(<NotFound />);
    const element = screen.getByText("No Cats Found Here");
    expect(element).toBeInTheDocument();
  });
});
