import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ReusableTable from "../Components/ReusableTable.jsx";
import "../Components/Components.css";

const ProviderTypeTable = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const [allUsers, setAllUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [attentionFilter, setAttentionFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const headers = ["Image", "Name", "Location", "Date", "Status", "Attention"];

  useEffect(() => {
    fetchProviders();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [search, statusFilter, dateFilter, attentionFilter, allUsers]);

  const normalizeProviderType = (providerType) => {
    const raw = providerType?.toLowerCase() || "";
    if (raw.startsWith("f-")) return "food";
    if (raw.startsWith("r-")) return "repair";
    if (raw.startsWith("m-")) return "market";
    if (raw.startsWith("hw-")) return "housework";
    if (raw.startsWith("hc-")) return "health";
    return "other";
  };

  const fetchProviders = async () => {
    try {
      const res = await axios.get(
        "https://ta7t-bety.vercel.app/api/v1/providers/31.6515165165165/30.211548651613/1000000000/all/all",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      const providers = res.data?.data?.providers || [];
      const rows = providers
        .filter((p) => normalizeProviderType(p.providerType) === type)
        .map((p) => ({
          id: p.providerId,
          name: p.name,
          image:
            p.photo ||
            "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=",
          location: p.locations?.[0]?.address || "Unknown",
          rawDate: new Date().toISOString(),
          date: new Date().toLocaleDateString(),
          status: p.isActive ? "active" : "inactive",
          attention: p.isOnline ? "high" : "low",
        }));
      setAllUsers(rows);
    } catch (err) {
      console.error("Error fetching providers:", err);
    }
  };

  const applyFilters = () => {
    let results = [...allUsers];

    if (search) {
      results = results.filter((u) =>
        JSON.stringify(u).toLowerCase().includes(search.toLowerCase())
      );
    }

    if (statusFilter) {
      results = results.filter((u) => u.status === statusFilter);
    }

    if (attentionFilter) {
      results = results.filter((u) => u.attention === attentionFilter);
    }

    if (dateFilter) {
      results = results.filter((u) => {
        const userDate = new Date(u.rawDate);
        const selected = new Date(dateFilter);
        return (
          userDate.getFullYear() === selected.getFullYear() &&
          userDate.getMonth() === selected.getMonth() &&
          userDate.getDate() === selected.getDate()
        );
      });
    }

    setFiltered(results);
    setCurrentPage(1);
  };

  const renderUserRow = (user, index) => (
    <tr
      key={index}
      onClick={() => navigate(`/dashboard/providers/${type}/${user.id}`)}
    >
      <td>
        <img src={user.image} alt={user.name} className="provider-image" />
      </td>
      <td>{user.name}</td>
      <td>{user.location}</td>
      <td>{user.date}</td>
      <td>{user.status}</td>
      <td>{user.attention}</td>
    </tr>
  );

  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  return (
    <div className="page-content-container">
      <div className="orders-header">
        <div className="page-title-header">
          <h1>{type?.replace("&", " & ")} Providers</h1>
        </div>

        <div className="filters-bar">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="filter-dropdown"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <select
            className="filter-dropdown"
            value={attentionFilter}
            onChange={(e) => setAttentionFilter(e.target.value)}
          >
            <option value="">Attention</option>
            <option value="high">High</option>
            <option value="low">Low</option>
          </select>

          <input
            type="text"
            placeholder="Date"
            className="date-picker-input"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />

          <button className="filter-button" onClick={applyFilters}>
            Filter
          </button>
        </div>
      </div>

      <ReusableTable
        headers={headers}
        data={paginated}
        renderRow={renderUserRow}
      />

      <div className="pagination-controls">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages || 1}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProviderTypeTable;
