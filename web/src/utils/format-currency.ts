const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-us", { style: "currency", currency: "USD" })
    .format(value)
    .replace(/\u00A0/, " ");

export default formatCurrency;

export const currencyFormat = (num) => {
  return "$" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
