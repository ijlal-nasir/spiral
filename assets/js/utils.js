async function getCountries() {
  const response = await fetch("./assets/js/countries.json", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
}

export default getCountries;
