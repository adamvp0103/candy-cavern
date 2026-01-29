import { render, screen } from '@testing-library/react';
import ShippingInformation from './ShippingInformation';
import userEvent from '@testing-library/user-event';

describe('ShippingInformation', () => {
  it('renders the shipping information heading', () => {
    render(<ShippingInformation />);

    const heading = screen.getByText(/shipping information/i);

    expect(heading).toBeInTheDocument();
  });

  it('renders all inputs', () => {
    render(<ShippingInformation />);

    const labels = [
      /email/i,
      /address line 1/i,
      /address line 2/i,
      /city/i,
      /state/i,
      /zip/i,
      /country/i,
      /instructions/i,
    ];

    labels.forEach(label => {
      const input = screen.getByLabelText(label);
      expect(input).toBeInTheDocument();
    });
  });

  it('responds to user input in each field', () => {
    render(<ShippingInformation />);

    const labels = [
      /email/i,
      /address line 1/i,
      /address line 2/i,
      /city/i,
      /state/i,
      /zip/i,
      /country/i,
      /instructions/i,
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
