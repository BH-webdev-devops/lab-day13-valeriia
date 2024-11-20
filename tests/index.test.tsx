// __tests__/index.test.tsx
import { render, screen } from "@testing-library/react";
import Home from "../app/page";
import React from "react";

test("renders the welcome message", () => {
  render(<Home />);
  expect(screen.getByText("Welcome to Next.js!")).toBeInTheDocument();
});
