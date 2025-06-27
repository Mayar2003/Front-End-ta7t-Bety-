import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export default function useUser() {
  let { user, setUser } = useContext(AuthContext);
  user = user || JSON.parse(localStorage.getItem("user"));

  const updateUser = (newUser, updateLocalStorage = true) => {
    setUser(newUser);
    if (!newUser) {
      localStorage.removeItem("user");
      return;
    }

    if (!updateLocalStorage) {
      return;
    }

    localStorage.setItem("user", JSON.stringify(newUser));
  };
  return { user, updateUser };
}
