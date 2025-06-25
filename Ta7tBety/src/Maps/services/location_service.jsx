import axios from "axios";

export async function getAddressFromGoogle(lat, lng) {
  const apiKey = "AIzaSyCPpn3ha3jOftqoAua-LhUWBbkqqOcSULw"; // ضع مفتاحك هنا
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}&language=en`;

  try {
    const response = await axios.get(url);
    if (response.data.results?.length > 0) {
      return response.data.results[5]?.formatted_address || "No address found";
    } else {
      return "No address available";
    }
  } catch (e) {
    return "Failed to get address";
  }
}