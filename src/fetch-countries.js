export default function fetchCountries(name) {
  const url = `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`;

  return fetch(url).then(data => {
    if (!data.ok) {
      throw new Error(data.status);
    }

    return data.json();
  });
}
