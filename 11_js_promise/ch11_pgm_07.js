const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';


fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    let totalWeight = 0;
    let count = 0;

    data.forEach(cat => {
      const weightMetric = cat.weight.metric; 
      const weights = weightMetric.split(' - ').map(Number); 
      const averageWeight = (weights[0] + weights[1]) / 2; 
      totalWeight += averageWeight;
      count++;
    });

    const averageWeightOfCats = totalWeight / count;
    console.log(`Average weight of cats (in metric units): ${averageWeightOfCats.toFixed(2)} kg`);
  })
  .catch(error => console.error('Error fetching cat data:', error));


fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    const sortedCountries = data.sort((a, b) => b.area - a.area); 
    const largestCountries = sortedCountries.slice(0, 10); 

    console.log('10 largest countries by area:');
    largestCountries.forEach(country => {
      console.log(`${country.name}: ${country.area} sq km`);
    });
  })
  .catch(error => console.error('Error fetching country data:', error));


fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    const languagesSet = new Set();

    data.forEach(country => {
      country.languages.forEach(language => {
        languagesSet.add(language.name);
      });
    });

    const totalLanguages = languagesSet.size;
    console.log(`Total number of official languages in the world: ${totalLanguages}`);
  })
  .catch(error => console.error('Error fetching country data:', error));