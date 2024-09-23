import { render, screen, fireEvent } from '@testing-library/react';
import ProductList from './ProductList';

describe('ProductList component', () => {
    const mockAddToCart = jest.fn();
    const mockProducts = [
        { id: 1, title: 'Product 1', description: 'Description 1', price: 10.0 },
        { id: 2, title: 'Product 2', description: 'Description 2', price: 15.0 },
    ];

    it('renders the product list correctly', () => {
        render(<ProductList products={mockProducts} onAddToCart={mockAddToCart} />);
        expect(screen.getByText('Products')).toBeInTheDocument();
    });

    it('displays the correct number of products', () => {
        render(<ProductList products={mockProducts} onAddToCart={mockAddToCart} />);
        const productItems = screen.getAllByRole('listitem');
        expect(productItems).toHaveLength(mockProducts.length);
    });

});
