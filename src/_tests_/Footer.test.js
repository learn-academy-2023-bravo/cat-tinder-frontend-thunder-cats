import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer.js";

describe("<Footer />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const element = screen.getByText("© 2023 FelineFinder, Inc. All rights reserved.");
    expect(element).toBeInTheDocument();
  });
});
