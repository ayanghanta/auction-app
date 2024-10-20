const BASE_URL = "http://localhost:3000/api/v1";

export async function createNewProduct(product) {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      body: product,
    });
    const dataObj = await res.json();
    if (!dataObj.ok) throw new Error(`Product could not be created`);

    return dataObj.data;
  } catch (err) {
    throw new Error(err.message || `Can't create product`);
  }
}
