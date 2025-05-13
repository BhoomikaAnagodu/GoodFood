import { render, screen } from "@testing-library/react";
import About from "../../components/About";
import "@testing-library/jest-dom";

test("Should load About component", () => {
  render(<About />);

  const heading = screen.getByRole("heading", {
    name: "We are here to help amazing restaurants get great customers",
  });
  heading;
  expect(heading).toBeInTheDocument();
});
