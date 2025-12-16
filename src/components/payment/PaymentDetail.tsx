import CustomerDetail from "./CustomerDetail";
import PaymentHeader from "./PaymentHeader";
import { motion } from "framer-motion";
import PaymentMethods from "./PaymentMethods";
import ReviewSummary from "./ReviewSummary";
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { decreaseActive, increaseActive } from "../redux/slice/ActiveSlice";
import PaymentSuccessfull from "./PaymentSuccessfull";

const PaymentDetail = () => {
  const dispatch = useAppDispatch();
  const activeStep = useAppSelector((state: any) => state.active.active);

  const handleNext = () => {
    dispatch(increaseActive(activeStep));
  };

  const handlePrev = () => {
    if (activeStep > 0) {
      dispatch(decreaseActive(activeStep));
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, transition: { duration: 0.5 }, y: 100 }}
      animate={{ opacity: 1, transition: { duration: 0.5 }, y: 0 }}
      exit={{ opacity: 0 }}
      className="mb-5"
    >
      {activeStep < 3 ? (
        <>
          <PaymentHeader />
          {activeStep === 0 ? (
            <CustomerDetail />
          ) : activeStep === 1 ? (
            <PaymentMethods />
          ) : (
            <ReviewSummary />
          )}
          <div className="flex justify-between mt-10 items-center">
            <button
              onClick={handlePrev}
              className={`${
                activeStep >= 1 ? "opacity-100" : "opacity-0 invisible"
              }  border border-[#2C4B42] hover:opacity-80 px-10 text-[#2C4B42]  rounded-[10px] max-sm:w-[40%]  h-[40px] shrink-0 text-lg`}
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className={`${
                activeStep === 2 ? "invisible opacity-0" : "opacity-100 visible"
              } border border-[#2C4B42]  hover:opacity-80  text-[#FEF9F3] bg-[#2C4B42] max-sm:w-[40%]  shrink-0 rounded-[10px] px-10 h-[40px] text-lg`}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <PaymentSuccessfull />
      )}
    </motion.section>
  );
};

export default PaymentDetail;
