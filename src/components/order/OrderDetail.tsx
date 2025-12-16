import { useState } from "react";
import { motion } from "framer-motion";
import Heading from "../general/Heading";
import cartİmage1 from "../../assets/cart-image-1.png";
import cartİmage2 from "../../assets/cart-image-2.png";
import check from "../../assets/agree.svg";

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

const orderDetailVariant = {
  initial: { opacity: 0, scale: 0.9, y: 100, transition: { duration: 0.5 } },
  animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: (id: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * id,
    },
  }),
};

const OrderDetail = () => {
  const [cartItem] = useState<CartType[]>(cartData);
  return (
    <motion.section
      variants={orderDetailVariant}
      initial="initial"
      animate="animate"
      className="mb-10"
    >
      <Heading name="Order #1" />
      <div className="flex gap-10 mt-3 lg:flex-nowrap flex-wrap">
        <div className="text-[#2C4B42] font-kodchasan w-full lg:w-2/3">
          <p className="font-[500] text-[20px] my-3">
            Estimated delivery time: 25:39
          </p>
          <div className="flex gap-4 py-2 relative max-sm:w-full w-4/5 justify-between">
            <div className="flex gap-2 flex-col items-center justify-start z-10">
              <div className="bg-white w-[60px] h-[60px] border-4 border-[#2C4B42] rounded-full flex items-center justify-center">
                <div className="bg-[#2C4B42] w-[45px] h-[45px] rounded-full flex items-center justify-center">
                  <img src={check} alt="" width={30} />
                </div>
              </div>
              <span className="text-xs md:text-sm font-semibold lg:text-[13px]">
                Order placed
              </span>
              <span className="text-xs md:text-base lg:text-md">12:32</span>
            </div>
            <div className="absolute border-[#2c4b42] flex items-center border-2 w-[90%] left-6 z-0 h-3 top-8">
              <div className="bg-[#2c4b42] w-full h-1 absolute"></div>
            </div>
            <div className="flex gap-2 flex-col items-center justify-center z-10">
              <div className="bg-white w-[60px] h-[60px] border-4 border-[#2C4B42] rounded-full flex items-center justify-center">
                <div className="bg-[#2C4B42] w-[45px] h-[45px] rounded-full flex items-center justify-center">
                  <img src={check} alt="" width={30} />
                </div>
              </div>
              <span className="text-xs md:text-sm font-semibold lg:text-[13px]">
                In progress
              </span>
              <span className="text-xs md:text-base lg:text-md">12:32</span>
            </div>
            <div className="flex gap-2 flex-col items-center justify-center z-10">
              <div className="bg-white w-[60px] h-[60px] border-4 border-[#2C4B42] rounded-full flex items-center justify-center">
                <div className="bg-[#2C4B42] w-[45px] h-[45px] rounded-full flex items-center justify-center">
                  <img src={check} alt="" width={30} />
                </div>
              </div>
              <span className="text-xs md:text-sm font-semibold lg:text-[13px]">
                On the way
              </span>
              <span className="text-xs md:text-base lg:text-md">12:32</span>
            </div>
            <div className="flex gap-2 flex-col items-center justify-center z-10">
              <div className="bg-white w-[60px] h-[60px] border-4 border-[#2C4B42] rounded-full flex items-center justify-center">
                <div className="bg-[#2C4B42] w-[45px] h-[45px] rounded-full flex items-center justify-center">
                  <img src={check} alt="" width={30} />
                </div>
              </div>
              <span className="text-xs md:text-sm font-semibold lg:text-[13px]">
                Delivery
              </span>
              <span className="text-xs md:text-base lg:text-md">12:32</span>
            </div>
            <div className="flex gap-2 flex-col items-center justify-center z-10">
              <div className="bg-white w-[60px] h-[60px] border-4 border-[#2C4B42] rounded-full flex items-center justify-center">
                <div className="bg-[#2C4B42] w-[45px] h-[45px] rounded-full flex items-center justify-center">
                  <img src={check} alt="" width={30} />
                </div>
              </div>
              <span className="text-xs md:text-sm font-semibold lg:text-[13px]">
                Completed
              </span>
              <span className="text-xs md:text-base lg:text-md">12:32</span>
            </div>
          </div>
          <p className="font-[500] text-[24px] font-kodchasan mt-10 text-[#2C4B42]">
            Ordered products
          </p>
          <div>
            {cartItem.map((item) => (
              <motion.div
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={item.id}
                key={item.id}
              >
                <div className="flex bg-[#FFF9F3] my-5 rounded-[20px] sm:w-3/4 cursor-pointer w-[100%] shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={item.image}
                    alt=""
                    className="rounded-tl-[20px] rounded-bl-[20px] h-[150px] w-[150px]"
                  />
                  <div className="flex flex-col gap-2 justify-around w-full">
                    <div className="flex justify-between px-4 text-[#2C4B42] font-kodchasanF">
                      <p className="font-[500] text-[18px]">
                        {item.flower_name} <br />{" "}
                        <span className="font-[400] text-[18px]">
                          {item.flower_color}
                        </span>
                      </p>
                      <p className="font-[500] text-[18px]">x2</p>
                    </div>
                    <div className="flex justify-between px-4 text-[#2C4B42]">
                      <span className="font-kodchasan text-[20px] font-[500]">
                        {item.price}₼
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 w-full bg-[#FFF9F3] px-6 pt-4 shadow-sm hover:shadow-md cursor-pointer rounded-[20px] transition-shadow duration-300">
          <p className="text-[#2C4B42] text-[18px] mb-5">Order #1234567890</p>
          <div className="flex flex-col gap-4 border-b-2 border-[#2C4B42] pb-4 my-3">
            <div className="text-[#2C4B42] flex justify-between items-start ">
              <p className="font-[500] text-base">
                Tulip bouqet <br /> <span>Pink</span>
              </p>
              <span className="font-[500] text-18">15 ₼</span>
            </div>
            <div className="text-[#2C4B42] flex justify-between items-start ">
              <p className="font-[500] text-base">
                Sky Chocolate (120g) <br /> <span>Dark</span>
              </p>
              <span className="font-[500] text-base">20 ₼</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-b-2 border-[#2C4B42] pb-4 my-3">
            <div className="text-[#2C4B42] flex flex-col justify-between items-start ">
              <p className="font-[500] text-base">Order date:</p>
              <span className="font-[500] text-base">27.12.2024</span>
            </div>
            <div className="text-[#2C4B42] flex flex-col justify-between items-start ">
              <p className="font-[500] text-base">Delivery address:</p>
              <span className="font-[500] text-base">
                Azerbaijan, Baku, Azadlıq pr. 28
              </span>
            </div>
            <div className="text-[#2C4B42] flex flex-col justify-between items-start ">
              <p className="font-[500] text-base">Payment method:</p>
              <span className="font-[500] text-base">
                Card: **** **** **** 1234
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-b-2 border-[#2C4B42] pb-4 my-3">
            <div className="text-[#2C4B42] flex justify-between items-start ">
              <p className="font-[500] text-base">Sub total:</p>
              <span className="font-[500] text-base">35 ₼</span>
            </div>
            <div className="text-[#2C4B42] flex justify-between items-start ">
              <p className="font-[500] text-base">Delivery:</p>
              <span className="font-[500] text-base">20 ₼</span>
            </div>
            <div className="text-[#2C4B42] flex justify-between items-start ">
              <p className="font-[500] text-base">Discount:</p>
              <span className="font-[500] text-base">51 ₼</span>
            </div>
            <div className="text-[#2C4B42] flex justify-between items-start ">
              <p className="font-bold text-xl">Total cost:</p>
              <span className="font-bold text-xl">203 ₼</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OrderDetail;
