import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

describe("Home Component", () => {
  test("renders heading and slogan", () => {
    render(<Home />);

    expect(
      screen.getByText("Coffee R Us")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "The go to store for your coffee needs"
      )
    ).toBeInTheDocument();
  });
});