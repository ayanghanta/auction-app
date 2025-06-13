import { BASE_URL } from "../constant";

const API_URL = `${BASE_URL}/api/v1/orders`;

export async function getOrder(orderId) {
  const res = await fetch(`${API_URL}/${orderId}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok)
    throw new Error(
      data.message || `could not find any order in this order id`
    );

  return data.data;
}
export async function getAllOrders() {
  const res = await fetch(API_URL, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message || `could not find any order`);

  return data.data;
}
