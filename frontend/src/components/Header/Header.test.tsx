import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the welcome text', () => {
    render(<Header />);

    const welcomeTo = screen.getByText(/welcome to/i);
    const candyCavern = screen.getByText(/candy cavern/i);

    expect(welcomeTo).toBeInTheDocument();
    expect(candyCavern).toBeInTheDocument();
  });
});
