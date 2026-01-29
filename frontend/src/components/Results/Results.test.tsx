import { render, screen } from '@testing-library/react';
import Results from './Results';

describe('Results', () => {
  const results = [
    {
      _id: '1',
      name: 'Product 1',
      price: 1,
      description: 'Description 1',
      image: 'Image 1',
      category: 'Category 1',
    },
    {
      _id: '2',
      name: 'Product 2',
      price: 2,
      description: 'Description 2',
      image: 'Image 2',
      category: 'Category 2',
    },
    {
      _id: '3',
      name: 'Product 3',
      price: 3,
      description: 'Description 3',
      image: 'Image 3',
      category: 'Category 3',
    },
  ];

  const resultsPerPage = 6;

  it('renders a message if there are no results', () => {
    render(<Results results={[]} resultsPerPage={resultsPerPage} />);

    const message = screen.getByText(/no results/i);

    expect(message).toBeInTheDocument();
  });

  it('renders an accurate result count', () => {
    render(<Results results={results} resultsPerPage={resultsPerPage} />);

    const count = screen.getByText(`${results.length} results`);

    expect(count).toBeInTheDocument();
  });

  it('hides the result navs if there is only one page', () => {
    render(<Results results={results} resultsPerPage={results.length} />);

    const nav = screen.queryByText(/page \d+ of \d+/i);

    expect(nav).toBeNull();
  });

  it('renders the result navs if there are multiple pages', () => {
    render(<Results results={results} resultsPerPage={results.length - 1} />);

    const navs = screen.getAllByText(/page \d+ of \d+/i);

    expect(navs).toHaveLength(2);
  });

  it('renders the result list with appropriate length', () => {
    render(<Results results={results} resultsPerPage={resultsPerPage} />);

    const listitems = screen.getAllByRole('listitem');
    const appropriateLength = Math.min(results.length, resultsPerPage);

    expect(listitems).toHaveLength(appropriateLength);
  });
});
