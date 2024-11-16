import { BASE_URL } from "../constant";

const API_URL = `${BASE_URL}/api/v1/users`;

export async function signup({ fullName, email, password, confirmPassword }) {
  const res = await fetch(`${API_URL}/signup`, {
    method: "POST",
    body: JSON.stringify({ fullName, email, password, confirmPassword }),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message || `could not signup`);

  return data.data;
}
export async function login({ email, password }) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok)
    throw new Error(data.message || `could not login at this moment`);

  return data.data;
}

export async function logout() {
  const res = await fetch(`${API_URL}/logout`, {
    method: "GET",
    credentials: "include",
  });

  const data = await res.json();

  if (!res.ok)
    throw new Error(data.message || `could not logout at this moment`);

  return data.data;
}
export async function getUser() {
  const res = await fetch(`${API_URL}/isAuthenticated`, {
    method: "GET",
    credentials: "include",
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message || `could not get user`);

  return data.data;
}
export async function updateMe(userData) {
  const res = await fetch(`${API_URL}/updateMe`, {
    method: "PATCH",
    body: userData,
    credentials: "include",
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message || `could not update user account`);

  return data.data;
}

export async function updatePassword({
  currentPassword,
  password,
  confirmPassword,
}) {
  const res = await fetch(`${API_URL}/updatePassword`, {
    method: "PATCH",
    body: JSON.stringify({ currentPassword, password, confirmPassword }),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok)
    throw new Error(data.message || `could not update password at this moment`);

  return data.data;
}
