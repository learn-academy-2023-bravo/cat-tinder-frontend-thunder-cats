import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CatNew from "../pages/CatNew";

describe("<CatNew />", () => {
  it("renders the new cat form", () => {
    render(
      <BrowserRouter>
        <CatNew />
      </BrowserRouter>
    );
    const nameInput = screen.getByRole("textbox", { name: /name/i });
    expect(nameInput).toBeInTheDocument();

    const ageInput = screen.getByRole("textbox", { name: /age/i });
    expect(ageInput).toBeInTheDocument();

    const breedInput = screen.getByRole("textbox", { name: /breed/i });
    expect(breedInput).toBeInTheDocument();

    const hobbiesInput = screen.getByRole("textbox", { name: /hobbies/i });
    expect(hobbiesInput).toBeInTheDocument();

    const imageInput = screen.getByRole("textbox", { name: /pic/i });
    expect(imageInput).toBeInTheDocument();
  });
});
