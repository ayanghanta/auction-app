import { BASE_URL } from "../constant";
const API_URL = `${BASE_URL}/api/v1/notifications`;

export async function getNotifications() {
  try {
    const res = await fetch(API_URL, {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    if (!res.ok || !data.ok) throw new Error(data.message);

    return data.data.notifications;
  } catch (err) {
    throw new Error(err.message);
  }
}
export async function markRead(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      credentials: "include",
    });
    const data = await res.json();
    if (!res.ok || !data.ok) throw new Error(data.message);

    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
