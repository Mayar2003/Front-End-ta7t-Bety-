import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export default function useUser() {
  let { user } = useContext(AuthContext);
  user = user || JSON.parse(localStorage.getItem("user"));

  return user;
}
