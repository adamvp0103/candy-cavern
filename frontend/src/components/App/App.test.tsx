import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('navigates to the home page', async () => {
    render(<App />);

    const user = userEvent.setup();
    const homeLink = screen.getByRole('link', { name: /home/i });

    await user.click(homeLink);

    const homeTitle = screen.getByRole('heading', { name: /home/i });

    expect(homeTitle).toBeInTheDocument();
  });

  it('navigates to the basket page', async () => {
    render(<App />);

    const user = userEvent.setup();
    const basketLink = screen.getByRole('link', { name: /basket/i });

    await user.click(basketLink);

    const basketTitle = screen.getByRole('heading', { name: /basket/i });

    expect(basketTitle).toBeInTheDocument();
  });

  it('navigates to the checkout page', async () => {
    render(<App />);

    const user = userEvent.setup();
    const checkoutLink = screen.getByRole('link', { name: /checkout/i });

    await user.click(checkoutLink);

    const checkoutTitle = screen.getByRole('heading', { name: /checkout/i });

    expect(checkoutTitle).toBeInTheDocument();
  });
});
