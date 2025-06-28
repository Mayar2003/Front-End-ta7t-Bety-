import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip, // Renamed to avoid conflict
} from "recharts";
import {
  CalendarIcon,
  DecrementArrowIcon,
  IncrementArrowIcon,
} from "../../Icons";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import "./SecondRow.css";


export default function AdminDashboardSecondRow() {
  const [increment, setIncrement] = useState(true);

  const data = [
    { month: "Jan", activeUsers: 4000 },
    { month: "Feb", activeUsers: 3000 },
    { month: "Mar", activeUsers: 2000 },
    { month: "Apr", activeUsers: 2780 },
    { month: "May", activeUsers: 1890 },
    { month: "Jun", activeUsers: 2390 },
    { month: "Jul", activeUsers: 3490 },
    { month: "Aug", activeUsers: 2344 },
    { month: "Sep", activeUsers: 5555 },
    { month: "Oct", activeUsers: 6543 },
    { month: "Nov", activeUsers: 123 },
    { month: "Dec", activeUsers: 1234 },
  ];

  return (
    <div className="second-row-container">
      <div className="left-section">
        <div className="header-section">
          <TotalRevenueBox increment={increment} />
          <Filters />
        </div>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis dataKey="activeUsers" />
              <RechartsTooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="activeUsers"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="right-section">{/* Content for the right section */}</div>
    </div>
  );
}

function TotalRevenueBox({ increment }) {
  return (
    <div className="revenue-box">
      <span className="revenue-label">Total revenue</span>
      <div className="revenue-value-container">
        <span className="revenue-value">$240.8K</span>
        <div
          className={`percentage-change ${increment ? "increase" : "decrease"}`}
        >
          <span>28.5%</span>
          {increment ? <IncrementArrowIcon /> : <DecrementArrowIcon />}
        </div>
      </div>
    </div>
  );
}

function Filters() {
  const [startDate, setStartDate] = useState(new Date());

  const presets = [
    { label: "Today", start: new Date(), end: new Date() },
    {
      label: "Last Week",
      start: new Date(new Date().setDate(new Date().getDate() - 7)),
      end: new Date(),
    },
  ];

  return (
    <div className="filters-container">
      <div className="filter-option">
        <div className="revenue-color-indicator" />
        <span>Revenue</span>
      </div>
      <div className="filter-option">
        <div className="expenses-color-indicator" />
        <span>Expenses</span>
      </div>
      {/* <DateRangePickerComponent
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showIcon
        icon={<CalendarIcon />}
        className="date-picker"
      /> */}
      {/* <DateRangePickerComponent presets={presets} firstDayOfWeek={6} /> */}
    </div>
  );
}
