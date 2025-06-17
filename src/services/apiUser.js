import { BASE_URL } from "../constant";

const API_URL = `${BASE_URL}/api/v1/users/getUser`;

export async function getUserDetails(userId) {
  const res = await fetch(`${API_URL}/${userId}`, {
    method: "GET",
    credentials: "include",
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message || `could not get user`);

  return data.data;
}
