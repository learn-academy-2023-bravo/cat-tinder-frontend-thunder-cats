import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import CatEdit from "../pages/CatEdit";
import mockCats from "../mockCats";

describe("<CatEdit />", () => {
  it("renders the new Cat form to update existing Cat", () => {
    render(
      <MemoryRouter initialEntries={["/CatEdit/1"]}>
        <Routes>
          <Route path="/CatEdit/:id" element={<CatEdit cats={mockCats} />} />
        </Routes>
      </MemoryRouter>
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
