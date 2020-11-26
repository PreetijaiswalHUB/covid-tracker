import React, { useState, useEffect } from "react";
import "./App.css";
import Map from "./components/Map/Map";
import "leaflet/dist/leaflet.css";
import AppStatus from "./components/AppStatus/AppSatus";
import Header from "./components/Header/Header";
import useFetch from "./Hooks/useFetch"

const App = () => {

  const [countryInfo, setCountryInfoUrl] = useFetch("https://disease.sh/v3/covid-19/all", [])
  const [mapCountries, setMapCountriesUrl] = useFetch("https://disease.sh/v3/covid-19/countries", [])

  const [country, setInputCountry] = useState("worldwide");
  const [countries, setCountries] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -20.4796 });
  const [mapZoom, setMapZoom] = useState(2);

  useEffect(() => {
    const countries = mapCountries.map((country) => ({
      name: country.country,
      value: country.countryInfo.iso2,
    }));

    setCountries(countries);
  }, [mapCountries]);


  useEffect(() => {
    if (countryInfo && countryInfo.countryInfo) {
      console.log(countryInfo)
      setMapCenter([countryInfo.countryInfo.lat, countryInfo.countryInfo.long]);
      setMapZoom(4);
    }
    else {
      setMapCenter({ lat: 34.80746, lng: -20.4796 });
      setMapZoom(2);
    }
  }, [countryInfo]);


  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    setInputCountry(countryCode);
    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    setCountryInfoUrl(url);
  };

  return (
    <div className="app">

      <Header onCountryChange={onCountryChange}
        country={country}
        countries={countries}
      />

      <AppStatus
        cases={countryInfo.cases}
        deaths={countryInfo.deaths}
        recovered={countryInfo.recovered} />

      <Map
        countries={mapCountries}
        center={mapCenter}
        zoom={mapZoom}
      />


    </div>
  );
};

export default App;
