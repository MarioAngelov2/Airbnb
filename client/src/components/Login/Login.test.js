import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import {
    toBeInTheDocument,
    toHaveAttribute,
} from "@testing-library/jest-dom/matchers";
import Login from "./Login";

expect.extend({ toBeInTheDocument, toHaveAttribute });

test("Renders Login component correctly", () => {
    render(
        <Router>
            <Login />
        </Router>
    );

    const headingText = screen.getByRole("heading", { name: "Login" });
    const button = screen.getByRole("button", { name: "Login" });

    expect(headingText).toBeInTheDocument();
    expect(button).toBeInTheDocument();
});
