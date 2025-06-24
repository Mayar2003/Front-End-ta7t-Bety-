import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export default function useUser() {
  let { user, setUser } = useContext(AuthContext);
  user = user || JSON.parse(localStorage.getItem("user"));

  setUser = (newUser) => {
    user = newUser;
    localStorage.setItem("user", JSON.stringify(newUser));
  };
  return user;
}
