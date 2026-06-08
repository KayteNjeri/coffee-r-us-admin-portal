import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Routing", () => {
  test("renders Home page", () => {
    window.history.pushState({}, "", "/");

    render(<App />);

    expect(
      screen.getByText("Coffee R Us")
    ).toBeInTheDocument();
  });

  test("renders Shop page", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
      })
    );

    window.history.pushState({}, "", "/shop");

    render(<App />);

    expect(
      screen.getByPlaceholderText("Search...")
    ).toBeInTheDocument();
  });
});