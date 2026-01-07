import { useState } from "react";

function ShippingInformation() {
  const [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [instructions, setInstructions] = useState("");

  return (
    <fieldset className="section">
      <legend className="heading">Shipping Information</legend>
      <div className="input-field">
        <label className="input-label" htmlFor="email-input">
          Email
        </label>
        <input
          id="email-input"
          className="input"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          required
        />
      </div>
      <div className="input-field">
        <label className="input-label" htmlFor="address-1-input">
          Address Line 1
        </label>
        <input
          id="address-1-input"
          className="input"
          value={address1}
          onChange={(event) => {
            setAddress1(event.target.value);
          }}
          required
        />
      </div>
      <div className="input-field">
        <label className="input-label" htmlFor="address-2-input">
          Address Line 2 <span className="optional">(Optional)</span>
        </label>
        <input
          id="address-2-input"
          className="input"
          value={address2}
          onChange={(event) => {
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
          onChange={(event) => {
            setCity(event.target.value);
          }}
          required
        />
      </div>
      <div className="input-field">
        <label className="input-label" htmlFor="state-input">
          State
        </label>
        <input
          id="state-input"
          className="input"
          value={state}
          onChange={(event) => {
            setState(event.target.value);
          }}
          required
        />
      </div>
      <div className="input-field">
        <label className="input-label" htmlFor="zip-code-input">
          ZIP Code
        </label>
        <input
          id="zip-code-input"
          className="input"
          pattern="\d{5}(-\d{4})?"
          value={zipCode}
          inputMode="numeric"
          onChange={(event) => {
            setZipCode(event.target.value);
          }}
          required
        />
      </div>
      <div className="input-field">
        <label className="input-label" htmlFor="country-input">
          Country
        </label>
        <input
          id="country-input"
          className="input"
          value={country}
          onChange={(event) => {
            setCountry(event.target.value);
          }}
          required
        />
      </div>
      <div className="input-field">
        <label className="input-label" htmlFor="instructions-input">
          Special Instructions <span className="optional">(Optional)</span>
        </label>
        <textarea
          id="instructions-input"
          className="input"
          value={instructions}
          onChange={(event) => {
            setInstructions(event.target.value);
          }}
        />
      </div>
    </fieldset>
  );
}

export default ShippingInformation;
