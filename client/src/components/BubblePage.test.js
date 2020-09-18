import React from "react";
import { render, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchApi as mockFetch } from "./fetchApi";

jest.mock("./fetchApi");
const testData = {
  data: [
    {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff",
      },
      id: 1,
    },
    {
      color: "limegreen",
      code: {
        hex: "#99ddbc",
      },
      id: 2,
    },
  ],
};

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockFetch.mockResolvedValueOnce(testData);
  const { debug, getByText } = render(<BubblePage />);
  await waitFor(() => {
    debug();
    expect(getByText(/aliceblue/i)).toBeInTheDocument()
  })
});
