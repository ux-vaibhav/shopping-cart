import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  const mockRemoveFromCart = jest.fn();
  const mockCartItems = [
    {
      product: { id: 1, title: "Product 1", description: "desc1", price: 10.0 },
      quantity: 2,
    },
    {
      product: { id: 2, title: "Product 2", description: "desc2", price: 15.0 },
      quantity: 1,
    },
  ];

  it("renders the title correctly", () => {
    render(<Header cart={mockCartItems} removeFromCart={mockRemoveFromCart} />);
    expect(screen.getByText("Shop")).toBeInTheDocument();
  });

  it("renders the cart button with the correct notification count", () => {
    render(<Header cart={mockCartItems} removeFromCart={mockRemoveFromCart} />);
    const cartButton = screen.getByText("Cart");
    expect(cartButton).toBeInTheDocument();
    expect(cartButton).toHaveTextContent("Cart"); 
  });

  it("displays the cart with items", () => {
    render(<Header cart={mockCartItems} removeFromCart={mockRemoveFromCart} />);
    const cartDialog = screen.getByRole("dialog"); 
    expect(cartDialog).toBeInTheDocument();
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });
});
