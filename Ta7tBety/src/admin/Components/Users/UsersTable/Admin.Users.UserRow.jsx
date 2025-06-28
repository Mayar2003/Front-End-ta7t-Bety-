import { useRef, useState } from "react";
import { PencilIcon, TrashIcon } from "../../Icons";

export default function UserRow({ user, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const userRowRef = useRef();

  return (
    <div style={styles.userRow} ref={userRowRef}>
      <FieldCard>
        <FieldData data={user.name} />
      </FieldCard>

      <FieldCard>
        <FieldData data={user.email} />
      </FieldCard>

      <FieldCard>
        <FieldData data={user.region} />
      </FieldCard>

      <FieldCard>
        <FieldData data={user.phone ? user.phone : "Not Added Yet"} />
      </FieldCard>

      <EditAndDeleteIcons
        user={user}
        onEdit={onEdit}
        onDelete={onDelete}
        userRowRef={userRowRef}
      />

      {isEditing && <EditWindow />}
    </div>
  );
}

function FieldCard({ children }) {
  return <div style={styles.fieldCard}>{children}</div>;
}

function FieldData({ data }) {
  return <span style={styles.fieldData}>{data}</span>;
}

function EditAndDeleteIcons({ user, onEdit, onDelete, userRowRef }) {
  return (
    <div style={styles.editAndDeleteIcons}>
      <div style={styles.icon} onClick={() => onEdit(user._id)}>
        <PencilIcon />
      </div>
      <div
        style={styles.icon}
        onClick={() => {
          userRowRef.current.style.opacity = "0";
          userRowRef.current.style.transition = "opacity 0.3s ease-out";
          setTimeout(() => onDelete(user._id), 300); // Delay onDelete by 300ms
        }}
      >
        <TrashIcon />
      </div>
    </div>
  );
}

function EditWindow() {
  return <div style={styles.editWindow}>{/* Edit user form */}</div>;
}

const styles = {
  userRow: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "10%",
    padding: "23px 0 23px 35px",
    borderTop: "0.1px solid #CFD9E9",
  },
  fieldCard: {
    display: "flex",
    alignItems: "center",
    width: "20%",
  },
  fieldData: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "10px",
    color: "#15243F",
  },
  editAndDeleteIcons: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: "35px",
    gap: "12px",
    width: "20%",
  },
  icon: {
    display: "flex",
    cursor: "pointer",
  },
  editWindow: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "50%",
    backgroundColor: "white",
    borderRadius: "8px",
    border: "1px solid #CFD9E9",
    padding: "20px",
  },
};
