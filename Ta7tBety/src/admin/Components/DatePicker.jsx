import React, { useState } from "react";
import { CalendarIcon } from "./Icons";

export default function DatePicker() {
  const [selectedDates, setSelectedDates] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateSelect = (event) => {
    const date = new Date(event.target.value);
    setSelectedDates((prev) => {
      const isSelected = prev.some(
        (d) => d.toDateString() === date.toDateString()
      );
      return isSelected
        ? prev.filter((d) => d.toDateString() !== date.toDateString())
        : [...prev, date];
    });
  };

  return (
    <div style={{ position: "relative", fontFamily: "Arial, sans-serif" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #1c355e",
          borderRadius: "8px",
          padding: "8px",
          gap: "8px",
          cursor: "pointer",
          color: "#1c355e",
          backgroundColor: "#f0f4f8",
        }}
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <CalendarIcon size={20} color="#1c355e" />
        <span style={{ flexGrow: 1, fontSize: "14px" }}>
          {selectedDates.length > 0
            ? `${selectedDates[0].toLocaleString("default", {
                month: "short",
              })} ${selectedDates[0].getFullYear()} - ${selectedDates[
                selectedDates.length - 1
              ].toLocaleString("default", { month: "short" })} ${selectedDates[
                selectedDates.length - 1
              ].getFullYear()}`
            : "Select dates"}
        </span>
        <span style={{ fontSize: "12px" }}>▼</span>
      </div>
      {showCalendar && (
        <input
          type="date"
          onChange={handleDateSelect}
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            marginTop: "4px",
            padding: "8px",
            border: "1px solid #1c355e",
            borderRadius: "8px",
            color: "#1c355e",
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            zIndex: "10",
          }}
        />
      )}
    </div>
  );
}
