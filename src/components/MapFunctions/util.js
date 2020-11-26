import React from "react";
import { Circle, Popup } from "react-leaflet";

const casesColor = {
  cases: {
    hex: "#CC1034",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 400,
  }
};



export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesColor[casesType].hex}
      fillColor={casesColor[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) *casesColor[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {country.cases}
          </div>
          <div className="info-recovered">
            Recovered: {country.recovered}
          </div>
          <div className="info-deaths">
            Deaths: {country.deaths}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
