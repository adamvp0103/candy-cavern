import { render, screen } from '@testing-library/react';
import Search from './Search';
import userEvent from '@testing-library/user-event';

describe('Search', () => {
  it('renders the search heading', () => {
    render(<Search />);

    const heading = screen.getByText(/search/i);

    expect(heading).toBeInTheDocument();
  });

  it('renders the input', () => {
    render(<Search />);

    const input = screen.getByRole('searchbox');

    expect(input).toBeInTheDocument();
  });

  it('responds to user input', async () => {
    render(<Search />);

    const user = userEvent.setup();
    const input = screen.getByRole('searchbox');
    const text = 'chocolate';

    await user.type(input, text);

    expect(input).toHaveValue(text);
  });

  it('hides results initially', () => {
    render(<Search />);

    const results = screen.queryByRole('list');

    expect(results).toBeNull();
  });
});
