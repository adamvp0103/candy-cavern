import { render, screen } from '@testing-library/react';
import Home from './Home.tsx';
import { MemoryRouter } from 'react-router';

describe('Home', () => {
  it('renders the page title', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const title = screen.getByRole('heading', { name: /home/i });

    expect(title).toBeInTheDocument();
  });
});
