import { BASE_URL } from "../constant";

const API_URL = `${BASE_URL}/api/v1/auctions`;

export async function getAllAuctions(query) {
  const queryStr = `?${query}`;
  try {
    const res = await fetch(`${API_URL}${query ? queryStr : ""}`);

    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error(`Can't fetch auctions`);
  }
}
export async function getLiveAuctions(query) {
  const queryStr = `?${query}`;
  try {
    const res = await fetch(`${API_URL}/live-auctions${query ? queryStr : ""}`);

    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error(`Can't fetch live auctions`);
  }
}

export async function getAuctionProduct(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`);

    const dataObj = await res.json();
    const data = dataObj.data.auction;
    return data;
  } catch (err) {
    throw new Error(`Can't fetch Product details`);
  }
}
