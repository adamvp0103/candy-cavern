import { render, screen } from '@testing-library/react';
import OrderConfirmation from './OrderConfirmation';
import { MemoryRouter } from 'react-router';

describe('OrderConfirmation', () => {
  it('renders the order confirmation heading', () => {
    render(
      <MemoryRouter>
        <OrderConfirmation />
      </MemoryRouter>,
    );

    const heading = screen.getByRole('heading', { name: /confirm/i });

    expect(heading).toBeInTheDocument();
  });

  it('renders the order confirmation message', () => {
    render(
      <MemoryRouter>
        <OrderConfirmation />
      </MemoryRouter>,
    );

    const message = screen.getByText(/thank/i);

    expect(message).toBeInTheDocument();
  });

  it('renders the nav button', () => {
    render(
      <MemoryRouter>
        <OrderConfirmation />
      </MemoryRouter>,
    );

    const button = screen.getByRole('button', { name: /home/i });

    expect(button).toBeInTheDocument();
  });
});
