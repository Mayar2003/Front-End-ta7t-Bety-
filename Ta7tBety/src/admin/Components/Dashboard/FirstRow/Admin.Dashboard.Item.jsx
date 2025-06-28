import React from "react";
import {
  DecrementArrowIcon,
  IncrementArrowIcon,
  ThreeDotsIcon,
} from "../../Icons";

export default function AdminDashboardItem({ icon, title, data, percentage }) {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.titleContainer}>
          {icon}
          <span style={styles.title}>{title}</span>
        </div>
        <div style={styles.dataContainer}>
          <span style={styles.data}>{data}</span>
          {percentage > 0 ? (
            <Increment data={percentage} />
          ) : (
            <Decrement data={-percentage} />
          )}
        </div>
      </div>
      <div style={styles.iconRotate}>
        <ThreeDotsIcon color="#15243F" />
      </div>
    </div>
  );
}

function Increment({ data }) {
  return (
    <div style={styles.increment}>
      <span style={styles.incrementText}>
        {data}%{"\u00A0"}
      </span>
      <IncrementArrowIcon />
    </div>
  );
}

function Decrement({ data }) {
  return (
    <div style={styles.decrement}>
      <span style={styles.decrementText}>
        {data}%{"\u00A0"}
      </span>
      <DecrementArrowIcon />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "25%",
    padding: "18px 20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    border: "1px solid #E7E7EA",
    height: "100px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
    alignItems: "flex-start",
  },
  titleContainer: {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
  },
  title: {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "14px",
    color: "#15243F",
  },
  dataContainer: {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
  },
  data: {
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "32px",
  },
  increment: {
    display: "flex",
    backgroundColor: "#05C16833",
    height: 18,
    border: "0.6px solid #05C16833",
    borderRadius: "2px",
    padding: "2px 4px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  incrementText: {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: "10px",
    lineHeight: "14px",
    color: "#14CA74",
  },
  decrement: {
    display: "flex",
    backgroundColor: "#FF5A6533",
    height: 18,
    border: "0.6px solid #FF5A6533",
    borderRadius: "2px",
    padding: "2px 4px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  decrementText: {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: "10px",
    lineHeight: "14px",
    color: "#CE4D5C",
  },
  iconRotate: {
    transform: "rotate(90deg)",
  },
};
