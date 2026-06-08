import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Shop from "../components/Shop";

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve([
          {
            id: "1",
            name: "Vanilla Bean",
            description: "Medium Roast",
            origin: "Columbia",
            price: 10,
          },
        ]),
    })
  );
});

describe("Shop", () => {
  test("loads and displays products", async () => {
    render(<Shop />);

    expect(
      await screen.findByText("Vanilla Bean")
    ).toBeInTheDocument();
  });

  test("filters products using search box", async () => {
    render(<Shop />);

    const searchInput =
      screen.getByPlaceholderText("Search...");

    await userEvent.type(
      searchInput,
      "Vanilla"
    );

    expect(
      await screen.findByText("Vanilla Bean")
    ).toBeInTheDocument();
  });
});