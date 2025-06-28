export default function UsersTableHeader({ totalUsers, page, pageSize }) {
  return (
    <div style={styles.container}>
      <span style={styles.title}>All Users</span>
      <span style={styles.pageInfo}>
        {page * pageSize - pageSize + 1} - {page * pageSize} of {totalUsers}
      </span>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "35px",
    paddingRight: "7%",
    marginBottom: "8px",
    borderBottom: "0.1px solid #CFD9E9",
    height: "20%",
    width: "100%",
  },
  title: {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "18px",
    letterSpacing: "0%",
    color: "#15243F",
  },
  pageInfo: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "14px",
    letterSpacing: "0%",
    color: "#15243F",
  },
};
