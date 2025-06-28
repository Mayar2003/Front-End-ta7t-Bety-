import React from "react";
import "./Components.css"; // Make sure this path is correct

export default function ReusableTable({ title, headers, data, renderRow }) {
  return (
    <div className="users-container">
      <div className="users-header">
        <h1>{title}</h1>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((item, index) => renderRow(item, index))
            ) : (
              <tr>
                <td
                  colSpan={headers.length}
                  style={{ textAlign: "center", padding: "2rem" }}
                >
                  No data to display.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
