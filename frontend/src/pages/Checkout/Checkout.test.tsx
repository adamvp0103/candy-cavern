import { render, screen } from '@testing-library/react';
import Checkout from './Checkout.tsx';

describe('Checkout', () => {
  it('renders the page title', () => {
    render(<Checkout />);

    const title = screen.getByRole('heading', { name: /checkout/i });

    expect(title).toBeInTheDocument();
  });

  it('renders a message if the basket is empty', () => {
    render(<Checkout />);

    const message = screen.getByText(/empty/i);

    expect(message).toBeInTheDocument();
  });

  it('hides the form if the basket is empty', () => {
    render(<Checkout />);

    const form = screen.queryByRole('form');

    expect(form).toBeNull();
  });
});
