import lookup from "country-code-lookup";

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

const regionToCountryCodeMap = {
  England: "GB",
  Scotland: "GB",
  Wales: "GB",
  "Northern Ireland": "GB",
  "Hong Kong": "HK",
  Macau: "MO",
  "Puerto Rico": "US",
  Greenland: "DK",
  Aruba: "NL",
};
export function getCountryFlag(countryName) {
  let countryCode;

  if (Object.keys(regionToCountryCodeMap).includes(countryName))
    countryCode = regionToCountryCodeMap[countryName];
  else countryCode = lookup.byCountry(countryName)?.iso2;

  if (!countryCode) return null;
  const flagLink = `https://flagsapi.com/${countryCode.toUpperCase()}/flat/64.png`;
  // src = "https://flagsapi.com/IN/flat/64.png";
  return flagLink;
}
