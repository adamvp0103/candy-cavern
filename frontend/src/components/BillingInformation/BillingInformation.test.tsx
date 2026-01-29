import { render, screen } from '@testing-library/react';
import BillingInformation from './BillingInformation';
import userEvent from '@testing-library/user-event';

describe('BillingInformation', () => {
  it('renders the billing information heading', () => {
    render(<BillingInformation />);

    const heading = screen.getByText(/billing information/i);

    expect(heading).toBeInTheDocument();
  });

  it('renders all inputs', () => {
    render(<BillingInformation />);

    const labels = [
      /card number/i,
      /security code/i,
      /expiration date/i,
      /full name/i,
    ];

    labels.forEach(label => {
      const input = screen.getByLabelText(label);
      expect(input).toBeInTheDocument();
    });
  });

  it('responds to user input in each field', () => {
    render(<BillingInformation />);

    const labels = [
      /card number/i,
      /security code/i,
      /expiration date/i,
      /full name/i,
    ];

    const user = userEvent.setup();
    const text = 'testing';

    labels.forEach(async label => {
      const input = screen.getByLabelText(label);

      await user.type(input, text);

      expect(input).toHaveValue(text);
    });
  });
});
