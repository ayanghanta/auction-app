import { BASE_URL } from "../constant";

const API_URL = `${BASE_URL}/api/v1/address`;

export async function createAddress(address) {
  const res = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(address),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok)
    throw new Error(
      data.message || `could not create your address at this moment`
    );

  return data.data;
}

export async function updateAddress({ id, addressObj }) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(addressObj),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok)
    throw new Error(
      data.message || `could not update your address at this point`
    );

  return data.data;
}
export async function deleteAddress(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!res.ok) throw new Error(`could not delete your address at this moment`);

  return null;
}
