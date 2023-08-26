import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import {
    toBeInTheDocument,
    toHaveAttribute,
} from "@testing-library/jest-dom/matchers";
import Navbar from "./Navbar";

expect.extend({ toBeInTheDocument, toHaveAttribute });

test("renders Navbar correctly", () => {
    render(
        <Router>
            <Navbar />
        </Router>
    );

    const searchIcon = screen.getByRole("link", { name: "Search Icon" });
    expect(searchIcon).toBeInTheDocument();
    expect(searchIcon).toHaveAttribute("href", "/search");

    const userIcon = screen.getByRole("link", { name: "User Icon" });
    expect(userIcon).toBeInTheDocument();
    expect(userIcon).toHaveAttribute("href", "/login");

    const brandText = screen.getByText("airbnb");
    const anywhereText = screen.getByText("Anywhere");
    const anyWeekText = screen.getByText("Any week");
    const addGuestsText = screen.getByText("Add Guests");

    expect(brandText).toBeInTheDocument();
    expect(anywhereText).toBeInTheDocument();
    expect(anyWeekText).toBeInTheDocument();
    expect(addGuestsText).toBeInTheDocument();
});
