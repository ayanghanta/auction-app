import lookup from "country-code-lookup";
import { HIKE } from "../constant";

export const inchToCm = (inch) => (+inch * 2.54).toFixed(2);

export const poundToKg = (lb) => (+lb * 0.453592).toFixed(2);

export const calcMinBidPrice = (bidAmount) =>
  Math.ceil(bidAmount + (HIKE / 100) * bidAmount);

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

export function formatDate(date, minutes = false) {
  if (!date) return "";
  const dateStr = new Date(date);
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  if (minutes) {
    options.hour = "2-digit";
    options.minute = "2-digit";
  }

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

export const getViewLink = (notificationType, id) => {
  let url;

  if (notificationType === "auctionEnd") url = `/app/myProducts`;
  else if (notificationType === "auctionWin") url = `/app/myBids`;
  else url = "/app";

  return url;
};

export const getDeliveryProgress = (
  deliveryDate,
  orderPlaceAt,
  nowTimestamp = Date.now()
) => {
  const deliveryTime = new Date(deliveryDate).getTime(); // UTC ms
  const orderTime = new Date(orderPlaceAt).getTime(); // UTC ms

  // Handle edge case where delivery date is same or before order
  if (deliveryTime <= orderTime) return 100;

  const elapsed = nowTimestamp - orderTime;
  const total = deliveryTime - orderTime;

  let progress = 3 > (elapsed / total) * 100 ? 3 : (elapsed / total) * 100;

  // Clamp between 0 and 100
  if (progress < 0) return 0;
  if (progress > 100) return 100;

  return parseFloat(progress.toFixed(2));
};
