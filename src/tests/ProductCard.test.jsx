import { render, screen } from "@testing-library/react";
import ProductCard from "../components/ProductCard";

const coffee = {
  id: "1",
  name: "Vanilla Bean",
  description: "Medium Roast",
  origin: "Columbia",
  price: 10,
};

describe("ProductCard", () => {
  test("renders coffee information", () => {
    render(<ProductCard coffee={coffee} />);

    expect(
      screen.getByText("Vanilla Bean")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Medium Roast")
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Columbia/i)
    ).toBeInTheDocument();
  });
});