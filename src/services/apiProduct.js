import { BASE_URL } from "../constant";

const API_URL = `${BASE_URL}/api/v1/products`;

// 1. FOR CREATETING NEW PRODUCT
export async function createNewProduct(product) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      body: product,
      credentials: "include",
    });
    const dataObj = await res.json();
    if (!res.ok || !dataObj.ok) throw new Error(`Product could not be created`);

    return dataObj.data;
  } catch (err) {
    throw new Error(err.message || `Can't create product`);
  }
}

export async function getAllProducts() {
  try {
    const res = await fetch(API_URL, {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    if (!res.ok || !data.ok)
      throw new Error(data.message || `Product could not found`);

    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

// 2. FOR GET PRODUCT
export async function getProduct(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    if (!data.ok || !res.ok)
      throw new Error(`Counld not get your products at this moment`);

    return data.data.product;
  } catch (err) {
    throw new Error(err.message || `Can't get products`);
  }
}

// 3. TO GET ALL PRODCUT OF A SPECIFIC(logged in) USER
export async function getMyProducts() {
  try {
    const res = await fetch(`${API_URL}/getMyProducts`, {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();

    if (!data.ok || !res.ok)
      throw new Error(`Counld not get your products at this moment`);

    return data.data.products;
  } catch (err) {
    throw new Error(err.message || `Can't get products`);
  }
}

// 4. TO UPDATE PRODUCT INFORMATION
export async function updateProduct({ id, productObj }) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      credentials: "include",
      body: productObj,
    });

    const dataObj = await res.json();

    if (!res.ok || !dataObj.ok)
      throw new Error(dataObj.message || `Product could not be updates`);
    return dataObj.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

// 5. TO PUBLISH ALREADY VERIFIED PRODUCT
export async function publishProduct({ id, data }) {
  try {
    const res = await fetch(`${API_URL}/publishProduct/${id}`, {
      method: "PATCH",
      credentials: "include",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const dataObj = await res.json();

    if (!res.ok || !dataObj.ok)
      throw new Error(dataObj.message || `Product could not be publish`);
    return dataObj.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

// 6. TO VERIFY A PRODUCT (CAN OLY USED BU ADMIN)
export async function verifyProduct(id) {
  try {
    const res = await fetch(`${API_URL}/verify/${id}`, {
      method: "PATCH",
      credentials: "include",
    });

    const dataObj = await res.json();

    if (!res.ok || !dataObj.ok)
      throw new Error(dataObj.message || `Product could not be publish`);
    return dataObj.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

// 7. REHECT A PRODUCT VERIFICATION (ONLY USED BY ADMIN)
export async function rejectProduct({ id, couse }) {
  try {
    const res = await fetch(`${API_URL}/reject/${id}`, {
      method: "PATCH",
      credentials: "include",
      body: JSON.stringify({ couse }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const dataObj = await res.json();

    if (!res.ok || !dataObj.ok)
      throw new Error(dataObj.message || `Product could not be publish`);
    return dataObj.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

// 8. USED FOR DELETING A PRODUCT
export async function deleteProduct(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    if (!res.ok) throw new Error(`Counld not get your products at this moment`);

    return null;
  } catch (err) {
    throw new Error(err.message || `Can't get products`);
  }
}
