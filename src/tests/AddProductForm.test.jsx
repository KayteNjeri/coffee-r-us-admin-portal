import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddProductForm from "../components/AddProductForm";

describe("AddProductForm", () => {
  test("allows user to enter coffee details", async () => {
    render(
      <AddProductForm
        onAddCoffeeProduct={() => {}}
      />
    );

    await userEvent.type(
      screen.getByLabelText(/coffee name/i),
      "Vanilla bean"
    );

    await userEvent.type(
      screen.getByLabelText(/origin/i),
      "Columbia"
    );

    expect(
      screen.getByDisplayValue("Vanilla bean")
    ).toBeInTheDocument();

    expect(
      screen.getByDisplayValue("Columbia")
    ).toBeInTheDocument();
  });
});