import React, {act} from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
    it('renders with the correct label', () => {
        render(<Button label="Click Me" />);
        expect(screen.getByRole('button')).toHaveTextContent('Click Me');
    });

    it('triggers the onClick function when clicked', () => {
        const handleClick = jest.fn();
        render(<Button label="Click Me" onClick={handleClick} />);
        
        act(() => {
            fireEvent.click(screen.getByRole('button'));
        });
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('is disabled when the disabled prop is true', () => {
        render(<Button label="Click Me" disabled={true} />);
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });

    it('renders a notification badge when notification prop is provided', () => {
        render(<Button label="Click Me" notification={3} />);
        expect(screen.getByText('3')).toBeInTheDocument();
        expect(screen.getByText('3')).toHaveClass('notification-badge');
    });

    it('does not render a notification badge when notification prop is not positive', () => {
        render(<Button label="Click Me" notification={0} />);
        expect(screen.queryByText('0')).not.toBeInTheDocument();

        render(<Button label="Click Me" notification={undefined} />);
        expect(screen.queryByText('undefined')).not.toBeInTheDocument();
    });

    it('applies custom class names', () => {
        render(<Button label="Click Me" className="custom-class" />);
        expect(screen.getByRole('button')).toHaveClass('custom-class');
    });
});
