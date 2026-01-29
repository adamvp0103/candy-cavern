import { render, screen } from '@testing-library/react';
import BasketCard from './BasketCard';

describe('BasketCard', () => {
  const product = {
    _id: '1',
    name: 'Chocolate Bar',
    price: 1,
    description: 'Chocolate Bar description.',
    image: 'chocolate-bar.png',
    category: '',
  };

  it('renders the product image with alt text', () => {
    render(<BasketCard product={product} />);

    const image = screen.getByRole('img');

    expect(image).toHaveAttribute('src', product.image);
    expect(image).toHaveAttribute('alt', product.name);
  });

  it('renders the product name', () => {
    render(<BasketCard product={product} />);

    const heading = screen.getByText(product.name);

    expect(heading).toBeInTheDocument();
  });

  it('renders the product price with two decimal places', () => {
    render(<BasketCard product={product} />);

    const price = screen.getByText(`$${product.price.toFixed(2)}`);

    expect(price).toBeInTheDocument();
  });

  it('renders the quantity and remove buttons', () => {
    render(<BasketCard product={product} />);

    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(3);
  });
});
