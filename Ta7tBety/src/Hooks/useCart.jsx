import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

export default function useUser() {
  let { cart, setCart } = useContext(CartContext);
  cart = cart || JSON.parse(localStorage.getItem("cart"));

  const updateCart = (newCart) => {
    setCart(newCart);
    if (!newCart) {
      localStorage.removeItem("cart");
      return;
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  return { cart, updateCart };
}
