function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}
const incomeYear = `income-${getCurrentYear()}`;
const gdpYear = `gdp-${getCurrentYear()}`;
const capitaYear = `capita-${getCurrentYear()}`;

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[incomeYear] = income;
  budget[gdpYear] = gdp;
  budget[capitaYear] = capita;

  return budget;
}
