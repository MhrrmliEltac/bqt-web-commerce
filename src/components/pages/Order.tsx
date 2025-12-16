import Heading from "../general/Heading";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../../components/style/order.css";
import NotFound from "./NotFound";
import order from "../../assets/box.svg";
import { useNavigate } from "react-router-dom";

interface orderType {
  id: number;
  order_name: string;
  date: string;
  price: number;
  order_type: string;
}

const orders: orderType[] = [
  {
    id: 1,
    order_name: "Order #1234567890",
    date: "27.12.2024",
    price: 45,
    order_type: "confirmed",
  },
  {
    id: 2,
    order_name: "Order #1234567890",
    date: "27.12.2024",
    price: 45,
    order_type: "on the way",
  },
];

const completedOrder: orderType[] = [
  {
    id: 1,
    order_name: "Order #1231231231",
    date: "27.12.2024",
    price: 45,
    order_type: "completed",
  },
];

const Order = () => {
  const [activeTab, setActiveTab] = useState<string>("active");
  const [orderData] = useState<orderType[]>(orders);
  const navigate = useNavigate();

  const parentVariant = {
    initial: { opacity: 0, scale: 0.9, y: 100, transition: { duration: 0.5 } },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      variants={parentVariant}
      initial="initial"
      animate="animate"
    >
      {orderData.length > 0 && orderData ? (
        <>
          <div className="flex max-sm:justify-center">
            <Heading name="Orders" />
          </div>
          <div className="md:grid md:grid-rows-1 md:grid-cols-2 flex w-full flex-col">
            <div className="col-span-1 max-md:col-span-2">
              <ul className="flex gap-16 text-xl my-5 max-sm:justify-around">
                <li
                  className="cursor-pointer pb-2 transition-all duration-300"
                  style={{
                    borderBottom:
                      activeTab === "active"
                        ? "2px solid #2C4B42"
                        : "2px solid transparent",
                    color: activeTab === "active" ? "#2C4B42" : "inherit",
                  }}
                  onClick={() => setActiveTab("active")}
                >
                  Active
                </li>
                <li
                  className="cursor-pointer pb-2 transition-all duration-300"
                  style={{
                    borderBottom:
                      activeTab === "completed"
                        ? "2px solid #2C4B42"
                        : "2px solid transparent",
                    color: activeTab === "completed" ? "#2C4B42" : "inherit",
                  }}
                  onClick={() => setActiveTab("completed")}
                >
                  Completed
                </li>
              </ul>

              <div className="my-10 ">
                {activeTab === "active" ? (
                  <div className="text-[#2C4B42]">
                    <div>📌 Active Orders List</div>
                    <AnimatePresence>
                      {orderData?.map((order: orderType) => (
                        <motion.div
                          onClick={() => navigate(`/order/₼{order.id}`)}
                          key={order.id}
                          exit={{ opacity: 0, transition: { duration: 0.2 } }}
                          className="w-full cursor-pointer md:grid md:grid-rows-1 gap-5 my-5 md:grid-cols-2  py-4 px-4 rounded-[20px] order-shadow bg-[#FFF9F3]"
                        >
                          <div>
                            <p className="text-lg text-[#2C4B42] font-[500]">
                              {order.order_name}
                            </p>
                          </div>
                          <div className="flex justify-end">{order.price}₼</div>
                          <div>{order.date}</div>
                          <div className="flex justify-end">
                            <button className="bg-[#2C4B42] text-white px-5 text-sm rounded-lg">
                              {order.order_type}
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                ) : (
                  <div>
                    <div>✅ Completed Orders List</div>
                    <AnimatePresence>
                      {completedOrder?.map((complete: orderType) => (
                        <motion.div
                          exit={{ opacity: 0, transition: { duration: 0.2 } }}
                          onClick={() => navigate(`/order/₼{complete.id}`)}
                          key={complete.id}
                          className="w-full cursor-pointer md:grid md:grid-rows-1 gap-5 my-5 md:grid-cols-2 py-4 px-4 rounded-[20px] order-shadow bg-[#FFF9F3]"
                        >
                          <div>
                            <p className="text-lg text-[#2C4B42] font-[500]">
                              {complete.order_name}
                            </p>
                          </div>
                          <div className="flex justify-end">
                            {complete.price}₼
                          </div>
                          <div>{complete.date}</div>
                          <div className="flex justify-end">
                            <button className="bg-[#2C4B42] text-white px-5 rounded-lg text-sm">
                              {complete.order_type}
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <NotFound text="Order" image={order} />
      )}
    </motion.section>
  );
};

export default Order;
