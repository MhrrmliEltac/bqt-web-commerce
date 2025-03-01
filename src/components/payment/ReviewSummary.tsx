import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import cartİmage1 from "../../assets/cart-image-1.png";
import cartİmage2 from "../../assets/cart-image-2.png";
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { increaseActive } from "../redux/slice/ActiveSlice";
import confetti from "canvas-confetti";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import NumberFlow from "@number-flow/react";
import { toast } from "sonner";

interface CartType {
  id: number;
  image: string;
  flower_name: string;
  flower_color: string;
  date: string;
  price: number;
  quantity: number;
}

const cartData: CartType[] = [
  {
    id: 1,
    image: cartİmage1,
    flower_name: "Tulip bouqet",
    flower_color: "Pink",
    date: "27.12.2024",
    price: 15,
    quantity: 2,
  },
  {
    id: 2,
    image: cartİmage2,
    flower_name: "Sky Chocolate (120g)",
    flower_color: "Dark",
    date: "27.12.2024",
    price: 20,
    quantity: 1,
  },
];

const ReviewSummary = () => {
  const activeStep = useAppSelector((state: any) => state.active.active);
  const dispatch = useAppDispatch();
  const [promoCode, setPromoCode] = useState<boolean>(false);
  const [discount, setDiscount] = useState<number>(0);
  const [subTotal, _] = useState<number>(35);
  const [delivery] = useState<number>(15);
  let promoTotal = subTotal + delivery;
  const [total, setTotal] = useState<number>(promoTotal);

  const handleSuccess = () => {
    dispatch(increaseActive(activeStep));
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

  const handleApply = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget.getBoundingClientRect();

    if (!promoCode) {
      setDiscount(7);
      setTotal((prev) => prev - 7);

      confetti({
        particleCount: 50,
        spread: 30,
        angle: 90,
        startVelocity: 50,
        origin: {
          x: (button.left + button.width / 2) / window.innerWidth,
          y: 0.9,
        },
      });
      const successMessage = () =>
        toast.success("Promo code applied successfully", {
          style: {
            background: "#ECFDF3",
            color: "#2C4B42",
          },
        });
      successMessage();
    } else {
      setDiscount(0);
      setTotal((prev) => prev + 7);
      const infoMessage = () => toast.info("Promo code removed");
      infoMessage();
    }

    setPromoCode(!promoCode);
  };

  return (
    <motion.section
      initial={{ opacity: 0, transition: { duration: 0.5 }, y: 100 }}
      animate={{ opacity: 1, transition: { duration: 0.5 }, y: 0 }}
      exit={{ opacity: 0 }}
      className="mt-5 md:mt-10"
    >
      <div className="flex gap-10 justify-between max-md:flex-col">
        <div className="min-md:w-1/2 w-full">
          <AnimatePresence>
            {cartData?.map((item) => (
              <motion.div
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={item.id}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                key={item.id}
                className="w-full gap-2 mb-5 text-[#2C4B42] flex rounded-[20px] bg-[#FFF9F3] hover:shadow-md transition-shadow duration-300 cursor-pointer"
              >
                <div className="w-[150px] shrink-0 h-[150px]">
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
                      <p>x{item.quantity}</p>
                    </div>
                  </div>
                  <div className="col-span-2 flex justify-between items-center px-4">
                    <div className="text-lg font-bold">{item.price} ₼</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="min-md:w-1/2 w-full flex flex-col items-end gap-10">
          <div className="w-full sm:w-3/8 font-kodchasan bg-[#FFF9F3] hover:shadow-md transition-shadow duration-300 flex flex-col gap-5 p-5 rounded-[20px]">
            <div className="flex flex-col gap-2">
              <span className="font-[400] text-[#2C4B24] text-base">
                Delivery address:
              </span>
              <p className="font-[400] text-[#2C4B24] text-lg">
                Azerbaijan, Baku, Azadlıq pr. 28
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-[400] text-[#2C4B24] text-base">
                Contact number:
              </span>
              <p className="font-[400] text-[#2C4B24] text-lg">
                +994 50 123 45 67
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-[400] text-[#2C4B24] text-base">
                Payment method:
              </span>
              <p className="font-[400] text-[#2C4B24] text-lg">
                Card **** **** **** 1234
              </p>
            </div>
          </div>
          <div className="w-full sm:w-3/8 font-kodchasan bg-[#FFF9F3] hover:shadow-md transition-shadow duration-300 flex flex-col gap-5 px-10 py-6 rounded-[20px]">
            <div className="rounded-[15px] bg-[#E0E0E0] pl-3 justify-between flex gap-5">
              <input
                type="text"
                name="promo"
                id="promo"
                className="bg-transparent outline-none md:w-[70%] w-full"
                placeholder="Promo code"
              />
              <button
                onClick={handleApply}
                className={`flex justify-center rounded-[15px] ${
                  promoCode ? "bg-[#EF4444]" : "bg-[#383838]"
                } py-2 px-4 text-white text-base max-md:w-[30%] w-[35%] transition-all duration-200`}
              >
                {promoCode ? "Cancel" : "Apply"}
              </button>
            </div>

            <div className="flex justify-between text-lg text-[#2C4B42] font-[400]">
              <span>Sub total</span>
              <p>
                <NumberFlow value={subTotal} />$
              </p>
            </div>
            <div className="flex justify-between text-lg text-[#2C4B42] font-[400]">
              <span>Delivery</span>
              <p>
                {" "}
                <NumberFlow value={delivery} /> $
              </p>
            </div>
            <div className="flex justify-between text-lg text-[#2C4B42] font-[400]">
              <span>Discount</span>
              <p>
                {discount > 0 ? "-" : ""} <NumberFlow value={discount} />$
              </p>
            </div>

            <div className="flex justify-between text-lg text-[#2C4B42] font-[500] mt-7">
              <span>Total cost</span>
              <p>
                <NumberFlow value={total} />$
              </p>
            </div>
            <button
              onClick={handleSuccess}
              className="bg-[#2C4B42] text-xl font-[500] text-white flex justify-center items-center py-2 rounded-2xl"
            >
              Confirm and pay
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ReviewSummary;
