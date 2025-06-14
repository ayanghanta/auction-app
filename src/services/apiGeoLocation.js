// CREDIT/ URL_SOURCE:https://nominatim.openstreetmap
//  https://nominatim.openstreetmap.org/reverse?lat=23.5204443&lon=87.3119227&format=json

import toast from "react-hot-toast";

export const getGeoPositionAddress = async ({ latitude, longitude }) => {
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Failed to fetch the address");
    }
    const data = await res.json();

    const addressObj = {
      address: data.display_name,
      city: data.address.city,
      state: data.address.state,
      pinCode: data.address.postcode,
      locality: data.address.county || data.address.state_district,
    };
    return addressObj;
  } catch (error) {
    // console.log(error);
    toast.error(`Can't fetch you location!`);
    return null;
  }
};
