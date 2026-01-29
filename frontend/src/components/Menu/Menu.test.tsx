import { render, screen } from '@testing-library/react';
import Menu from './Menu';

describe('Menu', () => {
  it('renders the menu heading', () => {
    render(<Menu />);

    const heading = screen.getByText(/menu/i);

    expect(heading).toBeInTheDocument();
  });

  it('renders a loading message initially', () => {
    render(<Menu />);

    const message = screen.getByText(/\.\.\./i);

    expect(message).toBeInTheDocument();
  });

  it('renders an error message if loading fails', async () => {
    const mockFetch = vi.fn().mockRejectedValue({});
    vi.stubGlobal('fetch', mockFetch);

    render(<Menu />);

    const error = await screen.findByText(
      /try again|fail|error|wrong|problem/i,
    );
    const loading = screen.queryByText(/\.\.\./i);

    expect(loading).toBeNull();
    expect(error).toBeInTheDocument();
  });

  it('renders the correct number of sections', async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [
        { _id: '1', name: 'Category 1', displayOrder: 1 },
        { _id: '2', name: 'Category 2', displayOrder: 2 },
      ],
    });
    vi.stubGlobal('fetch', mockFetch);

    render(<Menu />);

    const headings = await screen.findAllByText(/category/i);

    expect(headings).toHaveLength(2);
  });
});
