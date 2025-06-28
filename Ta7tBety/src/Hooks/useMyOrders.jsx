import { useEffect, useState } from "react";
import ApiManager from "../ApiManager/ApiManager";

export default function useMyOrders(status) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    ApiManager.getMyOrders()
      .then((res) => {
        const response = res.data;
        const filteredOrders = response.data.orders.filter(
          (order) => order.status === status
        );
        setOrders(filteredOrders);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [status]);

  return orders;
}
