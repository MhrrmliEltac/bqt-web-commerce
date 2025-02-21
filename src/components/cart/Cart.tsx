import Heading from "../general/Heading";
import cartİmage1 from "../../assets/cart-image-1.png";
import cartİmage2 from "../../assets/cart-image-2.png";
import Button from "../general/Button";
import { AiTwotoneDelete } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import NumberFlow from "@number-flow/react";
import NotFound from "../pages/NotFound";
import basket from "../../assets/basket.svg";

interface CartType {
  id: number;
  image: string;
  flower_name: string;
  flower_color: string;
  date: string;
  price: number;
}

const cartData: CartType[] = [
  {
    id: 1,
    image: cartİmage1,
    flower_name: "Tulip bouqet",
    flower_color: "Pink",
    date: "27.12.2024",
    price: 15,
  },
  {
    id: 2,
    image: cartİmage2,
    flower_name: "Sky Chocolate (120g)",
    flower_color: "Dark",
    date: "27.12.2024",
    price: 20,
  },
];

const Cart = () => {
  const [cartCount, setCartCount] = useState<{ [key: number]: number }>({
    1: 1,
    2: 1,
  });
  const [cartItem, setCartItem] = useState<CartType[]>(cartData);

  const increaseFunc = (id: number) => {
    setCartCount((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const decreaseFunc = (id: number) => {
    setCartCount((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const total = cartData.reduce(
    (acc, item) => acc + item.price * cartCount[item.id],
    0
  );

  const deleteCartItem = (id: number) => {
    const newCart = { ...cartCount };
    delete newCart[id];
    setCartItem(cartItem.filter((item) => item.id !== id));
  };

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 100,
        scale: 0.8,
        transition: { duration: 0.6 },
      }}
      animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }}
    >
      {cartItem.length > 0 && cartItem ? (
        <>
          <Heading name="Cart" />
          <div className="grid grid-rows-1 md:grid-cols-2 gap-2 my-5">
            <div className="cols-span-1">
              <AnimatePresence>
                {cartItem?.map((item) => (
                  <motion.div
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    key={item.id}
                    className="w-full gap-2 mb-5 text-[#2C4B42] flex rounded-[20px] bg-[#FFF9F3] hover:shadow-md transition-shadow duration-300 cursor-pointer"
                  >
                    <div className="w-[150px] max-lg:w-[120px] max-lg:h-full shrink-0 h-[150px]">
                      <img
                        src={item.image}
                        alt=""
                        className="rounded-tl-[20px] rounded-bl-[20px] h-full"
                      />
                    </div>
                    <div className="flex flex-col justify-around w-full">
                      <div className="col-span-2 flex justify-between gap-2 px-4 pt-2 items-start">
                        <div>
                          <p className="md:text-md text-[#2C4B42] font-[500]">
                            {item.flower_name}
                          </p>
                          <span>{item.flower_color}</span>
                        </div>
                        <div className="flex justify-end items-center">
                          <AiTwotoneDelete
                            className="text-[#2C4B42] text-2xl hover:scale-110 transition-all duration300"
                            size={25}
                            onClick={() => deleteCartItem(item.id)}
                          />
                        </div>
                      </div>
                      <div className="col-span-2 flex justify-between items-center px-4">
                        <div className="text-lg font-bold">{item.price} $</div>
                        <div className="flex justify-end items-center gap-5">
                          <button
                            className={`font-kodchasan text-[#2C4B42] rounded-lg text-2xl ${
                              cartCount[item.id] === 1 && "cursor-not-allowed"
                            }`}
                            onClick={() => decreaseFunc(item.id)}
                          >
                            -
                          </button>
                          <div className="text-[20px] text-[#2C4B42] font-[500] font-kodchasan">
                            <NumberFlow value={cartCount[item.id]} />
                          </div>
                          <button
                            className={`font-kodchasan text-[#2C4B42] rounded-lg text-2xl ${
                              cartCount[item.id] === 10 && "cursor-not-allowed"
                            }`}
                            onClick={() => increaseFunc(item.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <div className="flex flex-col justify-around gap-5 bg-[#FFF9F3] rounded-[20px] px-3 py-5 hover:shadow-md transition-shadow duration-300 col-span-1 h-[300px]">
              <div className="grid grid-cols-3 gap-5">
                <div className="text-[16px] text-[#2C4B42] font-[500] col-span-1 flex gap-4 flex-col">
                  <p>Sub total:</p>
                  <p>Delivery:</p>
                </div>
                <div className="text-[16px] text-[#2C4B42] font-[500] col-span-2 flex gap-4 flex-col justify-end">
                  <p className="text-end">
                    <NumberFlow value={total} /> ₼
                  </p>
                  <p className="text-end">
                    will be calculated in the next step
                  </p>
                </div>
              </div>
              <div className="w-[80%] flex justify-center items-center mx-auto">
                <Button buttonName="Continue to payment" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <NotFound text="Cart" image={basket} />
      )}
    </motion.section>
  );
};

export default Cart;
