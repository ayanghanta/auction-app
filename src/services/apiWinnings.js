import { BASE_URL } from "../constant";

const API_URL = `${BASE_URL}/api/v1/winnings`;

export async function getMyWinnings() {
  try {
    const res = await fetch(API_URL, {
      method: "GET",
      credentials: "include",
    });
    const dataObj = await res.json();
    if (!res.ok || !dataObj.ok) throw new Error(`Product could not be created`);

    return dataObj.data.winnings;
  } catch (err) {
    throw new Error(err.message || `Can't create product`);
  }
}
