
import React from 'react';
import "./Header.css";
function Header({ country, onCountryChange, countries }) {
  return (

    <div className="app__header">
      <h1>COVID-19 Tracker</h1>
      <form className="app__dropdown">
        <select
          value={country}
          onChange={onCountryChange}
          className="select">

          <option value="worldwide">Worldwide</option>
          {countries.map((country) => (
            <option value={country.value}>{country.name}</option>
          ))}
        </select>
      </form>
    </div>

  );
}

export default Header;
