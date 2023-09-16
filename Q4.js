const countries = ['England', 'Ireland', 'Scotland', 'Wales', 'Thailand'];

const countriesWithAnd = countries.filter(country => country.toLowerCase().includes('and'));

if (countriesWithAnd.length > 0) {
  console.log(countriesWithAnd);
} else {
  console.log("All these countries are without 'and'.");
}
