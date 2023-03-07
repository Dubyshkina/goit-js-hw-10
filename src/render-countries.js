
import { refs } from ".";

function renderCountriesList(countries) {
    const markup = countries
      .map((country) =>`<li><img src=${country.flags.svg} alt="flags" width="50px"/>${country.name}</li>`)
      .join("");

      refs.countriesList.innerHTML = markup;
  }


  function  renderCountryCard(countries) {

    const [countryCard] = countries;

    const languages = countryCard.languages.map(language => language.name).join();

    const markup = `<div>
    <img src=${countryCard.flags.svg} alt="flag" width="50"/>
    <h2>${countryCard.name}</h2>
    </div>
    <span>Capital: ${countryCard.capital}</span>
    <span>Population: ${countryCard.population}</span>
    <span>Languages: ${languages}</span>`

    refs.countryInfo.innerHTML = markup;
  }

  export {renderCountriesList,renderCountryCard};
