import debounce from 'lodash.debounce';
import {Notify} from 'notiflix';

import './css/styles.css';
import fetchCountries from './fetch-countries';
import {renderCountriesList,renderCountryCard} from'./render-countries';




export const refs = {
    searchInput : document.querySelector('#search-box'),
    countriesList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
}

const DEBOUNCE_DELAY = 300;

refs.searchInput.addEventListener('input',debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(event) {
    const name = event.target.value.toLowerCase().trim();

    if(name){

        fetchCountries(name)
        .then((countries) => {
            if(countries.length === 1){
                refs.countriesList.innerHTML ="";
                renderCountryCard(countries);
            } else if(countries.length >= 2 && countries.length <= 10) {
                refs.countryInfo.innerHTML ="";
                renderCountriesList(countries);
            }
            else {
            Notify.info("Too many matches found. Please enter a more specific name.");
            }
            
        })
        .catch((error) => Notify.failure("Oops, there is no country with that name."));
    }
    else {
        refs.countriesList.innerHTML ="";
        refs.countryInfo.innerHTML ="";
    }
   
}











 
  





