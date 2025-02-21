import { useLocation } from "react-router-dom";
import Order from "../pages/Order";

const OrderLayout = () => {
  const location = useLocation();

  return (
    <section>{location.pathname === "/orders" ? <Order /> : null}</section>
  );
};

export default OrderLayout;
