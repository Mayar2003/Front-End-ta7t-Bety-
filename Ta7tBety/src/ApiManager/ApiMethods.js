import axios from "axios";

const getHeaders = () => {
  //   const token = localStorage.getItem("token");
  const token = localStorage.getItem("authToken") || null;

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

class ApiMethods {
  static async apiRequest(url, method, data) {
    const baseUrl = import.meta.env.VITE_BASE_URL || "";
    console.log("base URL :" + baseUrl);
    const fullUrl = `${baseUrl}${url}`;

    try {
      const config = {
        url: fullUrl,
        method: method,
        headers: getHeaders(),
      };

      if (["POST", "PUT"].includes(method.toUpperCase())) {
        config.data = data;
      }

      const response = await axios(config);

      console.log("API Response:", response.data); // Log the response data
      return response; // Ensure the response is returned
    } catch (err) {
      console.error("API Error:", err.response?.data || err.message); // Log the error
      throw err; // Throw the error to be handled by the caller
    }
  }

  static async get(url) {
    return this.apiRequest(url, "GET");
  }

  static async post(url, data) {
    return this.apiRequest(url, "POST", data);
  }

  static async put(url, data) {
    return this.apiRequest(url, "PUT", data);
  }

  static async delete(url) {
    return this.apiRequest(url, "DELETE");
  }
}

export default ApiMethods;
