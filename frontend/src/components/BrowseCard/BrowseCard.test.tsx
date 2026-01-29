import { render, screen } from '@testing-library/react';
import BrowseCard from './BrowseCard';

describe('BrowseCard', () => {
  const product = {
    _id: '1',
    name: 'Chocolate Bar',
    price: 1,
    description: 'Chocolate Bar description.',
    image: 'chocolate-bar.png',
    category: '',
  };

  it('renders the product image with alt text', () => {
    render(<BrowseCard product={product} />);

    const image = screen.getByRole('img');

    expect(image).toHaveAttribute('src', product.image);
    expect(image).toHaveAttribute('alt', product.name);
  });

  it('renders the product name', () => {
    render(<BrowseCard product={product} />);

    const heading = screen.getByText(product.name);

    expect(heading).toBeInTheDocument();
  });

  it('renders the product price with two decimal places', () => {
    render(<BrowseCard product={product} />);

    const price = screen.getByText(`$${product.price.toFixed(2)}`);

    expect(price).toBeInTheDocument();
  });

  it('renders the product description', () => {
    render(<BrowseCard product={product} />);

    const description = screen.getByText(product.description);

    expect(description).toBeInTheDocument();
  });

  it('renders the add to basket button', () => {
    render(<BrowseCard product={product} />);

    const button = screen.getByRole('button', { name: /add to basket/i });

    expect(button).toBeInTheDocument();
  });
});
