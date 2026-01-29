import { useState } from "react";

function BillingInformation() {
  const [cardNumber, setCardNumber] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [fullName, setFullName] = useState("");

  return (
    <fieldset className="narrow-section">
      <legend className="heading">Billing Information</legend>
      <div className="input-field">
        <label className="input-label" htmlFor="card-number-input">
          Card Number
        </label>
        <input
          id="card-number-input"
          className="input"
          pattern="[0-9]{8,19}"
          value={cardNumber}
          inputMode="numeric"
          onChange={(event) => {
            setCardNumber(event.target.value.replace(/\D/g, ""));
          }}
          required
        />
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
          pattern="[0-9]{3,4}"
          onChange={(event) => {
            setSecurityCode(event.target.value.replace(/\D/g, ""));
          }}
          required
        />
      </div>
      <div className="input-field">
        <label className="input-label" htmlFor="expiration-date-input">
          Expiration Date
        </label>
        <input
          id="expiration-date-input"
          className="input"
          value={expirationDate}
          placeholder="MM/YY"
          pattern="\d{1,2}/\d{2}"
          onChange={(event) => {
            setExpirationDate(event.target.value.replace(/[^\d/]/g, ""));
          }}
          required
        />
      </div>
      <div className="input-field">
        <label className="input-label" htmlFor="full-name-input">
          Full Name as It Appears on Card
        </label>
        <input
          id="full-name-input"
          className="input"
          value={fullName}
          onChange={(event) => {
            setFullName(event.target.value);
          }}
          required
        />
      </div>
    </fieldset>
  );
}

export default BillingInformation;
