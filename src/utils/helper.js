export function formatCurrency(amount) {
  const options = {
    style: "currency",
    currency: "INR",
  };
  const formatedCurrency = new Intl.NumberFormat("en-IN", options).format(
    amount
  );

  return formatedCurrency;
}
