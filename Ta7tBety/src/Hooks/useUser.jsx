import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export default function useUser() {
  let { user } = useContext(AuthContext);
  user = user || JSON.parse(localStorage.getItem("user"));

<<<<<<< HEAD
  return user;
=======
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
>>>>>>> ea8cc2fcab1ceb9306f5909a64cd767ecbe06380
}
