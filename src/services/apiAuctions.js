const BASE_URL = "http://localhost:8000";

export async function getAllAuctions() {
  try {
    const res = await fetch(`${BASE_URL}/auctions`);

    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(`Can't fetch auctions`);
  }
}

export async function getProduct(id) {
  try {
    const res = await fetch(`${BASE_URL}/product/${id}`);

    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(`Can't fetch Product details`);
  }
}

export async function createUser(userDetails) {
  try {
    const res = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-type": "application/json",
      },
    });
    const newUser = await res.json();
    return newUser;
  } catch (err) {
    throw new Error(`Can't create user account, somthing went wrong`);
  }
}
