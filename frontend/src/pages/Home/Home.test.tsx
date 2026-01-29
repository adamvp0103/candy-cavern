import { render, screen } from '@testing-library/react';
import Home from './Home.tsx';

describe('Home', () => {
  it('renders the page title', () => {
    render(<Home />);

    const title = screen.getByRole('heading', { name: /home/i });

    expect(title).toBeInTheDocument();
  });
});
