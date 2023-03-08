import { refs } from '.';

function renderCountriesList(countries) {
  const markup = countries
    .map(
      country =>
        `<li class="country-title"><img src=${country.flags.svg} alt="flags" width="50px" class="flag-icon"/>${country.name}</li>`
    )
    .join('');

  refs.countriesList.innerHTML = markup;
}

function renderCountryCard(countries) {
  const [countryCard] = countries;

  const languages = countryCard.languages.map(language => language.name).join();

  const markup = `<div class="card-field">
    <img src=${countryCard.flags.svg} alt="flag" width="50" class="card-icon"/>
    <h2 class="card-title">${countryCard.name}</h2>
    </div>
    <div class="card-descr">
    <h3 class="descr-title">Capital: <span class="descr-info">${countryCard.capital}</span></h3>
    <h3 class="descr-title">Population: <span class="descr-info">${countryCard.population}</span></h3>
    <h3 class="descr-title">Languages: <span class="descr-info">${languages}</span></h3>
    </div>`;

  refs.countryInfo.innerHTML = markup;
}

export { renderCountriesList, renderCountryCard };
