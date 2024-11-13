import { BASE_URL } from "../constant";

const API_URL = `${BASE_URL}/api/v1`;

export async function getAllAuctions() {
  try {
    const res = await fetch(`${API_URL}/auctions`);

    const dataObj = await res.json();
    const data = dataObj.data.auctions;
    return data;
  } catch (err) {
    throw new Error(`Can't fetch auctions`);
  }
}

export async function getAuctionProduct(id) {
  try {
    const res = await fetch(`${API_URL}/auctions/${id}`);

    const dataObj = await res.json();
    const data = dataObj.data.auction;
    return data;
  } catch (err) {
    throw new Error(`Can't fetch Product details`);
  }
}
