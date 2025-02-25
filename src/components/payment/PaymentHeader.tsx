import { motion } from "framer-motion";
import { useAppSelector } from "../../hook/hook";

const PaymentHeader = () => {
  const activeStep = useAppSelector((state: any) => state.active.active);

  const lineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%", transition: { duration: 0.01 } },
  };

  return (
    <section className="flex flex-col max-xl:mb-[30px]  ">
      <div className="hidden max-sm:flex font-medium text-xl items-center justify-center">
        1. Customer details
      </div>
      <div className="px-1 max-sm:hidden justify-between gap-4 max-sm:gap-0 w-full flex items-center">
        <h3 className="text-2xl max-lg:text-[1.1rem] shrink-0 select-none font-medium">
          1. Customer details
        </h3>
        <div className=" h-[2px] duration-200 overflow-hidden relative rounded-full w-full bg-[#7C8D85]">
          <motion.div
            variants={activeStep >= 1 ? lineVariants : {}}
            initial="hidden"
            animate="visible"
            className="w-0 after bg-[#2C4B42] duration-300 ease-in-out h-full left-0 top-0"
          ></motion.div>
        </div>
        <h3
          className={` text-2xl max-lg:text-[1.1rem] duration-300 ease-in-out shrink-0 select-none font-medium ${
            activeStep >= 1 ? "opacity-100" : "opacity-60"
          }`}
        >
          2. Payment methods
        </h3>
        <div className=" h-[2px] duration-200 overflow-hidden relative rounded-full w-full bg-[#7C8D85]">
          <motion.div
            variants={activeStep >= 2 ? lineVariants : {}}
            initial="hidden"
            animate="visible"
            className="w-0 after bg-[#2C4B42]  duration-300 ease-in-out  h-full left-0 top-0"
          ></motion.div>
        </div>
        <h3
          className={`text-2xl max-lg:text-[1.1rem] duration-300 ease-in-out shrink-0 select-none font-medium ${
            activeStep >= 2 ? "opacity-100" : "opacity-60"
          }`}
        >
          3. Review summary
        </h3>
      </div>
    </section>
  );
};

export default PaymentHeader;
