import { useEffect, useState } from 'react';
import InvalidInputMessage from './InvalidInputMessage';

interface ShippingInformationProps {
  formSubmitted: boolean;
  onSetValidity: (validity: boolean) => void;
}

function ShippingInformation({
  formSubmitted,
  onSetValidity
}: ShippingInformationProps) {
  const [email, setEmail] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    onSetValidity(!!(email && address1 && city && state && zipCode && country));
  }, [email, address1, city, state, zipCode, country]);

  return (
    <section className="section">
      <h2 className="heading">Shipping Information</h2>
      <form className="form">
        <div className="input-field">
          <label className="input-label" htmlFor="email-input">
            Email
          </label>
          <input
            id="email-input"
            className="input"
            type="email"
            value={email}
            onChange={event => {
              setEmail(event.target.value);
            }}
            required
          />
          {formSubmitted && !email && (
            <InvalidInputMessage message="This is a required field." />
          )}
        </div>
        <div className="input-field">
          <label className="input-label" htmlFor="address-1-input">
            Address Line 1
          </label>
          <input
            id="address-1-input"
            className="input"
            value={address1}
            onChange={event => {
              setAddress1(event.target.value);
            }}
            required
          />
          {formSubmitted && !address1 && (
            <InvalidInputMessage message="This is a required field." />
          )}
        </div>
        <div className="input-field">
          <label className="input-label" htmlFor="address-2-input">
            Address Line 2 <span className="optional">(Optional)</span>
          </label>
          <input
            id="address-2-input"
            className="input"
            value={address2}
            onChange={event => {
              setAddress2(event.target.value);
            }}
          />
        </div>
        <div className="input-field">
          <label className="input-label" htmlFor="city-input">
            City
          </label>
          <input
            id="city-input"
            className="input"
            value={city}
            onChange={event => {
              setCity(event.target.value);
            }}
            required
          />
          {formSubmitted && !city && (
            <InvalidInputMessage message="This is a required field." />
          )}
        </div>
        <div className="input-field">
          <label className="input-label" htmlFor="state-input">
            State
          </label>
          <input
            id="state-input"
            className="input"
            value={state}
            onChange={event => {
              setState(event.target.value);
            }}
            required
          />
          {formSubmitted && !state && (
            <InvalidInputMessage message="This is a required field." />
          )}
        </div>
        <div className="input-field">
          <label className="input-label" htmlFor="zip-code-input">
            ZIP Code
          </label>
          <input
            id="zip-code-input"
            className="input"
            inputMode="numeric"
            maxLength={5}
            value={zipCode}
            onChange={event => {
              setZipCode(event.target.value);
            }}
            required
          />
          {formSubmitted && !zipCode && (
            <InvalidInputMessage message="This is a required field." />
          )}
        </div>
        <div className="input-field">
          <label className="input-label" htmlFor="country-input">
            Country
          </label>
          <input
            id="country-input"
            className="input"
            value={country}
            onChange={event => {
              setCountry(event.target.value);
            }}
            required
          />
          {formSubmitted && !country && (
            <InvalidInputMessage message="This is a required field." />
          )}
        </div>
        <div className="input-field">
          <label className="input-label" htmlFor="instructions-input">
            Special Instructions <span className="optional">(Optional)</span>
          </label>
          <textarea
            id="instructions-input"
            className="input"
            rows={3}
            value={instructions}
            onChange={event => {
              setInstructions(event.target.value);
            }}
          />
        </div>
      </form>
    </section>
  );
}

export default ShippingInformation;
