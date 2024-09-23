import { render, screen } from '@testing-library/react';
import Message from './Message';

describe('Message component', () => {
    it('renders an error message', () => {
        render(<Message type="error" message="This is an error!" />);
        const messageElement = screen.getByRole('alert');
        expect(messageElement).toBeInTheDocument();
        expect(messageElement).toHaveTextContent('This is an error!');
        expect(messageElement).toHaveClass('error');
    });

    it('renders a warning message', () => {
        render(<Message type="warning" message="This is a warning!" />);
        const messageElement = screen.getByRole('alert');
        expect(messageElement).toBeInTheDocument();
        expect(messageElement).toHaveTextContent('This is a warning!');
        expect(messageElement).toHaveClass('warning');
    });

    it('renders a success message', () => {
        render(<Message type="success" message="This is a success!" />);
        const messageElement = screen.getByRole('alert');
        expect(messageElement).toBeInTheDocument();
        expect(messageElement).toHaveTextContent('This is a success!');
        expect(messageElement).toHaveClass('success');
    });
});
