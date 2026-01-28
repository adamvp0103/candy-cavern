import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
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

  it('navigates to the home page', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    );

    const homeLink = screen.getByText(/home/i);

    await user.click(homeLink);

    screen.debug()

    const homeTitle = screen.getByRole('heading', { name: /home/i });

    expect(homeTitle).toBeInTheDocument();
  });
});
