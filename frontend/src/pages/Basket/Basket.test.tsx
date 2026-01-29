import { render, screen } from '@testing-library/react';
import Basket from './Basket';

describe('Basket', () => {
  it('renders the page title', () => {
    render(<Basket />);

    const title = screen.getByRole('heading', { name: /basket/i });

    expect(title).toBeInTheDocument();
  });

  it('renders a message if the basket is empty', () => {
    render(<Basket />);

    const message = screen.getByText(/empty/i);

    expect(message).toBeInTheDocument();
  });

  it('hides the list if the basket is empty', () => {
    render(<Basket />);

    const list = screen.queryByRole('list');

    expect(list).toBeNull();
  });

  it('hides the check out button if the basket is empty', () => {
    render(<Basket />);

    const button = screen.queryByRole('button', { name: /check out/i });

    expect(button).toBeNull();
  });
});
