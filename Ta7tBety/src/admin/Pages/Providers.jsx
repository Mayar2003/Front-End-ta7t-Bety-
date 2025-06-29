import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Components/Components.css";

const ProvidersPage = () => {
  const navigate = useNavigate();
  const [groupedProviders, setGroupedProviders] = useState({});

  useEffect(() => {
    fetchProviders();
  }, []);

  const fetchProviders = async () => {
    try {
      const res = await axios.get(
        "https://ta7t-bety.vercel.app/api/v1/providers/31.6515165165165/30.211548651613/1000000000/all/all",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      const providers = res.data?.data?.providers || [];

      const grouped = {};
      providers.forEach((p) => {
        const rawType = p.providerType?.toLowerCase() || "unknown";
        let typeKey = "other";
        if (rawType.startsWith("f-")) typeKey = "food";
        else if (rawType.startsWith("r-")) typeKey = "repair";
        else if (rawType.startsWith("m-")) typeKey = "market";
        else if (rawType.startsWith("hw-")) typeKey = "housework";
        else if (rawType.startsWith("hc-")) typeKey = "health";

        if (!grouped[typeKey]) grouped[typeKey] = [];
        grouped[typeKey].push({
          id: p.providerId,
          name: p.name,
          image:
            p.photo ||
            "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=",
          orders: p.reviewsCount || 0,
        });
      });

      setGroupedProviders(grouped);
    } catch (err) {
      console.error("Error loading providers:", err);
    }
  };

  const ProviderCard = ({ type, providers }) => {
    const limitedProviders = providers.slice(0, 5);
    return (
      <div
        className="provider-card"
        onClick={() => navigate(`/dashboard/providers/${type}`)}
      >
        <h2 className="provider-title">{type}</h2>
        <table className="provider-table">
          <thead>
            <tr>
              <th>Profile</th>
              <th>Name</th>
              <th>Orders</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: Math.max(4, limitedProviders.length) }).map(
              (_, index) => {
                const provider = limitedProviders[index];
                return provider ? (
                  <tr key={provider.id}>
                    <td>
                      <img
                        src={provider.image}
                        alt={provider.name}
                        className="provider-image"
                      />
                    </td>
                    <td>{provider.name}</td>
                    <td>{provider.orders}</td>
                  </tr>
                ) : (
                  <tr key={index}>
                    <td colSpan={3} style={{ height: "40px" }}></td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="providers-container">
      {Object.entries(groupedProviders).map(([type, providers]) => (
        <ProviderCard key={type} type={type} providers={providers} />
      ))}
    </div>
  );
};

export default ProvidersPage;
