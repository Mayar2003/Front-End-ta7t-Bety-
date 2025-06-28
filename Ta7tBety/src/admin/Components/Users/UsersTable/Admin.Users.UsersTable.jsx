export default function AdminUsersTable({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        border: "1px solid #CFD9E9",
        borderRadius: "8px",
        overflow: "auto",
      }}
    >
      {children}
    </div>
  );
}
