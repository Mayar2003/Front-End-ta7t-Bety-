import { useContext, useState } from "react";
import UserRow from "./Admin.Users.UserRow";
import { UsersContext } from "../Contexts/usersContexts";

const generateFakeUsers = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    _id: i,
    name: "Karim Ahmed",
    email: "fdsasfd@dfas",
    region: "Cairo, Egypt",
    phone: "+201234567890",
  }));
};

export default function UsersList({ users }) {
  const usersContext = useContext(UsersContext);
  const [fakeUsers, setFakeUsers] = useState(generateFakeUsers(5));

  const onEdit = (id) => {
    // TODO - Add edit user functionality
  };

  const onDelete = (id) => {
    const newUsers = fakeUsers.filter((user) => user._id !== id);
    const newRealUsers = users.filter((user) => user._id !== id);

    usersContext.usersStateDispatch({
      type: "SET_USERS",
      payload: newRealUsers,
    });

    setFakeUsers(newUsers);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        minHeight: "80%",
        marginTop: "20px",
        overflow: "auto",
      }}
    >
      {usersContext.usersState.filteredUsers.map((user) => (
        <UserRow
          key={user._id}
          user={user}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
