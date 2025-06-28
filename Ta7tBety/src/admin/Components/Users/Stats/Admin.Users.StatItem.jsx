import React from "react";
import { ThreeDotsIcon } from "../../Icons";

export default function AdminUsersStatItem({ icon, title }) {
  // TODO - Implement logic to display the number of users

  return (
    <div style={styles.container}>
      {icon}
      <div style={styles.textContainer}>
        <span style={styles.title}>{title}</span>
        <span style={styles.number}>100</span>
      </div>
      <ThreeDotsIcon />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    padding: "20px",
    justifyContent: "space-between",
    alignItems: "center",
    width: "25%",
    height: "100%",
    border: "0.1px solid #CFD9E9",
    borderRadius: "8px",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "18px",
    letterSpacing: "0%",
    color: "#15243F",
  },
  number: {
    fontFamily: "Work Sans",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "18px",
    letterSpacing: "0%",
    color: "#99A8C2",
  },
};
