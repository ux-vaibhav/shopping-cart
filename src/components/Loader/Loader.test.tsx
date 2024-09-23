import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader component', () => {
    it('renders the loader component', () => {
        render(<Loader />);
        expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('has a spinner element', () => {
        render(<Loader />);
        const spinner = screen.getByText('', { selector: '.spinner' });
        expect(spinner).toBeInTheDocument();
    });

    it('has the correct class for loader', () => {
        render(<Loader />);
        const loaderElement = screen.getByRole('alert');
        expect(loaderElement).toHaveClass('loader');
    });
});
