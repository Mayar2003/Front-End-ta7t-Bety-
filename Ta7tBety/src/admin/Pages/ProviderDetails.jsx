import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../Components/Components.css";
import ApiManager from "../../ApiManager/ApiManager";

const ProviderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [provider, setProvider] = useState(null);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchProvider();
  }, []);

  const fetchProvider = async () => {
    try {
      const res = await ApiManager.getProviderById(id);
      console.log("Fetched provider:", res.data);
      const data = res.data.data;
      setProvider(data);
      setFormData({
        state: data.isActive ? "active" : "inactive",
        attention: data.actionBy === "ai" ? "high" : "low",
      });

      console.log("Provider data:", data);
    } catch (err) {
      console.error("Failed to fetch provider:", err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      await ApiManager.updateProvider(provider._id, {
        isActive: formData.state === "active",
        actionBy: formData.attention === "high" ? "ai" : "admin",
      });
      // await axios.put(
      //   `https://ta7t-bety.vercel.app/api/v1/providers/${id}`,
      //   {
      //     isActive: formData.state === "active",
      //     actionBy: formData.attention === "high" ? "ai" : "admin",
      //   },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      //     },
      //   }
      // );
      alert("Provider updated successfully");
      navigate(-1);
    } catch (err) {
      console.error("Failed to update provider:", err);
      alert("Update failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!provider) return <p>Loading...</p>;

  return (
    <div className="provider-details-container">
      <h1>Provider Details</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          height: "100px",
        }}
      >
        <img
          src={provider.id[0] || "https://via.placeholder.com/150"}
          alt="Provider"
          style={{ width: "100px", height: "50px" }}
        />
        <img
          src={provider.id[1] || "https://via.placeholder.com/150"}
          alt="Provider"
          style={{ width: "100px", height: "50px" }}
        />
      </div>

      <div className="provider-edit-section">
        <label>
          State:
          <select name="state" value={formData.state} onChange={handleChange}>
            <option value="active">Accept</option>
            <option value="inactive">Reject</option>
          </select>
        </label>

        <label>
          Attention:
          <select
            name="attention"
            value={formData.attention}
            onChange={handleChange}
          >
            <option value="high">High</option>
            <option value="low">Low</option>
          </select>
        </label>

        <button onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Change State"}
        </button>
      </div>
    </div>
  );
};

export default ProviderDetails;
