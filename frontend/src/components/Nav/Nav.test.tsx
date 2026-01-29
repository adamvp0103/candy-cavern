import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Nav from './Nav';

describe('Nav', () => {
  it('renders the nav links', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    );

    const homeLink = screen.getByText(/home/i);
    const basketLink = screen.getByText(/basket/i);
    const checkoutLink = screen.getByText(/checkout/i);

    expect(homeLink).toBeInTheDocument();
    expect(basketLink).toBeInTheDocument();
    expect(checkoutLink).toBeInTheDocument();
  });
});
