import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the course name somewhere", () => {
    render(<App />);
    const courseNameElements = screen.getAllByText(/COS420/i);
    expect(courseNameElements.length).toBeGreaterThan(0);
});
