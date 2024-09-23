// Cart.test.tsx

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Cart from "./Cart";

describe("Cart component", () => {
  const mockRemove = jest.fn();

  const items = [
    {
      product: { id: 1, title: "Product 1", description: "desc1", price: 10.0 },
      quantity: 2,
    },
    {
      product: { id: 2, title: "Product 2", description: "desc2", price: 15.0 },
      quantity: 1,
    },
  ];

  it("renders items in the cart", () => {
    render(<Cart items={items} onRemove={mockRemove} />);
    expect(screen.getByText("2 Items ready for checkout")).toBeInTheDocument();
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Quantity 2")).toBeInTheDocument();
    expect(screen.getByText("20")).toBeInTheDocument(); // Price * Quantity
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getByText("Quantity 1")).toBeInTheDocument();
    expect(screen.getByText("15")).toBeInTheDocument(); // Price * Quantity
  });

  it("calculates the total price correctly", () => {
    render(<Cart items={items} onRemove={mockRemove} />);
    expect(screen.getByText("Total: 35.00")).toBeInTheDocument();
  });

  it("renders the checkout button", () => {
    render(<Cart items={items} onRemove={mockRemove} />);
    expect(screen.getByText("Checkout")).toBeInTheDocument();
  });
});
