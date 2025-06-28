import SelectList from "../../SelectList";

export default function AdminDashboardHeader() {
  return (
    <div style={styles.container}>
      <div style={styles.searchField}>
        <span style={styles.title}>{`Welcome Back `}</span>
      </div>
      <SelectList />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "22px",
    fontFamily: "Inter",
    color: "#15243F",
  },
  searchField: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
  },
};
