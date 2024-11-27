import { BASE_URL } from "../constant";

const API_URL = `${BASE_URL}/api/v1/bids`;

export async function getBid(bidId) {
  try {
    if (!bidId) return null;
    const res = await fetch(`${API_URL}/${bidId}`, {
      method: "GET",
      credentials: "include",
    });
    const dataObj = await res.json();
    if (!res.ok || !dataObj.ok) throw new Error(`Bid could not be fetched`);

    return dataObj.data.bids;
  } catch (err) {
    throw new Error(err.message);
  }
}
export async function getMyBids() {
  try {
    const res = await fetch(`${API_URL}/getMyBids`, {
      method: "GET",
      credentials: "include",
    });
    const dataObj = await res.json();
    if (!res.ok || !dataObj.ok) throw new Error(`Bids could not be fetched`);

    return dataObj.data.bids;
  } catch (err) {
    throw new Error(err.message);
  }
}
