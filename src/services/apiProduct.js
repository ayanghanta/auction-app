import { BASE_URL } from "../constant";

const API_URL = `${BASE_URL}/api/v1`;

export async function createNewProduct(product) {
  try {
    const res = await fetch(`${API_URL}/products`, {
      method: "POST",
      body: product,
      credentials: "include",
    });
    const dataObj = await res.json();
    if (!dataObj.ok) throw new Error(`Product could not be created`);

    return dataObj.data;
  } catch (err) {
    throw new Error(err.message || `Can't create product`);
  }
}
