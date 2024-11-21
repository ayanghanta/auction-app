import lookup from "country-code-lookup";

export const inchToCm = (inch) => (+inch * 2.54).toFixed(2);

export const poundToKg = (lb) => (+lb * 0.453592).toFixed(2);

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

export function formatDate(date) {
  const dateStr = new Date(date);
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return new Intl.DateTimeFormat("en-IN", options).format(dateStr);
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
