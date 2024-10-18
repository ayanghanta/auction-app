const BASE_URL = "http://localhost:3000/api/v1";

export async function getAllAuctions() {
  try {
    const res = await fetch(`${BASE_URL}/auctions`);

    const dataObj = await res.json();
    const data = dataObj.data.auctions;
    return data;
  } catch (err) {
    throw new Error(`Can't fetch auctions`);
  }
}

export async function getAuctionProduct(id) {
  try {
    const res = await fetch(`${BASE_URL}/auctions/${id}`);

    const dataObj = await res.json();
    const data = dataObj.data.auction;
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
