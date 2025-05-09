import { render, screen } from "@testing-library/react";
import AboutUs from "../../components/AboutUs";
import "@testing-library/jest-dom";

test("Should load About component", () => {
  render(<AboutUs />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
