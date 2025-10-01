import { useEffect, useState } from 'react';
import InvalidInputMessage from './InvalidInputMessage';

interface BillingInformationProps {
  formSubmitted: boolean;
  onSetValidity: (validity: boolean) => void;
}

function BillingInformation({
  formSubmitted,
  onSetValidity
}: BillingInformationProps) {
  const [cardNumber, setCardNumber] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    onSetValidity(!!(cardNumber && securityCode && expirationDate && fullName));
  }, [cardNumber, securityCode, expirationDate, fullName]);

  return (
    <section className="section">
      <h2 className="heading">Billing Information</h2>
      {/* TODO: Implement controlled form */}
      <form className="form">
        <div className="input-field">
          <label className="input-label" htmlFor="card-number-input">
            Card Number
          </label>
          <input
            id="card-number-input"
            className="input"
            value={cardNumber}
            inputMode="numeric"
            onChange={event => {
              setCardNumber(event.target.value);
            }}
            required
          />
          {formSubmitted && !cardNumber && (
            <InvalidInputMessage message="This is a required field." />
          )}
        </div>
        <div className="input-field">
          <label className="input-label" htmlFor="security-code-input">
            Security Code
          </label>
          <input
            id="security-code-input"
            className="input"
            value={securityCode}
            inputMode="numeric"
            maxLength={3}
            onChange={event => {
              setSecurityCode(event.target.value);
            }}
            required
          />
          {formSubmitted && !securityCode && (
            <InvalidInputMessage message="This is a required field." />
          )}
        </div>
        <div className="input-field">
          <label className="input-label" htmlFor="expiration-date-input">
            Expiration Date
          </label>
          <input
            id="expiration-date-input"
            className="input"
            type="month"
            value={expirationDate}
            onChange={event => {
              setExpirationDate(event.target.value);
            }}
            required
          />
          {formSubmitted && !expirationDate && (
            <InvalidInputMessage message="This is a required field." />
          )}
        </div>
        <div className="input-field">
          <label className="input-label" htmlFor="full-name-input">
            Full Name as It Appears on Card
          </label>
          <input
            id="full-name-input"
            className="input"
            value={fullName}
            onChange={event => {
              setFullName(event.target.value);
            }}
            required
          />
          {formSubmitted && !fullName && (
            <InvalidInputMessage message="This is a required field." />
          )}
        </div>
      </form>
    </section>
  );
}

export default BillingInformation;
