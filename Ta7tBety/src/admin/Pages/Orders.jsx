import { useEffect, useState } from "react";
import ReusableTable from "../Components/ReusableTable.jsx";
import "../Components/Components.css";
import axios from "axios";

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color: "#8c8c8c" }}
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color: "#8c8c8c" }}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export default function Orders() {
  const headers = [
    "Order",
    "Client",
    "Provider",
    "Date",
    "Status",
    "Country",
    "Total",
  ];

  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [regions, setRegions] = useState([]);

  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [search, regionFilter, dateFilter, orders]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        "https://ta7t-bety.vercel.app/api/v1/orders",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      const data = res.data?.data?.data || [];

      const formatted = data.map((order, index) => ({
        id: `#${index + 1000}`,
        client: order.userID?.name || "Unknown",
        provider: order.providerID?.name || "Unknown",
        rawDate: order.createdAt,
        date: new Date(order.createdAt).toLocaleDateString(),
        status: order.status || "Unknown",
        country: order.userID?.region || "N/A",
        total: `$${order.price?.toFixed(2) || "N/A"}`,
      }));

      const uniqueRegions = [
        ...new Set(
          formatted.map((o) => o.country?.trim().toLowerCase()).filter(Boolean)
        ),
      ];

      setOrders(formatted);
      setRegions(uniqueRegions);
    } catch (err) {
      console.error("Failed to fetch orders:", err);
    }
  };

  const applyFilters = () => {
    let results = [...orders];

    if (search) {
      results = results.filter((order) =>
        JSON.stringify(order).toLowerCase().includes(search.toLowerCase())
      );
    }

    if (regionFilter) {
      results = results.filter(
        (order) => order.country?.toLowerCase() === regionFilter.toLowerCase()
      );
    }

    if (dateFilter) {
      results = results.filter((order) => {
        const orderDate = new Date(order.rawDate);
        const selected = new Date(dateFilter);

        return (
          orderDate.getFullYear() === selected.getFullYear() &&
          orderDate.getMonth() === selected.getMonth() &&
          orderDate.getDate() === selected.getDate()
        );
      });
    }

    setCurrentPage(1); // Reset to first page after filter
    setFilteredOrders(results);
  };

  const renderOrderRow = (order, index) => {
    const statusClass = order.status.toLowerCase().replace(/\s+/g, "-");

    return (
      <tr key={index}>
        <td>
          <span className="order-id">{order.id}</span>
        </td>
        <td>{order.client}</td>
        <td>{order.provider}</td>
        <td>{order.date}</td>
        <td>
          <span className={`status-pill status-${statusClass}`}>
            {order.status}
          </span>
        </td>
        <td>{order.country}</td>
        <td>{order.total}</td>
      </tr>
    );
  };

  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  return (
    <div className="page-content-container">
      {/* Page Header */}
      <div className="orders-header">
        <div className="page-title-header">
          <h1>Orders</h1>
        </div>

        {/* Filters Section */}
        <div className="filters-bar">
          <div className="search-input-wrapper">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search"
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            className="filter-dropdown"
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
          >
            <option value="">Select a region</option>
            {regions.map((r, i) => (
              <option key={i} value={r}>
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </option>
            ))}
          </select>

          <div className="date-picker-wrapper">
            <CalendarIcon />
            <input
              type="text"
              placeholder="Jan 2024"
              className="date-picker-input"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />
          </div>

          <button className="filter-button" onClick={applyFilters}>
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <ReusableTable
        headers={headers}
        data={paginatedOrders}
        renderRow={renderOrderRow}
      />

      {/* Pagination */}
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
}
