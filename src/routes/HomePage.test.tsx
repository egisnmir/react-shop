import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('loads and displays the Home page title', () => {
    render(<HomePage />);

    expect(screen.getByText('Home page')).toBeInTheDocument();
});
