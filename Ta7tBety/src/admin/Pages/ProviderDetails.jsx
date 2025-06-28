import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../Components/Components.css";

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
      const res = await axios.get(
        `https://ta7t-bety-anb3dfg0e2dra6hp.germanywestcentral-01.azurewebsites.net/api/v1/providers/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      const data = res.data?.data?.doc;
      setProvider(data);
      setFormData({
        state: data.isActive ? "active" : "inactive",
        attention: data.isOnline ? "high" : "low",
      });
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
      await axios.patch(
        `https://ta7t-bety.vercel.app/api/v1/providers/${id}`,
        {
          isActive: formData.state === "active",
          isOnline: formData.attention === "high",
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
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
