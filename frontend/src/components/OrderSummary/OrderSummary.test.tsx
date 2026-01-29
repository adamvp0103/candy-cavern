import { render, screen } from '@testing-library/react';
import OrderSummary from './OrderSummary';

describe('OrderSummary', () => {
  it('renders the order summary heading', () => {
    render(<OrderSummary />);

    const heading = screen.getByRole('heading', { name: /summary/i });

    expect(heading).toBeInTheDocument();
  });

  it('renders the table', () => {
    render(<OrderSummary />);

    const table = screen.getByRole('table');

    expect(table).toBeInTheDocument();
  });

  it('renders the subtotal, tax, shipping, and total', () => {
    render(<OrderSummary />);

    const totals = screen.getAllByText(/total/i);
    const tax = screen.getByText(/tax/i);
    const shipping = screen.getByText(/shipping/i);

    expect(totals).toHaveLength(2);
    expect(tax).toBeInTheDocument();
    expect(shipping).toBeInTheDocument();
  });
});
