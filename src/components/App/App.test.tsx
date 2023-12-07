import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given App component", () => {
  describe("When it rendered", () => {
    test("Then it should show a title with the text Gift", () => {
      const expectedText = "Regalos";

      render(<App />);

      const header = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(header).toBeInTheDocument();
    });
  });
});
